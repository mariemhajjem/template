import React from "react";
import Navbar from "../Navbar/Navbar";

import "./inscriptionCenter.css";

import { Form, Input, Button, Select, InputNumber } from "antd";

function inscriptionCenter() {
  return (
    <div>
      <Navbar />
      <p>Veuillez remplir ces champs en langue française</p>
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
          label="Nom:"
          name="Nom"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Prénom:"
          rules={[
            {
              required: true,
            },
          ]}
          name="Prenom"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email:"
          rules={[
            {
              required: true,
            },
          ]}
          name="Email"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Province"
          name="Province"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option value="Tunis">Tunis</Select.Option>
            <Select.Option value="Tunis">Manouba</Select.Option>
            <Select.Option value="Tunis">Ben Arous</Select.Option>
            <Select.Option value="Tunis">Marsa</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Age"
          name="Age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Button type="primary" block htmlType="submit" shape="round">
          S'inscrire
        </Button>
      </Form>
    </div>
  );
}
export default inscriptionCenter;
