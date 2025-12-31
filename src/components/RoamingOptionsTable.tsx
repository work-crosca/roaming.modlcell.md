// src/components/RoamingOptionsTable.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import "./RoamingOptionsTable.css";

type ActivateMethod = "app" | "code" | "or";

type OptionRow = {
  nameKey: string;
  price: string;
  validityKey: string;
  euTraffic: string;
  methods: ActivateMethod[];
};

const isMobileUA = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || "");

const RoamingOptionsTable: React.FC = () => {
  const { t } = useTranslation();

  const rows: OptionRow[] = [
    { nameKey: "internet_1gb", price: "30", validityKey: "days_30", euTraffic: "1 GB", methods: ["app", "or", "code"] },
    { nameKey: "internet_5gb", price: "60", validityKey: "days_30", euTraffic: "4.70 GB", methods: ["app", "or", "code"] },
    { nameKey: "internet_10gb", price: "90", validityKey: "days_30", euTraffic: "7.10 GB", methods: ["app", "or", "code"] },
    { nameKey: "sms_100", price: "50", validityKey: "days_30", euTraffic: "100 SMS", methods: ["app", "or", "code"] },
  ];

  const onClickUssd = async () => {
    const ussdText = String(t("activateBlock.code.btn") || "*222*1#");
    const mobile = isMobileUA();

    if (mobile) {
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
  };

  const renderMethods = (methods: ActivateMethod[]) => {
    const mobile = isMobileUA();
    const ussdText = String(t("activateBlock.code.btn") || "*222*1#");
    const telHref = `tel:${encodeURIComponent(ussdText)}`;

    return (
      <div className="rot__methods">
        {methods.includes("app") && (
          <a
            className="rot__methodText"
            href={String(t("activateBlock.app.link_desktop"))}
            target="_blank"
            rel="noopener noreferrer"
            title={String(t("activateBlock.app.title"))}
          >
            {t("activateBlock.app.title")}
          </a>
        )}

        {methods.includes("or") && (
          <span className="rot__methodSep" title={String(t("roamingOptions.values.or"))}>
            {t("roamingOptions.values.or")}
          </span>
        )}

        {methods.includes("code") &&
          (mobile ? (
            <a className="rot__methodText" href={telHref} title={String(t("activateBlock.code.desc"))}>
              {t("activateBlock.code.btn")}
            </a>
          ) : (
            <span
              className="rot__methodText"
              title={String(t("activateBlock.code.desc"))}
              role="button"
              tabIndex={0}
              onClick={onClickUssd}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onClickUssd();
              }}
            >
              {t("activateBlock.code.btn")}
            </span>
          ))}
      </div>
    );
  };

  return (
    <section className="rot">
      <div className="rot__inner">
        <h2 className="rot__title">{t("roamingOptions.title")}</h2>

        <div className="rot__tableWrap" role="region" aria-label={String(t("roamingOptions.title"))}>
          <table className="rot__table">
            <thead>
              <tr>
                <th>{t("roamingOptions.columns.option")}</th>
                <th>{t("roamingOptions.columns.price")}</th>
                <th>{t("roamingOptions.columns.validity")}</th>
                <th>{t("roamingOptions.columns.euTraffic")}</th>
                <th>{t("roamingOptions.columns.methods")}</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r, idx) => (
                <tr key={idx}>
                  <td className="rot__opt">{t(`roamingOptions.rows.${r.nameKey}`)}</td>
                  <td className="rot__muted">
                    {r.price} {t("roamingOptions.values.currency")}
                  </td>
                  <td className="rot__muted">{t(`roamingOptions.values.${r.validityKey}`)}</td>
                  <td className="rot__muted">{r.euTraffic}</td>
                  <td>{renderMethods(r.methods)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RoamingOptionsTable;
