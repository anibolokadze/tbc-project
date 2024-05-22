import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../public/Animation - 1716228621795.json";

export default function Animation() {
  const animationContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationInstance: any;
    if (animationContainer.current) {
      animationInstance = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }

    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, []);

  return <div ref={animationContainer}></div>;
}
