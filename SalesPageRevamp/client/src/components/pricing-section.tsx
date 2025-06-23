import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Download, Crown, Shield, CreditCard, Medal } from "lucide-react";

const packages = [
  {
    title: "Complete Bundle",
    price: "$49",
    originalPrice: "$197",
    discount: "Save 75% Today!",
    features: [
      "All 3 Premium Ebooks (PDF Format)",
      "Marketing Strategy Template",
      "AI Prompt Library (500+ Prompts)",
      "Headline Cheat Sheet",
      "Instant Download Access",
      "100% Satisfaction Guarantee"
    ],
    buttonText: "Get Instant Access - $49",
    buttonIcon: Download,
    popular: false
  },
  {
    title: "PLR White Label Rights",
    price: "$99",
    originalPrice: "$497",
    discount: "Save 80% + Unlimited Resell Rights!",
    features: [
      "Everything in Complete Bundle",
      "Full Resell Rights (Keep 100% Profits)",
      "Rebrand as Your Own Products",
      "Ready-Made Sales Funnel",
      "Promotional Assets & Graphics",
      "Zero Restrictions License"
    ],
    buttonText: "Get PLR Rights - $99",
    buttonIcon: Crown,
    popular: true
  }
];

const trustSignals = [
  { icon: Shield, label: "SSL Secured" },
  { icon: CreditCard, label: "Secure Payment" },
  { icon: Download, label: "Instant Access" },
  { icon: Medal, label: "100% Satisfaction Guarantee" }
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            You're 3 Clicks Away From a Smarter, More Scalable Business.
          </h2>
          <p className="text-xl text-gray-600">Offers. Funnels. Automation. No fluff. No guesswork. Just plug-and-play frameworks you can use immediately.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => {
            const ButtonIcon = pkg.buttonIcon;
            return (
              <motion.div
                key={pkg.title}
                className={`rounded-2xl p-8 shadow-xl relative ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white transform scale-105' 
                    : 'bg-white border-2 border-gray-200'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full text-sm font-bold">
                    BEST VALUE
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.title}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className={`line-through text-xl ml-2 ${pkg.popular ? 'text-purple-200' : 'text-gray-500'}`}>
                      {pkg.originalPrice}
                    </span>
                  </div>
                  <div className="bg-accent text-white px-4 py-2 rounded-full text-sm font-bold inline-block">
                    {pkg.discount}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`mt-1 mr-3 h-5 w-5 flex-shrink-0 ${
                        pkg.popular ? 'text-green-400' : 'text-success'
                      }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-4 rounded-lg font-bold text-lg transition duration-300 ${
                    pkg.popular 
                      ? 'bg-accent hover:bg-accent/90 text-white' 
                      : 'bg-primary hover:bg-primary/90 text-white pulse-glow'
                  }`}
                  onClick={() => {
                    if (pkg.title === "Complete Bundle") {
                      window.open('https://warriorplus.com/o2/buy/j5k4k7/xwj7vs/kt4ztq', '_blank');
                    } else if (pkg.title === "PLR White Label Rights") {
                      window.open('https://warriorplus.com/o2/buy/j5k4k7/s41k9s/s9dfsb', '_blank');
                    }
                  }}
                >
                  <ButtonIcon className="mr-2 h-5 w-5" />
                  {pkg.buttonText}
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Signals */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {trustSignals.map((signal, index) => {
              const IconComponent = signal.icon;
              return (
                <motion.div 
                  key={signal.label}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <IconComponent className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm text-gray-600">{signal.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
