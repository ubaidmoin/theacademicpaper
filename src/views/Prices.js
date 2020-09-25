
import React, { Component } from "react";
import Dropdown from 'react-dropdown';
// import MaterialTable from 'material-table'
import { MDBDataTable } from 'mdbreact';
import { Select, FormControl, InputLabel, MenuItem, TextField } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/styles";
import moment from 'moment';
import 'react-dropdown/style.css';
// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import SectionNavbar from "components/Navbars/SectionNavbar";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
import {
  levels,
  prices,
  services,
  urgency,
  papers
} from '../settings/Settings';
import { PageView, initGA } from '../settings/ReactGA';

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
  },
  table: {
    minWidth: 650,
  },
});

class Prices extends Component {
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
    data: [{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }],
    prices: prices,
  }
  componentDidMount() {
    initGA('UA-163347648-1');
    PageView();
    document.title = "The Academic Paper - Prices"
    document.documentElement.classList.remove("nav-open");
  }

  render() {
    const { classes } = this.props;
    const selectedService = services.find(s => s.value === this.state.selectedService).label
    const rows = this.state.prices.filter(a => a.type === selectedService)
    return (
      <>
        <SectionNavbar />
        <div style={{ marginTop: 120 }}>

        </div>
        <h2 align="center" style={{ fontWeight: 'bold' }}>Prices</h2>
        <div className="main">
          <Container style={{ marginTop: 20 }}>
            <Row style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
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
            <Row style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
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
            <Row style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
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
            <Row style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>
              <Col class="ml-auto mr-auto" lg="10">
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Urgency</TableCell>
                        <TableCell align="right">Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell component="th" scope="row">
                            {row.Urgency}
                          </TableCell>
                          <TableCell align="right">{row.Price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Col>
            </Row>
          </Container>
          <SectionDownload />
          <DemoFooter />
          {/* <SectionNavigation /> */}
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Prices);
