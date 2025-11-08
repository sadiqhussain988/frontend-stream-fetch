import React from "react";
import CountUp from "react-countup";
import { FaChartLine, FaDollarSign, FaUsers, FaAward } from "react-icons/fa";

export default function ResultsMetrics() {
  const metrics = [
    {
      icon: <FaChartLine />,
      value: 40,
      prefix: "",
      suffix: "%",
      label: "Average Efficiency Gain",
      description: "across all projects",
    },
    {
      icon: <FaDollarSign />,
      value: 100,
      prefix: "$",
      suffix: "M+",
      label: "Business Value Delivered",
      description: "globally to clients",
    },
    {
      icon: <FaUsers />,
      value: 98,
      prefix: "",
      suffix: "%",
      label: "Client Satisfaction",
      description: "year over year",
    },
    {
      icon: <FaAward />,
      value: 100,
      prefix: "",
      suffix: "%",
      label: "Performance-Based",
      description: "we succeed when you succeed",
    },
  ];

  return (
    <section className="relative py-8 bg-gradient-to-b from-[#140b5e] via-[#121c37] to-[#0A043C] text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <p className="text-amber-400 font-semibold uppercase tracking-widest mb-3">
            Our Impact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400 leading-tight mb-4">
            Proven Results, Guaranteed Performance
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            At Stream Fetch Plus, we drive measurable outcomes for businesses worldwide through innovative solutions and a performance-based approach.
          </p>
          <div className="mt-6 w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {metrics.map((metric, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="relative group bg-[#0A043C]/50 backdrop-blur-xl rounded-2xl shadow-lg border border-amber-400/20 hover:shadow-amber-400/40 hover:border-amber-400/40 transition-all duration-500 p-10 text-center overflow-hidden"
            >
              {/* Icon */}
              <div className="relative z-10 flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-600 text-white text-3xl shadow-lg shadow-amber-400/30 transform group-hover:scale-110 transition-transform duration-500">
                  {metric.icon}
                </div>
              </div>

              {/* Animated Counter */}
              <div className="relative z-10 text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                <CountUp
                  start={0}
                  end={metric.value}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </div>

              {/* Label */}
              <div className="relative z-10 text-lg font-semibold text-amber-400 mb-1">
                {metric.label}
              </div>

              {/* Description */}
              <div className="relative z-10 text-gray-300 text-sm">
                {metric.description}
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Accent Glows */}
      <div className="absolute top-20 left-10 w-56 h-56 bg-amber-400/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-16 w-64 h-64 bg-amber-400/10 blur-3xl rounded-full animate-pulse"></div>
    </section>
  );
}
