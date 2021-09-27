import "./Stat.css";
import { Row, Col } from "antd";
import {
  CheckCircleOutlined,
  HighlightOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const style = {
  background: "white",
  padding: "6px",
  margin: "12px",
};

function Stat() {
  return (
    <div className="statStyle">
      <br />
      <h2 className="titstyle">Le vaccin en Tunisie</h2>
      <h1>
        Plus De Statistiques
        <br /> Sur Les Campagnes De Vaccination
      </h1>
      <br />
      <Row gutter={{ xs: 8, sm: 8, md: 18, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <div className="textStyle" style={style}>
            <CheckCircleOutlined className="iconStyle" />
            <br />
            <br />
            <h2>1234</h2>
            <p>Inscrits</p>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div className="textStyle" style={style}>
            <HighlightOutlined className="iconStyle" />
            <br />
            <br />
            <h2>1234?</h2>
            <p>Vaccinés 1ère dose </p>
          </div>
        </Col>

        <Col className="gutter-row" span={8}>
          <div className="textStyle" style={style}>
            <SmileOutlined className="iconStyle" />
            <br />
            <br />
            <h2> 1234</h2>
            <p>Vaccinés 2ére dose</p>{" "}
          </div>
        </Col>
      </Row>
      <br />
    </div>
  );
}
export default Stat;
