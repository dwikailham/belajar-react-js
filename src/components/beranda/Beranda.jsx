import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import NavComp from "./NavComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Chart from "../pages/Chart";
import Data from "../pages/Data";
import Laporan from "../pages/Laporan";
import "../../App.css";
import FooterComp from "./FooterComp";

export default class Beranda extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div className="page-container">
        
          <Router>
            <NavComp />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/data" component={Data} />
              <Route path="/laporan" component={Laporan} />
              <Route path="/chart" component={Chart} />
            </Switch>
          </Router>
        
        <FooterComp />
      </div>
    );
  }
}
