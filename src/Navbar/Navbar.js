import { Menu, Image } from "antd";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../img/logoTun.png";
import i18n from "../i18n";
import React from 'react'

const { SubMenu } = Menu;
const centerStyle = {
  justifyContent: "center",
  position: "fixed",
  zIndex: 1,
  width: "100%",
  height: "11.5%",
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
      <Menu mode="horizontal" style={centerStyle}>
        <Menu.Item key="img">
          <Image src={logo} className="logos" />
        </Menu.Item>

        <Menu.Item>
          <Link to="/Home">{t("Welcome")}</Link>
        </Menu.Item>

        <SubMenu key="Inscription" title="S'inscrire">
          <Menu.Item key="inscriC">
            <Link to="/inscriptionCenter">Inscription dans un centre</Link>
          </Menu.Item>
          <Menu.Item key="inscriP">
            <Link to="/inscriptionPharmacie">
              Inscription dans une pharmacie
            </Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item href="#Faq" target="#Faq" key="FAQ">
          <a href="#Faq"> FAQ</a>
        </Menu.Item>

        <Menu.Item key="Contact">
          <a href="#Contact">Contactez-nous</a>
        </Menu.Item>

        <SubMenu key="EspaceCitoyen" title="Espace Citoyen">
          <Menu.Item>Imprimer attestation</Menu.Item>
          <Menu.Item>
            <Link to="/updateInscri">Mettre à jour inscription</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/reportRdv">Report rendez-vous</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item>
          <button onClick={changeLanguage("en")}>en</button>
          <button onClick={changeLanguage("fr")}>fr</button>
        </Menu.Item>
      </Menu>
    </div>
  );
}
export default Navbar;
