import React from "react";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/fadein";
import { AiOutlineHistory } from "react-icons/ai";
import { BiSolidReport } from "react-icons/bi";

const Features = () => {
    return (
        <main
            className={`${styles.container} min-h-screen bg-cyan-100 relative`}
        >
            <div className="container px-5 py-24 mx-auto">
                <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex flex-col text-center w-full mb-20"
                >
                    <h2 className="text-gray-500">
                        Elevating Customer Experiences, One Call at a Time.
                    </h2>
                    <h1 className="sm:text-3xl text-2xl font-normal title-font uppercase  text-cyan-700">
                        Features
                    </h1>
                </motion.div>
                <div className="flex flex-wrap -m-4">
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.4 }}
                        className="p-4 md:w-1/3"
                    >
                        <div className="group flex rounded-lg h-full bg-cyan-700 hover:bg-cyan-600 p-8 flex-col hover:scale-105 hover:shadow-lg shadow-cyan-300 ">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full group-hover:text-cyan-600 text-cyan-400 font-semibold bg-white flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                </div>
                                <h2 className="text-gray-200 text-lg title-font font-medium">
                                    Real-Time Analysis
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base text-cyan-200">
                                    Instantly analyze call sentiment for
                                    immediate response and intervention.
                                </p>
                                <a
                                    href=""
                                    className="mt-3 cursor-pointer text-white group-hover:text-gray-200 inline-flex items-center"
                                >
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.4 }}
                        className="p-4 md:w-1/3"
                    >
                        <div className="group flex rounded-lg h-full bg-cyan-700 hover:bg-cyan-600 p-8 flex-col hover:scale-105 hover:shadow-lg shadow-cyan-300 ">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full group-hover:text-cyan-600 text-cyan-400 font-semibold bg-white flex-shrink-0">
                                    <BiSolidReport className="h-6 w-6" />
                                </div>
                                <h2 className="text-gray-200 text-lg title-font font-medium">
                                    Custom Reports
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base text-cyan-200">
                                    Create tailored sentiment reports to track
                                    specific KPIs and trends.
                                </p>
                                <a
                                    href=""
                                    className="mt-3 cursor-pointer text-white group-hover:text-gray-200 inline-flex items-center"
                                >
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.4 }}
                        className="p-4 md:w-1/3"
                    >
                        <div className="group flex rounded-lg h-full bg-cyan-700 hover:bg-cyan-600 p-8 flex-col hover:scale-105 hover:shadow-lg shadow-cyan-300 ">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full group-hover:text-cyan-600 text-cyan-400 font-semibold bg-white flex-shrink-0">
                                    <AiOutlineHistory className="w-7 h-7" />
                                </div>
                                <h2 className="text-gray-200 text-lg title-font font-medium">
                                    Historical Insights
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base text-cyan-200">
                                    Gain valuable insights from past calls to
                                    improve service quality over time.
                                </p>
                                <a
                                    href=""
                                    className="mt-3 cursor-pointer text-white group-hover:text-gray-200 inline-flex items-center"
                                >
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default Features;