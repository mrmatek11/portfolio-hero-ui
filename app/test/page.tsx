// /test/page.js

"use client"; // jeśli używasz funkcji client-side, np. framer-motion

import { motion } from 'framer-motion';

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1>Witaj w Framer Motion!</h1>
    </motion.div>
  );
}
