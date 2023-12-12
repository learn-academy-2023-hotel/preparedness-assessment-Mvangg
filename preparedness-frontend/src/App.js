import React, { useState } from "react";
import { Button, Input, Label } from "reactstrap";
import ModalComponent from "./components/ModalComponent";
import "./App.css";

const App = () => {

  const [userInput, setUserInput] = useState("");
  
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const reset = (e) => {
    setUserInput("");
  };

  const [modal, setModal] = useState(false);

  const toggle = (props) => setModal(!modal);

  return (
    <div className="entire-content">
      <h1 className="main-header">Preparedness Assessment</h1>
      <div className="form">
        <div className="name-title">
          <div className="input">
            <Label for="name">Enter your name</Label>
          </div>
          <div className="user-input">
            <Input type="text" value={userInput} onChange={handleChange} />
          </div>
          <div className="button-container">
            <Button className="button" onClick={toggle}>
              Click Me
            </Button>
            <Button className="button" onClick={reset}>
              Reset
            </Button>
          </div>
          <ModalComponent isOpen={modal} name={userInput} toggle={toggle} />
        </div>
      </div>
    </div>
  );
};

export default App;
