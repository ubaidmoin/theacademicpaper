 
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
    document.title = "The Academic Paper - Writers"
  }, [])
  
  return (
    <>
      {/* <IndexNavbar /> */}
      <SectionNavbar />
      <div style={{ marginTop: 120, alignItems: 'center' }}>
        <h2 align="center" style={{fontWeight:'bold'}}>Our Writers</h2>
        <h4 align="center" style={{ fontWeight: 'bold' }}>When you hire a custom academic writer, you can’t afford “second best.”</h4>
      </div>
      <div className="main">
        <Container style={{ marginTop: 20 }}>
          <Row>
            <Col lg="12">
              <p>The Academic Paper is a prestigious online educational institution known for providing quality education through a competent faculty that comprises of world-class academics and professional scholars. Our faculty members come from all corners of the world and bring with them a vast array of knowledge in their respective fields. They are not only dedicated to both teaching and rigorous research but also take an active interest in their students' personal and professional development. Faculty at Gibson is involved in designing and developing a comprehensive curriculum, making it relevant for today's challenging world.
    
Here’s a quick look at some of the seasoned professionals we have standing by ready to help you achieve your academic success:</p>
<p>Our faculty members are industry experts and professionals with advanced degrees in their relevant fields of interest. They are dedicated individuals who combine academic theory with real-life industry knowledge, providing quality learning experience and sharing their knowledge with the students.</p>
            </Col>
          </Row>          
          <Row>
            <Col md="3" sm="6">
              <h4 align="center" style={{fontWeight:'bold'}} className="images-title">Lisa McCloskey</h4>              
              <p className="text-center">Practicing California attorney, expert in APA, MLA, CMS styles. High level academic research, published business journalist, ghost writer.</p>
            </Col>
            <Col align="center" md="3" sm="6">
              <h4  align="center" style={{fontWeight:'bold'}} className="images-title">Susan Thomas</h4>              
              <p className="text-center">University Philosophy professor expert in writing research papers and dissertations.</p>
            </Col>
            <Col align="center" md="3" sm="6">
              <h4 align="center" style={{fontWeight:'bold'}} className="images-title">Dr. Jayden Brooks</h4>              
              <p className="text-center">University Management professor, expert in writing dissertations and research papers.</p>
            </Col>
            <Col align="center" md="3" sm="6">
              <h4 align="center" style={{fontWeight:'bold'}} className="images-title">Patricia H Nichols</h4>              
              <p className="text-center">High level researcher, senior editor, detailed technical writer with publishing, marketing, business management, and Human Resources background.</p>
            </Col>
          </Row>
          <Row>
            <Col md="3" sm="6">
              <h4 align="center" style={{fontWeight:'bold'}} className="images-title">David M Morrison</h4>              
              <p className="text-center">University English professor, Comparative Religion Faculty, expertise in Classic Literature and World Religions. Fluent in Greek, French, German.</p>
            </Col>
            <Col align="center" md="3" sm="6">
              <h4 align="center" style={{fontWeight:'bold'}} className="images-title">Dr. Amanda K Brandon</h4>              
              <p className="text-center">Grant and proposal writing, innovated research papers and dissertations, expertise in governmental and non-profit analysis.</p>
            </Col>
            <Col align="center" md="3" sm="6">
              <h4 align="center" style={{fontWeight:'bold'}} className="images-title">Laura K Randall</h4>              
              <p className="text-center">Expert writer in the field of education.</p>
            </Col>
            <Col align="center" md="3" sm="6">
              <h4 align="center" style={{fontWeight:'bold'}} className="images-title">Michelle Patterson</h4>              
              <p className="text-center">Frequent public speaker and published author on topics ranging from economics, demographics, population issues, cross-cultural business development, national debt management.</p>
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
