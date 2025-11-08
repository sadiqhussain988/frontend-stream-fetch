import React, { useState, useEffect } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "How secure is my insurance information?",
    answer:
      "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
  },
  {
    question: "How can I customize my insurance coverage?",
    answer:
      "Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.",
  },
  {
    question: "Is there a waiting period for insurance claims?",
    answer:
      "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.",
  },
  {
    question: "Do you offer 24/7 customer support?",
    answer:
      "Yes, our dedicated support team is available 24/7 to help with claims, policy questions, and any emergencies you may face.",
  },
  {
    question: "Can I manage my policy online?",
    answer:
      "Absolutely! You can easily manage your policy, file claims, and track updates through our secure online portal.",
  },
];

const FAQAbout = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 px-6 md:px-8 bg-gradient-to-b from-[#0A043C] via-[#0B0A3A] to-[#12007E] text-white relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Left Content */}
        <div
          className="flex flex-col basis-1/2"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <p className="inline-block font-semibold text-amber-400 mb-4 uppercase tracking-wide">
            Insurance FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-400 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-300 text-base leading-relaxed max-w-md">
            Find answers to common questions about our insurance policies and
            services. We’re committed to helping you make confident and informed
            decisions every step of the way.
          </p>
        </div>

        {/* Right Content - Accordion */}
        <ul
          className="basis-1/2 bg-[#0F0A5B]/40 rounded-2xl shadow-lg border border-[#1a1466] divide-y divide-[#1a1466]"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          {faqs.map((faq, index) => (
            <li key={index} className="transition-all">
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                className="flex justify-between items-center w-full py-5 px-6 text-left font-semibold text-lg text-white hover:text-amber-400 transition-colors duration-300"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <HiMinus className="w-5 h-5 text-amber-400" />
                ) : (
                  <HiPlus className="w-5 h-5 text-gray-400" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="pb-5 px-6 text-gray-300 text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQAbout;
