
import React, { Component } from "react";
import 'react-dropdown/style.css';
import FileUploader from "react-firebase-file-uploader";

// reactstrap components
import {
  Container,
  Row,
  Col,
  FormText,
} from "reactstrap";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';
// import Stepper from 'react-stepper-horizontal';
import Stepper from '../components/Stepper';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { PayPalButton } from "react-paypal-button-v2";
import 'react-tabs/style/react-tabs.css';
import { Select, FormControl, InputLabel, MenuItem, TextField, Button, FormLabel, Collapse, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import moment from 'moment';
// core components
import SectionNavbar from "components/Navbars/SectionNavbar";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
import firebase from '../components/Firebase';
import history from '../History';
import {
  levels,
  prices,
  services,
  countries,
  formats,
  papers,
  timeZones
} from '../settings/Settings';
import * as Validations from '../components/Validations';
import { PageView, initGA } from '../settings/ReactGA';

var person = {
  name : "Ubaid",
  email: "tanwer.ubaid@gmail.com", // person.email can also accept an array of emails
  subject:"The Academic Paper"
}

const styles = theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(3)
  },
  formControl: {
    width: "100%",
    minWidth: 120
  },
  titleContainer: {
    width: "100%"
  },
  fromToControl: {
    marginTop: 30
  }
});

