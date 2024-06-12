"use client";
import { motion } from "framer-motion";
import { projects } from "../../constants";
import { staggerContainer, fadeIn } from "../../utils/motion";
import SliderCard from "./SliderCard";

export default function Slider() {
  return (
    <section className="mt-10">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col"
      >
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center"
        >
          <span className="font-extrabold dark:text-white">Shop here</span>
          <br />
          <span className="text-sm italic dark:text-white">
            Drag to interact
          </span>
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.png"
          alt="arrow down"
          className="w-[50px] h-[68px] object-contain mt-[28px] "
        />
      </motion.div>

      {projects.map((project, i) => {
        return <SliderCard key={`p_${i}`} {...project} i={i} />;
      })}
    </section>
  );
}
