import React, { Component } from 'react';
import Navigation from "./Navigation";
import Grid from "./Grid"
import characters from "./characters.js"
import './App.css';
import { shuffle } from './shuffleArray';
import PictureCard from "./PictureCard";

//  Individual component for ; 

class App extends Component {
  // Setting this.state.pictures to the pictures json array
  
  state = {
    characters,
    previousIDs: [0],
    score: 0,
    topScore: 0,
  };

  
  restart = () => {
    alert("Holy scrambled eggs, Batman! We're beaten!");
    this.setState({
        characters,
      previousIDs: [0],
      score: 0,
      topScore: this.state.topScore,
    })
    
    console.log("this.state endgame", this.state)
  }
  
  incrementScore = () => {
    
    let newScore = this.state.score + 1;

    const newTopScore = newScore > this.state.topScore ? newScore : this.state.topScore;

    if (newScore === 12) {
      alert("Holy hardware store, Batman! We nailed it!");
      this.restart();
    }

    return {
      newScore,
      newTopScore
    }
  }

  shufflePictures = (id) => {
    const characters = shuffle(this.state.characters);

    if(!this.state.previousIDs.includes(id)) {

      const newScores = this.incrementScore();
      
      this.setState({ characters, previousIDs: [...this.state.previousIDs, id], score:newScores.newScore, topScore:newScores.newTopScore });
    } 
    else {
      return this.restart()
    };
  };

  render() {
    return (
      <>
      <Navigation score={this.state.score} topScore={this.state.topScore} />
      <div className="container">
      <Grid shufflePictures={this.shufflePictures}
      />
      </div>
      </>
    );
  }
}

export default App;