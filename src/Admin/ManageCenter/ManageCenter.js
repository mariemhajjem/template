import SideBar from "../../SideBar/SideBar";
import AddCenter from "./AddCenter/AddCenter";
import { Layout, Menu, Breadcrumb } from "antd";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchCenters } from "../../redux/actions/CenterAction";
import { deleteCenter } from "../../services/center.service";
const { Header, Content, Sider, Footer } = Layout;
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#DDD",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    padding: "7px 8px !important",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function ManageCenter() {
  const centers = useSelector((state) => state.centers);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const handleDeleteCenter = async (center_id) => {
    dispatch(deleteCenter(center_id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        await dispatch(fetchCenters());

        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log("An error occurred when we tried to fetch centers");
      }
    };
    console.log("useEffect");

    fetchData();
  }, []);

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <AddCenter />
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>province</TableCell>
                    <TableCell>capacity</TableCell>
                    <TableCell>vac number</TableCell>
                    <TableCell>vac type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {centers.map((center, index) => (
                    <StyledTableRow key={center._id}>
                      <StyledTableCell> {index}</StyledTableCell>
                      <StyledTableCell> {center._id}</StyledTableCell>

                      <StyledTableCell>{center.center_name}</StyledTableCell>
                      <StyledTableCell>
                        {center.center_province}
                      </StyledTableCell>
                      <StyledTableCell>
                        {center.center_capacity}
                      </StyledTableCell>
                      <StyledTableCell>{center.number_vaccine}</StyledTableCell>
                      <StyledTableCell>
                        {/* <UpdateCategoryModal category={category} /> */}

                        <IconButton
                          onClick={() => handleDeleteCenter(center._id)}
                        >
                          <DeleteIcon className="btnColorDelete" />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Content>
        </Layout>{" "}
      </Layout>
    </div>
  );
}

export default ManageCenter;
