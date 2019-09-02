import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/wrapper';
import Cards from './components/cards';
import JumboTitle from './components/jumbotitle';
import Space from './space.json'

function App() {
  return (
    
    <Wrapper name='angela'>
      <JumboTitle 
      descrip='Welcome to Space Exploration! Make sure to visit each destination only one time or peril.'>Space Game</JumboTitle>
      {Space.map(({id, name, image}) =>
        <Cards
        key={id}
        name={name}
        image = {image}>
        </Cards>
      )}
    </Wrapper>
  );
}

export default App;
