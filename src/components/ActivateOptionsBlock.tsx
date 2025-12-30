import React from "react";
import { useTranslation } from "react-i18next";
import "./ActivateOptionsBlock.css";

import iconApp from "../assets/icons/my-moldcell.svg";
import iconCode from "../assets/icons/code.svg";
import iconStore from "../assets/icons/store.svg";

type ActionItem = {
  key: string;
  titleKey: string;
  descKey: string;
  buttonKey: string;
  onClick?: () => void;
  href?: string;
  iconSrc: string;
};

const detectPlatform = () => {
  const ua = navigator.userAgent || "";
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);
  return { isIOS, isAndroid, isMobile: isIOS || isAndroid };
};

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const ActivateOptionsBlock: React.FC = () => {
  const { t } = useTranslation();

  const items: ActionItem[] = [
    {
      key: "app",
      titleKey: "activateBlock.app.title",
      descKey: "activateBlock.app.desc",
      buttonKey: "activateBlock.app.btn",
      onClick: () => {
        const { isIOS, isAndroid } = detectPlatform();

        const ios = t("activateBlock.app.link_ios") as string;
        const android = t("activateBlock.app.link_android") as string;
        const desktop = t("activateBlock.app.link_desktop") as string;

        const url = isIOS ? ios : isAndroid ? android : desktop;
        if (url) openInNewTab(url);
      },
      iconSrc: iconApp,
    },
    {
      key: "code",
      titleKey: "activateBlock.code.title",
      descKey: "activateBlock.code.desc",
      buttonKey: "activateBlock.code.btn",
      onClick: async () => {
        const { isMobile } = detectPlatform();
        const ussdText = (t("activateBlock.code.btn") as string) || "*222*4*3#";

        if (isMobile) {
          // encode * și #
          const encoded = encodeURIComponent(ussdText);
          window.location.href = `tel:${encoded}`;
          return;
        }

        try {
          await navigator.clipboard.writeText(ussdText);
          alert(`Cod copiat: ${ussdText}`);
        } catch {
          alert(`Cod: ${ussdText}`);
        }
      },
      iconSrc: iconCode,
    },
    {
      key: "store",
      titleKey: "activateBlock.store.title",
      descKey: "activateBlock.store.desc",
      buttonKey: "activateBlock.store.btn",
      href: t("activateBlock.store.link") as string,
      iconSrc: iconStore,
    },
  ];

  return (
    <section className="aob">
      <h2 className="aob__title">{t("activateBlock.title")}</h2>

      <div className="aob__grid">
        {items.map((it) => (
          <div key={it.key} className="aob__item">
            <div className="aob__icon" aria-hidden="true">
              <img className="aob__iconImg" src={it.iconSrc} alt="" />
            </div>

            <div className="aob__text">
              <div className="aob__name">{t(it.titleKey)}</div>
              <div className="aob__desc">{t(it.descKey)}</div>
            </div>

            {it.href ? (
              <a className="aob__btn" href={it.href} target="_blank" rel="noopener noreferrer">
                {t(it.buttonKey)}
              </a>
            ) : (
              <button className="aob__btn" type="button" onClick={it.onClick}>
                {t(it.buttonKey)}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivateOptionsBlock;
