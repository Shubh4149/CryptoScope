import React from "react";
import { MoveRight } from "lucide-react";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <>
      <motion.div
        className="container mx-auto py-16 hero-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row gap-10 py-5 items-center py-[2rem] ">
          <div className="basis-1/2">
            <h1 className="text-6xl font-bold text-white leading-18">
              Explore Crypto Markets in <br />
              Real Time
            </h1>
            <p className="text-white text-lg">
              Track prices, analyze trends, and stay ahead in the crypto world
              all in one place.
            </p>
            <button className="primary-btn mt-5">Get Started</button>
          </div>
          <div className="basis-1/2">
            <img src="../hero-img.png" alt="Hero Image" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
