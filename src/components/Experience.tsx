import { useEffect, useRef } from "react";
import type { IdProps } from "../props/IdProps";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Experience( id: IdProps )
{
    const ref = useRef( null )
    const isInView = useInView( ref, { once: true, amount: 0.3 } )
    const controls = useAnimation()

    useEffect( () =>
    {
        if ( isInView )
        {
            controls.start( "visible" )
        }
    }, [ controls, isInView ] )

    const experiences = [
        {
            position: "Full Stack Developer",
            company: "Zarclays",
            period: "2021 - 2025",
            description: "Worked on both front end and back end of some projects"
        },
        {
            position: "Frontend Developer",
            company: "Heir Trust",
            period: "2022 - 2024",
            description: "Worked on front end web apps"
        }
    ]

    const education = [
        {
            degree: "Senior Secondary Certificate (SSCE)",
            institution: "Blessed Land School",
            period: "2012 - 2015",
            description: "School Certificate in Art Department",
        },
        {
            degree: "Junior Secondary Certificate (JSCE)",
            institution: "Biosus Divine Jewel",
            period: "2010 - 2011",
            description: "Junior School Certificate",
        }
    ]

    return (
        <section id={`${id}`} className="py-5">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold">Experience & Education</h2>
                    <p className="lead text-muted">My professional journey and academic background</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h3 className="h3 mb-4">Work Experience</h3>
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                            }}
                            className="position-relative"
                        >
                            {experiences.map( ( exp, index ) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { x: -50, opacity: 0 },
                                        visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
                                    }}
                                    className="card border-0 shadow-sm mb-4 position-relative"
                                >
                                    <div
                                        className="position-absolute top-0 start-0 translate-middle bg-primary rounded-circle d-flex align-items-center justify-content-center"
                                        style={{ width: "40px", height: "40px", zIndex: 1 }}
                                    >
                                        <span className="text-white fw-bold">{index + 1}</span>
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between mb-2">
                                            <h4 className="h5 mb-0">{exp.position}</h4>
                                            <span className="badge bg-primary rounded-pill">{exp.period}</span>
                                        </div>
                                        <p className="text-muted mb-3">{exp.company}</p>
                                        <p className="mb-0">{exp.description}</p>
                                    </div>
                                </motion.div>
                            ) )}
                        </motion.div>
                    </div>

                    <div className="col-lg-6">
                        <h3 className="h3 mb-4">Education</h3>
                        <motion.div
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
                            }}
                            className="position-relative"
                        >
                            {education.map( ( edu, index ) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { x: 50, opacity: 0 },
                                        visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
                                    }}
                                    className="card border-0 shadow-sm mb-4 position-relative"
                                >
                                    <div
                                        className="position-absolute top-0 start-0 translate-middle bg-primary rounded-circle d-flex align-items-center justify-content-center"
                                        style={{ width: "40px", height: "40px", zIndex: 1 }}
                                    >
                                        <span className="text-white fw-bold">{index + 1}</span>
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between mb-2">
                                            <h4 className="h5 mb-0">{edu.degree}</h4>
                                            <span className="badge bg-primary rounded-pill">{edu.period}</span>
                                        </div>
                                        <p className="text-muted mb-3">{edu.institution}</p>
                                        <p className="mb-0">{edu.description}</p>
                                    </div>
                                </motion.div>
                            ) )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}