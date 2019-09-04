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
        
        // console.log('Score: ' + score);
        // console.log('----------\n\n Top Score:')
        // console.log(topScore);
      }

      
    });
    //RESHUFFLE CARDS EACH CLICK
    function shuffle(array) {
      const positions=[];
      while (positions.length < Space.length) {
        let randomNumber = Math.floor((Math.random()*Space.length));
        // console.log(randomNumber);
        if (positions.indexOf(randomNumber) === -1) {
          positions.push(randomNumber);
        }
      };
      const shuffledCards=[];
      for (let i = 0; i < positions.length; i++) {
        shuffledCards.push(Space[positions[i]])
      }
      console.log(positions);
      return shuffledCards;
    }
    const newSpace = shuffle(this.state.Space);
    this.setState({Space: newSpace});
    console.log(newSpace);
    // this.setState({Space: shuffle(this.state.Space)});
    // const newSpace = Space.map(({key}) => {
    //   <Cards
    //   key={(function(){
    //     for (let i = 0; i < positions.length; i ++) {
    //       return positions[i]
    //     }
    //   })
    //   }></Cards>
    // });
    // const newSpace = this.state.Space.map((key) =>{
    //   <Cards
    //   key={(function(){
    //     for (let i = 0; i < positions.length; i ++) {
    //       return positions[i]
    //     }
    //   })
    //   }></Cards>
    //   this.setState({Space: newSpace});
    // });
    
  }

  // gamePlay(identifier, e) {
    //PLAYER ACCUMULATES POINTS UNTIL THEY CLICK THE SAME CARD TWICE. THIS SETS THEIR HIGH SCORE IF THIS SCORE IS > CURRENT HIGH SCORE. CARDS REARRANGE AFTER BEING CLICKED EACH TIME. MESSAGES FOR CORRECT AND INCORRECT GUESSES. SCORE AND TOP SCORE DISPLAYED (SCORE SET TO 0 IF SAME IMAGE CLICKED TWICE)
    // console.log(identifier);
    // topScore++;
    // console.log(e.currentTarget.id)
    // console.log(topScore);
    // console.log(this.state.Space.filter(space => identifier === space.id));
    // console.log(currentTarget);
    // if (identifier === this.state.Space.id) {

    // }
    // console.log(Space.id)


    // let score = 0;
    // function playRound(identifier) {
    //   if(!this.guessed) {
    //     score++;
    //     this.guessed = true;
    //   }
    //   console.log(score);
    // }

    // playRound(identifier);
    
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
     
    
  // }

  render() {
    return(
      <Wrapper>
        <JumboTitle 
        descrip='Welcome to Space Exploration! Make sure to visit each destination ONLY ONE TIME or you will run out of fuel and perish.'>Space Game</JumboTitle>
        <Score score={score} topScore={topScore}></Score>  
        {Space.map(({id, name, image, guessed}) =>
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
