import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import Gaas from "../components/gaas";
import Text from "../components/text";
import CallToAction from "../components/cts";
import Footer from "../components/footer";
import Case1 from "../components/case1";
import Case2 from "../components/case2";
import Case3 from "../components/case3.js";
import { Element } from "react-scroll";
import shapeImage from "../images/section4.png";

const IndexPage = ({ data }) => (
  <Layout>
    <div className="section1" style={{ background: "#EDEDED" }}>
      <Header />
    </div>
    <Element name="ElementSection2">
      <div className="section2" style={{ background: "#FF916C" }}>
        <Gaas />
      </div>
    </Element>
    <div className="section3">
      <Text />
    </div>
    <div
      className="section4"
      style={{ background: `url(${shapeImage})`, backgroundSize: "cover", backgroundPositionX: "center", backgroundPositionY: "bottom" }}
    >
      <Case1 />
    </div>
    <div className="section5" style={{ background: "#92D6D0" }}>
      <Case2 />
    </div>
    <div className="section6" style={{ background: "#FF4876" }}>
      <Case3 />
    </div>
    <div className="cts">
      <CallToAction />
    </div>
    <div className="footer">
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`;
