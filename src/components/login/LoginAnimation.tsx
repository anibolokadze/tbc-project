import { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "../../../public/Animation - 1717015639839.json";

export default function Animation() {
  const animationContainer = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load animation when component mounts
  useEffect(() => {
    let animationInstance: AnimationItem;
    if (animationContainer.current) {
      animationInstance = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      // Set loading status to false when animation images are loaded
      animationInstance.addEventListener("loaded_images", () => {
        setIsLoading(false);
      });
    }

    // Cleanup function to destroy animation instance
    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, []);

  return (
    <section className="relative">
      {isLoading && (
        <section
          role="status"
          className="mt-10 mb-10 mx-auto flex items-center justify-center h-60 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
        >
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
          </svg>
        </section>
      )}

      {/* Animation container */}
      <section
        ref={animationContainer}
        className={`mx-auto bg-white dark:bg-darkMode h-full my-5 max-w-sm ${
          isLoading ? "hidden" : ""
        }`}
      ></section>
    </section>
  );
}
