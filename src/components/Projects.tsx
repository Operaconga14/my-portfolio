import { useAnimation, useInView, motion } from "framer-motion";
import type { IdProps } from "../props/IdProps";
import Icon from "../shared/Icon";
import ExternalLink from "../shared/ExternalLink";
import { useRef, useEffect } from "react";
import Image from "../shared/Image";

export default function Projects({ id }: IdProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const projects = [
    {
      title: "Mugivies",
      description:
        "Mugivies is a Music platform for musicians to shre and get gigs vacancies",
      image: "/imgs/projects/mugivies.png",
      tags: ["NextJs", "Taypescript", "TypeOrm", "NestJs", "PostgreSQL"],
      github: "https://github.com/Operaconga14/mugivies-frontend",
      demo: "https://mugivies.netlify.app/",
    },
    {
      title: "Color Gen File NPM",
      description:
        "Color-Genfile Cli is an npm package cli that helps you to generate different colors of your choice and generate it into a css or scss file for Html, Angular React etc.",
      image: "/imgs/projects/cologen-npm.png",
      tags: ["Node.js", "Javascript"],
      github: " https://github.com/Operaconga14/color-genfile",
      demo: "https://www.npmjs.com/package/color-genfile",
    },
    {
      title: "Color GenFile VS Code",
      description:
        "Color-Genfile is a VS Code extension that helps you to generate different color palette of your choice and generate it into a css or scss file for Html, Angular React etc.",
      image: "/imgs/projects/cologen-vscode.png",
      tags: ["VS Code Extension API", "Typescript"],
      github: "https://github.com/Operaconga14/color-genfile-vscode",
      demo: "https://marketplace.visualstudio.com/items?itemName=AmireJoseph.color-genfile-vscode",
    },
    {
      title: "API Folder Generator",
      description: `The API Project Generator is a Visual Studio Code extension designed to streamline the creation of API projects by automating folder structure setup, file generation, and package management. It provides a user-friendly interface for quickly generating a boilerplate for APIs, offering options for various levels of complexity: Simple, Advanced, and Complex.`,
      image: "/imgs/projects/apifold-gen.png",
      tags: ["VS Code Extension API", "TypeScript"],
      github: "https://github.com/Operaconga14/api-folder-gen",
      demo: "https://marketplace.visualstudio.com/items?itemName=AmireJoseph.api-folder-gen",
    },
    {
      title: "My Portfolio Site",
      description: `Welcome to my personal portfolio website! This site showcases my work, projects, and technical skills as a full-stack developer. It's designed to provide potential employers, clients, and collaborators with an overview of who I am and what I can do.`,
      image: "/imgs/projects/my-port.png",
      tags: ["React", "Tortoise ORM", "Python", "Fast API"],
      github: "https://github.com/Operaconga14/portfolio-frontend",
      demo: "https://amirejoseph.netlify.app",
    },
  ];
  return (
    <section id={id} className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bolder text-muted">My Projects</h2>
          <p className="text-muted">Check out some of my recent work</p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="row g-4"
        >
          {projects.map((project, index) => (
            <div key={index} className="col-md-6">
              <motion.div
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="card h-100 border-0 shadow-sm overflow-hidden"
              >
                <div className="position-relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    width={500}
                    height={300}
                    style={"card-img-top"}
                    alt={project.title}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition-opacity">
                    <div className="d-flex gap-2">
                      <a
                        href={project.github}
                        className="btn btn-sm btn-light rounded-circle"
                        aria-label="View GitHub repository"
                      >
                        <Icon
                          style={"fs-5"}
                          name={"bi bi-github text-danger"}
                        />
                      </a>
                      <a
                        href={project.demo}
                        className="btn btn-sm btn-light rounded-circle"
                        aria-label="View live demo"
                      >
                        <ExternalLink
                          url={project.demo}
                          styles={[
                            { urlStyle: "text-primary" },
                            { iconStyle: "text-primary" },
                          ]}
                          text={""}
                          iconName={"bi bi-github"}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h3 className="h5 mb-3 text-muted fw-bolder">
                    {project.title}
                  </h3>
                  <p className="text-muted mb-3 small">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="badge bg-primary bg-opacity-10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between">
                    <a
                      href={project.github}
                      className="text-decoration-none small d-flex align-items-center gap-1"
                    >
                      <Icon name="bi bi-github" style="" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="text-decoration-none small d-flex align-items-center gap-1"
                    >
                      <ExternalLink
                        url={project.demo}
                        styles={[
                          { urlStyle: "text-primary" },
                          { iconStyle: "text-primary" },
                        ]}
                        text={""}
                        iconName={"bi bi-box-arrow-up-right"}
                      />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-5">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Operaconga14?tab=repositories"
            className="btn btn-outline-primary rounded-pill px-4 mt-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
}
