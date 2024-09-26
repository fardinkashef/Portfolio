import "./Technologies.scss";
import { delay, motion } from "framer-motion";

const technologies = {
  frontEnd: [
    "JS",
    "HTML",
    "CSS",
    "ReactJS",
    "NextJS",
    "TS",
    "Tailwind",
    "SASS",
    "FramerMotion",
  ],
  backEnd: ["NodeJS", "ExpressJS", "MongoDB"],
};

const iconsVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
function Technologies() {
  return (
    <section className="Technologies" id="Technologies">
      <div className="front-end">
        <h2>Front-End Technologies</h2>
        <motion.div
          className="icons"
          variants={iconsVariants}
          initial="hidden"
          whileInView="visible"
        >
          {technologies.frontEnd.map((technology) => (
            <motion.div
              className="imageContainer"
              key={technology}
              variants={iconsVariants}
            >
              <img src={`/technologies-icons/${technology}.png`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="back-end">
        <h2>Back-End Technologies</h2>
        <motion.div
          className="icons"
          variants={iconsVariants}
          initial="hidden"
          whileInView="visible"
        >
          {technologies.backEnd.map((technology) => (
            <motion.div
              className="imageContainer"
              key={technology}
              variants={iconsVariants}
            >
              <img src={`/technologies-icons/${technology}.png`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Technologies;
