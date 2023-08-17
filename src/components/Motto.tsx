import { useState } from "react";
import useMousePosition from "../hooks/useMousePosition";
import clsx from "clsx";
import { motion } from "framer-motion"

const Motto = () => {
        const [isHovered, setIsHovered] = useState(false);
        const { x, y } = useMousePosition();
        const size = isHovered ? 350 : 40;
        return (
                <div className=' '>
                        <div className="relative  py-32">
                                <motion.div
                                        className={clsx("maskaboutme", "absolute w-[100vw] h-[100vh]  top-0 left-0  text-black  text-center  uppercase")}
                                        animate={{
                                                WebkitMaskPosition: x !== null && y !== null ? `${x - (size / 2)}px ${y - (size / 2)}px` : 'initial',
                                                WebkitMaskSize: `${size}px`,
                                        }}
                                        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                                >
                                        <div onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }} >
                                                <p className='uppercase text-xl' >my motto</p>
                                                <p className='text-8xl'>Not All <br /> Honest Design <br />Is Good</p>
                                                <p className='uppercase text-xl' >Grandeur</p>
                                        </div>
                                </motion.div>
                                <div className={"paragraphaboutme"} >
                                        <div className='text-center'>
                                                <p className='uppercase text-xl '>my motto</p>
                                                <p className='text-8xl uppercase'>Good  Design <br /> dis honest</p>
                                                <p className='uppercase text-xl '>Dieter Rams</p>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Motto