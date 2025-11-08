import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import co4 from "../../assets/contacthero.jpg";

const ContactHero = () => {
  const [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    // Dynamically handle mobile viewport height (prevents cutoff on iOS/Android)
    const handleResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{ minHeight: vh }}
      className="relative flex justify-center items-center overflow-hidden bg-[#0A043C] text-white py-12 sm:py-16 px-4"
    >
      {/* Background Image */}
      <img
        src={co4}
        alt="Contact Us"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0A043C]/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center max-w-3xl w-full">
        {/* Tagline */}
        <p
          data-aos="fade-down"
          data-aos-delay="200"
          className="text-xs sm:text-sm bg-[#0c1c26]/80 rounded-full font-light uppercase inline-block px-4 py-2 mb-4 hover:bg-amber-600 transition-colors duration-300 tracking-widest"
        >
          Let’s Connect
        </p>

        {/* Heading */}
        <h1
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg tracking-wide px-2"
        >
          We’d Love to Hear From You
        </h1>

        {/* Subtext */}
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-3 sm:mt-4 text-gray-200 max-w-md sm:max-w-lg text-sm sm:text-base leading-relaxed px-4"
        >
          Whether you have a question, feedback, or a project idea — we’re here
          to help. Reach out anytime, and we’ll respond as soon as possible.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 sm:mt-10 w-full justify-center items-center px-2"
          data-aos="flip-up"
          data-aos-delay="800"
        >
          {/* Email Button */}
          <a
            href="mailto:usamaupwork0003@gmail.com"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/40 transform hover:scale-105 text-sm sm:text-base"
            data-aos="fade-right"
            data-aos-delay="900"
          >
            <HiMail className="text-lg sm:text-xl" />
            <span>Email</span>
          </a>

          {/* Phone Button */}
          <a
            href="tel:+923200639360"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-gray-800 to-gray-700 hover:from-amber-700 hover:to-amber-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-400/40 transform hover:scale-105 text-sm sm:text-base"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <HiPhone className="text-lg sm:text-xl text-amber-400" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Location */}
        <div
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-300 px-2"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <HiLocationMarker className="text-amber-400 text-xl sm:text-2xl animate-pulse" />
          <span className="text-xs sm:text-sm md:text-base text-center sm:text-left leading-snug">
            3 Marla Housing Scheme, 100 Fota Road, Islami Colony, Bahawalpur
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
