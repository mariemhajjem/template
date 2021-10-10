import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { Modal, Button } from "antd";
import { Form, Input, Select, InputNumber } from "antd";
import { addCenter } from "../../../redux/actions/CenterAction";

function AddCenter() {
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  

  const [state, setState] = useState({
    center_name: "",
    // gouvernorat: "",

    // center_capacity: "",
  });

  const [error, setError] = useState("");
  let dispatch = useDispatch();
  const { center_name } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
 
  const [state, setState] = useState({
    center_name: "",
    // gouvernorat: "",
    
    // center_capacity: "",
  });

  const [error, setError] = useState("");
  let dispatch = useDispatch();
  const { center_name } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!center_name ) {
      setError("Missing information"); 
      console.log("clicked")
    } else {
      dispatch(addCenter(state));
      setError(""); 
      console.log("added")
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
              
              onCancel={handleCancel}
            >
              <Form
                name="control-ref"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal" 
               
              > 
               {error && <h4>{error}</h4>}
                <Form.Item
                  value={center_name}
                 
                  
                  label="center_name:"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input name="center_name" onChange={handleInputChange}/>
                </Form.Item>
                {/* <Form.Item
                  label="gouvernorat"
                  
                  value={gouvernorat}
                  rules={[
                    {
                      required: true,
                    },
                  ]} 
                  
                > 
                <Input name="gouvernorat" onChange={handleInputChange}/>
                  {/* <Select>
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
                    <Select.Option value="Sidi Bouzid">
                      Sidi Bouzid
                    </Select.Option>
                    <Select.Option value="Siliana">Siliana</Select.Option>
                    <Select.Option value="Sousse">Sousse</Select.Option>
                    <Select.Option value="Tataouine">Tataouine</Select.Option>
                    <Select.Option value="Tozeur">Tozeur</Select.Option>

                    <Select.Option value="Tunis">Tunis</Select.Option>
                    <Select.Option value="Zaghouan">Zaghouan</Select.Option>
                  </Select> */}
                {/* </Form.Item>
                <Form.Item
                  label="center_capacity:"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                   
                  value={center_capacity}
                >
                  <Input name="center_capacity" onChange={handleInputChange}/>
                </Form.Item>
                */}
                <Button onClick={handleSubmit}> Add center </Button>
              </Form>
            </Modal>
          );
      
    </div>
  );
}
export default AddCenter;
