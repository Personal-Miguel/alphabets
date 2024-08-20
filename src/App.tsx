import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CustomNavBar from './components/CustomNavBar';
import AlphabetList from './components/AlphabetList';

function App() {
  return (
    <div className="App" >
      <CustomNavBar />
      <AlphabetList />
    </div>
  );
}

export default App;
