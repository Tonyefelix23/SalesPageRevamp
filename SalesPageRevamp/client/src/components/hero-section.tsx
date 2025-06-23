import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Play, CheckCircle, Shield, Users } from "lucide-react";

export default function HeroSection() {
  const handleGetAccess = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient pt-24 pb-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Business growth charts" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Attention Ambitious Entrepreneurs
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              What If You Could Launch Irresistible Offers, Convert Cold Traffic & <span className="text-accent">Automate with AI</span>—All Before Lunch?
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Your Six-Figure Stack gives you 3 proven playbooks—offers that convert, funnels that sell, and AI systems that scale—without fluff or tech headaches.
            </motion.p>
            
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition duration-300 pulse-glow"
                onClick={() => window.open('https://warriorplus.com/o2/buy/j5k4k7/xwj7vs/kt4ztq', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Get Instant Access - $49
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-6 text-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center">
                <CheckCircle className="text-success mr-2 h-5 w-5" />
                <span>Instant Download</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-success mr-2 h-5 w-5" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center">
                <Users className="text-success mr-2 h-5 w-5" />
                <span>10,000+ Students</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
