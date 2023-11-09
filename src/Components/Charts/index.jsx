import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
const MultiAxisChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jul 16-Jul 23",
          "Jul 24- Jul 30",
          "Aug 7- Aug 20",
          "Aug 28-Sep 3",
          "Sep 4- Sep 10",
          "Sep 11- Sep 24",
          " Sep 18- Sep 24",
          "Sep 25- Oct 1",
          "Oct 2- Oct 8",
          "Oct9- Oct 15",
        ],
        datasets: [
          {
            label: "Outbound",
            data: [3, 2, 0, 0, 2, 3, 3, 2, 2, 1, 0, 0, 0],
            borderColor: "rgba(75, 192, 192, 1)",
            yAxisID: "y-axis-1",
            tension: 0.4,
          },
          {
            label: "Inbound",
            data: [4, 3, 1, 1, 3, 4, 4, 3, 3, 2, 1, 1, 1],
            borderColor: "rgba(255, 99, 132, 1)",
            yAxisID: "y-axis-2",
            tension: 0.4,
          },
          {
            label: "Meeting",
            data: [5, 4, 2, 2, 4, 5, 5, 4, 4, 3, 2, 2, 2],
            borderColor: "purple",
            yAxisID: "y-axis-2",
            tension: 0.4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            type: "linear",
            position: "none",
            id: "y-axis-1",
          },
          y2: {
            type: "linear",
            position: "none",
            id: "y-axis-2",
          },
          y3: {
            type: "linear",
            position: "none",
            id: "y-axis-3",
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default MultiAxisChart;
