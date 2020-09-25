
import React, { useState } from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  FormText,
} from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import { Link, Tooltip, InputLabel, MenuItem, TextField, Button, Collapse, Grid, FormLabel } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';

// core components
import firebase from '../../components/Firebase';
import history from '../../History';
import SectionNavbar from "components/Navbars/SectionNavbar";
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
  }
});

function LoginPage(props) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [error, setError] = useState(false);

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
    document.title = "The Academic Paper - Login"
  }, [])

  const login = () => {
    setInvalidEmail(false);
    setInvalidPassword(false);
    if (email === '') {
      setInvalidEmail(true);
      document.getElementById('email').focus()
    } else if (password === '') {
      setInvalidPassword(true);
      document.getElementById('password').focus()
    } else {
      setOpen(true)
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          setOpen(false)
          history.push('/home', { email: email, showAlert: false })
        })
        .catch((error) => {
          setOpen(false);
          setError(true);
        });
    }
  };

  return (
    <>
      <SectionNavbar onLogin={true} />
      <div className="main">
        <Container style={{ flex: 1, paddingTop: '20%', width: '40%' }}>
          <h4 align="center" style={{ fontWeight: 'bold' }}>Log in</h4>
          <Row style={{ marginTop: 10 }}>
            <Col className="ml-auto mr-auto" lg="8" >
              <TextField
                variant="standard"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => { setError(false); setInvalidEmail(false); setEmail(e.target.value) }}
                error={invalidEmail}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: 10 }}>
            <Col className="ml-auto mr-auto" lg="8" >
              <TextField
                variant="standard"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="password"
                value={password}
                onChange={(e) => { setError(false); setInvalidPassword(false); setPassword(e.target.value) }}
                onKeyPress={(e) => (e.key === "Enter") ? login() : null}
                error={invalidPassword}
              />
            </Col>
          </Row>
          <Collapse in={error}>
            <Row style={{ marginTop: 10 }}>
              <Col className="ml-auto mr-auto" align="right" lg="8" >
                <FormLabel style={{ color: 'red' }}>
                  Invalid email or password.
                </FormLabel>
              </Col>
            </Row>
          </Collapse>
          <Row style={{ marginTop: 10 }}>
            <Col className="ml-auto mr-auto" align="right" lg="8" >
              <Button
                variant={(open) ? "outlined" : "contained"}
                target="_blank"
                style={{ width: 100, height: 40, fontWeight: 'bold' }}
                color="secondary"
                disabled={open}
                onClick={() => login()}
              >
                {(open) ? <CircularProgress size={25} color="secondary" /> : 'Log in'}
              </Button>
            </Col>
          </Row>
        </Container>
        <Grid container style={{ marginTop: 10 }}>
          <Grid item xs={12} lg={12} md={12} align="center">
            <Tooltip title="Proceed to order now" >
              <Button style={{fontSize: 12}} onClick={() => {
                history.push('/ordernow')
                window.location.reload()
              }}>              
                Don't have an account? Proceed to order now.              
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default LoginPage;
