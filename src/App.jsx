import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import InjuryReport from "./pages/InjuryReport/InjuryReport";
import Report from "./pages/Report/Report";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/injury-report" element={<InjuryReport />} />
        <Route path="/report-list" element={<Report />} />
      </Routes>
    </Router>
  );
};

export default App;

