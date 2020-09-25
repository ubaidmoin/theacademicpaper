 
import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components

function IndexHeader() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);  
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/homepagebg.jpg") + ")"
        }}
      >
        <div className="filter" />        
        <div className="content-center" >          
          <Container>
          <Row>
              <Col lg="12" >
            <div className="title-brand">
              <h4 style={((isMobile) ? styles.titleStyleMobile : styles.titleStyleWeb)}>The Academic Paper</h4>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            {/* <h2 className="presentation-subtitle text-center" style={{marginTop: '10%', marginBottom: 15}}>
            Strongest academic writing help
            </h2> */}
            <div className="presentation-subtitle text-center" style={{marginTop: '10%', marginBottom: 15}}>
            <div>
              <b>Strongest academic writing help</b>
              </div>  
              <div>
              Affordable prices and discounts for students
              </div>                
              <div>
              On-time delivery before the expected deadline
              </div>                
              <div>
              Original papers of high quality by experts
              </div>                                
            </div>
            </Col>
            </Row>
          </Container>                            
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
        {/* <h6 className="category category-absolute">
          Designed and coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=pkr-index-page"
            target="_blank"
          >
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/creative-tim-white-slim2.png")}
            />
          </a>
        </h6> */}
      </div>      
    </>
  );
}

export default IndexHeader;

const styles = {
  titleStyleMobile: {
    fontSize: 70,
    fontWeight: 'bold'
  },
  titleStyleWeb: {
    fontSize: 100,
    fontWeight: 'bold'
  }
}
