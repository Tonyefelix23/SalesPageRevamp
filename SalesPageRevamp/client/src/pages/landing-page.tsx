import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/hero-section";
import ProblemSolution from "@/components/problem-solution";
import HowItWorks from "@/components/how-it-works";
import ProductShowcase from "@/components/product-showcase";
import SocialProof from "@/components/social-proof";
import PricingSection from "@/components/pricing-section";
import FAQSection from "@/components/faq-section";
import FinalCTA from "@/components/final-cta";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <motion.header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isHeaderVisible ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-16">
            <Button 
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition duration-300"
              onClick={() => window.open('https://docs.google.com/document/d/13YOwmWKA8aWi8eWGFuPeYRQ05S-6EAZus0uF2Uh5tio/edit?usp=sharing', '_blank')}
            >
              JV Page
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem Solution */}
      <ProblemSolution />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Product Showcase */}
      <ProductShowcase />
      
      {/* Social Proof */}
      <SocialProof />
      
      {/* Pricing Section */}
      <div id="pricing">
        <PricingSection />
      </div>
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Final CTA */}
      <FinalCTA />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            <div className="flex justify-center space-x-8 mb-8">
              <a href="https://docs.google.com/document/d/13HYxX9dbqBitBjJ75-7IkYhdpVPqCVOBg92dcjS8qfg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="https://docs.google.com/document/d/13HYxX9dbqBitBjJ75-7IkYhdpVPqCVOBg92dcjS8qfg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a>
              <a href="https://docs.google.com/document/d/13HYxX9dbqBitBjJ75-7IkYhdpVPqCVOBg92dcjS8qfg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Earnings Disclaimer</a>
              <a href="https://docs.google.com/document/d/13HYxX9dbqBitBjJ75-7IkYhdpVPqCVOBg92dcjS8qfg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            
            <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-6">
              Disclaimer: WarriorPlus is used to help manage the sale of products on this site. While WarriorPlus helps facilitate the sale, all payments are made directly to the product vendor and NOT WarriorPlus. All product questions, support inquiries and/or refund requests must be sent to the vendor.
            </p>
            
            <p className="text-gray-500 text-xs">
              © 2024 SixFigure Bundle. All rights reserved. Individual results may vary.
            </p>
            
            {/* WarriorPlus Disclaimer */}
            <div className="mt-4">
              <script type="text/javascript" src="https://warriorplus.com/o2/disclaimer/j5k4k7" defer></script>
              <div className="wplus_spdisclaimer"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
