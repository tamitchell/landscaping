import React, { Component } from "react";
import Autumn from "./Autumn";
import "datejs";

class App extends Component { 
  changeSeason = () => {
    let now = new Date().valueOf()  
    let first_day_summer = new Date("06/21").valueOf()
    let first_day_autumn = new Date("09/22").valueOf()
    let first_day_spring = new Date("03/20").valueOf()
    let first_day_winter = new Date("12/21").valueOf()

    if( now >= first_day_autumn && now < first_day_winter) {
      console.log(`it's autumn`);
    } else if ((now >= first_day_winter && now > first_day_spring) || (now <= first_day_winter && now < first_day_spring)) {
      console.log(`it's winter`);
    } else if (now >= first_day_spring && now < first_day_summer) {
      console.log(`it's spring`);
    } else if (now >= first_day_summer && now < first_day_autumn) {
      console.log(`it's summer`);
    } else {
      return console.log('im confused')
    }
  };

  componentDidMount() {
    this.changeSeason();
  }
  render() {
    return (
      <div className="App">
        <Autumn />
      </div>
    );
  }
}

export default App;
