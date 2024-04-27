"use client";

import { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../../components/layout";

const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <section className="contact">
        <div>
          <h3>{t("contact")}</h3>
          <ul>
            <li>example@example.com</li>
            <li>+1234567890</li>
            <li>#129ა ნუცუბიძის ქუჩა; თბილისი</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>{t("leaveMsg")}</legend>
            <label htmlFor="name">{t("name")}:</label>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("enterName")}
                autoComplete="off"
                required
              />
            </div>

            <label htmlFor="email">{t("email")}:</label>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("enterEmail")}
                autoComplete="off"
                required
              />
            </div>

            <label htmlFor="message">{t("message")}</label>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder={t("message")}
                autoComplete="off"
                required
              />
            </div>

            <button type="submit">{t("send")}</button>
          </fieldset>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
