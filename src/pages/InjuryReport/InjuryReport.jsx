import InjuryForm from "../../components/InjuryReportForm/InjuryReportForm";
import Navbar from "../../Layout/Navbar/Navbar";

import "./InjuryReport.css";

const InjuryReport = () => {
  return (
    <div className="injuryReport">
      <Navbar />
      <InjuryForm />
    </div>
  );
};

export default InjuryReport;
