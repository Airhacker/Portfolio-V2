import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="flex flex-col content-center justify-start w-11/12 py-8 m-auto text-base text-left border-b-4 xl:w-10/12 border-primaryText text-primaryText md:mb-4">
      <AnimatedText />
      <div className="flex flex-col content-center justify-center md:flex-row md:justify-between">
        <div className="flex flex-col content-center justify-center flex-1 ">
          <h3 className="py-2 text-base font-semibold">
            Frontend Web Developer
          </h3>
          <a href="mailto:umairahmed.dev@gmail.com" className="py-2 underline">
            umairahmed.dev@gmail.com
          </a>
          <span className="py-2">{"(832)-459-4221"}</span>
        </div>
        <div className="flex flex-col content-center flex-1 md:text-right justify-top">
          <span className="py-2">
            I specialize in creating visually appealing and responsive websites
            that provide a seamless user experience.
          </span>
          <div className="flex content-center gap-4 py-2 md:justify-end text-secondaryText">
            <motion.a
              whileHover={{
                color: "black",
                textDecoration: "underline",
              }}
              href="/files/resume.pdf"
              target={"_blank"}
            >
              Resume
            </motion.a>
            <motion.a
              whileHover={{
                color: "black",
                textDecoration: "underline",
              }}
              href="https://www.linkedin.com/in/umair-ahmed-b7875a148"
              target={"_blank"}
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{
                color: "black",
                textDecoration: "underline",
              }}
              href="https://github.com/Airhacker"
              target={"_blank"}
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
