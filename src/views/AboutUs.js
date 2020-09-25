 
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import SectionNavbar from "components/Navbars/SectionNavbar";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
import SectionBill from 'views/index-sections/SectionBill';
import {PageView, initGA} from '../settings/ReactGA';

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
    document.title = "The Academic Paper - About"
  }, [])
  
  return (
    <>
      {/* <IndexNavbar /> */}
      <SectionNavbar />
      <h2 align="center" style={{ marginTop: 150, fontWeight: 'bold' }}>About Us</h2>
      <div className="main">
        <Container style={{ marginTop: 20, paddingBottom: 20, }}>
          <Row>
            <Col className="ml-auto mr-auto" lg="6" >
              <p>
                We are very proud of our company and our team of staff. And as such, we would like to tell you all a little bit more about us. In short, we believe every student is capable of great things, and that by providing a little bit of extra help, we are helping to make the world a slightly better place.
          </p>
              <h3 style={{ fontWeight: 'bold' }}>Learn more about our team</h3>
              <ul>
                <li>
                  Our team, coupled with our ethos, are what make us great. We are proud of our dedicated team and want to tell you a little bit about them. The team is made of multiple in-house and remote departments where writers and support representatives are the ones students communicate with.
                </li>
                <li>
                  Our writers are all experts in their fields, and all hold academic qualifications. They are knowledgeable and passionate both about writing and about their specialist subject. Each writer is verified and put through multiple tests before being accepted to our team. The probation period of newcomers is curated by quality assurance specialists and senior writers who make sure that customer's expectations are met in each order.
                </li>
                <li>
                  Our dedicated support team excel at customer service. They are passionate about providing our customers with the best service they can. These people are taught to help students with every type of situation where our help is required. The working schedule is arranged to make us available at nights and during high-load seasons.
                </li>
              </ul>              

            </Col>
            <Col className="ml-auto mr-auto" lg="6">
              <SectionBill />
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" lg="12">
            <p>About us
We are very proud of our company and our team of staff. And as such, we would like to tell you all a little bit more about us. In short, we believe every student is capable of great things, and that by providing a little bit of extra help, we are helping to make the world a slightly better place.
Learn more about our team
Our team, coupled with our ethos, are what make us great. We are proud of our dedicated team and want to tell you a little bit about them. The team is made of multiple in-house and remote departments where writers and support representatives are the ones students communicate with.
Our writers are all experts in their fields, and all hold academic qualifications. They are knowledgeable and passionate both about writing and about their specialist subject. Each writer is verified and put through multiple tests before being accepted to our team. The probation period of newcomers is curated by quality assurance specialists and senior writers who make sure that customer's expectations are met in each order.
Our dedicated support team excel at customer service. They are passionate about providing our customers with the best service they can. These people are taught to help students with every type of situation where our help is required. The working schedule is arranged to make us available at nights and during high-load seasons.
We also provide guides and samples to help students learn best writing practices. We produce step-by-step guides to researching, structuring, writing and editing your academic papers. We also show you what your professors are looking for, and what you need to cover to get the highest grades.</p>
              <p>We hope you have enjoyed learning a little bit more about us. If you have any questions left, don’t hesitate to get in touch. We love our company and fully believe in what we do, and we love talking to our customers about our vision.</p>
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
