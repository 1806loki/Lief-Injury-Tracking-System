import { useState } from "react";
import { Button, Form, Input } from "antd";
import "./InjuryReportForm.css";
import Body from "../Body/Body";

const InjuryFormReport = () => {
  const [injuryParts, setInjuryParts] = useState([]);
  const [inputValues, setInputValues] = useState({});

  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const handleSelectedBodyParts = (selectedParts) => {
    setInjuryParts(selectedParts);
  };

  const handleInputChange = (part, value) => {
    setInputValues({ ...inputValues, [part]: value });
  };

  const injuriesList = () => {
    return injuryParts.map((item, index) => (
      <div key={index}>
        <h3>{item}</h3>
        <Input
          placeholder={`Enter details for ${item}`}
          onChange={(e) => handleInputChange(item, e.target.value)}
        />
      </div>
    ));
  };

  const handleSubmit = () => {
    console.log(name, date, time, inputValues);
  };

  return (
    <div className="injuryReportForm">
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: "large",
        }}
        onValuesChange="Large"
        size="large"
        style={{
          maxWidth: 1000,
        }}
      >
        <h2>Injury Form</h2>{" "}
        <Form.Item label="Reporter">
          <Input
            placeholder="Enter Reporter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Date of Incident">
          <Input type="date" onChange={(e) => setDate(e.target.value)} />
        </Form.Item>
        <Form.Item label="Time of Incident">
          <Input type="time" onChange={(e) => setTime(e.target.value)} />
        </Form.Item>
        <div className="bodyContainer">
          <div className="divLeft">
            <Form.Item>
              <h2>Injured Parts</h2>
              {injuriesList()}
            </Form.Item>
          </div>
          <div className="divRight">
            <Form.Item>
              <Body onBodyPartSelect={handleSelectedBodyParts} />
            </Form.Item>
          </div>
        </div>
        <div className="bottom">
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default InjuryFormReport;
