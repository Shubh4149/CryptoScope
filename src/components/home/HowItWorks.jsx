import { button, div } from "motion/react-client";
import React from "react";
import { useState } from "react";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = React.useState(1);
  const tabs = [
    {
      id: 1,
      lable: "Explore Markets",
      image: "../../../explore-market.png",
    },
    {
      id: 2,
      lable: "Analyze Coins",
    },
    {
      id: 3,
      lable: "Track Performance",
    },
  ];

  const tabContent = {
    1: "../../../explore-market.png",
    2: "../../../analyze-coin.png",
    3: "../../../track-performance.png",
  };
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-2 gap-20 py-10 my-20">
          <div>
            <h2 className="text-6xl pb-[1rem]">How It Works</h2>
            <p className="text-xl pb-[2rem]">
              Explore, analyze, and track cryptocurrencies in just a few simple
              steps.
            </p>
            {tabs.map((tab) => (
              <div>
                <button
                  key={tab.id}
                  className={`px-6 py-8 my-2 w-full text-left cursor-pointer rounded-lg ${activeTab === tab.id ? "bg-white/20 text-white" : "bg-white/10  text-gray-400"}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.lable}
                </button>
              </div>
            ))}
          </div>
          <div className="py-2">
            <img src={tabContent[activeTab]} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
