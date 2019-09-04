import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/wrapper';
import Cards from './components/cards';
import JumboTitle from './components/jumbotitle';
import Score from './components/score';
import Space from './space.json'

let topScore = 0;
let score = 0;

class App extends React.Component {
  state = {
    Space: Space,
    score: score
  }
  
  handleClick = (e, id) => {
    // const loseStyle = {
    //   losscolor: {
    //     'background-color': 'red'
    //   }
    // }
    
    Space.forEach(element => {
      if (element.id === id) {
        if (element.guessed === false) {
          element.guessed = true;
          score++;
          this.setState({score: score});
        } else if (element.guessed === true) {
          if (score > topScore){
            topScore = score;
            //THIS IS WHERE WE NEED LOSE FUNCTIONALITY
          }
          score = 0;
          //MAKE COMPONENT RED FOR 3 SEC?
          this.setState({score: score})
          Space.forEach(element => element.guessed = false);
        }
        
      }

      
    });
    //RESHUFFLE CARDS EACH CLICK
    function shuffle(array) {
      const positions=[];
      while (positions.length < Space.length) {
        let randomNumber = Math.floor((Math.random()*Space.length));
        if (positions.indexOf(randomNumber) === -1) {
          positions.push(randomNumber);
        }
      };
      const shuffledCards=[];
      for (let i = 0; i < positions.length; i++) {
        shuffledCards.push(Space[positions[i]])
      }
      return shuffledCards;
    }
    const newSpace = shuffle(this.state.Space);
    this.setState({Space: newSpace});
    console.log(newSpace);

    //POTENTIALLY EASIER WAY, LEAVING FOR FUTURE REFERENCE
    // function easyShuffle(element) {
    //   const randomNumber = Math.floor((Math.random()*1000));
    //   let newID = parseInt(element.id) * randomNumber;
    //   console.log(newID);
    //   console.log(element.key)
    //   element.key = newID;
    // }
    // console.log(this.state.Space);
    // const newSpace = this.state.Space.map(easyShuffle);
    // console.log(newSpace);
  }
  //END OF HANDLECLICK

  render() {
    return(
      <Wrapper>
        <JumboTitle 
        descrip='Welcome to Space Exploration! Make sure to visit each destination ONLY ONE TIME or you will run out of fuel and perish.'>Space Game</JumboTitle>
        <Score score={score} topScore={topScore}></Score>  
        {this.state.Space.map(({id, name, image, guessed}) =>
          <Cards
          key={id}
          name={name}
          image = {image}
          guessed = {guessed}
          gamePlay = {((e) => this.handleClick(e, id))}>
          </Cards>
        )}
      </Wrapper>
    )
  }
}

export default App;
