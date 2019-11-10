import React, { Component } from 'react';
import Navigation from "./Navigation";
import Grid from "./Grid"
import characters from "./characters.js"
import './App.css';

class App extends Component {
  state = {
    clicked: [],
    highest: 0,
    current: 0,
    correct: "",
    characters: characters,
    alert: "alert"
  };

check = (id)=>{
  let found = this.state.clicked.find(function(element) {
    return element === id;
  });
  if(found){
    return "Holy strawberries, Batman! We're in a jam!"
  } else {
    return "Precisely, Robin!"
  }
}

handleOnClickEvent = (event)=>{
  let highest=this.state.highest;
  let current = this.state.current;
  let imagesArray = this.state.clicked;
  let currentImage = event.target.dataset.id;
  let correct = this.check(currentImage);
  let alert = this.state.alertt;
  if(correct==="Holy strawberries, Batman! We're in a jam!"){
    highest= current>highest? current:highest;
    current=0;
    imagesArray=[];
    alert = "alertWrong";
  } 
  else{
    
    imagesArray.push(currentImage);
    current++;
    highest= current>highest? current:highest;
    alert = "alertCorrect"
  } 
  this.setState({
    characters: this.state.characters.sort(() => Math.random() - 0.6),
    correct: correct,
    clicked: imagesArray,
    highest: highest,
    current:current,
    alert: alert
  })

}

render(){
  return(
    <div className="App">
      <Navigation current={this.state.current} alert={this.state.alert} highest={this.state.highest} correct={this.state.correct}/> 
      <div className="container">
        <Grid characters={this.state.characters}
        handleOnClickEvent = {this.handleOnClickEvent}/>
      </div>
    </div>
  )
}
}

export default App;