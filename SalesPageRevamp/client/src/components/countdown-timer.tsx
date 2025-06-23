import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer when it reaches zero
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section 
      className="bg-destructive text-white py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-8">
          <div className="text-center">
            <div className="text-lg font-semibold">🔥 LIMITED TIME OFFER ENDS IN:</div>
          </div>
          <div className="flex space-x-4">
            <div className="text-center">
              <motion.div 
                className="countdown-digit rounded-lg px-3 py-2 font-bold text-2xl"
                key={timeLeft.hours}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {timeLeft.hours.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-xs">HOURS</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="countdown-digit rounded-lg px-3 py-2 font-bold text-2xl"
                key={timeLeft.minutes}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {timeLeft.minutes.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-xs">MINUTES</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="countdown-digit rounded-lg px-3 py-2 font-bold text-2xl"
                key={timeLeft.seconds}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {timeLeft.seconds.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-xs">SECONDS</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
