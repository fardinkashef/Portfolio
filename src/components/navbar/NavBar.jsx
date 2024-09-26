import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./NavBar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

// There was a problem with the code. When loading the page for the first time, we saw a navbar being open for a short time. I think the reason is that on first render, the closing animation happens. So I created a state variable to disable the animation on first render and enable it after the first render using a useEffect hook. I

function NavBar() {
  const [open, setOpen] = useState(false);
  const [initial, setInitial] = useState(false);

  useEffect(function () {
    setInitial(true);
  }, []);
  return (
    <motion.div
      className="NavBar"
      initial={initial}
      animate={open ? "open" : "closed"}
    >
      <motion.div className="bg" variants={variants}>
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}

export default NavBar;
