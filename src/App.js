import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/wrapper';
import Cards from './components/cards';
import JumboTitle from './components/jumbotitle';
import Space from './space.json'



class App extends React.Component {
  // state = {
  //   Space: Space
  // }
  
  gamePlay(identifier) {
    //PLAYER ACCUMULATES POINTS UNTIL THEY CLICK THE SAME CARD TWICE. THIS SETS THEIR HIGH SCORE IF THIS SCORE IS > CURRENT HIGH SCORE. CARDS REARRANGE AFTER BEING CLICKED EACH TIME. MESSAGES FOR CORRECT AND INCORRECT GUESSES. SCORE AND TOP SCORE DISPLAYED (SCORE SET TO 0 IF SAME IMAGE CLICKED TWICE)
    // console.log(identifier);
    let score = 0;
    function playRound(identifier) {
      if(!this.guessed) {
        score++;
        this.guessed = true;
      }
      console.log(score);
    }

    playRound(identifier);
    
    // const positions=[];
    // while (positions.length < Space.length) {
    //   let randomNumber = Math.floor((Math.random()*Space.length) + 1);
    //   if (positions.indexOf(randomNumber) === -1) {
    //     positions.push(randomNumber);
    //   }
    // }

    // const newSpace = positions.map((position) =>
    //   <Cards key={position}></Cards>
      
    // );
    // return(
    //   this.setState({space: newSpace}) 
    // )
     
    
  }

  render() {
    return(
      <Wrapper name='angela'>
      <JumboTitle 
      descrip='Welcome to Space Exploration! Make sure to visit each destination ONLY ONE TIME or you will run out of fuel and perish.'>Space Game</JumboTitle>
      {Space.map(({id, name, image, guessed}) =>
        <Cards
        key={id}
        name={name}
        image = {image}
        guessed = {guessed}
        gamePlay = {() => this.gamePlay(id)}>
        </Cards>
      )}
    </Wrapper>
    )
  }
}

export default App;
