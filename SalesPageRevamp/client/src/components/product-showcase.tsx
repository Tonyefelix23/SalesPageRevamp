import { motion } from "framer-motion";
import { TrendingUp, Bot, Sparkles, Check } from "lucide-react";
import tacticalMarketerImage from "@assets/Leonardo_Phoenix_10_Create_an_eBook_cover_titled_The_Tactical_0_1750455618823.jpg";
import aiAutopilotImage from "@assets/an-ebook-cover-in-a-modern-professional-_hq2T62MRRRWjTEUMhYLNEQ_5ybf8v85S92lRt0Jr-Iqug_1750456023395.jpeg";
import offerAlchemyImage from "@assets/a-product-focused-ebook-cover-advertisem_PbtlzNSiQCSo5wqEo3w78w_ah-jjFhvTK2PrYnMnojAOQ_1750456275272.jpeg";

const products = [
  {
    icon: TrendingUp,
    title: "The Tactical Marketer",
    subtitle: "Master data-driven marketing strategies that deliver 300% ROI growth",
    image: tacticalMarketerImage,
    features: [
      "Proven strategies that boost ROI by 300%",
      "Data-driven decision making frameworks",
      "Real case studies from million-dollar campaigns",
      "FREE marketing strategy template"
    ],
    originalPrice: "$47",
    price: "$97",
    accent: "primary"
  },
  {
    icon: Bot,
    title: "AI on Autopilot",
    subtitle: "Build smart workflows that scale your business while you sleep",
    image: aiAutopilotImage,
    features: [
      "AI workflows that save 20+ hours per week",
      "Custom automation for any business model",
      "Lead generation systems that never sleep",
      "FREE AI prompt library (500+ prompts)"
    ],
    originalPrice: "$67",
    price: "$97",
    accent: "secondary",
    popular: true
  },
  {
    icon: Sparkles,
    title: "The Offer Alchemy",
    subtitle: "Craft irresistible offers that convert prospects into raving fans",
    image: offerAlchemyImage,
    features: [
      "Psychology-backed persuasion techniques",
      "10x ROI offer creation framework",
      "Proven headline formulas that grab attention",
      "FREE headline cheat sheet library"
    ],
    originalPrice: "$37",
    price: "$97",
    accent: "success"
  }
];

export default function ProductShowcase() {
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
            What's Inside Your <span className="text-gradient">Six-Figure Bundle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three comprehensive ebooks designed to transform your business from struggling startup to profitable powerhouse.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.title}
                className={`card-gradient rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition duration-300 relative ${
                  product.popular ? 'transform scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <img 
                    src={product.image} 
                    alt={`${product.title} preview`} 
                    className="rounded-xl w-full h-auto object-contain mb-4" 
                  />
                  <div className={`bg-${product.accent} text-white p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{product.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{product.subtitle}</p>
                
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-success mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <div className="text-gray-400 line-through text-lg">{product.originalPrice}</div>
                  <div className={`text-2xl font-bold text-${product.accent}`}>{product.price}</div>
                  <div className="text-sm text-gray-500">in bundle</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
