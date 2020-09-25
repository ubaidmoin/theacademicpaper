
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
} from "reactstrap";
import { Grid } from "@material-ui/core";
import { PhoneRounded, EmailRounded } from "@material-ui/icons";
// core components
import SectionNavbar from "components/Navbars/SectionNavbar";
import DemoFooter from "components/Footers/DemoFooter.js";
// import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
import SectionBill from 'views/index-sections/SectionBill';
import { PageView, initGA } from '../settings/ReactGA';
import locationOnMap from 'assets/img/locationOnMap.png';

function Prices() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  React.useEffect(() => {
    initGA('UA-163347648-1');
    PageView();
    document.title = "The Academic Paper - Contact Us"
  }, [])

  return (
    <>
      {/* <IndexNavbar /> */}
      <SectionNavbar />
      <h2 align="center" style={{ marginTop: 150, fontWeight: 'bold' }}>Contact Us</h2>
      <div className="main">
        <Container style={{ marginTop: 20, paddingBottom: 20, }}>
          <Row>
            <Col className="ml-auto mr-auto" lg="6" >
              <p>
                Contact us
                Haven't found needed information in our FAQ? Call our support managers and discuss all the details with them. They know how to solve all the problems clients may face due to their experience and knowledge.
          </p>              
              <Grid container spacing={2} >
                <Grid item lg={12} md={12} xs={12} >
                <p style={{ fontWeight: 'bold', marginTop: 15, }}>
                <EmailRounded /> info.theacademicpaper@gmail.com
                </p>
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                <p style={{ fontWeight: 'bold' }}>
                <PhoneRounded /> +1 (559) 282-3839 (Call or Whatsapp)
                </p>
                </Grid>
              </Grid>
              <p>
                Head office:<br />
              Midtown Manhattan<br />
              Neighborhood in New York City, New York<br />
              </p>
              <img
              alt="map"
              src={locationOnMap}
              style={{
                width: 500,
                marginTop: 20,
                marginBottom: 20
              }}
              />
              <p>Our goal is to guarantee trust between clients and writers. We strive to make the work with TheAcademicPaper as smooth and effective as possible in order to provide you with the best writing services you can find.</p>
            </Col>
            <Col className="ml-auto mr-auto" lg="6">
              <SectionBill />
            </Col>
          </Row>
        </Container>
        <SectionDownload />
        <DemoFooter />
        {/* <SectionNavigation /> */}
      </div>
    </>
  );
}

export default Prices;
