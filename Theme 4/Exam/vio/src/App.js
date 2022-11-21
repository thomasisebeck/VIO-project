import React from 'react';
import './App.css';
import ParkScene from './components/ParkScene/ParkScene';
import Desk from './components/Desk/Desk';
import Description from './components/Description/Description';

//npx generate-react-cli component MyComponent
//to create html: npm run build

function App() {
  
  return (
    <React.Fragment>
      <ParkScene />
      <Description />
      <Desk />
    </React.Fragment>
  );
}

export default App;


 


