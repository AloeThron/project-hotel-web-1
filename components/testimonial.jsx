"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import { fadeIn } from "@/variants";
import Image from "next/image";

const testimonialData = [
  {
    img: "/testimonials/img-1.png",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et maxime commodi non quam architecto, iure labore quis cumque eveniet tempora saepe illum laborum ut eius cum delectus quasi reprehenderit dignissimos.",
    personName: "Robert Rene",
    location: "Singapore",
  },
  {
    img: "/testimonials/img-2.png",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et maxime commodi non quam architecto, iure labore quis cumque eveniet tempora saepe illum laborum ut eius cum delectus quasi reprehenderit dignissimos. Et maxime commodi non quam architecto, iure labore quis cumque eveniet tempora saepe illum laborum ut eius cum delectus quasi reprehenderit dignissimos.",
    personName: "Robert Rene",
    location: "Singapore",
  },
];

export default function Testimonial() {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ one: false, amount: 0 }}
      className="bg-soft_green xl:h-[880px] mt-24"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ one: false, amount: 0 }}
        className="container mx-auto"
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="xl:h-[680px] overflow-hidden"
        >
          {testimonialData.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
                  <Image
                    src={slide.img}
                    width={470}
                    height={470}
                    quality={100}
                    alt=""
                    className="hidden xl:flex"
                  />
                  <div className="flex-1 bg-white/20 text-white p-12">
                    <p className="text-lg leading-9 mb-8">{slide.message}</p>
                    <p className="text-xl font-bold">{slide.personName}</p>
                    <p>{slide.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.section>
  );
}
