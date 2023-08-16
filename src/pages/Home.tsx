import React from 'react'

const Home = () => {
        return (
                <div className='w-full  bg-[rgb(13,13,13)] '>
                        <img src="/icons/logo.svg" alt="" className='w-11 fixed left-10 top-10 z-30' />
                        <div className="fixed bottom-10 left-10 flex flex-col gap-5 z-30">
                                <img src="/icons/ic-dribbble.svg" alt="" className='w-5' />
                                <img src="/icons/ic-ig.svg" alt="" className='w-5' />
                                <img src="/icons/ic-play.svg" alt="" className='w-5' />
                                <img src="/icons/ic-in.svg" alt="" className='w-5' />
                        </div>
                        <div className="fixed top-10 right-10 flex flex-col  text-[#b7ab98] z-30">
                                <p>About</p>
                                <p>Work</p>
                                <p>Contact</p>
                        </div>
                        <div className="fixed bottom-20 right-10 flex flex-col gap-5  z-30">
                                <div className="transform rotate-90  uppercase text-[#b7ab98] flex  gap-2">
                                        <p className="font-semibold">on</p>
                                        <p className="font-semibold">sound</p>
                                </div>
                        </div>
                        <div className="w-full text-center py-24 text-[#b7ab98] uppercase">
                                <p>Grandeur</p>
                                <div className='text-9xl'>
                                        <p>CRAFTING  <br />TIME</p>
                                        <p className='text-[rgb(235,89,57)]'>CREATING <br /> LEGACY</p>
                                        <p>SINCE  <br /> 2015</p>
                                </div>
                        </div>
                        <div className="w-full px-48  py-32 text-[#b7ab98] ">
                                <p className='uppercase'>About me</p>
                                <div className='text-6xl my-3'>
                                        <p>Celebrated    <span className='text-[rgb(235,89,57)]'>watchmaker since 2015</span>. Passionate about, precision, craftsamanship, and timeless design. Consistently providing meticulous, high-quality service</p>
                                </div>
                        </div>
                        <div className="w-full   py-32 text-[#b7ab98] ">
                                <p className='uppercase px-48'>what i do</p>
                                <div className='text-4xl my-3 uppercase'>
                                        <p className='w-full border-y border-[#b7ab98] px-24'>Design</p>
                                        <p className='w-full border-y border-[#b7ab98] px-24'>Component Production</p>
                                        <p className='w-full border-y border-[#b7ab98] px-24'>Movement Assembly</p>
                                        <p className='w-full border-y border-[#b7ab98] px-24'>Dial and Hands</p>
                                        <p className='w-full border-y border-[#b7ab98] px-24'>CAse fittting</p>
                                        <p className='w-full border-y border-[#b7ab98] px-24'>strach attachment</p>
                                        <p className='w-full border-y border-[#b7ab98] px-24'>quality control</p>
                                        <p className='w-full border-y border-[#b7ab98] px-24'>final polishing and packaging</p>
                                </div>
                        </div>
                        <div className="w-full px-48  pt-32 pb-40 text-[#b7ab98] bg-[url('/images/work-1600.jpg')] bg-no-repeat bg-cover relative">
                                <p className='uppercase'>Experience</p>
                                <div className='text-7xl my-3'>
                                        <p>Over <span className='text-[rgb(235,89,57)]'>a decade</span> of watchmaking experience in a variety of watch styles , including luxury, sport, and vintage designs, while working with the majority of the market's major players to create exquisite timepieces.</p>
                                </div>
                                <p className='absolute  uppercase bottom-10'>History</p>
                        </div>
                </div>
        )
}

export default Home