// const effects =  React.useEffect(() => {
//   document.body.classList.add("index");
//   return function cleanup() {
//     document.body.classList.remove("index");
//   };
// });
class OrderNow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfPages: 1,
      services: services,
      selectedService: 0,
      papers: papers,
      selectedPaper: 0,
      levels: levels,
      selectedLevel: 0,
      selectedUrgency: '14 days',
      data: [{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }],
      prices: prices,
      format: formats,
      selectedFormat: 0,
      currentStep: 0,
      selectedWriterLevel: 0,
      selectedCustomerService: 0,
      totalBill: 0,
      calculation: 0,
      name: '',
      email: '',
      country: countries,
      selectedCountry: '',
      phoneNo: '',
      password: '',
      confirmPassword: '',
      loginEmail: '',
      loginPassword: '',
      subject: '',
      words: '300',
      title: '',
      topic: '',
      paperDetails: '',
      numberOfSources: 1,
      selectedTab: 0,
      alertSubject: false,
      alertTopic: false,
      alertTitle: false,
      alertPaperDetails: false,
      alertFormat: false,
      alertName: false,
      alertEmail: false,
      alertCountry: false,
      alertPhoneNo: false,
      alertCreatePassword: false,
      attachment: '',
      progress: 0,
      fileUrl: '',
      isUploading: false,
      open: false,
      selectedDate: moment(new Date()).add(14, 'days'),
      selectedTimezone: 0,
      alertEmail1: false,
      alertPassword1: false,
      error: false,
      invalidEmail: false,
      invalidPassword: false,
      orderId: '',
      anonymousId: ''
    }
    this.ref = firebase.firestore().collection('Orders');
  }
  componentDidMount() {
    initGA('UA-163347648-1');
    PageView();
    document.title = "The Academic Paper - Order Now"
    document.documentElement.classList.remove("nav-open");
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=AS9jN2_-z76cJrun-gkYt8ynAzOLOlNgGn-myAKTeo25CyPRTwhLmFavHXZBWwFehVQvjqgfnQ1PI5gK"
    // document.getElementById('paper-select-label').focus()
  }

  handleDateChange = date => {
    this.setState({
      selectedDate: date
    })
    let urgency = moment(date).diff(new Date(), 'days');
    if (urgency !== 0) {
      if (urgency >= 14) {
        this.setState({
          selectedUrgency: "14 days"
        })
      } else if (urgency >= 10) {
        this.setState({
          selectedUrgency: "10 days"
        })
      } else if (urgency >= 7) {
        this.setState({
          selectedUrgency: "7 days"
        })
      } else if (urgency >= 6) {
        this.setState({
          selectedUrgency: "6 days"
        })
      } else if (urgency >= 5) {
        this.setState({
          selectedUrgency: "5 days"
        })
      } else if (urgency >= 4) {
        this.setState({
          selectedUrgency: "4 days"
        })
      } else if (urgency >= 3) {
        this.setState({
          selectedUrgency: "3 days"
        })
      }
    } else {
      let urgency = moment(date).diff(new Date(), 'hours');
      if (urgency === 23) {
        this.setState({
          selectedUrgency: "24 hours"
        })
      } else if (urgency >= 18) {
        this.setState({
          selectedUrgency: "18 hours"
        })
      } else if (urgency >= 12) {
        this.setState({
          selectedUrgency: "12 hours"
        })
      } else if (urgency >= 9) {
        this.setState({
          selectedUrgency: "9 hours"
        })
      } else {
        this.setState({
          selectedUrgency: "6 hours"
        })
      }
    }
  };

  calculatePrice() {
    const selectedService = services.find(s => s.value === this.state.selectedService).label
    const bill = this.state.prices.filter(a => a.type === selectedService).find(a => a.Urgency === this.state.selectedUrgency).Price.split('$')[1].split('/')[0]
    const price = bill * this.state.numberOfPages
    if (selectedService !== 'Math/Physic/Economic/Statistic Problems') {
      return `${price}/page`
    } else {
      return `${price}/problem`
    }
  }

  onPlaceOrder() {    
    let ref = this.ref;
    const { loginEmail, loginPassword } = this.state;
    this.setState({
      open: true
    })
    if (loginPassword === '') {
      this.setState({
        alertPassword1: true
      })
      document.getElementById('loginPassword').focus()
    } else {
      ref.where("id", "==", this.state.orderId)
        .get()
        .then(async(querySnapshot) => {
          querySnapshot.forEach(function (doc) {
            ref.doc(doc.id).update({
              status: "Pending",
            });
          });
          await firebase.auth().currentUser.delete();
          firebase.auth().createUserWithEmailAndPassword(loginEmail, loginPassword)
            .then(() => {
              this.setState({
                open: false
              })
              history.push('/home', { email: this.state.loginEmail, showAlert: true })
            })
            .catch(() => {
              firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
                .then(() => {
                  this.setState({
                    open: false
                  })
                  history.push('/home', { email: this.state.loginEmail, showAlert: true })
                })
                .catch(() => {
                  this.setState({
                    open: false,
                    error: true
                  })
                })
            })
        })
        .catch((error) => {
          this.setState({
            open: false
          })
        });
    }
    // this.setState({
    //   alertSubject: false,
    //   alertTopic: false,
    //   alertPaperDetails: false,
    //   alertEmail1: false,
    //   alertEmail: false,
    //   alertPhoneNo: false,
    //   alertCreatePassword: false,
    //   alertPassword1: false,
    //   alertName: false,
    //   invalidEmail: false,
    //   invalidPassword: false
    // })
    // const selectedService = services.find(s => s.value === this.state.selectedService).label
    // const selectedPaper = papers.find(s => s.value === this.state.selectedPaper).label
    // const selectedFormat = formats.find(f => f.value === this.state.selectedFormat).label
    // const selectedLevel = levels.find(f => f.value === this.state.selectedLevel).label
    // const selectedTimezone = timeZones.find(t => t.value === this.state.selectedTimezone).label
    // const {
    //   subject,
    //   topic,
    //   paperDetails,
    //   numberOfSources,
    //   numberOfPages,
    //   selectedDate,
    //   name,
    //   email,
    //   phoneNo,
    //   password,
    //   loginEmail,
    //   loginPassword,
    // } = this.state;
    // if (name === '' && this.state.selectedTab === 0) {
    //   this.setState({
    //     alertName: true
    //   })
    //   document.getElementById('name').focus()
    // } else if (email === '' && this.state.selectedTab === 0) {
    //   this.setState({
    //     alertEmail: true
    //   })
    //   document.getElementById('email').focus()
    // } else if (!Validations.verifyEmail(email) && this.state.selectedTab === 0) {
    //   this.setState({
    //     invalidEmail: true
    //   })
    // } else if (loginEmail === '' && this.state.selectedTab === 1) {
    //   this.setState({
    //     alertEmail1: true
    //   })
    //   document.getElementById('loginEmail').focus()
    // }
    // else if (phoneNo === '' && this.state.selectedTab === 0) {
    //   this.setState({
    //     alertPhoneNo: true
    //   })
    //   document.getElementById('phoneNo').focus()
    // } else if (password === '' && this.state.selectedTab === 0) {
    //   this.setState({
    //     alertCreatePassword: true
    //   })
    //   document.getElementById('password').focus()
    // } else if (password.length < 8 && this.state.selectedTab === 0) {
    //   this.setState({
    //     invalidPassword: true
    //   })
    // } else if (loginPassword === '' && this.state.selectedTab === 1) {
    //   this.setState({
    //     alertPassword1: true
    //   })
    //   document.getElementById('loginPassword').focus()
    // } else {
    //   this.setState({
    //     open: true
    //   })
    //   if (this.state.selectedTab === 0) {
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //       .then(() => {
    //         var id;
    //         this.ref.orderBy('id', 'desc').limit(1).get().then(snapshot => {
    //           snapshot.forEach(element => {
    //             id = parseInt(element.data().id.split('-')[1])
    //           })
    //           id = id + 1;
    //           this.ref.add({
    //             "id": "TAP-" + id,
    //             "service": selectedService,
    //             "paper": selectedPaper,
    //             "subject": subject,
    //             "topic": topic,
    //             "details": paperDetails,
    //             "format": selectedFormat,
    //             "numberOfSources": numberOfSources,
    //             "level": selectedLevel,
    //             "numberOfPages": numberOfPages,
    //             "urgency": selectedDate.toDate(),
    //             "name": name,
    //             "email": email,
    //             "phoneNo": phoneNo,
    //             "password": password,
    //             "status": "Pending",
    //             "price": this.state.totalBill,
    //             "payment": "Pending",
    //             "attachment": this.state.fileUrl,
    //             "currentDate": new Date(),
    //             "timeZone": selectedTimezone,
    //             "notify": true
    //           }).then((docRef) => {
    //             this.setState({
    //               open: false
    //             })
    //             history.push('/home', { email: email, showAlert: true })
    //           })
    //             .catch((error) => {
    //               this.setState({
    //                 open: false
    //               })
    //             });
    //         })
    //       })
    //       .catch(() => {
    //         this.setState({
    //           open: false,
    //           error: true
    //         })
    //       });
    //   } else {
    //     firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
    //       .then(() => {
    //         var name1;
    //         var phoneNo1;
    //         this.ref.where('email', '==', loginEmail).limit(1).get().then(snapshot => {
    //           console.log(snapshot)
    //           name1 = ""
    //           phoneNo1 = ""
    //           snapshot.forEach(element => {
    //             name1 = element.data().name
    //             phoneNo1 = element.data().phoneNo
    //           })
    //           var id;
    //           this.ref.orderBy('id', 'desc').limit(1).get().then(snapshot => {
    //             snapshot.forEach(element => {
    //               id = parseInt(element.data().id.split('-')[1])
    //             })
    //             id = id + 1;
    //             console.log(id)
    //             this.ref.add({
    //               "id": "TAP-" + id,
    //               "service": selectedService,
    //               "paper": selectedPaper,
    //               "subject": subject,
    //               "topic": topic,
    //               "details": paperDetails,
    //               "format": selectedFormat,
    //               "numberOfSources": numberOfSources,
    //               "level": selectedLevel,
    //               "numberOfPages": numberOfPages,
    //               "urgency": selectedDate.toDate(),
    //               "email": loginEmail,
    //               "password": loginPassword,
    //               "status": "Pending",
    //               "price": this.state.totalBill,
    //               "payment": "Pending",
    //               "attachment": this.state.fileUrl,
    //               "currentDate": new Date(),
    //               "timeZone": selectedTimezone,
    //               "name": name1,
    //               "phoneNo": phoneNo1,
    //               "notify": true
    //             }).then((docRef) => {
    //               this.setState({
    //                 open: false
    //               })
    //               history.push('/home', { email: loginEmail, showAlert: true })
    //             }).catch((error) => {
    //               alert(error)
    //               this.setState({
    //                 open: false
    //               })
    //             });
    //           })
    //         })
    //       })
    //       .catch((error) => {
    //         this.setState({
    //           open: false,
    //           error: true
    //         })
    //       });
    //   }
    // }
  }

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ attachment: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("pdfs/")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({ fileUrl: url })
        console.log(url)
      });
  };

  render() {
    const client = {
      sandbox: 'AS9jN2_-z76cJrun-gkYt8ynAzOLOlNgGn-myAKTeo25CyPRTwhLmFavHXZBWwFehVQvjqgfnQ1PI5gK',
      production: 'YOUR-PRODUCTION-APP-ID',
    }
    const { classes } = this.props;
    return (
      <>
        <SectionNavbar />
        <div style={{ marginTop: 120 }}>
        </div>
        <h2 align="center" style={{ fontWeight: 'bold' }}>Order Now</h2>
        <div className="main">
          <Container>
            <Row style={{ marginTop: 20 }}>
              <Col className="ml-auto mr-auto" lg="10" >
                <Stepper
                  activeStep={this.state.currentStep}
                />
              </Col>
            </Row>
          </Container>
          <Container style={{ marginTop: 20, marginBottom: 20 }}>
            {(this.state.currentStep === 0) ?
              <Container>
                <Row style={{ marginTop: 20 }}>
                  <Col className="ml-auto mr-auto" lg="10" >
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      name="name"
                      autoComplete="name"
                      value={this.state.name}
                      onChange={(e) => {
                        document.title = "The Academic Paper - Personal Details"
                        this.setState({ name: e.target.value, alertName: false, error: false })
                      }}
                      error={this.state.alertName}
                    />
                  </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                  <Col className="ml-auto mr-auto" lg="10" >
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value, alertEmail: false, error: false, invalidEmail: false })}
                      error={this.state.alertEmail || this.state.invalidEmail}
                    />
                  </Col>
                </Row>
                <Collapse in={this.state.invalidEmail}>
                  <Row style={{ marginTop: 10 }}>
                    <Col className="ml-auto mr-auto" align="left" lg="10" >
                      <FormLabel style={{ color: 'red', fontSize: 12 }}>
                        Invalid email
                            </FormLabel>
                    </Col>
                  </Row>
                </Collapse>
                <Row style={{ marginTop: 20 }}>
                  <Col className="ml-auto mr-auto" lg="10" >
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      id="phoneNo"
                      label="Phone Number"
                      name="phoneNo"
                      autoComplete="phoneNo"
                      value={this.state.phoneNo}
                      onChange={(e) => this.setState({ phoneNo: e.target.value, alertPhoneNo: false, error: false })}
                      error={this.state.alertPhoneNo}
                    />
                  </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                  <Col className="ml-auto mr-auto" lg="10" >
                    <FormControl variant="standard" className={classes.formControl}>
                      <InputLabel
                        id="format-select-label">
                        Academic Level
                            </InputLabel>
                      <Select
                        labelId="level-select-label"
                        value={this.state.selectedLevel}
                        onChange={(e) => {
                          this.setState({ selectedLevel: e.target.value })
                        }}
                        fullWidth
                        label="Academic Level"
                      >
                        {levels.map((g, i) => (
                          <MenuItem key={i} value={g.value}>
                            {g.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                  <Col className="ml-auto" lg="8" >
                    <TextField
                      variant="standard"
                      type="number"
                      required
                      defaultValue={1}                                            
                      max={100}
                      fullWidth
                      id="numberOfPages"
                      label="Number of Pages"
                      name="numberOfPages"
                      autoComplete="numberOfPages"
                      value={this.state.numberOfPages}
                      onChange={(e) => (e.target.value > 0) ? this.setState({ numberOfPages: e.target.value, words: e.target.value * 300 }) : null}
                    />
                  </Col>
                  <Col className="mr-auto" lg="2">
                    {/* <FormText style={{ fontSize: 15, fontWeight: 'bold' }}>
                      {'or ' + (this.state.numberOfPages * 300) + ' words'}
                    </FormText> */}
                    <TextField
                      variant="standard"
                      fullWidth
                      id="words"
                      label="Number of words"
                      name="words"
                      autoComplete="words"
                      value={this.state.words}
                      disabled
                    />
                  </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                  <Col className="ml-auto" lg="2" >
                    <FormText style={{ fontSize: 15, fontWeight: 'bold' }}>
                      Urgency
                    </FormText>
                  </Col>
                  <Col className="mr-auto" lg="8">
                  </Col>
                </Row>
                <Row>
                  <Col className="ml-auto mr-auto" lg="10">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justify="space-between">
                        <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-inline"
                          label="Date"
                          value={this.state.selectedDate}
                          onChange={this.handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                        <KeyboardTimePicker
                          margin="normal"
                          id="time-picker"
                          label="Time"
                          value={this.state.selectedDate}
                          onChange={this.handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change time',
                          }}
                        />
                        <Grid item style={{ marginTop: 16, width: 225 }}>
                          <FormControl variant="standard" className={classes.formControl}>
                            <InputLabel
                              // ref={inputLabel} 
                              id="timezone-select-label">
                              Time Zone
                            </InputLabel>
                            <Select
                              labelId="timezone-select-label"
                              value={this.state.selectedTimezone}
                              onChange={(e) => {
                                this.setState({ selectedTimezone: e.target.value })
                              }}
                              style={{ width: 230 }}
                              label="Time Zone"
                            >
                              {timeZones.map((g, i) => (
                                <MenuItem key={i} value={g.value}>
                                  {g.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </MuiPickersUtilsProvider>
                  </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                  <Col className="ml-auto" lg="5" >
                    <FormText style={{ fontSize: 15, fontWeight: 'bold' }}>
                      Total price: ${this.calculatePrice()} <Typography >
                      (Discounted prices are available on the live chat)
                      </Typography>
                    </FormText>
                  </Col>
                  <Col className="mr-auto" align="right" lg="5" >
                    <Button
                      style={{ fontWeight: 'bold', width: 200 }}
                      color="secondary"
                      variant="contained"
                      target="_blank"
                      onClick={ async() => {
                        const selectedService = services.find(s => s.value === this.state.selectedService).label
                        const total = this.state.prices.filter(a => a.type === selectedService).find(a => a.Urgency === this.state.selectedUrgency).Price.split('$')[1].split('/')[0]
                        let value = total
                        this.setState({
                          totalBill: value,
                          calculation: value
                        })
                        if (this.state.name === '') {
                          this.setState({
                            alertName: true
                          })
                          document.getElementById('name').focus();
                        } else if (this.state.email === '') {
                          this.setState({
                            alertEmail: true
                          })
                          document.getElementById('email').focus();
                        } else if (this.state.phoneNo === '') {
                          this.setState({
                            alertPhoneNo: true
                          })
                          document.getElementById('phoneNo').focus();
                        } else {
                          const loggedIn = await firebase.auth().signInAnonymously();  
                                          
                          document.title = "The Academic Paper - Paper Details"
                          this.setState({ currentStep: 1 })
                          const selectedTimezone = timeZones.find(t => t.value === this.state.selectedTimezone).label
                          const selectedLevel = levels.find(f => f.value === this.state.selectedLevel).label
                          var id;
                          this.ref.orderBy('id', 'desc').limit(1).get().then(snapshot => {
                            snapshot.forEach(element => {
                              id = parseInt(element.data().id.split('-')[1])
                            })
                            id = id + 1;
                            console.log(id)
                            this.ref.add({
                              "id": "TAP-" + id,
                              "service": "",
                              "paper": "",
                              "subject": "",
                              "topic": "",
                              "title": "",
                              "details": "",
                              "format": "",
                              "numberOfSources": 0,
                              "level": selectedLevel,
                              "numberOfPages": this.state.numberOfPages,
                              "urgency": this.state.selectedDate.toDate(),
                              "email": this.state.email,
                              "password": "",
                              "status": "Incomplete details",
                              "price": this.state.totalBill,
                              "payment": "Pending",
                              "attachment": "",
                              "currentDate": new Date(),
                              "timeZone": selectedTimezone,
                              "name": this.state.name,
                              "phoneNo": this.state.phoneNo,
                              "notify": true
                            }).then((docRef) => {
                              docRef.get().then(doc => this.setState({ orderId: doc.data().id }))
                            }).catch((error) => {

                            });
                          })
                        }
                      }}
                    >
                      Next Step
              </Button>
                  </Col>
                </Row>
              </Container> : (this.state.currentStep === 1) ?
                <Container style={{ marginTop: 20, marginBottom: 20 }}>
                  <Row style={{ marginTop: 20 }}>
                    <Col className="ml-auto mr-auto" lg="10">
                      <FormControl variant="standard" className={classes.formControl}>
                        <InputLabel
                          // ref={inputLabel} 
                          id="paper-select-label">
                          Type of Service
                            </InputLabel>
                        <Select
                          labelId="paper-select-label"
                          value={this.state.selectedService}
                          onChange={(e) => {
                            this.setState({ selectedService: e.target.value, numberOfPages: 1 })
                          }}
                          fullWidth
                          label="Type of Service"
                        >
                          {services.map((g, i) => (
                            <MenuItem key={i} value={g.value}>
                              {g.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Col className="ml-auto mr-auto" lg="10" >
                      <FormControl variant="standard" className={classes.formControl}>
                        <InputLabel
                          // ref={inputLabel} 
                          id="paper-select-label">
                          Type of Paper
                            </InputLabel>
                        <Select
                          labelId="paper-select-label"
                          value={this.state.selectedPaper}
                          onChange={(e) => {
                            this.setState({ selectedPaper: e.target.value, numberOfPages: 1 })
                          }}
                          fullWidth
                          label="Type of Paper"
                        >
                          {papers.map((g, i) => (
                            <MenuItem key={i} value={g.value}>
                              {g.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Col className="ml-auto mr-auto" lg="10" >
                      <TextField
                        variant="standard"
                        required
                        fullWidth
                        id="subject"
                        label="Subject"
                        name="subject"
                        autoComplete="subject"
                        value={this.state.subject}
                        onChange={(e) => this.setState({ subject: e.target.value, alertSubject: false })}
                        error={this.state.alertSubject}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Col className="ml-auto mr-auto" lg="10" >
                      <TextField
                        variant="standard"
                        required
                        fullWidth
                        id="topic"
                        label="Topic"
                        name="topic"
                        inputProps={{ maxLength: 70 }}
                        autoComplete="topic"
                        value={this.state.topic}
                        onChange={(e) => this.setState({ topic: e.target.value, alertTopic: false })}
                        error={this.state.alertTopic}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Col className="ml-auto mr-auto" lg="10" >
                      <TextField
                        variant="standard"
                        required
                        fullWidth
                        id="title"
                        label="Title"
                        name="title"
                        inputProps={{ maxLength: 70 }}
                        autoComplete="title"
                        value={this.state.title}
                        onChange={(e) => this.setState({ title: e.target.value, alertTitle: false })}
                        error={this.state.alertTitle}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Col className="ml-auto mr-auto" lg="10" >
                      <TextField
                        variant="standard"
                        required
                        fullWidth
                        id="paperDetails"
                        label="Paper Details"
                        name="paperDetails"
                        multiline
                        rows="3"
                        autoComplete="paperDetails"
                        value={this.state.paperDetails}
                        onChange={(e) => this.setState({ paperDetails: e.target.value, alertPaperDetails: false })}
                        error={this.state.alertPaperDetails}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Col className="ml-auto" lg="2" >
                      <FormText style={{ fontSize: 15, fontWeight: 'bold' }}>
                        Additional material
              </FormText>
                    </Col>
                    <Col className="mr-auto" lg="8" align="right">
                      <FileUploader
                        accept="/pdf"
                        name={this.state.name}
                        randomizeFilename
                        storageRef={firebase.storage().ref("pdfs/")}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Col className="ml-auto mr-auto" lg="10">
                      <FormControl variant="standard" className={classes.formControl}>
                        <InputLabel
                          id="format-select-label">
                          Paper Format
                            </InputLabel>
                        <Select
                          labelId="format-select-label"
                          value={this.state.selectedFormat}
                          onChange={(e) => {
                            this.setState({ selectedFormat: e.target.value })
                          }}
                          fullWidth
                          label="Time Zone"
                          labelWidth={500}
                        >
                          {formats.map((g, i) => (
                            <MenuItem key={i} value={g.value}>
                              {g.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Col className="ml-auto mr-auto" align="right" lg="10" >
                      <TextField
                        variant="standard"
                        type="number"
                        required
                        defaultValue={1}
                        min={1}
                        max={100}
                        fullWidth
                        id="numberOfSources"
                        label="Number of Sources"
                        name="numberOfSources"
                        autoComplete="numberOfSources"
                        value={this.state.numberOfSources}
                        onChange={(e) => this.setState({ numberOfSources: e.target.value })}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Col className="ml-auto" lg="5" >
                      <FormText style={{ fontSize: 15, fontWeight: 'bold' }}>
                        Total price: ${this.calculatePrice()}<Typography >
                      (Discounted prices are available on the live chat)
                      </Typography>
                      </FormText>
                    </Col>
                    <Col className="mr-auto" align="right" lg="5" >
                      <Button
                        style={{ fontWeight: 'bold', width: 200 }}
                        color="secondary"
                        variant="contained"
                        target="_blank"
                        onClick={() => {
                          const selectedService = services.find(s => s.value === this.state.selectedService).label
                          const total = this.state.prices.filter(a => a.type === selectedService).find(a => a.Urgency === this.state.selectedUrgency).Price.split('$')[1].split('/')[0]
                          let value = total
                          this.setState({
                            totalBill: value,
                            calculation: value
                          })
                          if (this.state.subject === '') {
                            this.setState({
                              alertSubject: true
                            })
                            document.getElementById('subject').focus();
                          } else if (this.state.topic === '') {
                            this.setState({
                              alertTopic: true
                            })
                            document.getElementById('topic').focus();
                          } else if (this.state.title === '') {
                            this.setState({
                              alertTitle: true
                            })
                            document.getElementById('title').focus();
                          } else if (this.state.paperDetails === '') {
                            this.setState({
                              alertPaperDetails: true
                            })
                            document.getElementById('paperDetails').focus();
                          } else {
                            document.title = "The Academic Paper - Sign up"
                            this.setState({ currentStep: 2 })
                            let ref = this.ref;
                            this.setState({
                              loginEmail: this.state.email
                            })
                            const { numberOfSources, subject, topic, title, paperDetails, format, fileUrl } = this.state;
                            const selectedService = services.find(s => s.value === this.state.selectedService).label
                            const selectedPaper = papers.find(s => s.value === this.state.selectedPaper).label
                            const selectedFormat = formats.find(f => f.value === this.state.selectedFormat).label
                            ref.where("id", "==", this.state.orderId)
                              .get()
                              .then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                  ref.doc(doc.id).update({
                                    numberOfSources: numberOfSources,
                                    subject: subject,
                                    topic: topic,
                                    title: title,
                                    service: selectedService,
                                    paper: selectedPaper,
                                    format: selectedFormat,
                                    details: paperDetails,
                                    attachment: fileUrl,
                                  });
                                });
                              })
                          }
                        }}
                      >
                        Next Step
              </Button>
                    </Col>
                  </Row>
                  {/* <Row style={{ marginTop: 20 }}>
                        <Col className="ml-auto mr-auto" lg="10" >
                          <TextField
                            variant="standard"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value, alertName: false, error: false })}
                            error={this.state.alertName}
                          />
                        </Col>
                      </Row>
                      <Row style={{ marginTop: 20 }}>
                        <Col className="ml-auto mr-auto" lg="10" >
                          <TextField
                            variant="standard"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value, alertEmail: false, error: false, invalidEmail: false })}
                            error={this.state.alertEmail || this.state.invalidEmail}
                          />
                        </Col>
                      </Row>
                      <Collapse in={this.state.invalidEmail}>
                        <Row style={{ marginTop: 10 }}>
                          <Col className="ml-auto mr-auto" align="left" lg="10" >
                            <FormLabel style={{ color: 'red', fontSize: 12 }}>
                              Invalid email
                            </FormLabel>
                          </Col>
                        </Row>
                      </Collapse>
                      <Row style={{ marginTop: 20 }}>
                        <Col className="ml-auto mr-auto" lg="10" >
                          <TextField
                            variant="standard"
                            required
                            fullWidth
                            id="phoneNo"
                            label="Phone Number"
                            name="phoneNo"
                            autoComplete="phoneNo"
                            value={this.state.phoneNo}
                            onChange={(e) => this.setState({ phoneNo: e.target.value, alertPhoneNo: false, error: false })}
                            error={this.state.alertPhoneNo}
                          />
                        </Col>
                      </Row>
                      <Row style={{ marginTop: 20 }}>
                        <Col className="ml-auto mr-auto" lg="10" >
                          <TextField
                            variant="standard"
                            type="password"
                            required
                            fullWidth
                            id="password"
                            label="Create Password"
                            name="password"
                            autoComplete="password"
                            value={this.state.password}
                            onKeyPress={(e) => (e.key === "Enter") ? this.onPlaceOrder() : null}
                            onChange={(e) => this.setState({ password: e.target.value, alertCreatePassword: false, error: false, invalidPassword: false })}
                            error={this.state.alertCreatePassword}
                          />
                        </Col>
                      </Row>
                      <Collapse in={this.state.invalidPassword}>
                        <Row style={{ marginTop: 10 }}>
                          <Col className="ml-auto mr-auto" align="left" lg="10" >
                            <FormLabel style={{ color: 'red', fontSize: 12 }}>
                              Invalid password, minimum length is 8 should contain alphabets and atleast 1 number.
                            </FormLabel>
                          </Col>
                        </Row>
                      </Collapse>
                      <Collapse in={this.state.error}>
                        <Row style={{ marginTop: 10 }}>
                          <Col className="ml-auto mr-auto" align="right" lg="10" >
                            <FormLabel style={{ color: 'red' }}>
                              Account already exists.
                            </FormLabel>
                          </Col>
                        </Row>
                      </Collapse>
                      <Row style={{ marginTop: 20 }}>
                        <Col className="ml-auto" lg="5" >
                          <FormText style={{ fontSize: 15, fontWeight: 'bold' }}>
                            Total price: ${this.state.totalBill}
                          </FormText>
                        </Col>
                        <Col className="mr-auto" align="right" lg="5" >
                          <Button
                            style={{ width: 200, fontWeight: 'bold' }}
                            variant={(this.state.open) ? "outlined" : "contained"}
                            color="secondary"
                            target="_blank"
                            disabled={this.state.open}
                            onClick={() => this.onPlaceOrder()}
                          >
                            {(this.state.open) ? <CircularProgress color="secondary" size={25} /> : 'Sign up'}
                          </Button>
                          <PayPalButton
                            amount={this.state.totalBill}
                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onSuccess={(details, data) => {
                              alert("Transaction completed by " + details.payer.name.given_name);

                              // OPTIONAL: Call your server to save the transaction
                              return fetch("/paypal-transaction-complete", {
                                method: "post",
                                body: JSON.stringify({
                                  orderID: data.orderID
                                })
                              });
                            }}
                            options={{
                              clientId: "AS9jN2_-z76cJrun-gkYt8ynAzOLOlNgGn-myAKTeo25CyPRTwhLmFavHXZBWwFehVQvjqgfnQ1PI5gK"
                            }}
                          />
                        </Col>
                      </Row>                                           */}
                </Container> : (this.state.currentStep === 2) ?
                  <Container style={{ marginTop: 20, marginBottom: 20 }}>
                    <Row style={{ marginTop: 20 }}>
                      <Col className="ml-auto mr-auto" lg="10" >
                        <TextField
                          variant="standard"
                          required
                          fullWidth
                          id="loginEmail"
                          label="Email"
                          name="loginEmail"
                          autoComplete="loginEmail"
                          value={this.state.loginEmail}
                          onChange={(e) => this.setState({ loginEmail: e.target.value, alertEmail1: false, error: false })}
                          error={this.state.alertEmail1}
                        />
                      </Col>
                    </Row>
                    <Row style={{ marginTop: 20 }}>
                      <Col className="ml-auto mr-auto" lg="10" >
                        <TextField
                          variant="standard"
                          type="password"
                          required
                          fullWidth
                          id="loginPassword"
                          label="Password"
                          name="loginPassword"
                          autoComplete="loginPassword"
                          value={this.state.loginPassword}
                          onKeyPress={(e) => (e.key === "Enter") ? this.onPlaceOrder() : null}
                          onChange={(e) => this.setState({ loginPassword: e.target.value, alertPassword1: false, error: false })}
                          error={this.state.alertPassword1}
                        />
                      </Col>
                    </Row>
                    <Collapse in={this.state.error}>
                      <Row style={{ marginTop: 10 }}>
                        <Col className="ml-auto mr-auto" align="right" lg="10" >
                          <FormLabel style={{ color: 'red' }}>
                            Invalid email or password.
                            </FormLabel>
                        </Col>
                      </Row>
                    </Collapse>
                    <Row style={{ marginTop: 20 }}>
                      <Col className="ml-auto" lg="5" >
                        <FormText style={{ fontSize: 15, fontWeight: 'bold' }}>
                          Total price: ${this.state.totalBill}<Typography >
                      (Discounted prices are available on the live chat)
                      </Typography>
                        </FormText>
                      </Col>
                      <Col className="mr-auto" align="right" lg="5" >
                        <Button
                          style={{ width: 200, fontWeight: 'bold' }}
                          variant={(this.state.open) ? "outlined" : "contained"}
                          color="secondary"
                          target="_blank"
                          disabled={this.state.open}
                          onClick={() => this.onPlaceOrder()}
                        >
                          {(this.state.open) ? <CircularProgress color="secondary" size={25} /> : 'Sign in'}
                        </Button>
                        {/* <PayPalButton
                            amount={this.state.totalBill}
                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onSuccess={(details, data) => {
                              alert("Transaction completed by " + details.payer.name.given_name);

                              // OPTIONAL: Call your server to save the transaction
                              return fetch("/paypal-transaction-complete", {
                                method: "post",
                                body: JSON.stringify({
                                  orderID: data.orderID
                                })
                              });
                            }}
                            options={{
                              clientId: "AS9jN2_-z76cJrun-gkYt8ynAzOLOlNgGn-myAKTeo25CyPRTwhLmFavHXZBWwFehVQvjqgfnQ1PI5gK"
                            }}
                          /> */}
                      </Col>
                    </Row>
                  </Container>
                  : null
            }

          </Container>
          <SectionDownload />
          <DemoFooter />
        </div>
      </>
    );
  }
}

export default withStyles(styles)(OrderNow);
