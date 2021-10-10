import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Modal, Button } from "antd";
import { Form, Input, Select, InputNumber } from "antd";
import { addCenter } from "../../../redux/actions/CenterAction";
function AddCenter() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [state, setState] = useState({
    Name: "",
    Governorate: "",
    City: "",
    Capacity: "",
  });

  const [error, setError] = useState("");
  let dispatch = useDispatch();
  const { Name, Governorate, City, Capacity } = state;

  const handleInputChange = (e) => {
    let { Name, value } = e.target;
    setState({ ...state, [Name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Name || !Governorate || !City || !Capacity) {
      setError("Missing information");
    } else {
      dispatch(addCenter(state));
      setError("");
    }
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add new center
      </Button>

      <Modal
        title="Add new center"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="control-ref"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onSubmit={handleSubmit}
        >
          {error && <h4>{error}</h4>}
          <Form.Item
            label="Name:"
            value={Name}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={handleInputChange} />
          </Form.Item>
          <Form.Item
            label="Governorate"
            value={Governorate}
            rules={[
              {
                required: true,
              },
            ]}
          >
            {" "}
            <Input onChange={handleInputChange} />
            {/* <Select>
              <Select.Option value={Ariana}>Ariana</Select.Option>
              <Select.Option value={Beja}>Beja</Select.Option>
              <Select.Option value={BenArous}>Ben Arous</Select.Option>
              <Select.Option value={Bizerte}>Bizerte</Select.Option>
              <Select.Option value={Gabes}>Gabes</Select.Option>
              <Select.Option value={Gafsa}>Gafsa</Select.Option>
              <Select.Option value={Jendouba}>Jendouba</Select.Option>
              <Select.Option value={Kairouan}>Kairouan</Select.Option>
              <Select.Option value={Kasserine}>Kasserine</Select.Option>
              <Select.Option value={Kebili}>Kebeli</Select.Option>
              <Select.Option value={Lekef}>Le kef</Select.Option>
              <Select.Option value={Mahdia}>Mahdia</Select.Option>

              <Select.Option value={Manouba}>La Manouba</Select.Option>
              <Select.Option value={Medenine}>Medenine</Select.Option>
              <Select.Option value={Monastir}>Monastir</Select.Option>
              <Select.Option value={Nabeul}>Nabeul</Select.Option>
              <Select.Option value={Sfax}>Sfax</Select.Option>
              <Select.Option value={SidiBouzid}>Sidi Bouzid</Select.Option>
              <Select.Option value={Siliana}>Siliana</Select.Option>
              <Select.Option value={Sousse}>Sousse</Select.Option>
              <Select.Option value={Tataouine}>Tataouine</Select.Option>
              <Select.Option value={Tozeur}>Tozeur</Select.Option>

              <Select.Option value={Tunis}>Tunis</Select.Option>
              <Select.Option value={Zaghouan}>Zaghouan</Select.Option>
            </Select> */}
          </Form.Item>
          <Form.Item
            label="Capacity:"
            rules={[
              {
                required: true,
              },
            ]}
            value={Capacity}
          >
            <Input onChange={handleInputChange} />
          </Form.Item>
          <Button color="warning" type="submit" simple>
            Add center
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export default AddCenter;
