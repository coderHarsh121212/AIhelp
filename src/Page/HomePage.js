import React from "react";
import BenefitsSection from "../components/BenefitSection";
import CallToActionSection from "../components/CalltoSection";
import ClientLogosSection from "../components/ClientSection";
import FAQsSection from "../components/FaqSection";
import FeaturesSection from "../components/FeatureSection";
import AISection from "../components/HeroSection";
import SolutionsSection from "../components/SolutionsSection";
import TestimonialsSection from "../components/Testimonals";

const HomePage = () => {
  return (
    <div className="w-full h-fit">
      <AISection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <SolutionsSection />
      <ClientLogosSection />
      <CallToActionSection />
      <FAQsSection />
    </div>
  );
};

export default HomePage;
