import React from 'react';
import './App.css';
import ParkScene from './components/ParkScene/ParkScene';
import Book from './components/Book/Book';

//npx generate-react-cli component MyComponent

function App() {
  
  return (
    <React.Fragment>
      <ParkScene />
      <Book/>
    </React.Fragment>
  );
}

export default App;
