import React from "react";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { CoinContext } from "../context/CoinContext";
import { Navigate, useNavigate } from "react-router-dom";
import { p } from "motion/react-client";
const Markets = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoins, setDisplayCoins] = useState([]);
  useEffect(() => {
    setDisplayCoins(allCoins);
  }, [allCoins]);

  if (!displayCoins) return <p>Loading...</p>;
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="pb-10">
          <h1 className="text-4xl font-bold text-leftss mt-10">Markets Page</h1>
          <p className="py-4">
            Explore real-time cryptocurrency prices, market trends, and
            performance insights.
          </p>
        </div>
        <div>
          <table className="w-full text-left table-auto min-w-max">
            <thead className="">
              <tr>
                <th className="p-4 bg-white/10">Ranking</th>
                <th className="p-4 bg-white/10">Name</th>
                <th className="p-4 bg-white/10">Current Price</th>
                <th className="p-4 bg-white/10">Market Cap</th>
                <th className="p-4 bg-white/10">Highest in 24hr</th>
                <th className="p-4 bg-white/10">Lowes in 24hr</th>
              </tr>
            </thead>
            <tbody>
              {displayCoins.map((coins) => (
                <tr
                  key={coins.id}
                  className="cursor-pointer hover:bg-white/10"
                  onClick={() => navigate(`/coin/${coins.id}`)}
                >
                  <td className="p-4 border-b border-gray-800">
                    {coins.market_cap_rank}
                  </td>
                  <td className="flex flex-row p-4 border-b border-gray-800">
                    <img
                      src={coins.image}
                      alt={coins.id}
                      className="w-[30px] mr-4"
                    />
                    {coins.id}
                  </td>
                  <td className="p-4 border-b border-gray-800">
                    {currency.symbol}
                    {coins.current_price.toFixed(2)}
                  </td>
                  <td className="p-4 border-b border-gray-800">
                    {coins.market_cap}
                  </td>
                  <td className="p-4 border-b border-gray-800 text-green-500">
                    {currency.symbol}
                    {coins.high_24h}
                  </td>
                  <td className="p-4 border-b border-gray-800 text-red-500">
                    {currency.symbol}
                    {coins.low_24h}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Markets;
