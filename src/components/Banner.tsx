import { motion, Variants } from "framer-motion";
import type { IdProps } from "../props/IdProps";
import { useEffect, useState } from "react";
import "../styles/banner.css";
export default function Banner({ id }: IdProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % textPhrases.length);
    }, 5600);
    return () => clearInterval(timer);
  }, []);

  const textPhrases = [
    "Amire Joseph",
    "Full Stack Developer",
    "A Backend Developer",
    "A Frontend Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  const typing: Variants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2, // time to type
        ease: "linear",
        repeat: Infinity, // loop forever
        repeatType: "reverse", // type → erase → type...
        repeatDelay: 0.8, // pause before erase
      },
    },
  };

  return (
    <section
      id={id}
      className="py-5 d-flex align-items-center overflow-x-hidden"
    >
      <div className="container py-5">
        <div className="row m-0 p-0 align-items-center py-5">
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="col-lg-6"
          >
            <div className="badge bg-primary rounded-pill px-3 py-2 mb-2">
              Full Stack Developer
            </div>
            <h1 className="display-3 fw-bold mb-4">
              <motion.span
                className="text-primary"
                // <-- correct usage: pass the variants object itself
                variants={typing}
                initial="hidden"
                animate="visible"
                // keep inline-block so width animates, caret from border-right
                style={{ display: "inline-block", width: "fit-content" }}
              >
                <span className="text-muted">Hi, I'm </span>
                {textPhrases[index]}
              </motion.span>
            </h1>
            <p className="text-muted small mb-4">
              Full-stack developer crafting high-impact web apps with seamless
              UX, <br /> smart APIs, and scalable solutions that drive results
              and create web visibility
            </p>
            <div className="d-flex gap-3">
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn btn-primary btn-sm rounded-pill small"
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  padding: "5px 10px",
                }}
              >
                Get in touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="btn btn-outline-dark btn-sm rounded-pill"
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  padding: "5px 10px",
                }}
              >
                View my work
              </motion.a>
            </div>
          </motion.div>
          <div className="col-lg-6 d-flex justify-content-center mt-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="position-relative"
            >
              <div
                className="bg-primary rounded-circle position-relative overflow-hidden"
                style={{ width: "350px", height: "350px" }}
              >
                <img
                  src="/imgs/internal/me-cropped.png"
                  alt="Amire Joseph"
                  width={350}
                  className="img-fluid"
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="position-absolute bottom-0 end-0 bg-white shadow rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "100px", height: "100px" }}
              >
                <i
                  className="bi-code bi text-primary"
                  style={{ fontSize: "40px" }}
                ></i>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-center mt-5"
        >
          <a href="#about" className="text-dark">
            <i
              className="bi-arrow-down animate-bounce"
              style={{ fontSize: "20px" }}
            ></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
