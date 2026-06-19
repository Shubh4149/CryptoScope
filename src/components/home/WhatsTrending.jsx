import React from "react";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import { MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
const WhatsTrending = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoins, setDisplayCoins] = useState([]);
  useEffect(() => {
    setDisplayCoins(allCoins);
  }, [allCoins]);
  return (
    <>
      <div className="py-20">
        <div className="flex flex-col px-[3rem] md:max-w-[1200px] m-auto flex-row justify-between items-center">
          <div>
            {" "}
            <h2 className="text-4xl">Today's Trending Coins</h2>
          </div>
          <div className="pt-10 md:p-0">
            <Link to="/markets" className="flex flex-row items-center gap-4">
              See All
              <MoveRight
                className="border border-white rounded-full p-3"
                size={40}
              />
            </Link>
          </div>
        </div>
        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-10 container mx-auto justify-center items-center">
          {displayCoins.slice(0, 4).map((item) => (
            <>
              <Link to={`/coin/${item.id}`} key={item.id}>
                <motion.div
                  className="p-8 bg-white/10 rounded-lg backdrop-blur-lg"
                  whileHover={{ scale: 1.1 }}
                  duration={0.5}
                  ease={"easeInOut"}
                >
                  <div className="flex flex-col md:flex-row justify-between gap-5">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[100px]"
                      />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold">
                        {item.name}
                      </h3>
                      <p className="text-gray-400">
                        ${item.current_price.toFixed(2)}
                      </p>
                      <p
                        className={
                          item.price_change_percentage_24h >= 0
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {Math.floor(item.price_change_percentage_24h * 100)}%
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default WhatsTrending;
