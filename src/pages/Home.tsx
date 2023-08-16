import React from 'react'

const Home = () => {
        return (
                <div className='w-full  bg-[#0d0d0d] '>
                        <div className="fixed left-10 top-10">
                                <img src="/images/logo.gif" alt="" className='w-11' />
                        </div>
                        <div className="fixed bottom-10 left-10 flex flex-col gap-5">
                                <img src="/icons/ic-dribbble.svg" alt="" className='w-5' />
                                <img src="/icons/ic-ig.svg" alt="" className='w-5' />
                                <img src="/icons/ic-play.svg" alt="" className='w-5' />
                                <img src="/icons/ic-in.svg" alt="" className='w-5' />
                        </div>
                        <div className="fixed top-10 right-10 flex flex-col  text-[#b7ab98]">
                                <p>About</p>
                                <p>Work</p>
                                <p>Contact</p>
                        </div>
                        <div className="fixed bottom-20 right-10 flex flex-col gap-5 ">
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
                </div>
        )
}

export default Home