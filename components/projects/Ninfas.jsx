import { HiArrowSmRight } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Ninfas = () => {
  const [hover, setHover] = useState(false);

  const parent = {
    hidden: { scale: 1 },
    show: {
      scale: 1.1,
    },
    exit: { scale: 1 },
  };

  const child = {
    show: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  };

  return (
    <div className="flex flex-col text-base text-primaryText xl:flex-row xl:gap-4">
      {/* div for content */}
      <div className="flex flex-col xl:justify-center xl:flex-1">
        <div className="py-4">
          <a
            className="text-2xl font-semibold md:text-4xl xl:text-6xl "
            href="https://ninfasmissouricity.com/"
            target={"_blank"}
          >
            Ninfa&apos;s Missouri City
          </a>
        </div>
        <div className="flex gap-4 text-xs">
          <span className="px-2 py-1 rounded-xl bg-primaryText text-bgColor">
            NEXT JS
          </span>
          <span className="px-2 py-1 rounded-xl bg-primaryText text-bgColor">
            REACT
          </span>
          <span className="px-2 py-1 rounded-xl bg-primaryText text-bgColor">
            CSS
          </span>
        </div>
        <div className="hidden py-4 md:block">
          <p>Website made for the restaurant Mama Ninfa&apos;s</p>
        </div>
        <div className="content-center justify-center hidden py-4 text-center w-fit xl:flex xl:gap-4 xl:content-center xl:justify-center">
          <motion.a
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="flex content-center justify-center gap-2 px-4 py-2 border border-primaryText rounded-xl"
            href="https://ninfasmissouricity.com/"
            target={"_blank"}
            variants={parent}
            initial="hidden"
            whileHover="show"
          >
            Visit Site
            {hover && (
              <AnimatePresence>
                <motion.div
                  initial={{ scale: 0, x: -50 }}
                  animate={{ scale: 1, x: 0 }}
                  exit={{ scale: 0, x: -50 }}
                >
                  <HiArrowSmRight className="h-full text-base" />
                </motion.div>
              </AnimatePresence>
            )}
          </motion.a>
        </div>
      </div>

      {/* div for video */}
      <div className="w-full py-4 xl:flex-1">
        <a href="https://ninfasmissouricity.com/" target={"_blank"}>
          <video
            autoPlay
            muted
            loop
            className="w-full border-primaryText rounded-xl shadow-3xl"
            src={require("../../public/video/NinfasVideo.webm")}
            type="video/webm"
          ></video>
        </a>
      </div>
    </div>
  );
};
export default Ninfas;
