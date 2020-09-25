 
import React, { useState } from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import moment from 'moment';
import SweetAlert from "react-bootstrap-sweetalert";

// core components
import SectionNavbar from "components/Navbars/SectionNavbar";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
import firebase from '../../components/Firebase';
import history from '../../History';
import {PageView, initGA} from '../../settings/ReactGA';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
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
  },
  successButton: {
    backgroundColor: "darkgreen !important",
    height: 40,
    width: 100,
    color: "white",
    paddingTop: 10,
    fontWeight: "bold",
    textDecoration: "white",
    "&:hover": {
      backgroundColor: "darkgreen !important"
    }
  }
});

function createData(id, subject, title, details, format, level, urgency, price, status, nop, nos, paper, payment, service, dueDate, remainingDays) {
  return { id, subject, title, details, format, level, urgency, price, status, nop, nos, paper, payment, service, dueDate, remainingDays };
}




function HomePage(props) {
  const [email, setEmail] = useState(props.location.state.email)
  const [open, setOpen] = useState(true)
  const [records, setRecords] = useState([])
  const [orderPlaced, setOrderPlaced] = useState(props.location.state.showAlert);

  React.useEffect(() => {
    initGA('UA-163347648-1');
    PageView();
    document.title = "The Academic Paper - Home"
  }, [])

  if (email === "") {
    history.goBack();
  }

  const handleSuccess = () => {
    setOrderPlaced(false);    
  };

  const progressHandler = () => {
    return (open && <div align="center">
    <CircularProgress style={{marginTop: 70, marginBottom: 70, alignSelf: 'center'}} />
    </div>)
  }

  var data;
  firebase.firestore().collection('Orders').where('email', '==', email).orderBy('currentDate', 'desc').onSnapshot(snapshot => {
    data = [];    
    snapshot.forEach(doc => {
      const orderDate = moment(new Date());
      const urgency = moment(doc.data().urgency.toDate());
      var remainingDays = urgency.diff(orderDate, 'days');
      if (remainingDays === 0) {
        remainingDays = urgency.diff(orderDate, 'hours');
        if (remainingDays === 0) {
          remainingDays = urgency.diff(orderDate, 'minutes');
          if (remainingDays === 0) {
            remainingDays = urgency.diff(orderDate, 'seconds');
            if (remainingDays === 0 && doc.data().status === "Completed") {
              remainingDays = "Delivered."
            } else if (remainingDays === 0) {
              remainingDays = "Time's up."
            } else {
              if (remainingDays === 1) {
                remainingDays = remainingDays + " second"
              } else {
                remainingDays = remainingDays + " seconds"
              }
            }
          }  else {
            if (remainingDays === 1) {
              remainingDays = remainingDays + " minute"
            } else {
              remainingDays = remainingDays + " minutes"
            }
          }
        }  else {
          if (remainingDays === 1) {
            remainingDays = remainingDays + " hour"
          } else {
            remainingDays = remainingDays + " hours"
          }
        }
      }  else { if (remainingDays === 1) {
        remainingDays = remainingDays + " day"
      } else {
        remainingDays = remainingDays + " days"
      }        
      }
      data.push(createData(
        doc.data().id,
        doc.data().subject,
        doc.data().topic,
        doc.data().details,
        doc.data().format,
        doc.data().level,
        moment(doc.data().currentDate.toDate()).format('MMMM Do YYYY, h:mm:ss a'),        
        doc.data().price,
        doc.data().status,
        doc.data().numberOfPages,
        doc.data().numberOfSources,
        doc.data().paper,
        doc.data().payment,
        doc.data().service,
        moment(doc.data().urgency.toDate()).format('MMMM Do YYYY, h:mm:ss a'),
        remainingDays
      ))
    });
    setRecords(data)
    setOpen(false)
  }, err => console.log(err))
  const classes = useStyles();
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <SectionNavbar loggedIn={true} history={history} email={email} />
      <h2 align="center" style={{ marginTop: 150, fontWeight: 'bold' }}>Orders</h2>
      <div className="main">
        <Container style={{ marginTop: 20, paddingBottom: 20, }}>
          <Row>
            <Col className="ml-auto mr-auto" lg="12" >
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Order ID</TableCell>
                      <TableCell align="right">Subject</TableCell>
                      <TableCell align="right">Title</TableCell>
                      <TableCell align="right">Paper Format</TableCell>
                      <TableCell align="right">Academic Level</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Status</TableCell>
                      <TableCell align="right">Order Date</TableCell>                      
                      <TableCell align="right">Due Date</TableCell>
                      <TableCell align="right">Remaining Time</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {records.map(data => (
                      <TableRow key={data.id}>
                        <TableCell component="th" scope="row">{data.id}</TableCell>
                        <TableCell align="right">{data.subject}</TableCell>
                        <TableCell align="right">
                          {data.title}
                        </TableCell>
                        <TableCell align="right">{data.format}</TableCell>
                        <TableCell align="right">{data.level}</TableCell>
                        <TableCell align="right">{data.price}</TableCell>
                        <TableCell align="right">{data.status}</TableCell>
                        <TableCell align="right">{data.urgency}</TableCell>                        
                        <TableCell align="right">{data.dueDate}</TableCell>
                        <TableCell align="right">{data.remainingDays}</TableCell>
                        <TableCell align="center">
                          <EditRoundedIcon
                            className={classes.editButton}
                            onClick={() => history.push('orderdetails', { record: data, email: email })}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {progressHandler()}
            </Col>
          </Row>
        </Container>
        <SectionDownload />
        <DemoFooter />
        {orderPlaced && (
          <SweetAlert
            success
            confirmBtnText="OK"
            confirmBtnBsStyle="success"
            confirmBtnCssClass={classes.successButton}
            title="Order Placed!"
            onConfirm={handleSuccess}
          >
            Your order has been placed successfully.
          </SweetAlert>
        )}
      </div>
    </>
  );
}

export default HomePage;
