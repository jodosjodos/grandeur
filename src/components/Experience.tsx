import clsx from 'clsx';
import { useState } from 'react'
import useMousePosition from '../hooks/useMousePosition';
import { motion } from "framer-motion"
const Experience = () => {
        const [isHovered, setIsHovered] = useState(false);
        const { x, y } = useMousePosition();
        const size = isHovered ? 350 : 40;
        return (
                        <div className="relative  py-32">
                                <motion.div
                                        className={clsx("maskexperience", "absolute w-[100vw] h-[100vh]  top-0 left-0  text-black px-48")}
                                        animate={{
                                                WebkitMaskPosition: x !== null && y !== null ? `${x - (size / 2)}px ${y - (size / 3)}px` : 'initial',
                                                WebkitMaskSize: `${size}px`,
                                        }}
                                        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                                >
                                        <div onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }} >
                                                <p className="uppercase">Experience</p>
                                                <p className="fade-on-scroll text-7xl font-bold my-3">
                                                        Designed 1500+ timepieces each uniquely tailored for diverse esteemed  brands highlighting my creative  versatility and commitement
                                                </p>
                                        </div>
                                </motion.div>
                                <div className={"paragraphexperience"} >
                                        <div className='px-48'>
                                                <p className="uppercase">Experience</p>
                                                <div className="text-7xl font-bold my-3">
                                                        <p className="fade-on-scroll">
                                                                Over <span className="text-[rgb(235,89,57)]">a decade</span> of
                                                                <br />
                                                                watchmaking experience in a <br /> variety of watch styles , <br />{" "}
                                                                including luxury, sport, and <br /> vintage designs, while working{" "}
                                                                <br /> with the majority of the market's <br /> major players to
                                                                create <br /> exquisite timepieces.
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                        </div>
        )
}

export default Experience