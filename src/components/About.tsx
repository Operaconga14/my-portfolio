import { useEffect, useRef } from "react";
import type { IdProps } from "../props/IdProps";
import { motion, useAnimation, useInView } from 'framer-motion';

export default function About( id: IdProps )
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

    return (
        <section id={`${id}`} className="py-5 bg-light">
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
                            <h2 className="display-5 fw-bold mb-4">About Me</h2>
                            <p className="lead">
                                I'm a passionate Full Stack Developer with expertise in building responsive and performant web
                                applications.
                            </p>
                            <p className="mb-4">
                                With 3+ years of experience in web development, I specialize in creating seamless user experiences using
                                modern technologies. I enjoy solving complex problems and turning ideas into reality through clean and
                                efficient code.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies, researching on projects to build next,
                                or enjoying outdoor activities.
                            </p>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/pdf/Amire Joseph Resume.pdf"
                                className="btn btn-primary rounded-pill px-4 mt-3"
                            >
                                Download Resume
                            </motion.a>
                        </motion.div>
                    </div>
                    <div className="col-lg-6">
                        <motion.div
                            variants={{
                                hidden: { x: 50, opacity: 0 },
                                visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
                            }}
                            className="card border-0 shadow-sm"
                        >
                            <div className="card-body p-4">
                                <h3 className="h4 mb-4">Personal Information</h3>
                                <div className="row mb-3">
                                    <div className="col-sm-4">
                                        <p className="fw-bold mb-0">Name:</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">Amire Joseph</p>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-4">
                                        <p className="fw-bold mb-0">Email:</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">amirejoseph83@gmail.com</p>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-4">
                                        <p className="fw-bold mb-0">Location:</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">Lagos, Nigeria, NG</p>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-4">
                                        <p className="fw-bold mb-0">Availability:</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">Full-time, Part-time, Freelancing, Contract</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="fw-bold mb-0">Experience:</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">3+ Years</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}