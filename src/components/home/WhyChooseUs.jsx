import React from "react";
import { Zap, ChartArea, SearchCheck, Star } from "lucide-react";
const WhyChooseUs = () => {
  return (
    <>
      <div className="hero-bg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between py-20">
            <h2 className="text-6xl leading-18">Why Choose CryptoScope?</h2>
            <p className="text-2xl text-gray-300 leading-8">
              CryptoScope provides a simple, fast, and reliable way to explore
              cryptocurrency markets and make informed decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-15 justify-between py-10 ">
            <div className="p-8 bg-white/10 rounded-lg backdrop-blur-lg">
              <Zap size={50} className="" />
              <h3 className="text-3xl py-5">Real-Time Data</h3>
              <p className="text-gray-300 text-lg">
                Stay updated with live cryptocurrency prices, market trends, and
                trading activity powered by trusted crypto data sources like.
              </p>
            </div>
            <div className="p-8 bg-white/10 rounded-lg backdrop-blur-lg">
              <ChartArea size={50} className="" />
              <h3 className="text-3xl py-5">Smart Market Insights</h3>
              <p className="text-gray-300 text-lg">
                Analyze market performance using clear statistics, price
                changes, and market capitalization data designed for quick
                understanding.
              </p>
            </div>
            <div className="p-8 bg-white/10 rounded-lg backdrop-blur-lg">
              <SearchCheck size={50} className="" />
              <h3 className="text-3xl py-5">Powerful Search & Discovery</h3>
              <p className="text-gray-300 text-lg">
                Quickly find any cryptocurrency using intelligent search and
                filtering tools. Discover trending coins and emerging assets
                instantly.
              </p>
            </div>
            <div className="p-8 bg-white/10 rounded-lg backdrop-blur-lg">
              <Star size={50} className="" />
              <h3 className="text-3xl py-5">Personalized Experience</h3>
              <p className="text-gray-300 text-lg">
                Create your own watchlist, track favorite cryptocurrencies, and
                monitor performance in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
