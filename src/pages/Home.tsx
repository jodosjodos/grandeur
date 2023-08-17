import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion"
// import useMousePosition from "../hooks/useMousePosition";
import MyDiv from "../components/MyDiv";
import Grandeur from "../components/Grandeur";
import Aboutme from "../components/Aboutme";
import Experience from "../components/Experience";
import Clients from "../components/Clients";
import Motto from "../components/Motto";
const Home = () => {
	// const [isHovered, setIsHovered] = useState(false);
	// const { x, y } = useMousePosition();
	// const size = isHovered ? 400 : 40;
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const sections: HTMLElement[] = Array.from(
			document.querySelectorAll(".custom-animation p")
		);

		sections.forEach((section) => {
			const letters = section.innerText.split("");
			section.innerHTML = letters
				.map(
					(letter, index) =>
						`<span class="letter" key="${index}">${letter}</span>`
				)
				.join("");

			gsap.fromTo(
				section.querySelectorAll(".letter"),
				{
					opacity: 0.2,
					y: 50,
				},
				{
					opacity: 1,
					y: 0.3,
					stagger: 0.1,
					duration: 1.5,
					scrollTrigger: {
						trigger: section,
						start: "top 80%",
						end: "top 50%",
						scrub: true,
					},
				}
			);
		});
	}, []);

	const [isOn, setOn] = useState(true);

	const handleSound = () => {
		setOn((prev) => !prev);
	};


	return (
		<div className="w-[100vw] overflow-x-hidden  bg-[rgb(13,13,13)] relative">
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
					<p className="font-semibold" onClick={handleSound}>
						{isOn ? "On" : "Off"}
					</p>
					<p className="font-semibold opacity-25  hover:opacity-100">sound</p>
				</div>
			</div>
			<Grandeur />
			<Aboutme />
			<div className="w-full   py-32 text-[#b7ab98]  hover:cursor-default custom-animation">
				<p className="uppercase px-48 text-xl">what i do</p>
				<div className="text-4xl my-3 uppercase">
					<div className="hover:bg-[#eb5939] transition duration-300 ease-in-out w-full border-y border-[#b7ab98] border-opacity-20 px-28 font-medium flex flex-row  justify-between py-2 text-5xl  hover:text-[#0D0D0D]">
						<p>Design</p>
						<div className="text-[#0D0D0D]  text-xl lowercase">
							<p>The process begins with designing the watch,</p>
							<p>Including the dial , case and all internal</p>
							<p>components. Computer-Aided Design (CAD)</p>
							<p>software cab be used for precision</p>
						</div>
					</div>
					<div className="hover:bg-[#eb5939] transition duration-300 ease-in-out w-full border-y border-[#b7ab98] border-opacity-20 px-28 font-medium flex flex-row  justify-between py-2 text-5xl  hover:text-[#0D0D0D]">
						<p>Component Production</p>
						<div className="text-[#0D0D0D]  text-xl lowercase">
							<p>The production fo individual components often involves</p>
							<p>both machines and manual process . Components can</p>
							<p>
								include gears , plates , springs , screws , the case , and the
							</p>
							<p>watch face.</p>
						</div>
					</div>
					<div className="hover:bg-[#eb5939] transition duration-700 ease-in-out w-full border-y border-[#b7ab98] border-opacity-20 px-28 font-medium flex flex-row justify-between py-2 text-5xl hover:text-[#0D0D0D]">
						<p>Movement Assembly</p>
						<div className="text-[#0D0D0D] text-xl lowercase">
							<p>The movement, or the internal mechanism of the watch,</p>
							<p>is assembled. This involves installing the mainspring,</p>
							<p>gears and escapement, which regulate the movement's</p>
							<p>energy</p>
						</div>
					</div>
					<div className="hover:bg-[#eb5939] transition duration-300 ease-in-out w-full border-y border-[#b7ab98] border-opacity-20 px-28 font-medium flex flex-row  justify-between py-2 text-5xl  hover:text-[#0D0D0D]">
						<p>Dial and Hands</p>
						<div className="text-[#0D0D0D]  text-xl lowercase">
							<p>The dial is often added next , followed by the hands.</p>
							<p>Both must be attached with extreme precision</p>
						</div>
					</div>
					<div className="hover:bg-[#eb5939] transition duration-300 ease-in-out w-full border-y border-[#b7ab98] border-opacity-20 px-28 font-medium flex flex-row  justify-between py-2 text-5xl  hover:text-[#0D0D0D]">
						<p>CAse fittting</p>
						<div className="text-[#0D0D0D]  text-xl lowercase">
							<p>The completed movement is fitted into the case , a</p>
							<p>process that often includes adding a seal for water</p>
							<p>resistance.</p>
						</div>
					</div>
					<div className="hover:bg-[#eb5939] transition duration-300 ease-in-out w-full border-y border-[#b7ab98] border-opacity-20 px-28 font-medium flex flex-row  justify-between py-2 text-5xl  hover:text-[#0D0D0D]">
						<p>strach attachment</p>
						<p className="text-[#0D0D0D]  text-xl lowercase">
							the strap of bracelete is then attached to the case
						</p>
					</div>

					<div className="hover:bg-[#eb5939] transition duration-300 ease-in-out w-full border-y border-[#b7ab98] border-opacity-20 px-28 font-medium flex flex-row  justify-between py-2 text-5xl  hover:text-[#0D0D0D]">
						<p>quality control</p>
						<div className="text-[#0D0D0D]  text-xl lowercase">
							<p>The watch undergoes rigorous testing for accuracy,</p>
							<p>water resistance , and overall quality.</p>
						</div>
					</div>
					<div className="hover:bg-[#eb5939] transition duration-500 ease-in-out w-full border-y border-[#b7ab98] border-opacity-20 px-28 font-medium flex flex-row  justify-between py-2 text-5xl  hover:text-[#0D0D0D]">
						<p>final polishing and packaging</p>
						<div className="text-[#0D0D0D]  text-xl lowercase">
							<p>The finished watch is polished and packaged , ready for </p>
							<p>delivery</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full   pt-32 pb-40 text-[#b7ab98] bg-[url('/images/work-1600.jpg')] bg-no-repeat bg-cover relative custom-animation">
				<Experience />
				<p className="absolute  uppercase bottom-10 px-48">History</p>
			</div>
			<div className="custom-animation">
				<div className=" text-[#c9c1b5] flex flex-row gap-40 font-medium px-48 py-12 border-b border-[#b7ab98] border-opacity-20">
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
				<div>
					<img
						loading="lazy"
						src="/images/reel-poster.jpg"
						alt=" reel poster"
					/>
				</div>
			</div>
			<Clients />
			<div className="mx-44 text-color custom-animation">
				<div className="flex flex-col py-28">
					<div className="border-b py-5 border-color border-opacity-20 mb-20">
						<h1 className="text-xl  uppercase text-[rgb(183,171,152)] tracking-widest       ">
							WHAT THEY SAID
						</h1>
					</div>
					<div className="sticky top-[50%] right-0">
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
							<div className="text-7xl font-bold fade-on-scroll">
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
							<div className="text-7xl font-medium fade-on-scroll">
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
							<div className=" text-7xl font-medium">
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
			<div className="bg-[url('/images/banner-bottom-50.jpg')] flex flex-col items-center justify-center py-56  bg-cover text-color custom-animation">
				<Motto />
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
