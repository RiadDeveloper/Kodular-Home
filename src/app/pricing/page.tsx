"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/lib/animation";

export default function PricingPage() {
  const pricingComparison = [
    {
      feature: "Number of projects",
      free: "10",
      premium: "Unlimited"
    },
    {
      feature: "Total asset size",
      free: "5MB",
      premium: "Unlimited"
    },
    {
      feature: "Number of extensions per project",
      free: "5",
      premium: "Unlimited"
    },
    {
      feature: "Monetization extensions",
      free: "Cannot be used in projects",
      premium: "Any extension can be used, including monetization extensions"
    },
    {
      feature: "Monetization components",
      free: "Only Google Ad Manager components, with commission",
      premium: "Google Ad Manager components with commission + all other monetization components without commission"
    },
    {
      feature: "Monetization approvals",
      free: "Regular review process",
      premium: "Fast-tracked approval process"
    }
  ];

  return (
    <>
      <section className="py-8 sm:py-16 md:py-24 lg:py-32 mt-8 sm:mt-12 md:mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-jost font-semibold mb-8 sm:mb-12 md:mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Kodular Creator
          </motion.h1>

          <motion.div
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 md:mb-16 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-jost max-w-3xl">
              Get more from Kodular.
              <br className="hidden sm:block" />
              Upgrade to Premium today.
            </h2>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button asChild className="bg-white text-purple-600 hover:bg-white/90 w-full sm:w-auto text-sm sm:text-base">
                  <Link href="https://my.kodular.io/premium/#monthly">
                    Upgrade now for $3.50/month
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button asChild variant="outline" className="border-2 border-white/80 bg-transparent text-white hover:bg-white/20 focus:ring-2 focus:ring-white/50 w-full sm:w-auto text-sm sm:text-base transition-colors">
                  <Link href="https://my.kodular.io/premium/#yearly">
                    or for $35/year
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="mb-8 sm:mb-12 md:mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-jost font-semibold mb-2 text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              What you get with Premium
            </motion.h2>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Gain unrestricted access to all of Kodular. Build powerful apps without limits.
            </motion.p>

            <motion.div
              className="overflow-x-auto -mx-4 sm:mx-0 sm:overflow-hidden"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div className="min-w-full inline-block sm:w-full align-middle">
                <motion.table
                  className="w-full border-collapse border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md dark:shadow-gray-800"
                  whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold dark:text-gray-200 w-1/2 sm:w-2/5"></th>
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold dark:text-gray-200 w-1/4 sm:w-[30%]">Free</th>
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold dark:text-gray-200 w-1/4 sm:w-[30%]">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingComparison.map((row, index) => (
                      <motion.tr
                        key={index}
                        className={`${index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"} hover:bg-green-50 dark:hover:bg-green-900/20`}
                        transition={{ duration: 0.2 }}
                      >
                        <td className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700 text-left align-top dark:text-gray-300 text-sm sm:text-base">{row.feature}</td>
                        <td className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700 text-left align-top dark:text-gray-300 text-sm sm:text-base">{row.free}</td>
                        <td className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700 text-left align-top font-medium dark:text-gray-200 text-sm sm:text-base">{row.premium}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </motion.table>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
