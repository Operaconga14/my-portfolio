import { useEffect, useRef } from "react";
import type { IdProps } from "../props/IdProps";
import { motion, useAnimation, useInView } from "framer-motion";

export default function About({ id }: IdProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section id={id} className="py-5 bg-light">
      <div className="container py-5">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } },
          }}
          className="row"
        >
          <div className="col-lg-6 mb-4 mb-lg-0">
            <motion.div
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
              }}
            >
              <h2 className="display-5 fw-bolder mb-4 text-muted">About Me</h2>
              <p className="text-muted">
                I am a results-driven Full Stack Developer, specialized in
                building fast, scalable, and high-impact web applications across
                both frontend and backend. I transform product ideas into
                seamless, high-performance solutions that enhance user
                experience, streamline operations, and drive measurable results.
                My expertise spans crafting intuitive, responsive interfaces as
                well as designing robust backend systems that power reliable and
                efficient applications. I excel at writing clean, maintainable
                code while architecting solutions that scale, perform, and meet
                business goals. I stay at the forefront of emerging
                technologies, mastering modern frameworks and development
                standards to ensure every project aligns with best practices in
                performance, security, and usability. Whether developing new
                platforms or optimizing existing systems, my focus is on
                delivering outcomes that truly matter: speed, stability, and
                user satisfaction. Outside of coding, I explore innovative
                technologies, research future-ready projects, and engage in
                activities that fuel creativity and problem-solving.
              </p>

              <div className="d-flex gap-4 flex-column flex-sm-row">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  href="/pdf/Amire-Full-Stack-Resume.pdf"
                  className="btn btn-primary rounded-pill mt-3 small"
                  style={{
                    width: "fit-content",
                    height: "fit-content",
                  }}
                >
                  Full-Stack Resume
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  href="/pdf/Amire-Front-End-Resume-.pdf"
                  className="btn btn-primary rounded-pill mt-3 small"
                  style={{
                    width: "fit-content",
                    height: "fit-content",
                  }}
                >
                  Frontend Resume
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  href="/pdf/Amire-Backend-Resume.pdf"
                  className="btn btn-primary rounded-pill mt-3 small"
                  style={{
                    width: "fit-content",
                    height: "fit-content",
                  }}
                >
                  Backend Resume
                </motion.a>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <motion.div
              variants={{
                hidden: { x: 50, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
              className="card border-0 shadow-sm"
            >
              <div className="card-body p-4">
                <h3 className="h4 mb-4 fw-bolder text-muted">
                  Personal Information
                </h3>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <p className="fw-bold mb-0 text-muted">Name:</p>
                  </div>
                  <div className="col-sm-8">
                    <p className="text-muted mb-0 small">Amire Joseph</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <p className="fw-bold mb-0 text-muted">Email:</p>
                  </div>
                  <div className="col-sm-8">
                    <p className="text-muted mb-0 small">
                      amirejoseph83@gmail.com
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <p className="fw-bold mb-0 text-muted">Location:</p>
                  </div>
                  <div className="col-sm-8">
                    <p className="text-muted mb-0 small">Lagos, Nigeria, NG</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <p className="fw-bold mb-0 text-muted">Availability:</p>
                  </div>
                  <div className="col-sm-8">
                    <p className="text-muted mb-0 small">
                      Full-time, Part-time, Freelancing, Contract
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <p className="fw-bold mb-0 text-muted">Experience:</p>
                  </div>
                  <div className="col-sm-8">
                    <p className="text-muted mb-0 small">
                      Full-Stack (3 years), Frontend (3 years), Backend (1 year)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
