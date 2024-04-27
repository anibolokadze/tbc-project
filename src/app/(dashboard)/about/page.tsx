"use client";

import { useTranslation } from "react-i18next";
import Layout from "../../../components/layout";

const About = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div>{t("about")}</div>
    </Layout>
  );
};

export default About;
