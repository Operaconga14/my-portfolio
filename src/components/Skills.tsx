import { useInView, useAnimation, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import type { IdProps } from "../props/IdProps";
import Icon from "../shared/Icon";

export default function Skills( id: IdProps )
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

    const skills = [
        {
            name: "Frontend Development",
            icon: <Icon name="bi bi-display fs-3" style="" />,
            description: "Building responsive and interactive user interfaces with React, HTML, CSS, and JavaScript.",
        },
        {
            name: "Backend Development",
            icon: <Icon name="bi bi-hdd-stack fs-3" style="" />,
            description: "Creating robust server-side applications using Node.js, Express, and various databases.",
        },
        {
            name: "Database Management",
            icon: <Icon name="bi bi-database fs-3" style="" />,
            description: "Designing and optimizing databases with MongoDB, PostgreSQL, and MySQL.",
        },
        {
            name: "Full Stack Development",
            icon: <Icon name="bi bi-stack fs-3" style="" />,
            description: "End-to-end application development from UI/UX to server architecture and deployment.",
        },
    ]

    const technologies = [
        { name: "React", percentage: 50 },
        { name: "Node.js", percentage: 85 },
        { name: "JavaScript", percentage: 85 },
        { name: "TypeScript", percentage: 80 },
        { name: "HTML/CSS", percentage: 90 },
        { name: "Express", percentage: 80 },
        { name: "Git", percentage: 85 },
        { name: "Angular", percentage: 90 },
        { name: "Python", percentage: 60 },
        { name: "Sequelize ORM", percentage: 60 },
        { name: "Tortoise ORM", percentage: 60 },
        { name: "FastAPI", percentage: 75 },
        { name: "Together AI", percentage: 60 },
        { name: "Hugging Face", percentage: 60 },
        { name: "Chat Gpt", percentage: 80 }
    ]

    return (
        <section id={`${id}`} className="py-5">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold">My Skills</h2>
                    <p className="lead text-muted">Here are my technical skills and expertise</p>
                </div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    }}
                    className="row mb-5"
                >
                    {skills.map( ( skill, index ) => (
                        <div key={index} className="col-md-6 col-lg-3 mb-4">
                            <motion.div
                                variants={{
                                    hidden: { y: 50, opacity: 0 },
                                    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
                                }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="card h-100 border-0 shadow-sm"
                            >
                                <div className="card-body text-center p-4">
                                    <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                                        <span className="text-primary">{skill.icon}</span>
                                    </div>
                                    <h3 className="h5 mb-3">{skill.name}</h3>
                                    <p className="text-muted mb-0">{skill.description}</p>
                                </div>
                            </motion.div>
                        </div>
                    ) )}
                </motion.div>

                <div className="row mt-5">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h3 className="h4 mb-4">Technical Skills</h3>
                        {technologies.slice( 0, 8 ).map( ( tech, index ) => (
                            <div key={index} className="mb-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="fw-medium">{tech.name}</span>
                                    <span className="text-muted">{tech.percentage}%</span>
                                </div>
                                <div className="progress" style={{ height: "8px" }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: `${tech.percentage}%` } : { width: 0 }}
                                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        aria-valuenow={tech.percentage}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    ></motion.div>
                                </div>
                            </div>
                        ) )}
                    </div>
                    <div className="col-lg-6">
                        <h3 className="h4 mb-4">Additional Skills</h3>
                        {technologies.slice( 8, 15 ).map( ( tech, index ) => (
                            <div key={index} className="mb-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="fw-medium">{tech.name}</span>
                                    <span className="text-muted">{tech.percentage}%</span>
                                </div>
                                <div className="progress" style={{ height: "8px" }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: `${tech.percentage}%` } : { width: 0 }}
                                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        aria-valuenow={tech.percentage}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    ></motion.div>
                                </div>
                            </div>
                        ) )}
                    </div>
                </div>
            </div>
        </section>
    )
}