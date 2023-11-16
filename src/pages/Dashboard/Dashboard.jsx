import { useGraphContext } from "../../context/GraphContextProvider";
 import PieChart from "../../components/Graph/PieGraph";
import "./Dashboard.css";

const Dashboard = () => {
  const { categoryCounts } = useGraphContext();

  if (!categoryCounts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
       <div className="dashboard-container">
        <div className="graphs">
          <PieChart className="div1" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
