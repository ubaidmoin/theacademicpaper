 
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';
// reactstrap components
import {
  FormText,
  Container,
  Row,
  Col,
  Card,
} from "reactstrap";
import { Select, FormControl, InputLabel, MenuItem, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import moment from 'moment';
import {
  levels,
  prices,
  services,
  urgency,
  papers
} from '../../settings/Settings';

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

class SectionBill extends Component {


  state = {
    numberOfPages: 1,
    services: services,
    selectedService: 0,
    papers: papers,
    selectedPaper: 0,
    levels: levels,
    selectedLevel: 0,
    urgency: urgency,
    selectedUrgency: '14 days',
    prices: prices,
    price: 0,
    selectedDate: moment(new Date()).add(14, 'days'),
  }
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

  onValueChange() {
    if (this.state.service === "Academic Writing" && this.state.paper === "Essay" && this.state.level === "High School" && this.state.urgency === "14 days") {
      this.setState({
        price: "12.99"
      })
    } else if (this.state.service === "Academic Writing" && this.state.paper === "Essay" && this.state.level === "High School" && this.state.urgency === "10 days") {
      this.setState({
        price: "15.99"
      })
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Container style={{ marginTop: 20 }}>
          <Card style={{ backgroundColor: 'white', alignSelf: 'center', padding: 15 }}>
            <h3 style={{ fontWeight: 'bold', alignSelf: 'center' }}>Place an Order</h3>
            <Row style={{ marginTop: 10 }}>
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
            <Row style={{ marginTop: 10 }}>
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
            <Row style={{ marginTop: 10 }}>
              <Col className="ml-auto mr-auto" lg="10" >
                <TextField
                  variant="standard"
                  type="number"
                  required
                  defaultValue={1}
                  min={1}
                  max={100}
                  fullWidth
                  id="numberOfPages"
                  label="Number of Pages"
                  name="numberOfPages"
                  autoComplete="numberOfPages"
                  value={this.state.numberOfPages}
                  onChange={(e) => this.setState({ numberOfPages: e.target.value })}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
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
                  <Col className="ml-auto" lg="5" >
                    <FormText style={{ fontSize: 15, fontWeight: 'bold' }}>
                      Urgency
                    </FormText>
                  </Col>
                  <Col className="mr-auto" lg="5">
                  </Col>
                </Row>
            <Row style={{ marginTop: 10 }}>
              <Col className="ml-auto mr-auto" lg="10" >
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-between">
                    <Grid item xs={12} lg={5}>
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
                    </Grid>
                    <Grid item xs={12} lg={5}>
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
                    </Grid>
                  </Grid>
                </MuiPickersUtilsProvider>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col className="ml-auto" lg="5" >
                <FormText style={{ fontSize: 15, fontWeight: 'bold' }}>
                  Total price: {this.calculatePrice()}
                </FormText>
              </Col>
              <Col className="ml-auto" lg="5" >
                <Button
                  variant="contained"
                  color="secondary"
                  href="/ordernow"                  
                  style={{ borderRadius: 5, fontWeight: 'bold', color: 'white' }}
                >
                  Order Now
              </Button>
              </Col>
            </Row>
          </Card>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(SectionBill);;
