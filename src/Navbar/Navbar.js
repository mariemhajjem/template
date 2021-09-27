import { Menu, Image, Button } from "antd";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import logo from "../img/logoTun.png";
import i18n from "../i18n";

const { SubMenu } = Menu;
const centerStyle = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
};
const changeLanguage = (ln) => {
  return () => {
    i18n.changeLanguage(ln);
  };
};

function Navbar() {
  const { t } = useTranslation();

  return (
    <div className="header">
      <div>
        <button onClick={changeLanguage("en")}>en</button>
        <button onClick={changeLanguage("fr")}>fr</button>
      </div>
      <Menu mode="horizontal" style={centerStyle}>
        <Menu.Item key="img">
          <Image src={logo} />
        </Menu.Item>

        <Menu.Item>
          <a href="#Home">{t("Welcome")}</a>
        </Menu.Item>

        <SubMenu key="Inscription" title="S'inscrire">
          <Menu.Item key="inscriC">Inscription dans un centre</Menu.Item>
          <Menu.Item key="inscriP">Inscription dans une pharmacie</Menu.Item>
        </SubMenu>

        <Menu.Item href="#Faq" target="#Faq" key="FAQ">
          <a href="#Faq"> FAQ</a>
        </Menu.Item>

        <Menu.Item key="Contact">
          <a href="#Contact">Contactez-nous</a>
        </Menu.Item>

        <SubMenu key="EspaceCitoyen" title="Espace Citoyen">
          <Menu.Item>Imprimer attestation</Menu.Item>
          <Menu.Item>Mettre à jour inscription</Menu.Item>
          <Menu.Item>Report rendez-vous</Menu.Item>
        </SubMenu>

        <Menu.Item key="ChangeLang">العربية</Menu.Item>
      </Menu>
    </div>
  );
}
export default Navbar;
