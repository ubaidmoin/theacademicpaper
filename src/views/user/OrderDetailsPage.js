 
import React, { useState } from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Typography from '@material-ui/core/Typography';
import history from '../../History';

// core components
import SectionNavbar from "components/Navbars/SectionNavbar";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
import {PageView, initGA} from '../../settings/ReactGA';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  editButton: {
    float: "left",
    fontSize: 32,
    marginLeft: 15,
    marginRight: 15,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#dddddd",
      borderRadius: 25
    }
  }
});

function OrderDetailsPage(props) {
  const [record, setRecord] = useState(props.location.state.record)
  const [email, setEmail] = useState(props.location.state.email)

  const classes = useStyles();
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
    document.title = "The Academic Paper - Order Details"
  }, [])
  return (
    <>
      <SectionNavbar loggedIn={true} history={history} email={email} />
      <h2 align="center" style={{ marginTop: 150, fontWeight: 'bold' }}>Orders Details</h2>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" lg="8" style={{ marginTop: -40 }}>
            <ArrowBackIosRoundedIcon
              className={classes.editButton}
              onClick={() => history.goBack()}
            />
          </Col>
        </Row>
      </Container>
      <div className="main">
        <Container style={{ marginTop: 20, paddingBottom: 20, }}>
          <Row>
          <Col lg="2"></Col>
            {(record.status === "Pending") &&  <Col lg="8">
              <Typography variant="h5" component="h4">
                Your order is under review with one of our specialist once it is confirmed you will received your payment link in your email.
              </Typography>
            </Col>}
            <Col lg="2"></Col>
            <Col className="ml-auto mr-auto" lg="10" >
              <Grid container spacing={1}>
              <Grid item xs={4} md={4} lg={4}>
                  <Typography variant="h5" component="h2">
                    Order ID:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={8}>
                  <Typography variant="h5" component="h2">
                    {record.id}
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <Typography variant="h5" component="h2">
                    Title:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={8}>
                  <Typography variant="h5" component="h2">
                    {record.title}
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <Typography variant="h5" component="h2">
                    Paper Details:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={8}>
                  <Typography variant="h5" component="h2">
                    {record.details}
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <Typography variant="h5" component="h2">
                    Service:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={8}>
                  <Typography variant="h5" component="h2">
                    {record.service}
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <Typography variant="h5" component="h2">
                    Paper:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={8}>
                  <Typography variant="h5" component="h2">
                    {record.paper}
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <Typography variant="h5" component="h2">
                    Academic Level:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={8}>
                  <Typography variant="h5" component="h2">
                    {record.level}
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <Typography variant="h5" component="h2">
                    Format:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={8}>
                  <Typography variant="h5" component="h2">
                    {record.format}
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <Typography variant="h5" component="h2">
                    Number of Pages:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={8}>
                  <Typography variant="h5" component="h2">
                    {record.nop}
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <Typography variant="h5" component="h2">
                    Number of Sources:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={8}>
                  <Typography variant="h5" component="h2">
                    {record.nos}
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <Typography variant="h5" component="h2">
                    Price:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={8}>
                  <Typography variant="h5" component="h2">
                    {record.price}
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <Typography variant="h5" component="h2">
                    Due Date Time:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={8}>
                  <Typography variant="h5" component="h2">
                    {record.dueDate}
                  </Typography>
                </Grid>
              </Grid>
            </Col>
          </Row>
        </Container>
        <SectionDownload />
        <DemoFooter />
      </div>
    </>
  );
}

export default OrderDetailsPage;
