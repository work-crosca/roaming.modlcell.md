import React, { useMemo, useRef, useState, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import "./FaqAccordion.css";

type FaqLink = { text: string; link?: string; href?: string };
type FaqLine = string | FaqLink;

type FaqBullet = {
  text: FaqLine;
  sub?: FaqBullet[];
};

type FaqAnswer = {
  bullets: FaqBullet[];
};

type FaqItem = {
  q: string;
  a: FaqAnswer;
};

const renderHTML = (html: string) => (
  <span dangerouslySetInnerHTML={{ __html: html }} />
);

const isLinkObj = (v: unknown): v is FaqLink =>
  !!v &&
  typeof v === "object" &&
  typeof (v as any).text === "string" &&
  (typeof (v as any).link === "string" || typeof (v as any).href === "string");

const isFaqBullet = (v: unknown): v is FaqBullet => {
  if (!v || typeof v !== "object") return false;

  const text = (v as any).text;
  const sub = (v as any).sub;

  const textOk =
    typeof text === "string" ||
    (text &&
      typeof text === "object" &&
      typeof (text as any).text === "string" &&
      (typeof (text as any).link === "string" || typeof (text as any).href === "string"));

  const subOk = sub === undefined || Array.isArray(sub);

  return textOk && subOk;
};

const renderLine = (line: FaqLine) => {
  // string poate include <strong> etc.
  if (typeof line === "string") return renderHTML(line);

  if (isLinkObj(line)) {
    const url = line.link ?? line.href!;
    return (
      <a className="faq__link" href={url} target="_blank" rel="noopener noreferrer">
        {renderHTML(line.text)}
      </a>
    );
  }

  return null;
};

const renderBullets = (bullets: FaqBullet[], isSub = false) => {
  const listClass = isSub ? "faq__subList" : "faq__ul";
  const liClass = isSub ? "faq__li faq__li--sub" : "faq__li";

  return (
    <ul className={listClass}>
      {bullets.map((b, idx) => (
        <li key={idx} className={liClass}>
          {renderLine(b.text)}
          {b.sub && b.sub.length > 0 ? renderBullets(b.sub, true) : null}
        </li>
      ))}
    </ul>
  );
};

const FaqAccordion: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number>(0);

  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [heights, setHeights] = useState<number[]>([]);

  const items = useMemo(() => {
    const list = t("faq.items", { returnObjects: true }) as unknown;
    if (!Array.isArray(list)) return [];

    return (list as any[])
      .map((raw) => {
        const q = typeof raw?.q === "string" ? raw.q : "";
        const aRaw = raw?.a;

        if (!aRaw || typeof aRaw !== "object" || !Array.isArray((aRaw as any).bullets)) {
          return null;
        }

        const bulletsRaw = (aRaw as any).bullets as unknown[];

        const bullets: FaqBullet[] = bulletsRaw
          .map((b) => {
            if (!isFaqBullet(b)) return null;

            const text = (b as any).text as FaqLine;
            const subRaw = (b as any).sub as unknown[] | undefined;

            const sub =
              Array.isArray(subRaw)
                ? (subRaw
                    .map((sb) => (isFaqBullet(sb) ? (sb as FaqBullet) : null))
                    .filter(Boolean) as FaqBullet[])
                : undefined;

            return { text, ...(sub && sub.length > 0 ? { sub } : {}) } as FaqBullet;
          })
          .filter(Boolean) as FaqBullet[];

        if (!q || bullets.length === 0) return null;

        return { q, a: { bullets } } as FaqItem;
      })
      .filter(Boolean) as FaqItem[];
  }, [t, i18n.language]);

  useLayoutEffect(() => {
    const measure = () => {
      const next = items.map((_, idx) => {
        const el = contentRefs.current[idx];
        return el ? el.scrollHeight : 0;
      });
      setHeights(next);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items, i18n.language]);

  return (
    <section className="faq">
      <div className="faq__inner">
        <h2 className="faq__title">{t("faq.title")}</h2>

        <div className="faq__list">
          {items.map((it, idx) => {
            const isOpen = idx === openIndex;

            return (
              <div key={idx} className={`faq__item ${isOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <span className="faq__qText">{it.q}</span>
                  <span className="faq__chev" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className="faq__answerWrap"
                  style={{ maxHeight: isOpen ? (heights[idx] ?? 0) : 0 }}
                >
                  <div
                    className="faq__answer"
                    ref={(el) => {
                      contentRefs.current[idx] = el;
                    }}
                  >
                    {renderBullets(it.a.bullets, false)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
