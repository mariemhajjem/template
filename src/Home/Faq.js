import "./Faq.css";
import { Row, Col } from "antd";
import {
  BarChartOutlined,
  QuestionCircleOutlined,
  HighlightOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const style = {
  background: "white",
  padding: "6px",
  margin: "12px",
};

function Faq() {
  return (
    <div id="Faq">
      <br />
      <h1>Questions fréquentes sur EVAX</h1>
      <br />

      <Row gutter={{ xs: 8, sm: 8, md: 18, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <div style={style} className="textStyle">
            <BarChartOutlined className="iconStyle" />
            <br />
            <br />
            <h3>
              Quels sont les grands principes de la stratégie de vaccination
              contre la COVID-19 ?
            </h3>
            <p>
              <p>La Tunisie s’est fixé les principes suivants : </p>
              Un accès équitable pour des vaccins gratuits, efficaces, sûrs et
              de qualité approuvés par les données scientifiques en temps
              opportun
              <br />
              Une prise de décision personnelle basée sur des données
              transparentes et compréhensibles
            </p>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style} className="textStyle">
            <QuestionCircleOutlined className="iconStyle" />
            <br />
            <br />
            <h3>Comment s’enregistrer pour la vaccination Covid-19 ?</h3>
            <p>Website : www.evax.tn </p>
            <p>SMS : 85355</p> <p> USSD : *2021#</p>
          </div>
        </Col>

        <Col className="gutter-row" span={8}>
          <div style={style} className="textStyle">
            <HighlightOutlined className="iconStyle" />
            <br />
            <br />
            <h3> Quels sont les objectifs de la vaccination ?</h3>
            <p>
              Le premier objectif de la vaccination, c’est de faire baisser le
              nombre des formes graves de COVID-19.{" "}
            </p>{" "}
            <p>
              Les résultats des études cliniques des candidats vaccins semblent
              converger pour démontrer un fait principal : la vaccination permet
              de réduire massivement la mortalité due au virus et à ses formes
              graves.
            </p>{" "}
          </div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 8, md: 18, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <div style={style} className="textStyle">
            <DollarOutlined className="iconStyle" />
            <br />
            <br />
            <h3>La vaccination contre la Covid-19 sera-t-elle gratuite ?</h3>
            <p>Oui. </p>
            <p>
              La vaccination sera gratuite pour tous en Tunisie, mais selon la
              priorité établie par l es autorités.
            </p>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style} className="textStyle">
            <EnvironmentOutlined className="iconStyle" />
            <br />
            <br />
            <h3>Où se faire vacciner ?</h3>
            <p>Il y aura environ 200 centres de vaccination à raison de :</p>
            <p>
              1 à 2 grand (s) centre(s) par gouvernorat ouvert toute la semaine
              Et un centre par délégation à identifier par direction régionale
              de la santé ouvert le weekend
            </p>
          </div>
        </Col>

        <Col className="gutter-row" span={8}>
          <div style={style} className="textStyle">
            <ExclamationCircleOutlined className="iconStyle" />
            <br />
            <br />
            <h3> Que faire en cas de problème lors de l'inscription?</h3>
            <p>
              Un numéro vert gratuit a été mis en place pour accompagner les
              citoyens tout au long de la campagne de vaccination. <br />
              Le numéro vert : 80102021, ouvert du lundi au vendredi de 09h à
              17h
            </p>{" "}
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Faq;
