import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserAlt, FaQuoteLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#0A043C] via-[#0B1120] to-[#0A043C] text-white overflow-hidden py-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="relative z-10 w-full lg:w-1/2 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-10">
          {/* Section Header */}
          <div className="mb-6" data-aos="fade-down">
            <div className="flex items-center gap-3 mb-3">
              <FaUserAlt className="text-amber-400 text-2xl" data-aos="zoom-in" />
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-wide"
                data-aos="fade-right"
              >
                About Me
              </h2>
            </div>
            <div className="h-1 w-16 bg-amber-500 rounded" data-aos="fade-left"></div>
          </div>

          {/* Description */}
          <p
            className="text-gray-300 text-base sm:text-lg leading-relaxed"
            data-aos="fade-up"
          >
            I am a dedicated creative professional with a passion for blending
            technology and design. My mission is to help businesses tell their
            stories through intuitive digital experiences that inspire and connect
            with people. I believe in crafting solutions that not only look good
            but work beautifully.
          </p>

          {/* Quote Block */}
          <div
            className="mt-8 p-5 border-l-4 border-amber-400 bg-[#1A1A3C]/70 rounded-md shadow-md"
            data-aos="zoom-in-up"
          >
            <FaQuoteLeft className="text-amber-400 text-xl mb-3" />
            <p className="text-gray-200 italic">
              “Design is not just what it looks like and feels like. Design is how it works.”
            </p>
          </div>

          {/* Button */}
          <div
            className="mt-8 flex items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
          <Link to="/">
            <button className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-[#0A043C] rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-400/40">
              Know More <FaArrowRight />
            </button>
          </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:right-0 lg:w-1/2" data-aos="fade-left">
          <img
            className="h-64 w-full object-cover object-top border-2 border-amber-500 sm:h-80 md:h-[450px] lg:h-full transition-transform duration-700 hover:scale-105 rounded-tl-[2rem] rounded-br-[2rem]"
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.1.0&auto=format&fit=crop&q=80"
            alt="About Me"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
