import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { BillInterface } from "../models/IBill";
import moment from 'moment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
    },
    table: {
      minWidth: 650,
    },
    tableSpace: {
      marginTop: 20,
    },
  })
);

function Bills() {
  const classes = useStyles();
  const [bills, setBills] = useState<BillInterface[]>([]);

  const getBills = async () => {
    const apiUrl = "http://localhost:8080/bills";
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          setBills(res.data);
        } else {
          console.log("else");
        }
      });
  };

  useEffect(() => {
    getBills();
  }, []);

  return (
    <div>
      <Container className={classes.container} maxWidth="md">
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              ข้อมูลใบแจ้งค่าใช้จ่าย
            </Typography>
          </Box>
          <Box>
            <Button
              component={RouterLink}
              to="/bill/create"
              variant="contained"
              color="primary"
            >
              สร้างใบค่าใช้จ่าย
            </Button>
          </Box>
        </Box>
        <TableContainer component={Paper} className={classes.tableSpace}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" width="10%">
                  ลำดับ
                </TableCell>
                <TableCell align="center" width="10%">
                  ใบผลการรักษา
                </TableCell>
                <TableCell align="center" width="10%">
                  ผลการรักษา
                </TableCell>
                <TableCell align="center" width="10%">
                  ค่าใช้จ่ายทั้งหมด
                </TableCell>
                <TableCell align="center" width="10%">
                  ค่าใช้จ่ายที่ลดหย่อน
                </TableCell>
                <TableCell align="center" width="10%">
                  พนักงานบัญชี
                </TableCell>
                <TableCell align="center" width="10%">
                  วันเวลา
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bills.map((bill: BillInterface) => (
                <TableRow key={bill.ID}>
                  <TableCell align="center">{bill.ID}</TableCell>
                  <TableCell align="center">{bill.ExaminationID}</TableCell>
                  <TableCell align="center">{bill.Examination.Treatment}</TableCell>
                  <TableCell align="center">{bill.Total}</TableCell>
                  <TableCell align="center">{bill.PatientRight.Discount}</TableCell>
                  <TableCell align="center">{bill.Cashier.Name}</TableCell>
                  <TableCell align="center">{moment(bill.BillTime).format('D MMMM YYYY,HH:mm:ss')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default Bills;