import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

const state = {
  //   maintainAspectRatio: true,
  labels: ["Facebook", "Twitter", "Medium", "LinkedIn"],
  datasets: [
    {
      label: "Social Media Platforms",
      backgroundColor: ["#0037ecae", "#24bd1fdc", "#da8e14", "#bb1919"],
      hoverBackgroundColor: [
        "#1f44bdb0",
        "#24bd1fdc",
        "#da8e14",
        "#bb1919",
      ],
      data: [65, 59, 80, 81, 56],
      borderWidth: 0,
      borderRadius: 0,
      radius: "100%",
      cutout: "80%",
    },
  ],
};

const ChartT = styled.div`
  margin-top: -180px;
`;

const Chart2 = () => {
  return (
    <ChartT>
      <Doughnut
        data={state}
        width={50}
        height={50}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
            title: {
              display: true,
              // text: 'Chart.js Doughnut Chart',
              padding: { top: 180, left: 0, right: 0, bottom: 0 },
            },
          },
        }}
      />
    </ChartT>
  );
};

export default Chart2;
