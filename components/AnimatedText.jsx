import { motion } from "framer-motion";

const AnimatedText = () => {
  const firstNameText = "Umair";
  const lastNameText = "Ahmed";

  const firstNameWords = firstNameText.split("");
  const lastNameWords = lastNameText.split("");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.075,
      },
    },
  };

  // Variants for each word.

  const item = {
    hidden: {
      opacity: 0,
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.01 },
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.01 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="py-12 text-6xl font-bold text-primaryDarkText md:text-8xl xl:text-9xl"
    >
      {firstNameWords.map((word, index) => (
        <motion.span variants={item} key={word + index}>
          {word}
        </motion.span>
      ))}
      <br />
      {lastNameWords.map((word, index) => (
        <span className="overflow-hidden" key={word + index}>
          <motion.span variants={item}>{word}</motion.span>
        </span>
      ))}
    </motion.div>
  );
};
export default AnimatedText;
