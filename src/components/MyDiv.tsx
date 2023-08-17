import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import useMousePosition from '../hooks/useMousePosition';
import clsx from 'clsx';


const MyDiv = () => {
        const [isHovered, setIsHovered] = useState(false);
        const { x, y } = useMousePosition();
        const size = isHovered ? 350 : 40;
        return (
                <div className="my-20 h-[500px] relative">
                        <motion.div
                                className={clsx("mask","absolute w-[100vw] h-[100vh]  top-0 left-0  text-black")}
                                animate={{
                                        WebkitMaskPosition: x !== null && y !== null ? `${x - (size /2)}px ${y - (size / 2)}px` : '40px 50px',
                                        WebkitMaskSize: `${size}px`,
                                }}
                                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                        >
                                <p onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
                                        A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
                                </p>
                        </motion.div>
                        <div className={"paragraph"} >
                                <p>I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
                        </div>
                </div>
        )
}

export default MyDiv