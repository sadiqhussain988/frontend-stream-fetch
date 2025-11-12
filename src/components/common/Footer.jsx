import { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import "aos/dist/aos.css";
import logo from "../../assets/sfplogo.png"
const Footer = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 800,
          once: true,
          offset: 100,
        });
      });
    }
  }, []);

  const services = [
    "Business Intelligence",
    "Virtual Workstation",
    "Network Services",
    "Data Science",
    "IT Strategy",
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Latest Projects", href: "/projects" },
    { name: "IT Solutions", href: "/services" },
    { name: "Team Member", href: "/team" },
    { name: "Contact Us", href: "/contact" },
  ];

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-white text-base" />,
      text: "+92 320 0639360",
    },
    {
      icon: <FiMail className="text-white text-base" />,
      text: "usamaupwork0003@gmail.com",
    },
    {
      icon: <GoLocation className="text-white text-base" />,
      text: "3 Marla Housing Scheme, 100 Fota Road, Islami Colony, Bahawalpur",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61565400934738",
      icon: <FaFacebookF />,
      color: "hover:bg-[#1877F2]",
    },
    {
      href: "https://twitter.com/",
      icon: <FaTwitter />,
      color: "hover:bg-[#1DA1F2]",
    },
    {
      href: "https://www.instagram.com/codesthinker_offical",
      icon: <FaInstagram />,
      color:
        "hover:bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    },
    
  ];

  return (
    <footer className="bg-[#060145] text-white pt-16 pb-8 px-6 md:px-20 w-full relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"></div>

      <div className="relative flex flex-wrap justify-between gap-y-12">
        {/* Company Info */}
        <div
          className="w-full sm:w-[48%] lg:w-[30%]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex items-center gap-2 mb-4">
            <img
              alt="Codes Thinker Logo"
              className="h-30 w-auto hover:scale-105 transition-transform duration-300"
              src={logo}
            />
          </div>

          <p className="text-sm text-gray-300 w-full mb-6 leading-relaxed">
            We deliver innovative digital solutions crafted by a passionate team
            of developers and designers to help your business grow efficiently.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="flip-left"
                data-aos-delay={700 + index * 100}
                className={`relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#0f00aa] text-amber-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
                aria-label="Social Link"
              >
                <div className="absolute inset-0 bg-[#0a0366] opacity-70 blur-md rounded-full transition-all duration-300"></div>
                <div className="relative z-10 text-white text-lg">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Links Sections */}
        <div className="flex flex-wrap justify-between w-full sm:w-[48%] lg:w-[68%] gap-y-10">
          {/* Services */}
          <div
            className="w-full sm:w-[48%] lg:w-[31%]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="font-bold text-lg mb-4 relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="/services"
                    className="relative inline-block hover:translate-x-1 transition-transform duration-300 group"
                  >
                    {service}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div
            className="w-full sm:w-[48%] lg:w-[31%]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="font-bold text-lg mb-4 relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="relative inline-block hover:translate-x-1 transition-transform duration-300 group"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className="w-full lg:w-[35%]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="font-bold text-lg mb-4 relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              {contactInfo.map((contact, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 py-1 hover:translate-x-1 transition-transform duration-300"
                >
                  <div className="bg-[#0d0769] p-2 rounded-full shadow-md flex-shrink-0">
                    {contact.icon}
                  </div>
                  <span className="font-medium leading-relaxed">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Stream Fetch</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
