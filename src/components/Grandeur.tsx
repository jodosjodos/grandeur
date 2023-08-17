import React, { useState } from 'react'
import useMousePosition from '../hooks/useMousePosition';
import { motion } from "framer-motion"
import clsx from 'clsx';
const Grandeur = () => {
        const [isHovered, setIsHovered] = useState(false);
        const { x, y } = useMousePosition();
        const size = isHovered ? 350 : 40;
        return (
                <>
                        <div className=" relative">
                                <motion.div
                                        className={clsx("maskgrandeur", "absolute w-[100vw] h-[100vh]  top-0 left-0  text-black")}
                                        animate={{
                                                WebkitMaskPosition: x !== null && y !== null ? `${x - (size / 2)}px ${y - (size/3)}px` : '40px 50px',
                                                WebkitMaskSize: `${size}px`,
                                        }}
                                        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                                >
                                        <div className="w-full text-center py-24 text-[#b7ab98] uppercase">
                                                <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Grandeur</p>
                                                <div className="text-9xl ">
                                                        <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                                                challenging<br />
                                                                yet deeply
                                                        </p>
                                                        <p className="custom-color" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                                                gratifying <br /> work
                                                        </p>
                                                        <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                                                SINCE <br /> 2015
                                                        </p>
                                                </div>
                                        </div>
                                </motion.div>
                                <div className={"paragraphgrandeur"} >
                                        <div className="w-full text-center py-24 text-[#b7ab98] uppercase">
                                                <p>Grandeur</p>
                                                <div className="text-9xl ">
                                                        <p>
                                                                CRAFTING <br />
                                                                TIME
                                                        </p>
                                                        <p className="custom-color">
                                                                CREATING <br /> LEGACY
                                                        </p>
                                                        <p>
                                                                SINCE <br /> 2015
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default Grandeur