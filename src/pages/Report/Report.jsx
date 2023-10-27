import Navbar from "../../Layout/Navbar/Navbar";
import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Report.css";

const Report = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API = "http://localhost:3000/api/injuryReport";
        const response = await axios.get(API);
        const result = await response.data;
        console.log(result);
        setReportData(result);
      } catch (err) {
        console.log(`Error with Report Data : ${err}`);
      }
    };
    fetchData();
  }, []);

  const columns = [
    {
      title: "Reporter",
      dataIndex: "reporter",
      key: "reporter",

      sorter: (a, b) => a.reporter.localeCompare(b.reporter),
    },
    {
      title: "Date of Incident",
      dataIndex: "dateOfIncident",
      key: "dateOfIncident",
      sorter: (a, b) => new Date(a.dateOfIncident) - new Date(b.dateOfIncident),

      render: (text) => {
        const formattedDate = new Date(text).toLocaleDateString();
        const [month, day, year] = formattedDate.split("/");
        return `${day}-${month}-${year}`;
      },
    },
    {
      title: "Time of Incident",
      dataIndex: "timeOfIncident",
      key: "timeOfIncident",
      sorter: (a, b) => new Date(a.timeOfIncident) - new Date(b.timeOfIncident),
      render: (text) => new Date(text).toLocaleTimeString(),
    },
    {
      title: "Reported Date",
      dataIndex: "reportedDate",
      key: "reportedDate",
      sorter: (a, b) => new Date(a.reportedDate) - new Date(b.reportedDate),
      render: (text) => {
        const formattedDate = new Date(text).toLocaleDateString();
        const [month, day, year] = formattedDate.split("/");
        return `${day}-${month}-${year}`;
      },
    },
    {
      title: "Injured Parts",
      dataIndex: "injuredParts",
      key: "injuredParts",
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "details",
    },
  ];

  return (
    <div className="report">
      <Navbar />
      <h1>Report</h1>
      <Table
        dataSource={reportData.map((item) => ({
          key: item._id,
          reporter: item.reporter,
          dateOfIncident: item.dateOfIncident,
          timeOfIncident: item.timeOfIncident,
          reportedDate: item.reportedDate,
          injuredParts: item.injuredParts.join(", "),
          details: Object.entries(item.details)
            .map(([key, value]) => `${key}: ${value}`)
            .join(", "),
        }))}
        columns={columns}
      />
    </div>
  );
};

export default Report;
