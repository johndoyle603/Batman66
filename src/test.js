import React, { Component } from 'react';
import Navigation from "./Navigation";
import Grid from "./Grid"
import characters from "./characters.js.js"
import './App.css';
import { shuffle } from './shuffleArray';
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import { PictureInterface } from './interfaces/PictureCard';
import { shuffle } from './shuffleArray';

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
    alert("Confound it!");
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

    if (newScore > 8) {
      alert("Holy Bat Logic! You win!");
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


  // Map over this.state.pictures and render a pictureCard component for each friend object
  render() {
    return (
      <>
      <Navbar score={this.state.score} topScore={this.state.topScore} />
      <Wrapper>
        <p className="col-12 mx-auto">Click all nine pictures without repeating yourself</p>
        {this.state.characters.map(character => (
          <PictureCard
            shufflePictures={this.shufflePictures}
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
      </>
    );
  }
}

export default App;