import { motion } from "framer-motion";
import paymentProofImage from "@assets/Payment proof_1750458208261.jpg";

export default function SocialProof() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Real People. Real Results.
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Payment Proof Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <img 
                src={paymentProofImage} 
                alt="Payment proof showing $31,832.88 total received and $6,977.18 in last 7 days" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>

          {/* Testimonial and Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 md:order-2 space-y-8"
          >
            {/* Quote */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary">
              <blockquote className="text-xl text-gray-700 italic mb-4">
                "Using these exact systems, I went from $0–$10K/mo in 8 weeks. No agency, no tech stress, no burnout."
              </blockquote>
              <cite className="text-primary font-semibold text-lg">
                — Felix Ifedayo
              </cite>
            </div>

            {/* Copy */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/10">
              <p className="text-lg text-gray-700 leading-relaxed">
                We didn't guess this stuff. These are the exact frameworks used to build 6-figure businesses—adapted for solo creators and small teams who want <span className="font-bold text-primary">MAXIMUM results</span> with <span className="font-bold text-secondary">MINIMUM effort</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}