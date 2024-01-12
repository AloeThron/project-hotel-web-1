"use client";

import React from "react";
import Image from "next/image";

import { inView, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";

import { Button } from "./ui/button";
import { fadeIn } from "@/variants";
import Stats from "./stats";

export default function About() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [ref, inView] = useInView({ threshold: !isMobile ? 0.5 : null });

  return (
    <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ one: false, amount: 0.4 }}
            className="flex-1 relative"
          >
            <Image src={"/about/img2.png"} width={559} height={721} alt="" />
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ one: false, amount: 0.4 }}
            className="xl:max-w-[470px]"
          >
            <h2 className="h2 mb-[38px]">About Hotely</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur at quas commodi eaque? Ex, soluta ratione? Cumque
              facilis officiis aut, ipsam adipisci quo, asperiores quasi
              laudantium ullam ea possimus doloribus!
            </p>
            {/* stats */}
            <dir className="my-5 xl:my-10 min-h-[35px]">
              {inView && <Stats />}
            </dir>
            <p className="mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur at quas commodi eaque? Ex, soluta ratione? Cumque
              facilis officiis aut, ipsam adipisci quo, asperiores quasi
              laudantium ullam ea possimus doloribus!
            </p>
            <Button variant={"accent"}>Explore More</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
