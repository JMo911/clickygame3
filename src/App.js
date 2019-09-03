import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/wrapper';
import Cards from './components/cards';
import JumboTitle from './components/jumbotitle';
import Space from './space.json'

class App extends React.Component {
  gamePlay(identifier) {
    //PLAYER ACCUMULATES POINTS UNTIL THEY CLICK THE SAME CARD TWICE. THIS SETS THEIR HIGH SCORE IF THIS SCORE IS > CURRENT HIGH SCORE. CARDS REARRANGE AFTER BEING CLICKED EACH TIME. MESSAGES FOR CORRECT AND INCORRECT GUESSES. SCORE AND TOP SCORE DISPLAYED (SCORE SET TO 0 IF SAME IMAGE CLICKED TWICE)
    // console.log(identifier);
    const positions=[];
    while (positions.length < Space.length) {
      let randomNumber = Math.floor((Math.random()*Space.length) + 1);
      if (positions.indexOf(randomNumber) === -1) {
        positions.push(randomNumber);
      }
    }
    console.log(positions);
    
  }

  render() {
    return(
      <Wrapper name='angela'>
      <JumboTitle 
      descrip='Welcome to Space Exploration! Make sure to visit each destination ONLY ONE TIME or you will run out of fuel and perish.'>Space Game</JumboTitle>
      {Space.map(({id, name, image}) =>
        <Cards
        key={id}
        name={name}
        image = {image}
        gamePlay = {() => this.gamePlay(id)}>
        </Cards>
      )}
    </Wrapper>
    )
  }
}

export default App;
