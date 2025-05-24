"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaCode, FaCloud } from "react-icons/fa";
import { MdStyle } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/animation";
import Testimonials from "@/components/home/testimonials";

export default function CreatorPage() {
  const features = [
    {
      icon: <FaCode className="text-3xl text-kodular-purple" />,
      title: "No Coding!",
      description: "Thanks to Kodular Creator, you can create any app without writing a single line of code. Just drag n' drop a few components, join some blocks and voila! You have just created your awesome app."
    },
    {
      icon: <FaCloud className="text-3xl text-kodular-purple" />,
      title: "Cloud Based",
      description: "Kodular Creator is hosted on Google Cloud Platform. This means that your projects are safely stored on the servers, so you won't have to worry about downloading them and making backups."
    },
    {
      icon: <MdStyle className="text-3xl text-kodular-purple" />,
      title: "Material Design",
      description: "Our Creator has integrated official Material Design, providing a clean, user-friendly and intuitive U.I."
    }
  ];

  const additionalFeatures = [
    {
      title: "100% of Uptime",
      description: "We have a powerful server infrastructure which provides you a seamless 24/7 service, with an uptime of 100%."
    },
    {
      title: "Live Testing",
      description: "Use our Companion to see changes in real-time directly on your device."
    },
    {
      title: "Material Design",
      description: "All apps made in Kodular will have Material Design, providing a fancy intefrace for users."
    },
    {
      title: "Fully compatible",
      description: "We support all Android phones and tablets ranging from Android 4.4 KitKat! There are no restrictions."
    },
    {
      title: "Incredibly Simple",
      description: "Use our Block based code system to \"program\" your app. Just join blocks and your app will be ready!"
    },
    {
      title: "175+ Components",
      description: "We have more than 185 unique components which will add different features to your app."
    },
    {
      title: "Monetization Options",
      description: "We have several components which will allow you to benefit from your apps, such as Ads or In-App Purchases."
    },
    {
      title: "Much more",
      description: "We are open to any suggestions. Just post it on our community and we'll let you know if it's possible ;)"
    }
  ];

  const evenMoreFeatures = [
    {
      title: "Multiple Language",
      description: "We support a total of 18 languages in our Builder. You can translate more at our Translation Center"
    },
    {
      title: "Push Notifications",
      description: "We also provide a Push Notification component powered by OneSignal"
    },
    {
      title: "In-App Purchases",
      description: "We've integrated the native In-App Purchases from Google Play Store as a component, allowing you to sell products in your app."
    },
    {
      title: "Ad Components",
      description: "Several types of Ad components are available for you to monetize your apps! AdMob, Amazon, Facebook, ...; and more coming!"
    },
    {
      title: "Share Projects & Screens",
      description: "You can download and import any app project or screen using the .aia and .ais file formats."
    },
    {
      title: "Several Login Options",
      description: "If Google is blocked in your country, don't worry! Kodular provides other social logins and an email/password system."
    },
    {
      title: "Frequent Updates",
      description: "We release updates very often with bug fixes, or sometimes we make sneakpeeks for big updates with upcoming features."
    },
    {
      title: "FREE. Forever",
      description: "We decided that Kodular was going to be FREE forever, without any premium plan or compulsory fees for usage."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-32 text-white text-center"
        style={{
          backgroundImage: `url(https://ext.same-assets.com/3569418955/3601841544.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 font-jost"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Convert your ideas into apps with Kodular Creator!
          </motion.h1>

          <motion.p
            className="text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The best online drag-and-drop app creator without coding, and for free!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-kodular-purple hover:bg-kodular-purple/90 text-white">
                <Link href="https://creator.kodular.io">Get Started</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-2 dark:text-white text-gray-800 hover:bg-gray-800/5 dark:hover:bg-white/10 transition-all duration-300 rounded-full px-8 border-gray-800/50 dark:border-white/50 hover:border-gray-800 dark:hover:border-white backdrop-blur-sm"
              >
                <Link href="#aboutcreator">
                  <span className="relative z-10">More Features</span>
                  <motion.span 
                    className="absolute inset-0 bg-gray-800/5 dark:bg-white/5 z-0" 
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Kodular Creator Section */}
      <section className="py-16" id="aboutcreator">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-jost font-semibold mb-12 text-center dark:text-white"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            About Kodular Creator
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 font-jost">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-jost font-semibold mb-4">
                Watch our 2 minute "Quick Start" tutorial
              </h3>

              <motion.div
                className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/iK-J6U12NQc"
                  title="Kodular Quick Start Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome to Kodular Section with App Screenshot */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-jost font-semibold mb-2 dark:text-white">
              Welcome to Kodular!
            </h2>
          </motion.div>

          <motion.div
            className="flex justify-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="https://ext.same-assets.com/3569418955/3194426659.png"
              alt="Kodular Creator Interface"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-jost font-semibold mb-4 text-center dark:text-white"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Not good enough?
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-3"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-kodular-pink flex items-center justify-center text-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  ✓
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 font-jost">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Even More Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-jost font-semibold mb-12 text-center dark:text-white"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            ...and even more
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {evenMoreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-3"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-kodular-purple flex items-center justify-center text-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  ✓
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 font-jost">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-jost font-semibold mb-12 text-center dark:text-white"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            How has the Creator been made?
          </motion.h2>

          <motion.div
            className="flex justify-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: [0, 2, -2, 0],
              transition: { duration: 1, repeat: Infinity, repeatType: "loop" }
            }}
          >
            <Image
              src="https://ext.same-assets.com/3569418955/2916539038.png"
              alt="Kodular Tech Stack"
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
}
