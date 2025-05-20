"use client";
import { motion } from "framer-motion";

export const Hero = () => (
  <section className="w-screen max-w-(--breakpoint-2xl) px-4">
    <div className="bg-dark-grey flex max-h-167 w-full flex-col items-center justify-center gap-6 p-4 py-10 md:h-[50dvw] md:gap-8 md:py-8">
      <motion.h2
        key="hero-title"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-redonda w-full max-w-220 bg-linear-to-r from-orange-600 to-orange-800 bg-clip-text text-center text-3xl leading-tight text-transparent md:text-5xl"
      >
        Your AI Investment Advisor for Decentralized Finance
      </motion.h2>
      <motion.h3
        key="hero-subtitle"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="font-redonda text-secondary w-full max-w-170 text-center text-xl md:text-2xl"
      >
        Discover the power of building, executing, and monitoring DeFi
        strategies with just a conversation.{" "}
      </motion.h3>
      <motion.button
        key="hero-button"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="rounded-full bg-orange-600 px-8 py-2 text-lg text-white uppercase md:px-10 md:py-3 md:text-xl"
      >
        Get Started
      </motion.button>
    </div>
  </section>
);
