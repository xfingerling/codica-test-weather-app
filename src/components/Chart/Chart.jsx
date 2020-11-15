import React, { useState, useEffect } from "react";
import moment from "moment";

import { Line } from "react-chartjs-2";

const Chart = ({ data }) => {
  const [dates, setDates] = useState([]);
  const [temps, setTemps] = useState([]);

  useEffect(() => {
    setDates(parseDate(data));
    setTemps(parseTemp(data));
  }, [data]);

  const parseDate = (data) => {
    if (!data) return;
    return [...data]
      .map((el) => {
        const hours = moment(new Date(el.dt * 1000)).format("LT");
        return hours;
      })
      .slice(0, 12);
  };

  const parseTemp = (data) => {
    if (!data) return;
    return [...data]
      .map((el) => {
        const temp = Math.round(el.temp);
        return temp;
      })
      .slice(0, 12);
  };

  return (
    <Line
      height={40}
      width={200}
      options={{
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
      data={{
        labels: dates,
        datasets: [
          {
            label: "Temp",
            data: temps,
            borderWidth: 1,
          },
        ],
      }}
    />
  );
};

export default Chart;
