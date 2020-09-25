 
import React, { useState } from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledCollapse,
} from "reactstrap";
import { Button } from "@material-ui/core";
import { PhoneRounded, EmailRounded } from "@material-ui/icons";

function SectionNavbar(props) {
    const [loggedIn, setLoggedIn] = useState(props.loggedIn);
    const [email, setEmail] = useState(props.email);
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);  
    const toggleNavbarCollapse = () => {
      setNavbarCollapse(!navbarCollapse);
      document.documentElement.classList.toggle("nav-open");
    };
  
    React.useEffect(() => {
      const updateNavbarColor = () => {
        if (
          document.documentElement.scrollTop > 299 ||
          document.body.scrollTop > 299
        ) {
          setNavbarColor("");
        } else if (
          document.documentElement.scrollTop < 300 ||
          document.body.scrollTop < 300
        ) {
          setNavbarColor("navbar-transparent");
        }
      };
  
      window.addEventListener("scroll", updateNavbarColor);
  
      return function cleanup() {
        window.removeEventListener("scroll", updateNavbarColor);
      };
    });
  return (
    <Navbar className="fixed-top" 
    expand="lg" 
    style={{ flexDirection: 'column', height: (isMobile === false) ? 100 : 80 }}>
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
            The Academic Paper
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              // toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >          
            {(email === undefined) ? 
            <Nav navbar>
              <NavItem>
              <NavLink
                // data-placement="bottom"  
                style={{ alignItems: 'center', justifyContent: 'center' }}
                title="info.theacademicpaper@gmail.com"
              >        
              <EmailRounded />          
                info.theacademicpaper@gmail.com
              </NavLink>
            </NavItem> 
            <NavItem>
              <NavLink
                // data-placement="bottom"  
                style={{ alignItems: 'center', justifyContent: 'center' }}
                title="info.theacademicpaper@gmail.com"
              >     
              <PhoneRounded />           
              +1 (559) 282-3839
              </NavLink>
            </NavItem>           
            {(isMobile) ? null : <NavItem>
            <NavLink href="/login" >                
                Login
              </NavLink>
            </NavItem>}
            </Nav> :
            <Nav navbar>
            <NavItem>
            <NavLink
              data-placement="bottom"  
              style={{ alignItems: 'center', justifyContent: 'center' }}
              title="info.theacademicpaper@gmail.com"
            >
              {email}
            </NavLink>
          </NavItem>          
          </Nav>
          }                     
        </Collapse>
      </Container>
      <Container style={{height: 35, marginTop:-10}}>       
      <UncontrolledCollapse navbar data-target="#" id="navbar-primary">
        { (!loggedIn) ? 
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/" >                
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/services">                
                Services
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/prices" >                
                Prices
              </NavLink>
            </NavItem>                        
            <NavItem>
            <NavLink href="/writers" >                
                Our Writers
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/about-us" >                
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/faqs" >                
                FAQs
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/contact-us" >                
                Contact Us
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                variant="contained"                                
                href="/ordernow"
                style={{ borderRadius: 20, fontWeight: 'bold', marginTop: 15, color: 'white', backgroundColor: '#f50057' }}
              >
                Order Now
              </Button>
            </NavItem> 
            {(props.onLogin) ? null : isMobile && <NavItem>
            <NavLink href="/login" >                
                Login
              </NavLink>
            </NavItem> }
            {/* <NavItem>
            <NavLink xs={12} href="/login" >                
                Login
              </NavLink>
            </NavItem> */}
            </Nav>: <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/home" >                
                Home
              </NavLink>
            </NavItem>                                   
            <NavItem>
            <NavLink onClick={() => props.history.replace("/")} >                
                Log out
              </NavLink>
            </NavItem>
            </Nav>}          
        </UncontrolledCollapse>
      </Container>
    </Navbar>
  );
}

export default SectionNavbar;
