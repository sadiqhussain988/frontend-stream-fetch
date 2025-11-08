import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  const slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
      title: "Empowering Growth Through Innovation",
     
      description:
        "We’re a passionate team of thinkers, creators, and problem-solvers dedicated to helping businesses grow through innovative digital solutions and lasting partnerships.",
      ctaPrimary: "Know More",
      ctaSecondary: "Our Services",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1400&q=80",
      title: "Driving Innovation to Shape a Smarter Future",
      
      description:
        "At Codes Thinker, we believe in leveraging technology and creativity to craft intelligent digital experiences that inspire and connect people worldwide.",
      ctaPrimary: "Explore Vision",
      ctaSecondary: "Meet Our Team",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
      title: "Delivering Digital Excellence Globally",
      
      description:
        "Our skilled professionals deliver global digital solutions built on trust, transparency, and innovation — helping your business grow smarter every day.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Contact Us",
    },
  ];

  return (
    <section
      className="relative w-full h-screen pt-5 overflow-hidden text-white"
      aria-label="Hero Section"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop
        speed={1000}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A043C]/95 via-[#0B1120]/90 to-[#0A043C]/95" />

              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center pt-10 px-6">
                {/* Tag */}
                <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-400 px-5 py-2 rounded-full mb-4 text-sm font-semibold uppercase tracking-wider border border-amber-400/40 backdrop-blur-sm">
                  <FaLightbulb />
                  <span>Innovation Driven</span>
                </div>

                {/* Titles */}
                <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg text-amber-400">
                  {slide.title}
                </h1>
                

                {/* Description */}
                <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/about">
                    <button
                      className="group bg-amber-500 hover:bg-amber-400 px-5 py-2 rounded-full font-semibold text-[#0A043C] text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-400/40"
                      type="button"
                    >
                      {slide.ctaPrimary}
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                  <Link to="/services">
                    <button
                      className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-[#0A043C] px-5 py-2 rounded-full font-semibold text-lg transition-all duration-300"
                      type="button"
                    >
                      {slide.ctaSecondary}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-4 -translate-y-1/2 z-10 p-3 rounded-full bg-amber-400/20 hover:bg-amber-400/40 transition">
          <FaArrowRight className="rotate-180 text-amber-400 text-xl" />
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-4 -translate-y-1/2 z-10 p-3 rounded-full bg-amber-400/20 hover:bg-amber-400/40 transition">
          <FaArrowRight className="text-amber-400 text-xl" />
        </div>
      </Swiper>
    </section>
  );
}
