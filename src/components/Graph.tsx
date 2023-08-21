import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

Chart.register(...registerables);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    colors: {
      enabled: true,
    },

    tooltip: {
      callbacks: {
        title: (tooltipItems: any) => {
          return "";
        },
        label: function (context: any) {
          
          let label = context.dataset.label || "";

          if (label) {
            label += "Participant signup";
          }
          if (context.parsed.y !== null) {

            label += `${context.parsed.y} signups`;
          }
          return label;
        },
        afterLabel: (tooltipItem: any) => {
          return tooltipItem.label;
        },
        labelColor() {
          return {
            borderColor: "transparent",
            backgroundColor: "transparent",
            borderWidth: 3,
          };
        },
        labelTextColor: function (context: any) {
          return "#050305";
        },
        afterLabelTextColor: function (context: any) {
          return "#495434";
        },
      },
      
      backgroundColor: "#fff",
      borderColor: '#frfrfr',
      usePointStyle: false,
      showShadow:true,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      grid: {
        display: true,
      },
      border: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];
const graphData = Array.from({ length: 40 }, () =>
  Math.floor(Math.random() * 100)
);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const labels = graphData.map((_, index) => months[index % 12]);
export const data = {
  labels,
  datasets: [
    {
      // label: "participant signup",
      backgroundColor: "#fdd430",
      data: graphData,
      barPercentage: 1,
      borderRadius: 100,
      borderSkipped: false,
    },
  ],
};

const Graph = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 font-bold flex flex-col items-start text-lg mt-8">
      <h2 className="font-bold text-3xl md:text-4xl flex flex-col">
        <span className="flex items-center mb-1">
          100,000
          <span className="mx-3">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-users"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </span>
        </span>
        <span className="font-normal text-base md:text-[1.4rem]">
          Participants
        </span>
      </h2>

      <div className="bg-white w-full overflow-x-auto rounded-md p-4">
        <div className=" w-full overflow-x-scroll scroll-smooth whitespace-nowrap">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Graph;
