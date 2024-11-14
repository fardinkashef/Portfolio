import { Github, Linkedin } from "lucide-react";
import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Hero() {
  return (
    <section className="Hero" id="Profile">
      <div className="imageContainer">
        <img src="/hero.jpg" alt="" />
      </div>

      <motion.div
        className="textContainer"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2 variants={textVariants}>FARDIN KASHEF</motion.h2>
        <motion.h1 variants={textVariants}>
          MERN Stack & Next.js <br />
          Web Developer
        </motion.h1>
        {/* <motion.div variants={textVariants} className="internal-links">
          <motion.a variants={textVariants} href="#My Projects">
            See the Latest Works
          </motion.a>
          <motion.a variants={textVariants} href="#Contact">
            Contact Me
          </motion.a>
        </motion.div> */}
        <motion.div variants={textVariants} className="external-links">
          <motion.a
            href="https://github.com/fardinkashef"
            rel="noreferrer"
            target="_blank"
          >
            <Github size={50} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/fardin-kashef"
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin size={50} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
