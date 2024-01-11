import React from "react";
import SearchBox from "@/components/searchbox"

export default function Hero() {
  return (
    <div className="pt-24 pb-24 xl:py-0 xl:h-[1087px] bg-hero2 xl:bg-hero bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="container mx-auto flex items-center justify-center xl:justify-start">
        <SearchBox />
      </div>
    </div>
  );
}
