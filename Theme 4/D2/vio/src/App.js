import React from 'react';
import './App.css';
import ParkScene from './components/ParkScene/ParkScene';
import Desk from './components/Desk/Desk';

//npx generate-react-cli component MyComponent
//serve with: http://localhost:3000

function App() {
  
  return (
    <React.Fragment>
      <ParkScene />
      <Desk />
    </React.Fragment>
  );
}

export default App;


 


