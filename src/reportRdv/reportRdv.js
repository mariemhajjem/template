import Navbar from "../Navbar/Navbar";
import { Form, Input, Button } from "antd";
import "./reportRdv.css";
function reportRdv() {
  return (
    <div>
      <Navbar />

      <Form
        name="control-ref"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="report"
      >
        <p className="pa">Reportez votre rendez-vous</p>
        <Form.Item
          name="CIN"
          label="CIN:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Num Inscription:"
          label="Num Inscription:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" shape="round" className="bt">
          Reporter
        </Button>
      </Form>
    </div>
  );
}

export default reportRdv;
