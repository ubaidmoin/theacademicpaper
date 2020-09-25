 
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionDownload() {
  return (
    <>
      <div className="section" style={{backgroundColor:'#244559'}}>
        <Container className="text-center">
          <Row style={{marginTop:-40}}>
            <Col>
            <p style={{color:'white'}}>
              TERMS OF USE
            </p>
            </Col>
            <Col>
            <p style={{color:'white'}}>
              MONEY BACK GUARANTEE
            </p>
            </Col>
            <Col>
            <p style={{color:'white'}}>
              COOKIE POLICY
            </p>
            </Col>
            <Col>
            <p style={{color:'white'}}>
              PRIVACY POLICY
            </p>
            </Col>
          </Row>          
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3 style={{color:'white'}}>Thank you for choosing us!</h3>
            </Col>            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;
