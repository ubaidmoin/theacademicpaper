 
import React from "react";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,  
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap";
import StarRatings from 'react-star-ratings';
import { Button } from "@material-ui/core";

import SectionBill from './SectionBill';

function IndexMain() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  // React.useEffect(() => {
  //   if (
  //     !document
  //       .getElementById("sliderRegular")
  //       .classList.contains("noUi-target")
  //   ) {
  //     Slider.create(document.getElementById("sliderRegular"), {
  //       start: [37.5],
  //       connect: [true, false],
  //       step: 0.5,
  //       range: { min: 0, max: 100 }
  //     });
  //   }
  //   if (
  //     !document.getElementById("sliderDouble").classList.contains("noUi-target")
  //   ) {
  //     Slider.create(document.getElementById("sliderDouble"), {
  //       start: [20, 80],
  //       connect: [false, true, false],
  //       step: 1,
  //       range: { min: 0, max: 100 }
  //     });
  //   }
  // });  

  return (
    <>    
      <div className="section section-buttons">
        <Container style={{ borderBottom: '2px solid gray', marginTop: -50, paddingBottom: 20 }}>
          <Row align="center">
            <Col className="ml-auto mr-auto" lg="4">
              <h3 style={{ fontWeight: 'bold' }}>Online 24/7</h3>
              <p>connection with writers and support</p>
            </Col>
            <Col className="ml-auto mr-auto" lg="4">
              <h3 style={{ fontWeight: 'bold' }}>Safe service</h3>
              <p>privacy & confidentiality guarantee</p>
            </Col>
            <Col className="ml-auto mr-auto mt-2" lg="4">            
            <StarRatings
          rating={4.7867}
          starRatedColor="#F78C42"                    
          numberOfStars={5}
          name='rating'
        />            
        {/* <h3 style={{ fontWeight: 'bold' }}>Average quality score</h3>   */}
        <p>Average quality score</p>          
            </Col>
          </Row>
        </Container>
        <Container style={{ paddingBottom: 20 }}>
          <Row align="center">
            <Col className="ml-auto mr-auto" lg="10" >
              <h2 style={{ fontWeight: 'bold' }}>Free Features</h2>
            </Col>
          </Row>
          <Row align="center" style={{ marginTop: 20 }}>
            <Col className="ml-auto mr-auto" lg="2">
              <Card style={{ backgroundColor: 'white', borderWidth: 2, borderColor: 'grey', borderRadius: 5, width: 180, height: 120 }}>
                <div style={{ borderBottom: '2px solid gray', height: 80 }}>
                  <h4 style={{ fontWeight: 'bold' }}>Limitless amendments</h4>
                </div>
                <div style={{ backgroundColor: '#F6F6F6', height: 40 }}>
                  <p style={{ fontWeight: 'bold' }}>FREE</p>
                </div>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" lg="2">
              <Card style={{ backgroundColor: 'white', borderWidth: 2, borderColor: 'grey', borderRadius: 5, width: 180, height: 120 }}>
                <div style={{ borderBottom: '2px solid gray', height: 80 }}>
                  <h4 style={{ fontWeight: 'bold' }}>Bibliography</h4>
                </div>
                <div style={{ backgroundColor: '#F6F6F6', height: 40 }}>
                  <p style={{ fontWeight: 'bold' }}>FREE</p>
                </div>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" lg="2">
              <Card style={{ backgroundColor: 'white', borderWidth: 2, borderColor: 'grey', borderRadius: 5, width: 180, height: 120 }}>
                <div style={{ borderBottom: '2px solid gray', height: 80 }}>
                  <h4 style={{ fontWeight: 'bold' }}>Outline</h4>
                </div>
                <div style={{ backgroundColor: '#F6F6F6', height: 40 }}>
                  <p style={{ fontWeight: 'bold' }}>FREE</p>
                </div>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" lg="2">
              <Card style={{ backgroundColor: 'white', borderWidth: 2, borderColor: 'grey', borderRadius: 5, width: 180, height: 120 }}>
                <div style={{ borderBottom: '2px solid gray', height: 80 }}>
                  <h4 style={{ fontWeight: 'bold' }}>Title page</h4>
                </div>
                <div style={{ backgroundColor: '#F6F6F6', height: 40 }}>
                  <p style={{ fontWeight: 'bold' }}>FREE</p>
                </div>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" lg="2">
              <Card style={{ backgroundColor: 'white', borderWidth: 2, borderColor: 'grey', borderRadius: 5, width: 180, height: 120 }}>
                <div style={{ borderBottom: '2px solid gray', height: 80 }}>
                  <h4 style={{ fontWeight: 'bold' }}>Formatting</h4>
                </div>
                <div style={{ backgroundColor: '#F6F6F6', height: 40 }}>
                  <p style={{ fontWeight: 'bold' }}>FREE</p>
                </div>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" lg="2">
              <Card style={{ backgroundColor: 'white', borderWidth: 2, borderColor: 'grey', borderRadius: 5, width: 180, height: 120 }}>
                <div style={{ borderBottom: '2px solid gray', height: 80 }}>
                  <h4 style={{ fontWeight: 'bold' }}>Plagiarism report</h4>
                </div>
                <div style={{ backgroundColor: '#F6F6F6', height: 40 }}>
                  <p style={{ fontWeight: 'bold' }}>FREE</p>
                </div>
              </Card>
            </Col>
          </Row>
          <div align="center" style={{ paddingTop: 25, justifyContent:'center', alignItems:'center' }}>
          <Button href="/ordernow"  color="secondary" variant="contained" style={{ height: 50, width: 300, fontSize: 17, borderRadius: 10, fontWeight: 'bold', color: 'white' }}>
              Proceed to Order
                </Button>
          </div>
        </Container>  
        <Container>
        <Row align="center">
            <Col className="ml-auto mr-auto" lg="10">
            <SectionBill />
            </Col>
          </Row>
          
        </Container>              
        <Container style={{ marginTop: 20, paddingBottom: 20, backgroundColor: '#F6F6F6' }}>
          <Row align="center">
            <Col className="ml-auto mr-auto" lg="10">
              <h2 style={{ fontWeight: 'bold' }}>Excellent Academic Writing Services Brought to You by The Academic Paper</h2>
            </Col>
          </Row>
          <Row align="left">
            <Col className="ml-auto mr-auto" lg="4">
              <h4 style={{ fontWeight: 'bold' }}>The Academic Paper: The Best Academic Writing Service Available Today</h4>
              <p>If you are looking for the best academic writing services, then you have come to the right place. TheAcademicPaper.com specialises in custom academic papers for all levels of students. From students who are in high school, through to college graduates and undergraduates, all the way up to university students at master’s degree and even doctoral levels. Academized offer an academic writing service across all subjects and their sub-topics and we offer every essay type from a thesis based argumentative essay to a literary review. So whatever it is that you need help with academic papers for, you’ve come to the right website. We can’t wait to show you more!</p>
              <h4 style={{ fontWeight: 'bold' }}>Let Our Qualified Academic Writers Help You Make That Deadline Now</h4>
              <p>Whether you’ve got an urgent deadline, or a more leisurely one, writing academic essays is never an easy task. The research, writing and editing all takes time. But now you can buy academic papers online, the process just got a whole lot easier. You can relax knowing that our reliable, expert writers will produce you a top quality and 100% plagiarism free essay that is written just for you, while you take care of the more interesting aspects of student life. Our team of professional academic paper writers are all legit native English speakers who will take your order seriously.

If you often find yourself thinking should I do my academic papers or should I go to that party I’ve been looking forward to for weeks, then it’s a good job you have found our company.</p>
            </Col>
            <Col className="ml-auto mr-auto" lg="4">
              <h4 style={{ fontWeight: 'bold' }}>Someone Write My Academic Papers for Me!</h4>
              <p>You are only a couple of clicks away from the purchase of a shiny new academic paper that will impress your professors and get you the grade you deserve – with none of the hassle.                </p>
              <h4 style={{ fontWeight: 'bold' }}>Money Matters</h4>
              <p>We know that as a student, keeping your costs down is a priority, which is why we always provide the best value for money we can.

Of course we appreciate that you want the best academic paper writers at the best prices. And while we resist the urge to use the word cheap which implies low-quality, we can guarantee you that you won’t find better value for money than you will at Academized.

We only hire the best academic writers. Our writers are qualified to the same level or higher as the papers they are working on, and all of them are experts in their field. Each writer must have proof of their qualification, and they must each submit to an intensive testing process to ensure their work meets out high standards before we employ them.

If the requirements for your order are particularly complicated, or you have any questions, use our twenty-four-hour live chat facility direct on our website, or call the telephone number to speak to one of our highly trained support.</p>
            </Col>
            <Col className="ml-auto mr-auto" lg="4">
              <h4 style={{ fontWeight: 'bold' }}>Contact Us Anytime If You Have Any Questions or Suggestions</h4>
              <p>Our support team can help you through the ordering process, take details of any extra requirements you might have, and of course, answer any questions you have about us and our products and services.

Once your order is processed and a writer has been assigned to you, you can also use our onsite messaging service to communicate directly with your writer if you want to clarify anything with them.</p>
              <h4 style={{ fontWeight: 'bold' }}>Do You Ever Have a Sale?</h4>
              <p>We offer good value for money all year round. We also various discounts to our customers including a discount on your first order, and various discount levels for our loyal customers, which increases as you use our service over and over again.

We also offer seasonal discounts, so make sure to check for any discount codes before placing your order, and then simply enter when you place your order.

Have a browse through our site, or talk to our support staff today to start the ball rolling. Free up some time to spend on things you enjoy, or just use our services to lighten your load and buy you some valuable breathing space.

Who knew it was so easy to pay for academic paper writing? Place your order now to take the stress out of your academic writing – let us do the worrying so you don’t have to!</p>
            </Col>
          </Row>
        </Container>        
        <Container style={{ marginTop: 20 }}>
          <Row>
            <Col>
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        <p style={{ color: (activeTab === "1") ? 'black' : 'grey', fontWeight: 'bold' }}>Best Paper Prices</p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        <p style={{ color: (activeTab === "2") ? 'black' : 'grey', fontWeight: 'bold' }}>Payments & Security</p>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                  <Row style={{ borderBottom: '1px solid gray', paddingTop: 5 }}>
                    <Col>
                      <p style={{ color: 'black' }}>
                        Academic paper writing
                  </p>
                    </Col>
                    <Col>
                      <p style={{ color: 'black', fontWeight: 'bold' }}>
                        from $12.99/page
                      </p>
                    </Col>
                  </Row>
                  <Row style={{ borderBottom: '1px solid gray', paddingTop: 5 }}>
                    <Col>
                      <p style={{ color: 'black' }}>
                        Copywriting
                  </p>
                    </Col>
                    <Col>
                      <p style={{ color: 'black', fontWeight: 'bold' }}>
                        from $24.99/page
                      </p>
                    </Col>
                  </Row>
                  <Row style={{ borderBottom: '1px solid gray', paddingTop: 5 }}>
                    <Col>
                      <p style={{ color: 'black' }}>
                        Proofreading
                  </p>
                    </Col>
                    <Col>
                      <p style={{ color: 'black', fontWeight: 'bold' }}>
                        from $4.99/page
                      </p>
                    </Col>
                  </Row>
                  <Row style={{ borderBottom: '1px solid gray', paddingTop: 5 }}>
                    <Col>
                      <p style={{ color: 'black' }}>
                        Dissertation services
                  </p>
                    </Col>
                    <Col>
                      <p style={{ color: 'black', fontWeight: 'bold' }}>
                        from $14.99/page
                      </p>
                    </Col>
                  </Row>
                  <Row style={{ borderBottom: '1px solid gray', paddingTop: 5 }}>
                    <Col>
                      <p style={{ color: 'black' }}>
                        Editing
                  </p>
                    </Col>
                    <Col>
                      <p style={{ color: 'black', fontWeight: 'bold' }}>
                        from $5.99/page
                      </p>
                    </Col>
                  </Row>
                  <Row style={{ borderBottom: '1px solid gray', paddingTop: 5 }}>
                    <Col>
                      <p style={{ color: 'black' }}>
                        Rewriting
                  </p>
                    </Col>
                    <Col>
                      <p style={{ color: 'black', fontWeight: 'bold' }}>
                        from $9.99/page
                      </p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <p style={{ color: 'black' }}>We guarantee 100% privacy of all the personal and financial data of our customers. We have created a special policy that excludes any possibility of leaking or sharing your data wirh third parties. Read more in Privacy Policy.</p>
                  <Row style={{ marginTop: 20 }}>
                    <Col className="ml-auto mr-auto" lg="2">
                      <Card style={{ backgroundColor: '#E1FAC9', borderWidth: 2, borderColor: 'grey', borderRadius: 5, width: 200, height: 120 }}>
                        <div style={{ borderBottom: '2px light green', height: 80 }}>
                          <h4 style={{ fontWeight: 'bold' }}>MONEY BACK GUARANTEE</h4>
                        </div>
                      </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="2">
                      <Card style={{ backgroundColor: '#F9AF94', borderWidth: 2, borderColor: 'grey', borderRadius: 5, width: 200, height: 120 }}>
                        <div style={{ borderBottom: '2px light green', height: 80 }}>
                          <h4 style={{ fontWeight: 'bold' }}>NO HIDDEN CHARGES</h4>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
          <div align="center" style={{ paddingTop: 25, justifyContent:'center', alignItems:'center' }}>
            <Button href="/ordernow" color="secondary" variant="contained" style={{ height: 50, width: 300, fontSize: 17, borderRadius: 10, fontWeight: 'bold', color: 'white' }}>
              Order Now
                </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexMain;
