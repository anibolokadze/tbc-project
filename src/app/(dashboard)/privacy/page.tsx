"use client";

import { useTranslation } from "react-i18next";
import Layout from "../../../components/layout";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div>{t("privacy")}</div>
    </Layout>
  );
};

export default Privacy;
