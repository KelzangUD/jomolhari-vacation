import { motion } from "motion/react";

export default function Overview() {
  return (
    <motion.div
      initial={{
        x: -10,
        opacity: 0.7,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: false }}
      className="p-4 md:p-6 xl:p-8 bg-white rounded-md md:rounded-2xl shadow"
    >
      <h6 className="font-semibold">Overview</h6>
      <p className="text-xs md:text-base mt-4 text-secondary leading-5 md:leading-6 text-justify">
        All visitors <b>require a visa</b> before traveling to Bhutan, except
        citizens of <b>India, Bangladesh,and the Maldives</b>. The visa must be
        pre-arranged through a licensed Bhutanese tour operator or one of their
        international partners.
      </p>
    </motion.div>
  );
}
