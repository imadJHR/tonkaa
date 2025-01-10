import { motion } from 'framer-motion';
import logo from "../assets/logo.png"

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#1a0f0f] flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        className="flex flex-col items-center"
      >
        <img src={logo} className='w-28 h-28' alt="" />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="h-1 bg-[#8B4513] mt-4 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default LoadingScreen;