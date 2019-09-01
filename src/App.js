import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/wrapper';
import Cards from './components/cards';
import Space from './space.json'

function App() {
  return (
    <Wrapper name='angela'>
      {Space.map(({id, name, image}) =>
        <Cards
        id={id}
        name={name}
        image = {image}>
        </Cards>
      )}
    </Wrapper>
  );
}

export default App;
