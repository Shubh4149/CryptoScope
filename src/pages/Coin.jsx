import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinChart from "../charts/CoinChart";
const Coin = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [coinChartData, setCoinChartData] = useState(null);

  const fetchCoinData = async () => {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
      const data = await res.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, [id]);

  if (!coinData) return <p>Loading Coin...</p>;

  return (
    <div className="container py-10">
      <div className="flex items-center gap-4">
        {/* Coin Image */}
        <img
          src={coinData.image?.large}
          alt={coinData.name}
          className="w-[100px]"
        />

        {/* Coin Name */}
        <div>
          <h1 className="text-6xl capitalize">{coinData.name}</h1>

          <p className="uppercase text-gray-400">{coinData.symbol}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 m-auto justify-center gap-10 pt-15">
        <div className="bg-white/10 backdrop-blur px-8 py-5 rounded-lg">
          <p className="text-gray-400">Current Price</p>
          <h3 className="text-xl leading-10">
            ${coinData.market_data.current_price.usd}
          </h3>
        </div>
        <div className="bg-white/10 backdrop-blur px-8 py-5 rounded-lg">
          <p className="text-gray-400">Market cap</p>
          <h3 className="text-xl leading-10">
            ${coinData.market_data.market_cap.usd}
          </h3>
        </div>
        <div className="bg-white/10 backdrop-blur px-8 py-5 rounded-lg">
          <p className="text-gray-400">Market cap</p>
          <h3
            className={
              coinData.market_data.price_change_percentage_24h >= 0
                ? "text-green-500 text-xl leading-10"
                : "text-red-500"
            }
          >
            %{coinData.market_data.price_change_percentage_24h.toFixed(2)}
          </h3>
        </div>
        <div className="bg-white/10 backdrop-blur px-8 py-5 rounded-lg">
          <p className="text-gray-400">Popularity</p>
          <h3 className="text-xl leading-10">#{coinData.market_cap_rank}</h3>
        </div>
      </div>

      <div className="pt-10">
        <h3 className="text-2xl">About {coinData.name}</h3>
        <p className="text-gray-400">{coinData.description.en}</p>
      </div>
      <CoinChart id={id} />
    </div>
  );
};

export default Coin;
