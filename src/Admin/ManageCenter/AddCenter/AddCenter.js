import React, { useState } from "react";

import { Modal, Button } from "antd";
import { Form, Input, Select, InputNumber } from "antd";

function AddCenter() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add new center
      </Button>

      <Modal title="Add new center" visible={isModalVisible}>
        <Form
          name="control-ref"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item
            label="center_name:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input name="center_name" />
          </Form.Item>
          <Form.Item
            label="gouvernorat"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="Ariana">Ariana</Select.Option>
              <Select.Option value="Beja">Beja</Select.Option>
              <Select.Option value="Ben Arous">Ben Arous</Select.Option>
              <Select.Option value="Bizerte">Bizerte</Select.Option>
              <Select.Option value="Gabes">Gabes</Select.Option>
              <Select.Option value="Gafsa">Gafsa</Select.Option>
              <Select.Option value="Jendouba">Jendouba</Select.Option>
              <Select.Option value="Kairouan">Kairouan</Select.Option>
              <Select.Option value="Kasserine">Kasserine</Select.Option>
              <Select.Option value="Kebili">Kebeli</Select.Option>
              <Select.Option value="Le kef">Le kef</Select.Option>
              <Select.Option value="Mahdia">Mahdia</Select.Option>

              <Select.Option value="Manouba">La Manouba</Select.Option>
              <Select.Option value="Medenine">Medenine</Select.Option>
              <Select.Option value="Monastir">Monastir</Select.Option>
              <Select.Option value="Nabeul">Nabeul</Select.Option>
              <Select.Option value="Sfax">Sfax</Select.Option>
              <Select.Option value="Sidi Bouzid">Sidi Bouzid</Select.Option>
              <Select.Option value="Siliana">Siliana</Select.Option>
              <Select.Option value="Sousse">Sousse</Select.Option>
              <Select.Option value="Tataouine">Tataouine</Select.Option>
              <Select.Option value="Tozeur">Tozeur</Select.Option>

              <Select.Option value="Tunis">Tunis</Select.Option>
              <Select.Option value="Zaghouan">Zaghouan</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="City"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input name="City" />
          </Form.Item>

          <Form.Item
            label="center_capacity:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input name="capacity" />
          </Form.Item>

          <Button> Add center </Button>
        </Form>
      </Modal>
    </div>
  );
}
export default AddCenter;
