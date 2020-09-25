
import React, { useEffect } from "react";

// reactstrap components
import {
  Row,
  Container,
  Col,
} from "reactstrap";
import Snackbar from '@material-ui/core/Snackbar';
import { CloseRounded } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import IndexMain from "views/index-sections/IndexMain";
import SectionDownload from "views/index-sections/SectionDownload.js";
import { PageView, initGA } from 'settings/ReactGA';

import firebase from '../components/Firebase';
const functions = firebase.functions();
const sendgrid = require("@sendgrid/mail");
const cors = require("cors")({
  origin: true
});

const useStyles = makeStyles(theme => ({
  root: {
    background: '#f50057',
  }
}));

function Index() {
  const [open, setOpen] = React.useState(true);
  const user = useSelector(state => state.reducer.user);
  useEffect(() => {
    initGA('UA-163347648-1');
    PageView();
    document.title = "The Academic Paper - #1 Academic Writing Services";

    // sendEmail();    
  }, []);

  const sendEmail = functions.httpsCallable(() => {
    // call field data using snapshot.val()
    let msg;
    msg = {
      to: 'tanwer.ubaid@gmail.com',
      from: {
        name: 'Blk. Party',
        email: 'babadook1122@gmail.com'
      },
      // custom templates
      templateId: '...',
      dynamic_template_data: {
        subject: 'Welcome to Blk. Party!',
        name: 'Ubaid'
      },
    }
    // send email via sendgrid
    return sendgrid.send(msg)
  });

  const handleClose = (event, reason) => {
    setOpen(false);
  };
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  const classes = useStyles();
  return (
    <>
      <div align="center" style={{ height: 30, backgroundColor: 'red' }}>
        <Container>
          <Row>
            <Col style={{ marginTop: -20 }}>
              <h3 style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Special Offer: Get upto 75% off.</h3>
            </Col>
          </Row>
        </Container>
      </div>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        {/* <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          ContentProps={{
            classes: {
              root: classes.root
            }
          }}
          open={open}
          onClose={handleClose}
          message="Limited time offer! For the month of May"
          style={{
            marginTop: 100,
          }}
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseRounded fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        /> */}
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          ContentProps={{
            classes: {
              root: classes.root
            }
          }}
          open={open}
          onClose={handleClose}
          message="Limited time offer! $10/page"
          style={{
            marginTop: 160,
          }}
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseRounded fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
        <IndexMain />
        <SectionDownload />
        <DemoFooter />
        {/* <SectionNavigation /> */}
      </div>
    </>
  );
}

export default Index;
