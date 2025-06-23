import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ProblemSolution() {
  const benefits = [
    "Launch offers that convert, within days",
    "Run ads that break even—then scale",
    "Automate your workflows so your business earns while you sleep"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Struggling to Grow & Scale?
            </span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-red-600 text-xl font-bold">!</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                "You're spending hours crafting content, tweaking funnels, and still not seeing results, right? You've tried every "hack"—but traffic is flat, conversions are weak, and your backend is a mess. 
                <span className="font-semibold text-red-600"> Worst part? You're exhausted.</span>
              </p>
            </div>
          </motion.div>

          {/* Solution Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What if you could:
              </h3>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <CheckCircle className="text-green-500 mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg font-medium">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl text-white text-center">
                <p className="text-lg font-semibold">
                  No fluff, no BS—just real systems to scale.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}