import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiUsers, HiLightBulb, HiGlobeAlt } from "react-icons/hi";
import co4 from "../../assets/abouthero.avif"; // ✅ Correct path

const AboutHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center overflow-hidden bg-[#0A043C] text-white min-h-screen sm:min-h-[90vh] py-20 sm:py-24">
      {/* Background Image */}
      <img
        src={co4}
        alt="About Us"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0A043C]/80"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Tagline */}
        <p
          data-aos="fade-down"
          data-aos-delay="200"
          className="hidden md:flex text-xs sm:text-sm bg-[#0c1c26]/80 rounded-full font-light uppercase  px-4 py-2 mb-4 hover:bg-amber-600 transition-colors duration-300 tracking-widest"
        >
          Who We Are
        </p>

        {/* Heading */}
        <h1
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg tracking-wide pt-10 md:pt-0"
        >
          Empowering Growth Through Innovation
        </h1>

        {/* Subtext */}
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-4 text-gray-200 max-w-md sm:max-w-xl text-sm sm:text-base leading-relaxed"
        >
          We are a passionate team of thinkers, creators, and problem-solvers
          dedicated to helping businesses grow through innovative digital
          solutions and lasting partnerships.
        </p>

        {/* Icons Row */}
        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mt-10 sm:mt-12 w-full"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          {/* Team */}
          <div
            className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 bg-[#0A043C]/70 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-amber-400/30 w-[90%] sm:w-auto"
            data-aos="flip-left"
            data-aos-delay="900"
          >
            <HiUsers className="text-3xl sm:text-4xl text-amber-400 mb-2" />
            <span className="font-semibold text-white text-base sm:text-lg">
              Our Team
            </span>
            <p className="text-xs sm:text-sm text-gray-300 max-w-[230px]">
              Skilled professionals dedicated to delivering excellence.
            </p>
          </div>

          {/* Vision */}
          <div
            className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 bg-[#0A043C]/70 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-amber-400/30 w-[90%] sm:w-auto"
            data-aos="flip-up"
            data-aos-delay="1000"
          >
            <HiLightBulb className="text-3xl sm:text-4xl text-amber-400 mb-2" />
            <span className="font-semibold text-white text-base sm:text-lg">
              Our Vision
            </span>
            <p className="text-xs sm:text-sm text-gray-300 max-w-[230px]">
              Driving innovation to shape a smarter digital future.
            </p>
          </div>

          {/* Reach */}
          <div
            className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 bg-[#0A043C]/70 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-amber-400/30 w-[90%] sm:w-auto"
            data-aos="flip-right"
            data-aos-delay="1100"
          >
            <HiGlobeAlt className="text-3xl sm:text-4xl text-amber-400 mb-2" />
            <span className="font-semibold text-white text-base sm:text-lg">
              Our Reach
            </span>
            <p className="text-xs sm:text-sm text-gray-300 max-w-[230px]">
              Delivering services globally with trust and transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
