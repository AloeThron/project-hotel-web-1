"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { Button } from "./ui/button";

const recommendData = [
  {
    name: "Shanghai Hotel",
    image: "/recommendation/hotel-1.png",
    location: "Shanghai, China",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi mollitia enim quaerat eius ipsam ducimus recusandae, nisi delectus possimus commodi et explicabo hic.",
    price: 40,
    testimonial: {
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      personName: "Robert Rene",
    },
  },
  {
    name: "Peak Lodge",
    image: "/recommendation/hotel-1.png",
    location: "Aspen, USA",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi mollitia enim quaerat eius ipsam ducimus recusandae, nisi delectus possimus commodi et explicabo hic.",
    price: 80,
    testimonial: {
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      personName: "Emily Jhonson",
    },
  },
  {
    name: "Tropical Oasis Resort",
    image: "/recommendation/hotel-1.png",
    location: "Bali, Indonesia",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi mollitia enim quaerat eius ipsam ducimus recusandae, nisi delectus possimus commodi et explicabo hic.",
    price: 120,
    testimonial: {
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      personName: "Micheal Anderson",
    },
  },
];

export default function Recommend() {
  return <div>Recommend</div>;
}
