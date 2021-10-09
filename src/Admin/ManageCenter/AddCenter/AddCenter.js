// import React, { useStyles, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import Slide from "@material-ui/core/Slide";
// import IconButton from "@material-ui/core/IconButton";
// import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogActions from "@material-ui/core/DialogActions";
// import { TextField } from "@material-ui/core";

// // @material-ui/icons

// import { Close, Button } from "@material-ui/icons/Close";
// // core components

// // form validation
// import { Formik, ErrorMessage } from "formik";
// import * as Yup from "yup";

// import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";
// import { addCenter } from "../../../redux/actions/";

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// const validationSchema = Yup.object().shape({
//   center_name: Yup.string().required("center_name required"),
// });

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="down" ref={ref} {...props} />;
// });

// Transition.displayName = "Transition";

// function AddCenter() {
//   const dispatch = useDispatch();

//   const classes = useStyles();
//   const [classicModal, setClassicModal] = React.useState(false);

//   const [open, setOpen] = useState(false);
//   const [message, setMessage] = useState();
//   const [typeMessage, setTypeMessage] = useState();

//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }

//     setOpen(false);
//   };

//   const handleAddCenter = async (values) => {
//     await dispatch(addCenter(values.center_name)).then((result) => {
//       console.log(result);
//       if (result === false) {
//         setMessage("Center name exist ");
//         setTypeMessage("error");
//         setOpen(true);
//         setClassicModal(false);
//       } else {
//         setMessage("Success add center");
//         setTypeMessage("success");
//         setOpen(true);
//         setClassicModal(false);
//       }
//     });
//   };

//   return (
//     <div>
//       <Snackbar
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "center",
//         }}
//         open={open}
//         autoHideDuration={2000}
//         onClose={handleClose}
//       >
//         <Alert onClose={handleClose} severity={typeMessage}>
//           {message}
//         </Alert>
//       </Snackbar>

//       <Button
//         variant="outlined"
//         className="BtnColorGreen"
//         onClick={() => setClassicModal(true)}
//       >
//         Add new center
//       </Button>
//       <Dialog
//         classes={{
//           root: classes.center,
//           paper: classes.modal,
//         }}
//         open={classicModal}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={() => setClassicModal(false)}
//         aria-labelledby="classic-modal-slide-title"
//         aria-describedby="classic-modal-slide-description"
//       >
//         <DialogTitle
//           id="classic-modal-slide-title"
//           disableTypography
//           className={classes.modalHeader}
//         >
//           <IconButton
//             className={classes.modalCloseButton}
//             key="close"
//             aria-label="Close"
//             color="inherit"
//             onClick={() => setClassicModal(false)}
//           >
//             <Close className={classes.modalClose} />
//           </IconButton>
//         </DialogTitle>

//         <Formik
//           initialValues={{
//             center_name: "",
//           }}
//           validationSchema={validationSchema}
//           onSubmit={(values) => {
//             handleAddCenter(values);
//           }}
//         >
//           {(formik) => {
//             const {
//               handleSubmit,
//               values,
//               handleChange,
//               setFieldValue,
//               handleBlur,
//             } = formik;

//             return (
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   handleSubmit();
//                 }}
//                 className={classes.form}
//               >
//                 <DialogContent
//                   id="classic-modal-slide-description"
//                   className="modalReport"
//                 >
//                   <TextField
//                     label="center_name"
//                     type="text"
//                     fullWidth
//                     value={values.center_name}
//                     onChange={handleChange("center_name")}
//                     onBlur={handleBlur}
//                     name="center_name"
//                     variant="outlined"
//                     margin="normal"
//                   />
//                   <ErrorMessage
//                     name="center_name"
//                     component="span"
//                     className="errorValidation"
//                   />
//                 </DialogContent>
//                 <DialogActions className={classes.modalFooter}>
//                   <Button color="warning" type="submit" simple>
//                     Save center
//                   </Button>
//                   <Button
//                     onClick={() => setClassicModal(false)}
//                     color="danger"
//                     simple
//                   >
//                     Close
//                   </Button>
//                 </DialogActions>
//               </form>
//             );
//           }}
//         </Formik>
//       </Dialog>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { Modal, Button } from "antd";
import { Form, Input, Select, InputNumber } from "antd";
import { addCenter } from "../../../redux/actions/CenterAction";
function AddCenter() {
  const dispatch = useDispatch();
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
  const [message, setMessage] = useState();
  const [typeMessage, setTypeMessage] = useState();
  const handleAddCenter = async (values) => {
    await dispatch(addCenter(values.center_name)).then((result) => {
      console.log(result);
      if (result === false) {
        setMessage("Center name exist ");
        setTypeMessage("error");
      } else {
        setMessage("Success add center");
        setTypeMessage("success");
      }
    });
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add new center
      </Button>
      <Formik
        initialValues={{
          center_name: "",
        }}
        onSubmit={(values) => {
          handleAddCenter(values);
        }}
      >
        {(formik) => {
          const {
            handleSubmit,
            values,
            handleChange,
            setFieldValue,
            handleBlur,
          } = formik;

          return (
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
                initialValues={{
                  center_name: "",
                }}
                onSubmit={(values) => {
                  handleAddCenter(values);
                }}
              >
                <Form.Item
                  value={values.center_name}
                  onChange={handleChange("center_name")}
                  name="Name"
                  label="Name:"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Gouvernorat"
                  name="Gouvernorat"
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
                    <Select.Option value="Sidi Bouzid">
                      Sidi Bouzid
                    </Select.Option>
                    <Select.Option value="Siliana">Siliana</Select.Option>
                    <Select.Option value="Sousse">Sousse</Select.Option>
                    <Select.Option value="Tataouine">Tataouine</Select.Option>
                    <Select.Option value="Tozeur">Tozeur</Select.Option>

                    <Select.Option value="Tunis">Tunis</Select.Option>
                    <Select.Option value="Zaghouan">Zaghouan</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Capacity:"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  name="Capacity"
                >
                  <Input />
                </Form.Item>
                <Button color="warning" type="submit" simple>
                  Save center
                </Button>
              </Form>
            </Modal>
          );
        }}
      </Formik>
    </div>
  );
}
export default AddCenter;
