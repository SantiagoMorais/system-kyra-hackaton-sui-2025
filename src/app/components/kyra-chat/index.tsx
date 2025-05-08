"use client";
import { motion } from "framer-motion";

import { kyraChatCards } from "@/utils/kyra-chat-cards";

import { TextArea } from "./text-area";

export const KyraChat = () => (
  <section className="flex w-full flex-1 items-center justify-center p-8">
    <article className="flex max-w-(--breakpoint-lg) flex-col">
      <motion.h2
        key="app-main-title"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-redonda w-full bg-linear-to-r from-orange-600 to-orange-950 bg-clip-text text-3xl leading-tight text-transparent lg:text-5xl"
      >
        Hi there, I{"'"}m Kyra <br />
        What would you like to know?
      </motion.h2>
      <motion.h3
        key="app-subtitle"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="font-redonda text-grey mb-15 w-full text-xl"
      >
        Use one of the most common prompts below or use or own to begin
      </motion.h3>
      <ul className="mb-5 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kyraChatCards.map(({ text }, index) => (
          <motion.li
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.2 + index * 0.2 }}
            key={`kyraChatCard-${index}`}
            className="border-grey text-secondary flex-1 border px-2.5 py-4 pb-6 lg:pb-10"
          >
            <p>{text}</p>
          </motion.li>
        ))}
      </ul>
      <TextArea />
    </article>
  </section>
);
