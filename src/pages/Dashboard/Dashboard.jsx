import { useGraphContext } from "../../context/GraphContextProvider";
import Navbar from "../../Layout/Navbar/Navbar";
import PieChart from "../../components/Graph/PieGraph";
import "./Dashboard.css";

const Dashboard = () => {
  const { categoryCounts } = useGraphContext();

  if (!categoryCounts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <Navbar />
      <div className="graphs">
        <PieChart className="div1" />
      </div>
    </div>
  );
};

export default Dashboard;
