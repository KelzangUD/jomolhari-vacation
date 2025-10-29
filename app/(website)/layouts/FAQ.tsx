"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What languages are spoken in Bhutan?",
    answer:
      "There are 19 languages spoken in Bhutan, but the national language is Dzongkha. English is used throughout Bhutan’s education system, so it is widely used and understood.",
  },
  {
    question:
      "What is the weather like in Bhutan and when is the best time to visit?",
    answer:
      "Bhutan is a year-round destination. There are four seasons: summer (June to August), autumn (September to November), winter (December to February) and spring (March to May). But because of the range of altitudes in the country, and the influence of the north Indian monsoons, the climate is incredibly varied. In the south, the humid, subtropical climate is fairly consistent year-round, with temperatures between 15oC and 30oC. Central Bhutan, with its temperate forests, has a more seasonal climate, with warm summers and cool, dry winters. The northern regions are much colder during winter. Because of the high altitude, mountain peaks are snowy year-round and the lower reaches remain cool in summer. In summer, the Indian monsoon season runs from late June or July to late September, mostly affecting the southern regions. Most farming activities take place in the summer, when crops thrive in verdant landscapes. Autumn, from late September or early October to late November, follows the rainy season. It is characterised by bright, sunny days and some early snowfall at higher elevations. It’s the season of feasts and festivals as farmers reap the fruits of their work. From late November until March, the crisp, clear and sunny winter sets in, with frost throughout much of the country and snowfall common above elevations of 3,000 metres. The winter northeast monsoon brings gale-force winds at the highest altitudes through high mountain passes, giving Bhutan the name Drukyul, which means Land of the Thunder Dragon in Dzongkha (Bhutan’s national language). Bhutan’s generally dry spring starts in early March and lasts until mid-April. It is a botanist’s delight, with nature in full bloom. Summer weather commences in mid-April with occasional showers and continues to late June",
  },
  {
    question: "What currency is used in Bhutan?",
    answer:
      "Bhutan’s currency is called ngultrum. It’s 1:1 with Indian rupees.",
  },
  {
    question: "Which power plug is standard in Bhutan?",
    answer:
      "Three different electrical plugs are used throughout Bhutan: the British plug (three square pins, compatible with type G sockets), the European plug (two round pins, compatible with type C socket) and the Indian plug (three thick round pins, compatible with type D sockets). It’s a good idea to bring adaptors for all three.",
  },
];

export default function FAQ() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        titleRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            toggleActions: "play reverse play reverse",
          },
        }
      );
      gsap.fromTo(
        subtitleRef.current,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            toggleActions: "play reverse play reverse",
          },
        }
      );
      gsap.fromTo(
        cardRef.current,
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );
  return (
    <div ref={sectionRef} className="p-5 md:p-10 xl:p-15 2xl:p-20 bg-white">
      <h4 className="fade-in-delayed">Before You Pack Your Bags...</h4>
      <p ref={subtitleRef} className="text-justify my-2 xl:my-4">
        Find everything you need to know before you start your next adventure.
      </p>
      <div className="gap-4 lg:gap-6 mt-4 lg:mt-10 text-justify">
        {faqData?.map((item, index) => (
          <details key={item?.question}>
            <summary className="text-sm md:text-base lg:text-xl xl:text-xl list-none">
              {index + 1}. {item?.question}
            </summary>
            <p className="font-normal text-sm md:text-base my-2 text-secondary">{item?.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
