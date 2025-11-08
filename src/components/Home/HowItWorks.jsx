import React from "react";
import { FaSearch, FaCogs, FaChartLine } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch />,
      step: "01",
      title: "Comprehensive Assessment",
      desc: "We analyze your current digital systems, vendor contracts, and workflows to uncover optimization opportunities and growth potential.",
      features: ["Contract Review", "Process Analysis", "Benchmarking"],
    },
    {
      icon: <FaCogs />,
      step: "02",
      title: "Strategic Implementation",
      desc: "Our experts design and execute customized strategies leveraging technology and industry expertise for measurable results.",
      features: ["Vendor Optimization", "Workflow Automation", "Contract Restructuring"],
    },
    {
      icon: <FaChartLine />,
      step: "03",
      title: "Sustainable Results",
      desc: "We ensure lasting impact with continuous monitoring, performance tracking, and iterative improvements.",
      features: ["Performance Monitoring", "Regular Reviews", "Continuous Improvement"],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#0A043C] via-[#0B1120] to-[#0A043C] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block bg-amber-400/20 text-amber-400 px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400 mb-4 leading-tight">
            How Stream Fetch Plus Works
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our structured methodology ensures thorough analysis, precise execution, and lasting results for every client.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid lg:grid-cols-3 gap-10 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              className="bg-[#0A043C]/60 border border-amber-400/20 rounded-3xl p-8 shadow-lg hover:shadow-amber-400/40 transition-all duration-500 flex flex-col"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-600 text-white text-2xl rounded-2xl mb-6 shadow-lg">
                {step.icon}
              </div>

              {/* Step number */}
              <span className="text-amber-400 font-bold mb-2">{step.step}</span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-amber-400 mb-4">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-300 mb-4">{step.desc}</p>

              {/* Features */}
              <ul className="space-y-2">
                {step.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-gray-200">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Glow */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-amber-400/20 blur-3xl animate-pulse rounded-full"></div>
      <div className="absolute bottom-10 left-20 w-52 h-52 bg-amber-400/10 blur-3xl animate-pulse rounded-full"></div>
    </section>
  );
}
