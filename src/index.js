 
import "assets/css/paper-kit.css";

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import PricesPage from "views/Prices";
import AboutUsPage from "views/AboutUs";
import ContactUsPage from "views/ContactUs";
import FAQsPage from "views/FAQs";
import ServicesPage from "views/Services";
import WritersPage from "views/Writers";
import OrderNowPage from "views/OrderNow";
import HomePage from 'views/user/HomePage';
import OrderDetailsPage from 'views/user/OrderDetailsPage';
import LoginPage from 'views/user/LoginPage';
import history from './History';
import store from 'services/state/index';
// others

ReactDOM.render(
  <Provider store={store}>
  <Router history={history} forceRefresh={true}>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />           
      <Route
        path="/prices"
        render={props => <PricesPage {...props} />}
      />
      <Route
        path="/about-us"
        render={props => <AboutUsPage {...props} />}
      />
      <Route
        path="/contact-us"
        render={props => <ContactUsPage {...props} />}
      />
      <Route
        path="/faqs"
        render={props => <FAQsPage {...props} />}
      />
      <Route
        path="/services"
        render={props => <ServicesPage {...props} />}
      />
      <Route
        path="/writers"
        render={props => <WritersPage {...props} />}
      />
      <Route
        path="/ordernow"
        render={props => <OrderNowPage {...props} />}
      />
      <Route
        path="/home"
        render={props => <HomePage {...props} />}
      />
      <Route
        path="/orderdetails"
        render={props => <OrderDetailsPage {...props} />}
      />
      <Route
        path="/login"
        render={props => <LoginPage {...props} />}
      />
      <Redirect to="/index"/>
    </Switch>
  </Router>
  </Provider>,
  document.getElementById("root")
);
