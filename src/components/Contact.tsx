import { useInView, useAnimation, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import type { IdProps } from "../props/IdProps";
import Icon from "../shared/Icon";

export default function Contact({ id }: IdProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const formData = new FormData();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const handleMessageClick = () => {
    console.log("Message button clicked");
    console.log("Name:", formData.get("name"));
    console.log("Email:", formData.get("email"));
    console.log("Message:", formData.get("message"));
  };

  return (
    <section id={id} className=" bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bolder text-muted">Get In Touch</h2>
          <p className="small text-muted">
            Let's discuss your project or just say hello
          </p>
        </div>

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
          <div className="col-lg-5 mb-4 mb-lg-0">
            <motion.div
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
              }}
            >
              <h3 className="h4 mb-2 text-muted fw-bolder">
                Contact Information
              </h3>
              <p className="mb-4 text-muted">
                Feel free to reach out if you're looking for a developer, have a
                question, or just want to connect.
              </p>

              <div className="d-flex gap-5">
                <div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                      {/* <Mail size={20} className="text-primary" /> */}
                      <Icon style={""} name={"bi bi-envelope"} />
                    </div>
                    <div>
                      <p className="fw-medium mb-0 small text-muted">Email</p>
                      <p className="text-muted mb-0 small">
                        amirejoseph83@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                      <Icon style={""} name={"bi bi-display"} />
                    </div>
                    <div>
                      <p className="fw-medium mb-0 small text-muted">Website</p>
                      <p className="text-muted mb-0 small">
                        https://amirejoseph.netlify.app
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                      <Icon style={""} name={"bi bi-github"} />
                    </div>
                    <div>
                      <p className="fw-medium mb-0 small text-muted">GitHub</p>
                      <p className="text-muted mb-0 small">
                        https://github.com/Operaconga14
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <h4 className="h6 text-muted fw-bolder mb-1">Follow Me</h4>
                  <div className="d-flex gap-3">
                    <a
                      href="https://x.com/AmireJosep60985"
                      className="btn btn-sm rounded-circle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only text-muted small">Twitter</span>
                      <Icon style={""} name={"bi bi-twitter"} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/josephamire"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="btn btn-sm rounded-circle"
                    >
                      <span className="sr-only text-muted small">LinkedIn</span>
                      <Icon style={""} name={"bi bi-linkedin"} />
                    </a>
                    <a
                      href="https://github.com/Operaconga14"
                      className="btn btn-sm rounded-circle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only small text-muted">GitHub</span>
                      <Icon style={""} name={"bi bi-github"} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-7">
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
                <h3 className="h5 text-muted mb-4">Send Me a Message</h3>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="floatingName">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingEmail"
                          placeholder="Your Email"
                        />
                        <label htmlFor="floatingEmail">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingSubject"
                          placeholder="Subject"
                        />
                        <label htmlFor="floatingSubject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control"
                          placeholder="Your Message"
                          id="floatingMessage"
                          style={{ height: "150px" }}
                        ></textarea>
                        <label htmlFor="floatingMessage">Your Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={handleMessageClick}
                        className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                      >
                        {/* <Send size={18} /> */}
                        <span>Send Message</span>
                      </motion.button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
