import { useState } from "react";
import StyledText from "../components/StyledText";
import AnimatedParagraphs from "../components/AnimatedParagraph";

const Home = () => {
        const [isOn, setOn] = useState(true)
        const handleSound = () => {
                setOn(prev => !prev)
        }
        return (
                <div className="w-[100vw] overflow-x-hidden  bg-[rgb(13,13,13)] ">
                        <img
                                src="/icons/logo.svg"
                                alt=""
                                className="w-11 fixed left-10 top-10 z-30"
                        />
                        <div className="fixed bottom-10 left-10 flex flex-col gap-5 z-30">
                                <img src="/icons/ic-dribbble.svg" alt="" className="w-5" />
                                <img src="/icons/ic-ig.svg" alt="" className="w-5" />
                                <img src="/icons/ic-play.svg" alt="" className="w-5" />
                                <img src="/icons/ic-in.svg" alt="" className="w-5" />
                        </div>
                        <div className="fixed top-10 right-10 flex flex-col  text-[#b7ab98] z-30 uppercase">
                                <p>About</p>
                                <p>Work</p>
                                <p>Contact</p>
                        </div>
                        <div className="fixed bottom-20 right-10 flex flex-col gap-5  z-30">
                                <div className="transform rotate-90  uppercase text-[#b7ab98] flex  gap-2 hover:cursor-pointer">
                                        <p className="font-semibold" onClick={handleSound}>{isOn ? "On" : "Off"}</p>
                                        <p className="font-semibold opacity-25  hover:opacity-100">sound</p>
                                </div>
                        </div>
                        <div className="w-full text-center py-24 text-[#b7ab98] uppercase">
                                <p>Grandeur</p>
                                <div className="text-9xl font-bold">
                                        <p>
                                                CRAFTING <br />
                                                TIME
                                        </p>
                                        <p className="text-[rgb(235,89,57)]">
                                                CREATING <br /> LEGACY
                                        </p>
                                        <p>
                                                SINCE <br /> 2015
                                        </p>
                                </div>
                        </div>
                        <div className="w-full px-48  py-32 text-[#b7ab98] ">
                                <p className="uppercase">About me</p>
                                <div className="text-6xl my-5 font-bold">
                                        <p>
                                                Celebrated{" "}
                                                <span className="text-[rgb(235,89,57)]">watchmaker since <br /> 2015</span>
                                                . Passionate about <br />  precision, craftsamanship, and <br /> timeless design.
                                                Consistently <br /> providing meticulous, <br /> high-quality service
                                        </p>
                                </div>
                        </div>
                        <div className="w-full   py-32 text-[#b7ab98]  hover:cursor-default relative">
                                <div className="absolute bottom-0 w-full bg-red-500 h-10">fasdf</div>
                                <p className="uppercase px-48 text-xl">what i do</p>
                                <div className="text-4xl my-3 uppercase">
                                        <StyledText styles="w-full border-y border-[#b7ab98] border-opacity-20 px-28 font-medium flex flex-col  py-2 text-5xl hover:bg-[rgb(235,89,57)] hover:text-black transition-all duration-1000">Design</StyledText>
                                        <p className="w-full border-y border-[#b7ab98] border-opacity-20 px-28 font-medium flex flex-col  py-2 text-5xl hover:bg-[rgb(235,89,57)] hover:text-black transition-all duration-1000">Design</p>
                                        <p className="w-full border-b border-[#b7ab98] font-medium text-5xl py- px-28 py-2 border-opacity-20 ">
                                                Component Production
                                        </p>
                                        <p className="w-full  border-[#b7ab98] px-28 font-medium text-5xl py-2 border-opacity-20">
                                                Movement Assembly
                                        </p>
                                        <p className="w-full border-t font-medium text-5xl border-[#b7ab98] px-28   border-opacity-20 ">
                                                Dial and Hands
                                        </p>
                                        <p className="w-full border-t border-[#b7ab98] px-28 font-bold  border-opacity-20">
                                                CAse fittting
                                        </p>
                                        <p className="w-full border-t border-[#b7ab98] px-28 font-bold  border-opacity-20">
                                                strach attachment
                                        </p>
                                        <p className="w-full border-t border-[#b7ab98] px-28 font-bold  border-opacity-20">
                                                quality control
                                        </p>
                                        <p className="w-full border-y border-[#b7ab98] px-28 font-bold   border-opacity-20">
                                                final polishing and packaging
                                        </p>
                                </div>
                        </div>
                        <div className="w-full px-48  pt-32 pb-40 text-[#b7ab98] bg-[url('/images/work-1600.jpg')] bg-no-repeat bg-cover relative">
                                <p className="uppercase">Experience</p>
                                <div className="text-7xl font-bold my-3">
                                        <p>
                                                Over <span className="text-[rgb(235,89,57)]">a decade</span> of
                                                <br />
                                                watchmaking experience in a <br /> variety of watch styles , <br /> including
                                                luxury, sport, and  <br /> vintage designs, while working <br /> with the majority
                                                of the market's <br /> major players to create <br /> exquisite timepieces.
                                        </p>
                                </div>
                                <p className="absolute  uppercase bottom-10">History</p>
                        </div>
                        <div>
                                <div className=" text-[#c9c1b5] flex flex-row gap-40 font-medium px-48 py-12 border-b border-[#b7ab98] border-opacity-20 ">
                                        <p className="text-5xl uppercase">now</p>
                                        <div className="flex flex-col gap-2">
                                                <p className="text-5xl font-medium">Design Lead</p>
                                                <p className=" font-extralight"> Fantasy Interactive</p>
                                        </div>
                                </div>
                                <div className=" text-[#c9c1b5] flex flex-row gap-40 font-medium px-48 py-12 border-b border-[#b7ab98] border-opacity-20">
                                        <p className="text-5xl uppercase">2016</p>
                                        <div className="flex flex-col gap-2">
                                                <p className="text-5xl font-medium">Senior Product Designer</p>
                                                <p className=" font-extralight"> Interactive Labas</p>
                                        </div>
                                </div>
                                <div className=" text-[#c9c1b5] flex flex-row gap-40 font-medium px-48 py-12 border-b border-[#b7ab98] border-opacity-20 ">
                                        <p className="text-5xl uppercase">2012</p>
                                        <div className="flex flex-col gap-2">
                                                <p className="text-5xl font-medium">Art Director</p>
                                                <p className=" font-extralight">DR Com Group</p>
                                        </div>
                                </div>
                                <div className=" text-[#c9c1b5] flex flex-row gap-40 font-medium px-48 py-12 border-b border-[#b7ab98] border-opacity-20">
                                        <p className="text-5xl uppercase">2009</p>
                                        <div className="flex flex-col gap-2">
                                                <p className="text-5xl font-medium">Flash Designer</p>
                                                <p className=" font-extralight">DR Com Group</p>
                                        </div>
                                </div>
                                <div className="">
                                        <div className="text-[#c9c1b5] px-48 py-40 flex flex-col gap-5">
                                                <p className="uppercase font-medium">clients</p>
                                                <div className="text-[#c9c1b5] text-6xl flex flex-col gap-2 font-bold">
                                                        <p>I worked with some of the most</p>
                                                        <p>
                                                                <span className="text-[rgb(235,89,57)]">innovative</span>industry
                                                                leaders to help
                                                        </p>
                                                        <p>build their top-notch products</p>
                                                </div>
                                        </div>
                                        <div className=" uppercase text-[#c9c1b5]  bg-[url('/images/planet-1-1.png')]  bg-no-repeat bg-contain  bg-bottom  mb-28">
                                                <div className="textIWant">
                                                        <p className="text-8xl border-y border-opacity-20 border-[#b7ab98] px-48">ford</p>
                                                        <p className="text-8xl border-y border-opacity-20 border-[#b7ab98] px-48">ufc</p>
                                                        <p className="text-8xl border-y border-opacity-20 border-[#b7ab98] px-48"> lincoln</p>
                                                        <p className="text-8xl border-y border-opacity-20 border-[#b7ab98] px-48">royal caribbean</p>
                                                        <p className="text-8xl border-y border-opacity-20 border-[#b7ab98] px-48">sleeping</p>
                                                        <p className="text-8xl border-y border-opacity-20 border-[#b7ab98] px-48">nfl</p>
                                                </div>
                                                <p className="text-9xl px-48">...</p>
                                        </div>
                                </div>
                                <div>
                                        <img
                                                loading="lazy"
                                                src="/images/reel-poster.jpg"
                                                alt=" reel poster"
                                        />
                                </div>
                        </div>
                        <div className="mx-44 text-color">
                                <div className="flex flex-col py-28">
                                        <div className="border-b py-5 border-color border-opacity-20 mb-20">
                                                <h1 className="text-xl  uppercase text-[rgb(183,171,152)] tracking-widest       ">WHAT THEY SAID</h1>
                                        </div>
                                        <div className="sticky top-0 right-0">
                                                <div className="flex flex-row gap-3 items-center w-24">
                                                        <p className="text-[#eb5939] font-bold  text-4xl">&lt;</p>
                                                        <img src="/images/michael-glass.jpg" alt=" michael profile" />
                                                </div>
                                                <div className="flex flex-row gap-3 items-center w-24">
                                                        <p className="text-[#eb5939] font-bold  text-4xl">&lt;</p>

                                                        <img src="/images/peter-smart.jpg" alt=" peter profile" />
                                                </div>
                                                <div className="flex flex-row gap-3 items-center w-24">
                                                        <p className="text-[#eb5939] font-bold  text-4xl">&lt;</p>

                                                        <img src="/images/linh-le.jpg" alt=" linhle profile" />
                                                </div>
                                        </div>
                                        <div className="border-b border-color py-28 border-opacity-20">
                                                <div className="flex flex-col gap-16">
                                                        <div className="text-[5rem] font-bold fade-on-scroll">
                                                                <p className="text-color ">
                                                                        {" "}
                                                                        <span className=" text-[#eb5939]">"</span> Grandeur is
                                                                        seriously{" "}
                                                                </p>
                                                                <p className="fade-on-scroll">the best and he</p>
                                                                <p className="fade-on-scroll">never complains</p>
                                                        </div>
                                                        <div className="flex flex-col gap-3 fade-on-scroll">
                                                                <h2 className="font-bold">Michal Giass</h2>
                                                                <div>
                                                                        <p>Group Design Director</p>
                                                                        <p>Fantasy Interactive</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="border-b border-color py-28 border-opacity-20 ">
                                                <div className="flex flex-col gap-16">
                                                        <div className="text-[5rem] font-medium fade-on-scroll">
                                                                <p className="text-color ">
                                                                        <span className="text-[#eb5939]">"</span> This looks{" "}
                                                                </p>
                                                                <p className="fade-on-scroll">amazing.</p>
                                                                <p className="fade-on-scroll">Great work!</p>
                                                        </div>
                                                        <div className="flex flex-col gap-3 fade-on-scroll">
                                                                <h2 className="font-bold">Peter Smart</h2>
                                                                <div>
                                                                        <p className="fade-on-scroll">Head of Product</p>
                                                                        <p className="fade-on-scroll">Fantasy Interactive</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className=" py-28 border-opacity-20">
                                                <div className="flex flex-col gap-16">
                                                        <div className=" text-[5rem] font-medium">
                                                                <p className="text-color ">
                                                                        <span className=" text-[#eb5939]">"</span> He's a beast.
                                                                </p>
                                                                <p>His skills are </p>
                                                                <p>insame!</p>
                                                        </div>
                                                        <div className="flex flex-col gap-3">
                                                                <h2 className="font-bold">Linh Le</h2>
                                                                <div>
                                                                        <p>Project Manage</p>
                                                                        <p> Interactive Labs</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="bg-[url('/images/banner-bottom-50.jpg')] flex flex-col items-center justify-center py-56  bg-cover text-color">
                                <p className="uppercase">my motto</p>
                                <div className="flex flex-col justify-center items-center text-9xl font-bold">
                                        <p>GOOD DESIGN</p>
                                        <p>IS HONEST</p>
                                </div>

                                <p>Dieter Rams</p>
                        </div>
                        <div className="px-48 text-color flex flex-col gap-16 pt-40 pb-10">
                                <p>CONNECT</p>
                                <div className="grid grid-cols-3">
                                        <div className="font-bold text-4xl">
                                                <p>Dribble</p>
                                                <p>Youtube</p>
                                                <p>Linkedin</p>
                                        </div>
                                        <div className="font-bold text-4xl">
                                                <p>Instagram</p>
                                                <p>Facebook</p>
                                                <p>Behance</p>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                                <div>
                                                        <p className="font-medium">Email</p>
                                                        <p className="font-extralight">(email protected)</p>
                                                </div>
                                                <div>
                                                        <p>Phone</p>
                                                        <p className=" font-extralight">+84 366 138 873</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Home;
