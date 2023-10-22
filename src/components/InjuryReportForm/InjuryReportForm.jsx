import { Form, Input, Select } from "antd";

import "./InjuryReportForm.css";
import Body from "../Body/Body";

const InjuryFormReport = () => {
  return (
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
        maxWidth: 600,
      }}
    >
      <Form.Item label="Form Size" name="size"></Form.Item>
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Body />
      </Form.Item>
    </Form>
  );
};
export default InjuryFormReport;
