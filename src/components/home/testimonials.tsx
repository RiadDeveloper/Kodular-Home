"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animation";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Cian",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/cian/120/1.png",
    quote: "Kodular allows you to focus on the ideas, and not the code. Everyone is a creator, and Kodular lets that happen.",
    profile: "//community.kodular.io/u/cian",
    gradient: "peach-gradient"
  },
  {
    name: "David Ningthoujam",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/David/120/1.png",
    quote: "I always wanted to be a app developer but I don't have any knowledge of Java, so it was hard for me to make apps. Then, I found Kodular, now I can make professional apps without writing a single line of code and it is always free.",
    profile: "//community.kodular.io/u/David",
    gradient: "aqua-gradient"
  },
  {
    name: "Alexitoo",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/alexitoo_uy/120/1.png",
    quote: "Kodular is living proof that anyone is capable of creating applications, from a simple \"Hello World\" to the next viral app.",
    profile: "//community.kodular.io/u/alexitoo_uy",
    gradient: "purple-gradient"
  },
  {
    name: "Abdul Maajith",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/abdul_maajith/120/1.png",
    quote: "I have always been crazy on technology and making mobile apps. Kodular helps me to make the most professional apps.",
    profile: "//community.kodular.io/u/abdul_maajith",
    gradient: "purple-gradient"
  },
  {
    name: "Peter Mathijssen",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/peter/120/1.png",
    quote: "I am really impressed by the way Kodular evolves into the most professional of all the available App Inventor clones around.",
    profile: "//community.kodular.io/u/peter",
    gradient: "peach-gradient"
  },
  {
    name: "Kanishka Chakraborty",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/Kanishka_Developer/120/1.png",
    quote: "Kodular is hands down the fastest way to make an app, and lets me make production-ready apps directly on my Android tablet.",
    profile: "//community.kodular.io/u/Kanishka_Developer",
    gradient: "aqua-gradient"
  },
  {
    name: "Domi Rami",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/Domi/120/1.png",
    quote: "With Kodular it's easier to make my apps for the number of options offered to the development, all very intuitive and you get help from the community.",
    profile: "//community.kodular.io/u/Domi",
    gradient: "purple-gradient"
  },
  {
    name: "Maicol Battistini",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/maicol07/120/1.png",
    quote: "Kodular, a free platform to let your ideas become Android apps. Simple, beautiful and powerful.",
    profile: "//community.kodular.io/u/maicol07",
    gradient: "peach-gradient"
  },
  {
    name: "Rémi Chartier",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/R3M/120/1.png",
    quote: "Kodular is the best way to make apps with a simple interface and simple code! There are so many components and options, and it has a beautiful Material Design.",
    profile: "//community.kodular.io/u/R3M",
    gradient: "aqua-gradient"
  },
  {
    name: "Shreyash Saitwal",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/Shreyash/120/1.png",
    quote: "What I love the most about Kodular is its stunning and fabulous user interface. It also provides a number of components with block based programming which makes app building as easy as applying butter on the bread!",
    profile: "//community.kodular.io/u/Shreyash",
    gradient: "purple-gradient"
  },
  {
    name: "Walya Express",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/walya_express/120/1.png",
    quote: "Kodular provides a simple interface with lots of components. Thanks to this, you can create the best apps for anyone. So, start where you are, use Kodular and make everything you want!",
    profile: "//community.kodular.io/u/walya_express",
    gradient: "peach-gradient"
  },
  {
    name: "Kleyber Derick",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/kleyber_derick/120/1.png",
    quote: "I am greatly surprised to see the level where Kodular has reached and I'm sure this is only the beginning of a GREAT tool.",
    profile: "//community.kodular.io/u/kleyber_derick",
    gradient: "aqua-gradient"
  },
  {
    name: "Jose Luis Núñez",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/joseluisnunez/120/1.png",
    quote: "Easy, powerful and highly customizable. Kodular takes your Android apps to the next level! Their developers are really active on the community, listening to users and implementing ideas",
    profile: "//community.kodular.io/u/joseluisnunez",
    gradient: "purple-gradient"
  },
  {
    name: "Daniel Vanko",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/daaniiieel/120/1.png",
    quote: "When users start creating such useful and well-designed apps like Koders do, you really should think that you have done something good.",
    profile: "//community.kodular.io/u/daaniiieel",
    gradient: "peach-gradient"
  },
  {
    name: "Franck G",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/Franck_G28/120/1.png",
    quote: "Kodular is by far the easiest way to create simple or complex applications of all kinds, while offering many design possibilities.",
    profile: "//community.kodular.io/u/Franck_G28",
    gradient: "aqua-gradient"
  },
  {
    name: "Yusuf Cihan",
    avatar: "//community.kodular.io/user_avatar/community.kodular.io/yusufcihan/120/1.png",
    quote: "Whoever you are, a beginner, or a master… Kodular allows anyone to make perfect Android apps easily without writing any line of code.",
    profile: "//community.kodular.io/u/yusufcihan",
    gradient: "purple-gradient"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-jost font-semibold mb-12 text-center dark:text-white"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          What our users say
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 dark:shadow-gray-900/30"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`h-3 ${testimonial.gradient === "purple-gradient" ? "bg-gradient-to-r from-purple-500 to-pink-500" : 
                testimonial.gradient === "peach-gradient" ? "bg-gradient-to-r from-pink-500 to-orange-500" :
                "bg-gradient-to-r from-blue-500 to-cyan-500"}`} />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={`https:${testimonial.avatar}`}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Link
                    href={`https:${testimonial.profile}`}
                    target="_blank"
                    className="font-semibold text-lg hover:text-purple-600 dark:text-gray-100 dark:hover:text-purple-400 transition-colors"
                  >
                    {testimonial.name}
                  </Link>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  <span className="text-purple-500 dark:text-purple-400 mr-2">❝</span>
                  {testimonial.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 