 
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>         
          <div className="credits ml-auto" style={{marginTop:-20}}>
            <span className="copyright">
              @ 2020, All rights reserved.
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
