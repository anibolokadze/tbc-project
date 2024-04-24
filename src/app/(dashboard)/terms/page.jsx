"use client";
import Layout from "../../../components/layout";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div>{t("terms")}</div>
    </Layout>
  );
};

export default Terms;
