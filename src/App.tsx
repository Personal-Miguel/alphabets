import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CustomNavBar from './components/CustomNavBar';
import AlphabetList from './components/AlphabetList';
import CharacterChart from './components/CharacterChart';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App" >
      <CustomNavBar />
      <Row style={{ margin: "0" }}>
        <Col className="col-2" style={{ height: "95vh", padding: "0" }}>
          <AlphabetList />
        </Col>
        <Col style={{ padding: "0", backgroundColor: "#212529", }}  >
          <CharacterChart />
        </Col>
      </Row>
    </div>
  );
}

export default App;
