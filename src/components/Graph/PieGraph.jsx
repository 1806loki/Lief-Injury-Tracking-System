import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { useGraphContext } from "../../../context/GraphContextProvider";

const PieChart = () => {
  const { categoryCounts } = useGraphContext();

  const data = {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        data: Object.values(categoryCounts),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#FF8C00",
          "#7FFF00",
          "#DC143C",
        ],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false, // Set to false to disable aspect ratio
    responsive: true, // Set to true to enable responsiveness
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div style={{ height: "500px", width: "500px", textAlign: "center" }}>
      <Pie data={data} options={options} />
      <h1>Pie Chart of Injured Parts</h1>
    </div>
  );
};

export default PieChart;
