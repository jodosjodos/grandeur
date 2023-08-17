import clsx from 'clsx';
import { useState } from 'react'
import useMousePosition from '../hooks/useMousePosition';
import { motion } from "framer-motion"

const Clients = () => {
        const [isHovered, setIsHovered] = useState(false);
        const { x, y } = useMousePosition();
        const size = isHovered ? 350 : 40;
        return (
                <div className=' '>
                        <div className="relative  py-32">
                                <motion.div
                                        className={clsx("maskaboutme", "absolute w-[100vw] h-[100vh]  top-0 left-0  text-black px-56")}
                                        animate={{
                                                WebkitMaskPosition: x !== null && y !== null ? `${x - (size / 2)}px ${y - (size / 3)}px` : 'initial',
                                                WebkitMaskSize: `${size}px`,
                                        }}
                                        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                                >
                                        <div onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }} >
                                                <p className='uppercase text-xl' >clients</p>
                                                <p className='text-6xl'>
                                                        I was only a small part of a large  team. They  probably have no ideal exists
                                                </p>
                                        </div>
                                </motion.div>
                                <div className={"paragraphaboutme"} >
                                        <div className='px-56'>
                                                <p className='uppercase text-xl '>clients</p>
                                                <p className='text-6xl'>
                                                        I worked with some of the most <span className="text-[rgb(235,89,57)]">innovative</span>
                                                        industry leaders to help build  their top notch products
                                                </p>
                                        </div>
                                </div>
                        </div>
                        <div className="">
                                <div className=" uppercase text-[#c9c1b5]  bg-[url('/images/planet-1-1.png')]  bg-no-repeat bg-contain  bg-bottom  mb-28">
                                        <div className="   ">
                                                <p className="text-8xl border-y border-opacity-20 border-[#b7ab98] px-48">
                                                        ford
                                                </p>
                                                <p className="text-8xl border-y border-opacity-20 border-[#b7ab98] px-48">
                                                        ufc
                                                </p>
                                                <p className="text-8xl border-y border-opacity-20 border-[#b7ab98] px-48">
                                                        {" "}
                                                        lincoln
                                                </p>
                                                <p className="text-8xl border-y border-opacity-20 border-[#b7ab98] px-48">
                                                        royal caribbean
                                                </p>
                                                <p className="text-8xl border-y border-opacity-20 border-[#b7ab98] px-48">
                                                        sleeping
                                                </p>
                                                <p className="text-8xl border-y border-opacity-20 border-[#b7ab98] px-48 ">
                                                        nfl
                                                </p>
                                        </div>
                                        <p className="text-9xl px-48">...</p>
                                </div>
                        </div>
                </div>
        )
}

export default Clients