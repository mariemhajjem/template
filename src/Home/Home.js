import Faq from "./Faq";
import Stat from "./Stat";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";
import { Carousel, Image } from "antd";
import tal from "../img/box-img2.jpg";
import React from 'react'


import tal3 from "../img/tal3.jpg";

const contentStyle = {
  height: "650px",
  color: "black",
  lineHeight: "160px",
  innerHeight: "100%",
  background: "white",
};

function Home() {
  return (
    <div id="Home">
      <Navbar />

      <Carousel autoplay>
        <div>
          <Image src={tal3} style={contentStyle} className="full" />
        </div>
        <div>
          <Image src={tal} className="full" style={contentStyle} />
        </div>
      </Carousel>
      <br />
      <Faq />
      <br />
      <Stat />
      <br />
      <Contact />
      <br />
      <Footer />
    </div>
  );
}
export default Home;
