"use client";

import { useEffect } from "react";
import { faqData } from "../data/faqData";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@/components/animate-ui/primitives/headless/Accordion";
import { motion } from "motion/react";

export default function FAQ({ faq }: { faq: any[] }) {
  useEffect(() => {
    console.log(faq);
  }, []);
  return (
    <section className="p-5 md:p-10 xl:p-15 2xl:p-20 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h4 className="fade-in-delayed">Before You Pack Your Bags...</h4>
        <p className="text-justify my-2 xl:my-4">
          Find everything you need to know before you start your next adventure.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <Accordion>
          {faq.map((item, index) => (
            <AccordionItem key={item?.fields?.question}>
              <AccordionButton>
                {index + 1}. {item?.fields?.question}
              </AccordionButton>
              <AccordionPanel>
                <div className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-700 whitespace-pre-line">
                  {item?.fields?.answer}
                </div>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
