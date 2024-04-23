"use client";
import Layout from "../../../components/layout";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div>{t("about")}</div>
    </Layout>
  );
};

export default About;
