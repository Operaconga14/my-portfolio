import { useEffect, useRef } from "react";
import type { IdProps } from "../props/IdProps";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Experience({ id }: IdProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const experiences = [
    {
      position: "Software Engineer",
      company: "Afriment",
      period: "2025 - 2025",
      description: [
        "Worked on both front end and back end of some projects",
        "Worked on both front end and back end of some projects",
        "Worked on both front end and back end of some projects",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "Zarclays",
      period: "2021 - 2025",
      description: [
        "Worked on both front end and back end of some projects",
        "Worked on both front end and back end of some projects",
        "Worked on both front end and back end of some projects",
      ],
    },
    {
      position: "Frontend Developer",
      company: "Heir Trust",
      period: "2022 - 2024",
      description: [
        "Worked on both front end and back end of some projects",
        "Worked on both front end and back end of some projects",
        "Worked on both front end and back end of some projects",
      ],
    },
  ];

  const education = [
    {
      degree: "Online Certificate",
      institution: "ALX",
      period: "2025 - 2025",
      description: "Online Certification for AI starter Kits",
    },
  ];

  return (
    <section id={id} className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bolder text-muted">
            Experience & Education
          </h2>
          <p className=" text-muted">
            My professional journey and academic background
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h3 className="h4 mb-4 text-muted fw-bolder">Work Experience</h3>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
              className="position-relative px-1"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { x: -50, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 0.6 },
                    },
                  }}
                  className="card border-0 shadow-sm mb-4 position-relative"
                >
                  <div
                    className="position-absolute top-0 start-0 translate-middle bg-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "20px", height: "20px", zIndex: 1 }}
                  >
                    <span className="text-white fw-bold">{index + 1}</span>
                  </div>
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-2">
                      <h4 className="h6 text-muted fw-bolder mb-0">
                        {exp.position}
                      </h4>
                      <span
                        className="badge bg-primary rounded-pill"
                        style={{
                          width: "fit-content",
                          height: "fit-content",
                          padding: "5px 10px",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted small mb-3">{exp.company}</p>
                    <ul className="text-muted list-unstyled">
                      {exp.description.map((decp, index) => {
                        return (
                          <div>
                            <li key={index}>
                              ⬦
                              <span className="ms-3 small text-muted">
                                {decp}
                              </span>
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="col-lg-6">
            <h3 className="h4 mb-4 text-muted fw-bolder">Education</h3>
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 0.3 },
                },
              }}
              className="position-relative px-1"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { x: 50, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 0.6 },
                    },
                  }}
                  className="card border-0 shadow-sm mb-4 position-relative"
                >
                  <div
                    className="position-absolute top-0 start-0 translate-middle bg-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "20px", height: "20px", zIndex: 1 }}
                  >
                    <span className="text-white fw-bold">{index + 1}</span>
                  </div>
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-2">
                      <h4 className="h6 text-muted fw-bolder mb-0">
                        {edu.degree}
                      </h4>
                      <span
                        className="badge bg-primary rounded-pill"
                        style={{
                          width: "fit-content",
                          height: "fit-content",
                          padding: "5px 10px",
                        }}
                      >
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-mute small mb-3">{edu.institution}</p>
                    <p className="mb-0 text-muted small">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
