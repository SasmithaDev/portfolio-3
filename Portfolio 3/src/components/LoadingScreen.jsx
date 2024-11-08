import { motion } from 'framer-motion';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-20 h-20 border-4 border-t-purple-500 border-r-pink-500 border-b-blue-500 border-l-green-500 rounded-full animate-spin"
      />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute mt-32 text-2xl font-bold text-white"
      >
        Loading...
      </motion.h2>
    </div>
  );
};