import { useState, useEffect } from "react";
import { Button, DatePicker, Form, Input, TimePicker, message } from "antd";
import "./InjuryReportForm.css";
import Body from "../Body/Body";
import axios from "axios";

const InjuryFormReport = () => {
  const [injuryParts, setInjuryParts] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [form] = Form.useForm();

  const handleSelectedBodyParts = (selectedParts) => {
    setInjuryParts(selectedParts);
  };

  const handleInputChange = (part, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [part]: value,
    }));
  };

  const injuriesList = injuryParts.map((item, index) => (
    <div key={index}>
      <h3>{item}</h3>
      <Input
        placeholder={`Enter details for ${item}`}
        onChange={(e) => handleInputChange(item, e.target.value)}
      />
    </div>
  ));

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}--${currentDate.getFullYear()}`;
    form.setFieldsValue({
      reportedDate: formattedDate,
    });
  }, [form]);

  const sendData = async () => {
    try {
      const values = await form.validateFields();
      const data = {
        reporter: values.reporter,
        dateOfIncident: values.dateOfIncident,
        timeOfIncident: values.timeOfIncident,
        reportedDate: values.reportedDate,
        injuredParts: injuryParts,
        details: inputValues,
      };
      const response = await axios.post(
        "http://localhost:3000/api/injuryReport",
        data
      );
      message.success("Injury Form submitted successfully!");

      console.log("Result:", response.data);
      form.resetFields();
      setInjuryParts([]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="injuryReportForm">
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: "large" }}
        size="large"
        style={{ maxWidth: 1000 }}
      >
        <h1>Injury Form</h1>
        <Form.Item
          label="Reporter"
          name="reporter"
          rules={[{ required: true, message: "Please enter reporter name" }]}
        >
          <Input placeholder="Enter Reporter Name" />
        </Form.Item>
        <Form.Item
          label="Date of Incident"
          name="dateOfIncident"
          rules={[
            { required: true, message: "Please select date of incident" },
          ]}
        >
          <DatePicker
            picker="date"
            format="YYYY-MM-DD"
            inputReadOnly // Prevent manual input
          />
        </Form.Item>
        <Form.Item
          label="Time of Incident"
          name="timeOfIncident"
          rules={[
            { required: true, message: "Please select time of incident" },
          ]}
        >
          <TimePicker
            picker="time"
            format="HH:mm A" // Set the desired time format here
            inputReadOnly // Prevent manual input
          />
        </Form.Item>
        <div className="bodyContainer">
          <div className="divLeft">
            <Form.Item>
              <h2>Injured Parts</h2>
              {injuriesList}
            </Form.Item>
          </div>
          <div className="divRight">
            <Form.Item name="reportedDate" hidden>
              <Input />
            </Form.Item>
            <Form.Item>
              <Body onBodyPartSelect={handleSelectedBodyParts} />
            </Form.Item>
          </div>
        </div>
        <div className="bottom">
          <Button type="primary" onClick={sendData}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default InjuryFormReport;
