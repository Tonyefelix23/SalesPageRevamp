import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Crown, Shield, Users } from "lucide-react";

export default function FinalCTA() {

  return (
    <section className="gradient-bg py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Ready to Dominate?
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Click the button below, grab your instant access, and take your first step toward scaling smarter—not harder.
          </h2>
          <p className="text-xl text-blue-100 mb-6 leading-relaxed">
            You're 3 decisions away from your breakthrough:
          </p>
          <div className="flex flex-col items-center space-y-2 mb-8">
            <div className="flex items-center text-lg text-blue-100">
              <span className="mr-2">👉</span>
              <span>Irresistible Offers</span>
            </div>
            <div className="flex items-center text-lg text-blue-100">
              <span className="mr-2">👉</span>
              <span>Powerful Funnels</span>
            </div>
            <div className="flex items-center text-lg text-blue-100">
              <span className="mr-2">👉</span>
              <span>AI-Powered Automation</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-lg font-bold text-xl transition duration-300 pulse-glow"
              onClick={() => window.open('https://warriorplus.com/o2/buy/j5k4k7/xwj7vs/kt4ztq', '_blank')}
            >
              <Download className="mr-2 h-6 w-6" />
              Get Complete Bundle - $49
            </Button>
            <Button 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 rounded-lg font-bold text-xl transition duration-300"
              onClick={() => window.open('https://warriorplus.com/o2/buy/j5k4k7/s41k9s/s9dfsb', '_blank')}
            >
              <Crown className="mr-2 h-6 w-6" />
              Get PLR Rights - $99
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center items-center space-x-8 text-blue-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center">
            <Shield className="text-success mr-2 h-5 w-5" />
            <span>100% Satisfaction Guarantee</span>
          </div>
          <div className="flex items-center">
            <Download className="text-success mr-2 h-5 w-5" />
            <span>Instant Access</span>
          </div>
          <div className="flex items-center">
            <Users className="text-success mr-2 h-5 w-5" />
            <span>10,000+ Success Stories</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
