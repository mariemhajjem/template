import Navbar from "../Navbar/Navbar";
import { Form, Input, Button } from "antd";
import "./updateInscri.css";
function updateInscri() {
  return (
    <div>
      <Navbar />

      <Form
        name="control-ref"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="update"
      >
        <p className="para">Mettre à jour votre inscription</p>
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
        <Button type="primary" className="bt" htmlType="submit" shape="round">
          Mettre à jour
        </Button>
      </Form>
    </div>
  );
}

export default updateInscri;
