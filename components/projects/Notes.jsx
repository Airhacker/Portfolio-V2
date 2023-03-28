import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowSmRight } from "react-icons/hi";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";

const Notes = () => {
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
            href="https://super-chat-phi.vercel.app/"
            target={"_blank"}
          >
            Notes App
          </a>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="flex content-center justify-center gap-2 px-2 py-1 rounded-xl bg-primaryText text-bgColor">
            <SiNextdotjs className="inline h-full" />
            Next.js
          </span>
          <span className="flex content-center justify-center gap-2 px-2 py-1 bg-firebaseBg rounded-xl text-bgColor">
            <SiFirebase className="inline h-full" />
            Firebase
          </span>
          <span className="flex content-center justify-center gap-2 px-2 py-1 bg-tailwindBg rounded-xl text-bgColor">
            <SiTailwindcss className="inline h-full" />
            Tailwind
          </span>
        </div>
        <div className="hidden py-4 md:block">
          <p>
            Notes website built with Next.js, Firebase, and Tailwind CSS,
            allowing users to sign in with their Google account for added
            convenience. It offers robust note-taking features and real-time
            syncing for seamless organization.
          </p>
        </div>
        <div className="content-center justify-center hidden py-4 text-center w-fit xl:flex xl:gap-4 xl:content-center xl:justify-center">
          <motion.a
            onMouseEnter={() => setHover("site")}
            onMouseLeave={() => setHover("")}
            className="flex content-center justify-center gap-2 px-4 py-2 border border-primaryText rounded-xl"
            href="https://super-chat-phi.vercel.app/"
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
            href="https://github.com/Airhacker/SuperChat"
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
        <a href="https://super-chat-phi.vercel.app/" target={"_blank"}>
          <motion.video
            whileHover={{ scale: 1.025 }}
            autoPlay
            muted
            loop
            poster="../../public/photos/notesScreenshot.png"
            className="w-full border-primaryText rounded-xl shadow-3xl"
            src={require("../../public/video/NotesVideo.webm")}
            type="video/webm"
          ></motion.video>
        </a>
      </div>
    </div>
  );
};
export default Notes;
