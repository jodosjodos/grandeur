import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger);

const AnimatedParagraphs = () => {
  useEffect(() => {
    // Animations using GSAP
    gsap.to(".text p", {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".text",
        markers: true,
        scrub: 1,
        start: "top center",
        end: "bottom center"
      }
    });
  }, []); // Empty dependency array ensures the effect runs only once after initial render
  return (
    <div className="text-center">
      <div className="text p-8 text-6xl text-white">
        <p className="my-4">Animated Paragraph 1</p>
        <p className="my-4">Animated Paragraph 2</p>
        <p className="my-4">Animated Paragraph 3</p>
      </div>
    </div>
  );
};

export default AnimatedParagraphs;
