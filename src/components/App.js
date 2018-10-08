import React, { Component } from "react";
import main from '../sass/autumn.scss'
import Hero from './Hero'
import CalltoAction from './CalltoAction'
import Works from './Works'
import Contact from './Contact'
import Footer from './Footer'
import "datejs";
import './seasonal'
import { title, actionimg } from "./seasonal";

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      titles: title,
      img: actionimg,
      season: {}
    }
  }

  winter = () => {
    document.getElementsByTagName('body').backgroundColor = '#3D3D46 !important;'
    document.getElementsByTagName('p').color = '#3D3D46'
    console.log('changing')
  }

  changeSeason = () => {
    let now = new Date("12/21").valueOf()  
    let first_day_summer = new Date("06/21").valueOf()
    let first_day_autumn = new Date("09/22").valueOf()
    let first_day_spring = new Date("03/20").valueOf()
    let first_day_winter = new Date("12/21").valueOf()

    if( now >= first_day_autumn && now < first_day_winter) {
      console.log(`it's autumn`);
      return [
        {title: this.state.titles.autumn},
        {img: this.state.img.autumn}
      ]
    } else if ((now >= first_day_winter && now > first_day_spring) || (now <= first_day_winter && now < first_day_spring)) {
      console.log(`it's winter`);
      this.winter()
      return [
        {title:this.state.titles.winter},
        {img: this.state.img.winter}
      ]
    } else if (now >= first_day_spring && now < first_day_summer) {
      console.log(`it's spring`);
      return [
        {title:this.state.titles.spring},
        {img: this.state.img.spring}
      ]    } else if (now >= first_day_summer && now < first_day_autumn) {
      console.log(`it's summer`);
      return [
        {title:this.state.titles.summer},
        {img: this.state.img.summer}
      ]

    } else {
      return console.log('im confused')
    }
  };

  componentDidMount() {
    this.changeSeason();
    console.log(this.state.titles)
  }
  render() {
    return (
      <div className="App">
        <header>
        <Hero handleSeason={this.changeSeason} />
    </header>
    <main>
        <CalltoAction handleSeason={this.changeSeason}/>
        <Works />
        <Contact />
    </main>
    <footer>
        <Footer />
    </footer>
      </div>
    );
  }
}

export default App;
