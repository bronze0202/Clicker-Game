import React, {Component} from 'react';
import './App.css';
import Info from "./components/Info.jsx";
import Upgrades from "./components/Upgrades.jsx";
import Base from "./components/Base.jsx";
import information from "./gameInfo";

class App extends Component {
  constructor(props){
    super(props);
    this.clickButton = this.clickButton.bind(this);
    this.state = {
      score:0,
      upgradeList:information.roles,
      currentUpgrade:0,
      clickInfo:{

        roles: {
          students:0,
          instructors:0,
          gInstructors:0,
          forums:0
        },

        pointsperclick:1,
        autopoints:0

      },
    }
    // const{ score, clickInfo, upgradeList, currentUpgrade } = this.state;

  }



  /* 
  buyUpgrade (name, cost) {
    if(this.state.score >= cost){
      this.setState(prevState => ({
       // roles:{
       //   students:this.state.students + 1,
       //   ...prevState.role
       // },
        score: this.state.score - cost
      }))
      
    }
    alert("Purchase Succesful")
  } 
  */


  
  clickButton (event) {
    this.setState({score: this.state.score + 
    this.state.clickInfo.pointsperclick})
    console.log(this.state.score);
  }




  random (){
    console.log(this.state.currentUpgrade)

    var num = Math.round(Math.random()*9);
    var chosen = this.state.upgradeList[num]
    this.setState({currentUpgrade:chosen}), function(){
      console.log(this.state.currentUpgrade)
      console.log(this.state.upgradeList[num])
    }
    console.log(this.state.upgradeList[num])
  }




  handlePress(e){
    if (e.key === "Shift") {         
      this.random() // not working?
      console.log("Shift pressed")
    }

  }


  componentDidMount(){
    document.addEventListener("keydown", this.handlePress, false);
    this.random()
  }

  

  render() {
    return ( 
      <div className = "App">
        <div className="game-section" id="main-section"><h1>CodeWizards Clicker</h1>
        <Base clicked={this.clickButton}/>
        <Info score={this.state.score}/></div>
       { /* <div className="game-section"><Upgrades buy={this.buyUpgrade}/></div><br/> */ }
        <div className="game-section"><p>{`Your current buff is ${this.state.currentUpgrade.name}`}</p>
        <p>Click Shift to change buff</p></div>
        <p>❗Under 🚧 Consturction❗
        <br/>We know it sucks don't mention it 😁 <br/>
        Will be finished a day late just like most of our schoolwork</p>
      </div>
      )
    }
};

export default App;