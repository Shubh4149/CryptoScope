import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const CoinChart = ({ id }) => {
  const [chartData, setChartData] = useState([]);

  const fetchChartData = async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=5`,
      );

      const data = await res.json();

      const prices = data.prices.map((item) => ({
        x: new Date(item[0]),
        y: item[1],
      }));

      setChartData(prices);
    } catch (error) {
      console.error("Chart Error:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchChartData();
    }
  }, [id]);

  const options = {
    chart: {
      type: "area",
      zoom: { enabled: true },
      toolbar: { show: false },
    },

    stroke: {
      curve: "smooth",
      width: 4,
    },

    markers: {
      size: 4,
      hover: { size: 7 },
    },

    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },

    dataLabels: {
      enabled: false,
    },

    tooltip: {
      x: {
        format: "dd MMM HH:mm",
      },
    },
  };

  const series = [
    {
      name: "Price",
      data: chartData,
    },
  ];

  return (
    <div className="">
      <Chart options={options} series={series} type="area" height={450} />
    </div>
  );
};

export default CoinChart;
