"use client";

import { useTranslation } from "react-i18next";
import Layout from "../../../components/layout";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div>{t("terms")}</div>
    </Layout>
  );
};

export default Terms;
