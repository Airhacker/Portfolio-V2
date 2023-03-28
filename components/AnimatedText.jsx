import { AnimatePresence, motion } from "framer-motion";

const AnimatedText = () => {
  const firstName = ["U", "m", "a", "i", "r"];
  const lastName = ["A", "h", "m", "e", "d"];

  const container = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const items = {
    hidden: { opacity: 0, y: "100%" },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-12 text-6xl font-bold text-primaryDarkText md:text-8xl xl:text-9xl">
      <AnimatePresence>
        <motion.div
          className="inline-block"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {firstName.map((letter, index) => (
            <motion.p variants={items} key={index} className="inline-block">
              {letter}
            </motion.p>
          ))}
          <br />
          {lastName.map((letter, index) => (
            <motion.p variants={items} key={index} className="inline-block">
              {letter}
            </motion.p>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default AnimatedText;
