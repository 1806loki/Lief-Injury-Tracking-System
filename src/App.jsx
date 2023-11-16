import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import InjuryReport from "./pages/InjuryReport/InjuryReport";
import Report from "./pages/ReportList/ReportList";
import Dashboard from "./pages/Dashboard/Dashboard";
import GraphContextProvider from "./context/GraphContextProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./Layout/Navbar/Navbar";
const App = () => {
  return (
    <GoogleOAuthProvider clientId="373564972288-oujkbh0u5o3hdamdlp1mt64jnnka59pv.apps.googleusercontent.com">
      <GraphContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/injury-report" element={<InjuryReport />} />
            <Route path="/report-list" element={<Report />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </GraphContextProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
