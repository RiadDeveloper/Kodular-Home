"use client";

import React from "react";
import Link from "next/link";
import {
  FaComments,
  FaUsers,
  FaServer,
  FaPlus
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation";

export default function Features() {
  const features = [
    {
      icon: <FaComments className="text-4xl text-kodular-purple" />,
      title: "Active Community",
      description: "Why not take a look at our amazing community? Our users are just amazing, and thanks to them our community is a really nice place to share your doubts, projects or suggestions releated with Kodular."
    },
    {
      icon: <FaUsers className="text-4xl text-kodular-purple" />,
      title: "Our Team",
      description: "Our Team is very enthusiastic and loves helping people. They will really like to help you on the road to create an app. We are devotees of the IT!"
    },
    {
      icon: <FaServer className="text-4xl text-kodular-purple" />,
      title: "Maximum Stability",
      description: "Kodular Infrastructure is powered by our partner ArubaCloud, which guarantees a really good uptime and performance."
    },
    {
      icon: <FaPlus className="text-4xl text-kodular-purple" />,
      title: "Other Services!",
      description: (
        <>
          We provide more than just an <Link href="/creator" className="text-kodular-purple hover:underline">App Creator</Link>.
          We also have a self-developed <Link href="/store" className="text-kodular-purple hover:underline">App Store</Link>,
          an online <Link href="/ide" className="text-kodular-purple hover:underline">Extensions IDE</Link> and
          an <Link href="/account" className="text-kodular-purple hover:underline">Account Control Panel</Link>.
          Let's expand Kodular!
        </>
      )
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-jost font-semibold mb-12 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Why is it so great?
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut"
                  }
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-jost font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
