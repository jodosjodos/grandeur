import clsx from 'clsx';
import { useState } from 'react'
import useMousePosition from '../hooks/useMousePosition';
import { motion } from "framer-motion"
const Aboutme = () => {
        const [isHovered, setIsHovered] = useState(false);
        const { x, y } = useMousePosition();
        const size = isHovered ? 350 : 40;
        return (
                <div className=' '>
                        <div className="relative  py-32">
                                <motion.div
                                        className={clsx("maskaboutme", "absolute w-[100vw] h-[100vh]  top-0 left-0  text-black px-48")}
                                        animate={{
                                                WebkitMaskPosition: x !== null && y !== null ? `${x - (size / 2)}px ${y - (size/3)}px` : 'initial',
                                                WebkitMaskSize: `${size}px`,
                                        }}
                                        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                                >
                                        <div onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }} >
                                                <p className='uppercase text-xl' >About me</p>
                                                <p className='text-6xl'>
                                                        Designed 1500+ timepieces each uniquely tailored for diverse esteemed  brands highlighting my creative  versatility and commitement
                                                </p>
                                        </div>
                                </motion.div>
                                <div className={"paragraphaboutme"} >
                                        <div className='px-48'>
                                                <p className='uppercase text-xl '>About me</p>
                                                <p className='text-6xl'>
                                                        Celebrated <span className="text-[rgb(235,89,57)]">watchmaker since 2015</span>
                                                        . Passionate about precision, craftsamanship, and
                                                        timeless design. Consistently providing meticulous,
                                                        high-quality service
                                                </p>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Aboutme