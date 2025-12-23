"use client";

import { useEffect } from "react";
import Card from "../components/Card";
import { motion } from "motion/react";

export default function UpcomingEvents({
  upcomingEvents,
}: {
  upcomingEvents: any[];
}) {
  return (
    <>
      {upcomingEvents?.length > 0 && (
        <section className="p-5 pb-10 md:pb-15 xl:pb-20 2xl:pb-25 md:p-10 xl:p-15 2xl:p-20 bg-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <h4>Upcoming Events</h4>
            <p className="mb-4 md:mb-6 2xl:mt-4 ">
              Join our scheduled adventures and cultural festivals in Bhutan.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 my-5 md:my-10">
            {upcomingEvents?.map((item) => (
              <Card
                image={item?.fields?.image?.fields?.file?.url}
                title={item?.fields?.title}
                height="h-60 lg:h-80 xl:h-100"
                date={item?.fields?.date}
                location={item?.fields?.location}
                key={item?.fields?.title}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
