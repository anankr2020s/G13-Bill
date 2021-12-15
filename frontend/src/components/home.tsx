import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";

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

function Home() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container} maxWidth="md">
        <h1 style={{ textAlign: "center" }}>ระบบใบแจ้งค่าใช้จ่าย</h1>
        <h4>Requirements</h4>
        <p>
        ระบบจัดการคนไข้นอก เป็นระบบจัดการสำหรับบุคลากรทางการแพทย์ 
        ในส่วนของระบบใบแจ้งค่าใช้จ่าย จะเป็นการรวบรวมค่าใช้จ่ายต่างๆ 
        จากในส่วนของข้อมูลผลการรักษาของคนไข้  
        โดยจะมีการตรวจสอบสิทธิในการรักษาของคนไข้ 
        ว่าสิทธิการรักษาที่คนไข้มีนั้น สามารถลดหย่อนค่าใช้จ่าย 
        ได้อย่างไรบ้าง  หลังจากนั้นจึงจะทำการแจ้งใบค่าใช้จ่าย 
        ให้แก่คนไข้ โดยทุกการออกใบแจ้งค่าใช้จ่าย
         ระบบจะทำการจัดเก็บ บันทึกข้อมูลของใบแจ้งค่าใช้จ่ายนั้นไว้อัตโนมัติ 
         เพื่อให้สามารถทำการตรวจสอบค่าใช้จ่ายต่างๆ ย้อนหลังได้
        </p>
      </Container>
    </div>
  );
}
export default Home;