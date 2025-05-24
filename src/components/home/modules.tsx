"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation";

export default function Modules() {
  const modules = [
    {
      title: "Kodular Creator",
      description:
        "With Kodular Creator, you can start creating incredible apps without any coding knowledge! Just drag some components and join blocks",
      image: "https://ext.same-assets.com/3569418955/3194426659.png",
      buttonText: "Read More",
      buttonLink: "/creator",
    },
    {
      title: "Extensions IDE",
      description:
        "If you are an advanced user, why not code in Java and create amazing Extensions for the Creator? Try it if you want something like Android Studio",
      image: "https://ext.same-assets.com/2645679348/2125154447.png",
      buttonText: "Start Now",
      buttonLink: "https://ide.kodular.io",
    },
    {
      title: "Kodular Store",
      description:
        "Share your apps, projects, extensions and screens in this free Store developed by Kodular Team!",
      image: "https://ext.same-assets.com/2645679348/1862942069.png",
      buttonText: "Start Now",
      buttonLink: "https://store.kodular.io",
    },
    {
      title: "My Kodular",
      description:
        "Manage all Kodular Modules from this Control Panel. You will also need only one account to login in Kodular. You can see and control the data we have about you there",
      image: "https://ext.same-assets.com/2645679348/1929352488.png",
      buttonText: "Start Now",
      buttonLink: "https://my.kodular.io",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-jost font-semibold mb-10 text-center dark:text-white"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Modules
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {modules.map((module, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="h-full"
            >
              <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-800">
                <div className="h-48 bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={module.image}
                      alt={module.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                <CardContent className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-jost font-semibold mb-3 dark:text-white">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    {module.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      className="mt-auto bg-kodular-pink hover:bg-kodular-pink/90 text-white w-full dark:bg-kodular-pink dark:hover:bg-kodular-pink/90 dark:text-white"
                    >
                      <Link href={module.buttonLink}>{module.buttonText}</Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 bg-kodular-green text-white p-6 rounded-lg text-center dark:bg-kodular-green/90"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="mb-4">
            If you are unable to use Kodular, you can check if there's any
            problem with our servers.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-kodular-green transition-colors"
            >
              <Link href="https://status.kodular.io">Check Status</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
