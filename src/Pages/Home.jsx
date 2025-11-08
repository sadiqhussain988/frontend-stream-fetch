import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Home/Hero";
import TrustBadges from "../components/Home/TrustBadges";
import ResultsMetrics from "../components/Home/ResultsMetrics";
import ValueProposition from "../components/Home/ValueProposition";
import HowItWorks from "../components/Home/HowItWorks";
import Serviceshome from "../components/Home/Serviceshome";
import Services from "../Pages/Services";




export default function Home() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      offset: 100 
    });
  }, []);

  return (
    <div className="bg-white overflow-x-hidden text-gray-900">
      <Hero/>
      <TrustBadges />
      <ResultsMetrics />
      <ValueProposition />
      <HowItWorks />
      <Serviceshome />
     <Services/>
      
    </div>
  );
}