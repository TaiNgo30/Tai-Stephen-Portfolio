"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        College Student Portfolio
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Hi!
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            TAI STEPHEN.{" "}
                        </span>
                        from FPT University
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I&apos;m Tai (Stephen) Duc Ngo. I am currently studying for a degree in Software Engineering at FPT University in Hanoi.
                </motion.p>
                <motion.button
                    variants={{
                        ...slideInFromLeft(1),
                        hidden: { opacity: 0 },
                        show: { opacity: 1 }
                    }}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                    onClick={toggleModal}
                    initial="hidden"
                    animate="show"
                >
                    Learn More!
                </motion.button>
                <AnimatePresence mode='wait'>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'fixed',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 1,
                                background: 'transparent',
                                padding: '1em',
                                borderRadius: '10px',
                                backdropFilter: 'blur(20px)',
                                color: 'white',
                                border: '2px solid #7042f88b',

                            }}
                        >
                            
                            <p>
                                My name is Tai Stephen, and I am currently pursuing my passion for Software Engineering at FPT University,
                                a journey made possible by a full scholarship that covers my entire four-year academic tenure.
                                My interests are as diverse as they are intense, ranging from the strategic intricacies of billiards to the refined pleasure of savoring exquisite beverages.
                                Creativity is not just a trait for me, but a lifestyle that permeates every aspect of my life.
                                I have a knack for performing under pressure, a quality that is indispensable in the dynamic realm of software engineering.
                                When I am not navigating the world of code, you can find me immersed in the harmonious world of music, a sanctuary where I retreat to my own realm.

                            </p>
                            <button onClick={toggleModal}>Close</button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {isOpen && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 0
                        }}
                        onClick={toggleModal}
                    />
                )}
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/Space Portfolio Assets/Untitled.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div >
    );
};

export default HeroContent;
