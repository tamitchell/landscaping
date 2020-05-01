import React, { Component, Fragment } from "react";
import Site from "./Site";
import "datejs";
import "./seasonal";
import { title, actionimg } from "./seasonal";
import "../sass/app.scss"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: title,
      img: actionimg,
      season: {}
    };
  }
  render() {
    let siteObj;
    let date = new Date();
    let month = date.getMonth();
    switch (month) {
      case 12:
      case 1:
      case 2:
        siteObj = (
          <Site
            title={this.state.titles.winter}
            img={this.state.img.winter}
            style={require("../sass/winter.scss")}
          />
        );
        break;
      case 3:
      case 4:
      case 5:
        siteObj = (
          <Site
            title={this.state.titles.spring}
            img={this.state.img.spring}
            style={require("../sass/spring.scss")}
          />
        );
        break;
      case 6:
      case 7:
      case 8:
        siteObj = (
          <Site
            title={this.state.titles.summer}
            img={this.state.img.summer}
            style={require("../sass/summer.scss")}
          />
        );
        break;
      case 9:
      case 10:
      case 11:
        siteObj = (
          <Site
            title={this.state.titles.autumn}
            img={this.state.img.autumn}
            style={require("../sass/autumn.scss")}
          />
        );
        break;
      default:
        siteObj = <h1>Hi</h1>;
        break;
    }
    return <Fragment>{siteObj};</Fragment>;
  }
}

export default App;
