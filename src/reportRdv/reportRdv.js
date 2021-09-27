import Navbar from "../Navbar/Navbar";
import { Form, Input, Button } from "antd";
import "./reportRdv.css";
function reportRdv() {
  return (
    <div>
      <Navbar />
      <p>Reportez votre rendez-vous</p>
      <Form
        name="control-ref"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="inscriC"
      >
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
        <Button type="primary" block htmlType="submit" shape="round">
          Reporter
        </Button>
      </Form>
    </div>
  );
}

export default reportRdv;
