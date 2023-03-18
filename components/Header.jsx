import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="flex flex-col content-center justify-start w-full py-8 text-base text-left border-b-4 border-primaryText text-primaryText md:mb-4">
      <AnimatedText />
      <div className="flex flex-col content-center justify-center md:flex-row md:justify-between">
        <div className="flex flex-col content-center justify-center ">
          <h3 className="py-2 text-base font-semibold">
            Frontend Web Developer
          </h3>
          <span className="py-2 underline">umairahmed.dev@gmail.com</span>
          <span className="py-2">{"(832)-459-4221"}</span>
        </div>
        <div className="flex flex-col content-center">
          <span className="py-2">Based in Houston.</span>
          <div className="flex gap-4 py-2 text-secondaryText">
            <motion.a
              whileHover={{
                color: "black",
                textDecoration: "underline",
              }}
              href=""
            >
              Resume
            </motion.a>
            <motion.a
              whileHover={{
                color: "black",
                textDecoration: "underline",
              }}
              href=""
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{
                color: "black",
                textDecoration: "underline",
              }}
              href=""
            >
              Github
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
