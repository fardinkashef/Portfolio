import { useRef } from "react";
import "./MyWorks.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import MyWork from "./MyWork";

const items = [
  {
    id: 1,
    title: "Language Learning App",
    img: "/gifs/funguage.gif",
    desc: "A React.js web application for language learning through video content. Clickable subtitle words provide definitions and other information. Users can also review and save words in their learned collection.",
    link: "https://funguage.onrender.com/",
  },
  {
    id: 2,
    title: "Facial Effect Recognition Test App",
    img: "/gifs/FER-test.gif",
    desc: "A React.js web application for a psychology student’s master’s thesis. The app presents participants with a range of photographs from Ekman and Friesen series of Pictures of Facial Affect (Ekman & Friesen, 1976), and their task is to identify the emotions expressed by the individuals in the photos.",
    link: "https://fer-test.vercel.app/",
  },
  {
    id: 3,
    title: "Longman Dictionary Scraper App",
    img: "/gifs/longman-scraper.gif",
    desc: "A Next.js web application that scrapes Longman Dictionary website (www.ldoceonline.com) and generates an array of JSON objects, each detailing the dictionary information for a specific sense of the word",
    link: "https://longman-scraper.onrender.com",
  },
];

function MyWorks() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="MyWorks" id="My Projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <MyWork item={item} key={item.id} />
      ))}
    </div>
  );
}

export default MyWorks;
