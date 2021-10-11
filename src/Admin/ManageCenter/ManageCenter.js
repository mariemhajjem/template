import SideBar from "../../SideBar/SideBar";
import AddCenter from "./AddCenter/AddCenter";
import { Layout, Button } from "antd";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";

const { Content } = Layout;
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
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Gouvernorat</TableCell>
                    <TableCell>Capacity</TableCell>
                    <TableCell>Vac-Type</TableCell>
                    <TableCell>Vac-Stock</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell> </StyledTableCell>
                    <StyledTableCell> </StyledTableCell>

                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>

                    <StyledTableCell>-</StyledTableCell>
                    <StyledTableCell>-</StyledTableCell>
                    <StyledTableCell>
                      <Button>Update </Button>
                      <IconButton>
                        <DeleteIcon className="btnColorDelete" />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
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
