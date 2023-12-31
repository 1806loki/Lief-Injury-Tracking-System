import { useState, useEffect } from "react";
import { Table, DatePicker, Input, Button } from "antd";
import { Popconfirm } from "antd";

import axios from "axios";
import "./ReportList.css";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BASE_URL } from "../../utils/config";

const Report = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API = `${BASE_URL}api/injuryReport`;
        const response = await axios.get(API);
        const result = await response.data;
        console.log(result);
        setReportData(result);
      } catch (err) {
        console.log(`Error with Report Data: ${err}`);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (key) => {
    console.log(`Editing report with key: ${key}`);
  };

  const handleDelete = async (key) => {
    const API = `${BASE_URL}api/injuryReport/${key}`;

    try {
      await axios.delete(API);
      console.log("Report Deleted");
      window.location.reload();
    } catch (err) {
      console.log(`Error : ${err}`);
    }

    console.log(`Deleting report with key: ${key}`);
  };

  const columns = [
    {
      title: "Reporter",
      dataIndex: "reporter",
      key: "reporter",
      sorter: (a, b) => a.reporter.localeCompare(b.reporter),
      // Filter dropdown to search by names
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Reporter"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            style={{ marginBottom: 8, display: "block" }}
          />
          <Button
            type="primary"
            onClick={() => {
              confirm();
            }}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button
            onClick={() => {
              clearFilters();
            }}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => {
        // Case-insensitive search by reporter names
        return record.reporter.toLowerCase().includes(value.toLowerCase());
      },
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
      // Filter dropdown to filter by dates
      filterDropdown: ({
        setSelectedKeys,
        // eslint-disable-next-line no-unused-vars
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <DatePicker
            style={{ marginBottom: 8, display: "block" }}
            onChange={(date) => setSelectedKeys(date ? [date] : [])}
            format="DD-MM-YYYY"
          />
          <Button
            type="primary"
            onClick={() => {
              confirm();
            }}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button
            onClick={() => {
              clearFilters();
            }}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => {
        return record.dateOfIncident.includes(value.format("DD-MM-YYYY"));
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
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button
            style={{
              width: "80px",
            }}
            onClick={() => handleEdit(record.key)}
            type="primary"
            size="small"
          >
            <AiOutlineEdit />
            Edit
          </Button>{" "}
          <Popconfirm
            title="Delete the Report"
            description="Are you sure to delete this Report?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDelete(record.key)}
          >
            <Button
              style={{
                width: "80px",
              }}
              type="primary"
              size="small"
              danger
            >
              <AiOutlineDelete />
              Delete
            </Button>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className="report">
      <h1>List of Reports</h1>
      <Table
        className="table"
        dataSource={
          reportData
            ? reportData.map((item) => ({
                key: item._id,
                reporter: item.reporter,
                dateOfIncident: item.dateOfIncident,
                timeOfIncident: item.timeOfIncident,
                reportedDate: item.reportedDate,
                injuredParts: item.injuredParts.join(", "),
                details: item.details
                  ? Object.entries(item.details)
                      .map(([key, value]) => `${key}: ${value}`)
                      .join(", ")
                  : "No Details Available",
              }))
            : []
        }
        columns={columns}
      />
    </div>
  );
};

export default Report;
