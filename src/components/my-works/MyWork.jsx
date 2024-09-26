import "./MyWork.scss";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function MyWork({ item }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="MyWork">
      <div className="imageContainer" ref={ref}>
        <img src={item.img} alt="" loading="lazy" />
      </div>
      <motion.div className="textContainer" style={{ y }}>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          See Demo
        </a>
      </motion.div>
    </section>
  );
}
export default MyWork;
