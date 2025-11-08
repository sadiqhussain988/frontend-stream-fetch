import React from "react";
import {
  FaShieldAlt,
  FaSearchDollar,
  FaHandshake,
  FaChartBar,
} from "react-icons/fa";

export default function ValueProposition() {
  const features = [
    {
      icon: <FaSearchDollar />,
      title: "Comprehensive Spend Analysis",
      description:
        "Advanced analytics and industry expertise combine to identify overlooked cost-saving opportunities in your vendor relationships.",
    },
    {
      icon: <FaHandshake />,
      title: "Strategic Vendor Negotiation",
      description:
        "Leverage our established relationships and negotiation expertise to secure optimal terms and pricing structures.",
    },
    {
      icon: <FaChartBar />,
      title: "Continuous Optimization",
      description:
        "Ongoing monitoring and adjustment ensure your savings are sustained and new opportunities are captured over time.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Zero-Risk Engagement",
      description:
        "Our compensation is directly tied to delivered savings, ensuring complete alignment with your financial objectives.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A043C] via-[#0B1120] to-[#0A043C] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered Header */}
        <div
          data-aos="fade-up"
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-block bg-amber-400/20 text-amber-400 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            Why Choose Codes Thinker
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Strategic Cost Optimization for Modern Enterprises
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Efficient cost management is more than reduction — it’s strategic optimization.
            We transform your indirect spend into measurable value and competitive advantage.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features */}
          <div data-aos="fade-right" className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center text-white text-lg shadow-md group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-400 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image with Shine & Floating Stats */}
          <div
            data-aos="fade-left"
            className="relative group transition-all duration-700"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
               <img
                  src="https://jegtower.com/wp-content/uploads/2022/08/attractive_young_female_creative_designer_working_2021_12_27_21-scaled.jpg"
                  alt="Strategic Cost Analysis"
                  className="w-full h-auto transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
              {/* Shine Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-in-out]"></div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Hover Title */}
              <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                <h3 className="text-3xl lg:text-4xl font-bold text-amber-400 drop-shadow-lg tracking-wide">
                  Optimizing Value Through Insight
                </h3>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#0B1120]/90 rounded-xl shadow-2xl px-6 py-3 border border-amber-400/30 group-hover:shadow-amber-400/50 transition-all duration-700">
              <div className="text-2xl font-bold text-amber-400 mb-1">$2.8M</div>
              <div className="text-gray-300 text-sm">Average Annual Savings</div>
              <div className="text-amber-400 text-xs font-semibold mt-1">
                Per Client Engagement
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Glows */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-amber-400/20 blur-3xl animate-pulse rounded-full"></div>
      <div className="absolute bottom-10 left-20 w-52 h-52 bg-amber-400/10 blur-3xl animate-pulse rounded-full"></div>

      {/* Shine Animation Keyframes */}
      <style jsx>{`
        @keyframes shine {
          0% {
            left: -75%;
          }
          100% {
            left: 125%;
          }
        }
      `}</style>
    </section>
  );
}
