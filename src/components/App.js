import React, { Component } from "react";
// import autumn from '../sass/autumn.scss'
// import winter from '../sass/winter.scss'
// import summer from '../sass/summer.scss'
// import spring from '../sass/spring.scss'
import Site from "./Site";
import "datejs";
import "./seasonal";
import { title, actionimg } from "./seasonal";

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
    let now = new Date("12/21").valueOf();
    let first_day_summer = new Date("06/21").valueOf();
    let first_day_autumn = new Date("09/22").valueOf();
    let first_day_spring = new Date("03/20").valueOf();
    let first_day_winter = new Date("12/21").valueOf();

    if (now >= first_day_autumn && now < first_day_winter) {
      console.log(`it's autumn`);
      return (siteObj = (
        <Site
          title={this.state.titles.autumn}
          img={this.state.img.autumn}
          style={require("../sass/autumn.scss")}
        />
      ));
    } 
    if (
      (now >= first_day_winter && now > first_day_spring) ||
      (now <= first_day_winter && now < first_day_spring)
    ) {
      console.log(`it's winter`);
      return (siteObj = (
        <Site
          title={this.state.titles.winter}
          img={this.state.img.winter}
          style={require("../sass/winter.scss")}
        />
      ));
    } 
    if (now >= first_day_spring && now < first_day_summer) {
      console.log(`it's spring`);
      return (siteObj = (
        <Site
          title={this.state.titles.spring}
          img={this.state.img.spring}
          style={require("../sass/spring.scss")}
        />
      ));
    } 
    if (now >= first_day_summer && now < first_day_autumn) {
      console.log(`it's summer`);
      return (siteObj = (
        <Site
          title={this.state.titles.summer}
          img={this.state.img.summer}
          style={require("../sass/summer.scss")}
        />
      ));
    } 
    return {siteObj};
  }
}

export default App;
