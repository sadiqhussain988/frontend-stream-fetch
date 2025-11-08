import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactHero from "../components/Contact/ContactHero";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const socialLinks = [
    { icon: <FaFacebookF />, link: "#", color: "hover:bg-[#1877F2]" },
    { icon: <FaInstagram />, link: "#", color: "hover:bg-[#E1306C]" },
    { icon: <FaTwitter />, link: "#", color: "hover:bg-[#1DA1F2]" },
    
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields!", {
        position: "top-right",
        theme: "colored",
      });
      return;
    }

    toast.success("Message sent successfully! 🎉", {
      position: "top-right",
      theme: "colored",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <ContactHero/>
    <section
      id="contact"
      className="py-16 md:py-25 bg-gradient-to-br from-[#0A043C] to-[#12007E] text-white overflow-hidden relative"
    >
      {/* Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{
          background: "#0A043C",
          color: "#FFD166",
          borderRadius: "12px",
          border: "1px solid #FFD166",
          boxShadow: "0 4px 20px rgba(245,158,11,0.4)",
        }}
      />

      <div className="container mx-auto px-3 md:px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Info */}
          <div>
            <h2
              data-aos="fade-down"
              data-aos-delay="100"
              className="text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent"
            >
              Get In <span className="text-amber-400">Touch</span>
            </h2>

            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-lg text-gray-300 mb-10 leading-relaxed"
            >
              Have questions or want to work together? We'd love to hear from
              you.
            </p>

            <div className="space-y-6">
              {/* Location */}
              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="flex items-start p-4 rounded-xl bg-[#12007E]/30 hover:bg-[#12007E]/50 transition-all duration-300 hover:scale-105"
              >
                <HiLocationMarker className="text-amber-400 mt-1 mr-4 text-2xl" />
                <div>
                  <h3 className="font-bold text-lg text-amber-300">Office</h3>
                  <p className="text-gray-300">
                    Bartle House, 9 Oxford Court, Manchester M23WQ, UK
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                data-aos="zoom-in"
                data-aos-delay="400"
                className="flex items-start p-4 rounded-xl bg-[#12007E]/30 hover:bg-[#12007E]/50 transition-all duration-300 hover:scale-105"
              >
                <HiPhone className="text-amber-400 mt-1 mr-4 text-2xl" />
                <div>
                  <h3 className="font-bold text-lg text-amber-300">Phone</h3>
                  <p className="text-gray-300">+44 7470 103120</p>
                </div>
              </div>

              {/* Email */}
              <div
                data-aos="zoom-in"
                data-aos-delay="500"
                className="flex items-start p-4 rounded-xl bg-[#12007E]/30 hover:bg-[#12007E]/50 transition-all duration-300 hover:scale-105"
              >
                <HiMail className="text-amber-400 mt-1 mr-4 text-2xl" />
                <div>
                  <h3 className="font-bold text-lg text-amber-300">Email</h3>
                  <p className="text-gray-300">info@codesthinker.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="mt-10 flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  data-aos="flip-left"
                  data-aos-delay={700 + index * 100}
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-[#0f00aa] text-amber-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
                  aria-label="Social Link"
                  style={{
                    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  }}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="bg-gradient-to-br from-[#0A043C]/90 to-[#0f00aa]/90 p-4 md:p-8 rounded-2xl shadow-2xl border border-[#1e1b7b]"
          >
            <h3
              data-aos="fade-down"
              data-aos-delay="400"
              className="text-2xl font-bold mb-6 text-amber-300"
            >
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-[#12007E]/30 border border-[#1e1b7b] focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-[#12007E]/30 border border-[#1e1b7b] focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg bg-[#12007E]/30 border border-[#1e1b7b] focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{
                  boxShadow: "0 10px 25px rgba(245, 158, 11, 0.3)",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
