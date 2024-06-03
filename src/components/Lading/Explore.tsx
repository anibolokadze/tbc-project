"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../../../utils/motion";
import { exploreWorlds } from "../../../constants";
import { TitleText } from "./CustomTexts";
import ExploreCard from "./ExploreCard";
import { useTranslation } from "react-i18next";

const Explore = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("world-1");

  return (
    <section className='overflow-x-hidden sm:p-16 xs:p-8 px-6 py-12 id="explore"'>
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TitleText
          title={
            <span>
              {t("explore")} <br className="md:block hidden" />
            </span>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 px-12">
          {exploreWorlds.map((world, index: number) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
