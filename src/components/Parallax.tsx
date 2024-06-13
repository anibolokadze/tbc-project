import { useScroll, useTransform, motion } from "framer-motion";
import Picture1 from "../../public/pexels-geometric-photography-186685971-11525159.jpg";
import Picture2 from "../../public/laptop.jpg";
import Picture3 from "../../public/2.jpg";
import Picture4 from "../../public/rocket.jpg";
import Picture5 from "../../public/spaceman.jpg";
import Picture6 from "../../public/hero_endframe__cvklg0xk3w6e_large 2.png";
import Picture7 from "../../public/gradient.jpg";
import Image from "next/image";
import React, { useRef } from "react";

const Parallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className="container">
      <div className="sticky">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className="el">
              <div className="imageContainer">
                <Image
                  src={src}
                  fill
                  alt="image"
                  placeholder="blur"
                  sizes="(max-width: 100px) 100vw,
                         (max-width: 1200px) 100vw,
                         100vw"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Parallax;
