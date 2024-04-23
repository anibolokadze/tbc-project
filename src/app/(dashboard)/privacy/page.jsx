"use client";
import Layout from "../../../components/layout";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div>{t("privacy")}</div>
    </Layout>
  );
};

export default Privacy;
