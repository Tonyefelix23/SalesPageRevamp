import { motion } from "framer-motion";
import { Target, Zap, Bot } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Target,
      number: "01",
      title: "Craft Your Irresistible Offer",
      description: "Nail the core problem and create an offer that your customer has to buy. Templates inside.",
      accent: "primary"
    },
    {
      icon: Zap,
      number: "02", 
      title: "Plug-and-Play Funnel & Ads",
      description: "Use proven frameworks to get traffic that buys, converting first-time visitors at 3× the rate.",
      accent: "secondary"
    },
    {
      icon: Bot,
      number: "03",
      title: "Automate with AI",
      description: "Set up workflows — lead gen, email, delivery — that run on autopilot. Literally, your business works even when you don't.",
      accent: "success"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              3 Simple Steps to Scale
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These steps correspond exactly to the three books—no overlap, no confusion. Just a single clean system that works.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-success transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-full">
                    {/* Step Number */}
                    <div className="flex items-center justify-center mb-6">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ${
                        step.accent === 'primary' ? 'bg-gradient-to-br from-primary to-primary/80' :
                        step.accent === 'secondary' ? 'bg-gradient-to-br from-secondary to-secondary/80' :
                        'bg-gradient-to-br from-success to-success/80'
                      }`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        step.accent === 'primary' ? 'bg-primary/10' :
                        step.accent === 'secondary' ? 'bg-secondary/10' :
                        'bg-success/10'
                      }`}>
                        <IconComponent className={`h-6 w-6 ${
                          step.accent === 'primary' ? 'text-primary' :
                          step.accent === 'secondary' ? 'text-secondary' :
                          'text-success'
                        }`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full ${
                      step.accent === 'primary' ? 'bg-primary' :
                      step.accent === 'secondary' ? 'bg-secondary' :
                      'bg-success'
                    }`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">
              💥 Ready to Build Offers That Sell, Funnels That Convert, and Automations That Scale?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Don't waste another week guessing. This 3-in-1 stack gives you the blueprint to grow smarter — for the price of lunch.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              👉 Yes! I'm Ready to Dominate
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}