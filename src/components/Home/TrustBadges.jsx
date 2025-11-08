import React from "react";
import { FaBuilding, FaHeartbeat, FaIndustry, FaShoppingBag, FaMicrochip, FaUniversity } from "react-icons/fa";

export default function TrustBadges() {
  const sectors = [
    { name: "Global Enterprises", icon: <FaBuilding /> },
    { name: "Healthcare Organizations", icon: <FaHeartbeat /> },
    { name: "Manufacturing Leaders", icon: <FaIndustry /> },
    { name: "Retail Chains", icon: <FaShoppingBag /> },
    { name: "Technology Firms", icon: <FaMicrochip /> },
    { name: "Financial Institutions", icon: <FaUniversity /> },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#120a58] via-[#0B1120] to-[#0A043C] text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up" data-aos-duration="1000">
          <p className="text-amber-400 font-semibold uppercase tracking-wider mb-3">
            Our Reach
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Delivering Solutions Globally with Trust & Transparency
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            At Stream Fetch Plus, we partner with organizations across multiple sectors — helping businesses grow smarter, streamline operations, and achieve measurable results through innovative digital solutions.
          </p>
          <div className="mt-6 w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-center">
          {sectors.map((sector, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-5 rounded-2xl bg-[#0A043C]/50 shadow-lg shadow-amber-400/20 border border-amber-400/20 group-hover:border-amber-400/40 group-hover:shadow-amber-400/40 transition-all duration-300">
                <div className="text-4xl text-gray-200 group-hover:text-amber-400 transition-colors duration-300">
                  {sector.icon}
                </div>
              </div>
              <p className="text-gray-200 font-semibold text-sm lg:text-base text-center group-hover:text-amber-400 transition-colors duration-300">
                {sector.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Glow Effects */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-amber-400/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-52 h-52 bg-amber-400/10 blur-3xl rounded-full animate-pulse"></div>
    </section>
  );
}
