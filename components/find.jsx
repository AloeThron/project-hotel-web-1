"use client";

import React from "react";
import Image from "next/image";

import { Button } from "./ui/button";
import { motion } from "framer-motion";

import { fadeIn } from "@/variants";

const hotelData = [
  {
    image: "/find/hotel-1.png",
    name: "Hotel De Luna",
    location: "Singapore",
  },
  {
    image: "/find/hotel-2.png",
    name: "Ina Tretes Hotel",
    location: "Singapore",
  },
  {
    image: "/find/hotel-3.png",
    name: "Delight Hotel",
    location: "Singapore",
  },
  {
    image: "/find/hotel-4.png",
    name: "Mercusuar Hotel",
    location: "Singapore",
  },
];

export default function Find() {
  return (
    <section>
      <div className="container mx-auto mt-24">
        {/* text */}
        <div className="text-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ one: false, amount: 0.2 }}
            className="h2 mb-6"
          >
            Find your best hotel
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ one: false, amount: 0.2 }}
            className="max-w-[638px] mx-auto mb-8"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            labore debitis, minus voluptate dolore, maiores provident
            voluptatibus ratione rerum quo quidem dolorum reprehenderit
            distinctio dignissimos veritatis? Reiciendis soluta magnam
            explicabo.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ one: false, amount: 0.2 }}
          >
            <Button variant="accent" className="px-12 mb-14 xl:mb-28">
              View All
            </Button>
          </motion.div>
        </div>
        {/* hotel grid */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ one: false, amount: 0.2 }}
          className="grid gap-y-10 xl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px]"
        >
          {hotelData.map((hotel, index) => {
            return (
              <div
                key={index}
                className="border-2 border-outline w-[270px] h-[390px] rounded-xl overflow-hidden hover:cursor-pointer group hover:bg-soft_green transition-all duration-700 mx-auto xl:mx-0"
              >
                <Image src={hotel.image} width={270} height={270} alt="" />
                <div className="p-6">
                  <h4 className="h4 group-hover:text-white transition-all duration-300">
                    {hotel.name}
                  </h4>
                  <p className="group-hover:text-white transition-all duration-300">
                    {hotel.location}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
