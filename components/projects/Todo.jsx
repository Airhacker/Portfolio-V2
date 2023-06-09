import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowSmRight } from "react-icons/hi";
import { SiNextdotjs, SiReact, SiTailwindcss, SiGithub } from "react-icons/si";

const Todo = () => {
  const [hover, setHover] = useState("");

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
            href="https://todo-list-5iop.vercel.app/"
            target={"_blank"}
          >
            To-Do List
          </a>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="flex content-center justify-center gap-2 px-2 py-1 rounded-xl bg-primaryText text-bgColor">
            <SiNextdotjs className="inline h-full" />
            Next.js
          </span>
          <span className="flex content-center justify-center gap-2 px-2 py-1 bg-reactBg rounded-xl text-bgColor">
            <SiReact className="inline h-full" />
            React
          </span>
          <span className="flex content-center justify-center gap-2 px-2 py-1 bg-tailwindBg rounded-xl text-bgColor">
            <SiTailwindcss className="inline h-full" />
            Tailwind
          </span>
        </div>
        <div className="hidden py-4 md:block">
          <p>
            Todo List website, made with Next.js, Tailwind CSS, and Framer
            Motion, offers seamless organization and task management with smooth
            animations and a user-friendly interface, and stores the notes
            locally for added convenience.
          </p>
        </div>
        <div className="content-center justify-center hidden py-4 text-center w-fit xl:flex xl:gap-4 xl:content-center xl:justify-center">
          <motion.a
            onMouseEnter={() => setHover("site")}
            onMouseLeave={() => setHover("")}
            className="flex content-center justify-center gap-2 px-4 py-2 border border-primaryText rounded-xl"
            href="https://todo-list-5iop.vercel.app/"
            target={"_blank"}
            variants={parent}
            initial="hidden"
            whileHover="show"
          >
            Visit Site
            {hover === "site" && (
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

          <motion.a
            onMouseEnter={() => setHover("github")}
            onMouseLeave={() => setHover("")}
            className="flex content-center justify-center gap-2 px-4 py-2 border border-primaryText rounded-xl"
            href="https://github.com/Airhacker/Todo-List"
            target={"_blank"}
            variants={parent}
            initial="hidden"
            whileHover="show"
          >
            GitHub
            {hover === "github" && (
              <AnimatePresence>
                <motion.div
                  initial={{ scale: 0, x: -50 }}
                  animate={{ scale: 1, x: 0 }}
                  exit={{ scale: 0, x: -50 }}
                >
                  <SiGithub className="h-full text-base text-githubBg " />
                </motion.div>
              </AnimatePresence>
            )}
          </motion.a>
        </div>
      </div>

      {/* div for video */}
      <div className="w-full py-4 xl:flex-1">
        <a href="https://todo-list-5iop.vercel.app/" target={"_blank"}>
          <motion.video
            whileHover={{ scale: 1.025 }}
            muted
            loop
            autoPlay
            poster=".../../photos/todoScreenshot.png"
            className="w-full border-primaryText rounded-xl shadow-3xl"
            src={require("../../public/video/TodoVideo.webm")}
            type="video/webm"
          ></motion.video>
        </a>
      </div>
    </div>
  );
};
export default Todo;
