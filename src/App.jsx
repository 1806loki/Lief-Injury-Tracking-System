import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import InjuryReport from "./pages/InjuryReport/InjuryReport";
import Report from "./pages/Report/Report";
import Dashboard from "./pages/Dashboard/Dashboard";
import GraphContextProvider from "./context/GraphContextProvider";
const App = () => {
  return (
    <GraphContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/injury-report" element={<InjuryReport />} />
          <Route path="/report-list" element={<Report />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </GraphContextProvider>
  );
};

export default App;
