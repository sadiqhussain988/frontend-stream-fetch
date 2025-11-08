import React from "react";
import { FaRecycle, FaUsersCog } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaRecycle />,
      title: "Indirect Spend Optimization",
      desc: "We perform deep analysis on existing bills and contracts to uncover overcharges and recover lost value.",
      bgImg: "https://images.unsplash.com/photo-1581091215367-8f7e3ff576a1?auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: <FaUsersCog />,
      title: "Unified Vendor Management",
      desc: "We negotiate smarter vendor terms and streamline all services under one management system.",
      bgImg: "https://images.unsplash.com/photo-1556742502-ec7c0e9f9b74?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-[#0A043C] via-[#0B1120] to-[#0A043C] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer transition-all duration-500"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
                style={{
                  backgroundImage: `url(${service.bgImg})`,
                  zIndex: 0,
                  opacity: 0,
                }}
              ></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A043C]/70 via-[#0B1120]/60 to-[#0A043C]/50 rounded-3xl z-10 group-hover:opacity-70 transition-opacity duration-700"></div>

              {/* Card Content */}
              <div className="relative z-20 p-10 flex flex-col items-center text-center">
                {/* Icon with Glow */}
                <div className="relative mb-6">
                  <div className="absolute w-24 h-24 bg-amber-400/20 rounded-full blur-3xl animate-pulse -z-10"></div>
                  <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-600 text-white text-4xl rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-amber-400 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="text-gray-300">{service.desc}</p>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-amber-400/40 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Background Glows */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-amber-400/20 blur-3xl animate-pulse rounded-full"></div>
      <div className="absolute bottom-10 left-20 w-52 h-52 bg-amber-400/10 blur-3xl animate-pulse rounded-full"></div>
    </section>
  );
}
