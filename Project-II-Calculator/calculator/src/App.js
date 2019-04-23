import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

const App = () => {
  return (
    <div className="main-file">
      <CalculatorDisplay />
      <ActionButton colorStyle="default" action="clear"/>
      <NumberButton colorStyle="red" text="/" />
      <NumberButton colorStyle="default" text="7" />
      <NumberButton colorStyle="default" text="8" />
      <NumberButton colorStyle="default lift" text="9" />
      <NumberButton colorStyle="red push" text="X" />
      <NumberButton colorStyle="default" text="4" />
      <NumberButton colorStyle="default" text="5" />
      <NumberButton colorStyle="default lift" text="6" />
      <NumberButton colorStyle="red push" text="-" />
      <NumberButton colorStyle="default" text="1" />
      <NumberButton colorStyle="default" text="2" />
      <NumberButton colorStyle="default lift" text="3" />
      <NumberButton colorStyle="red push" text="+" />
      <ActionButton colorStyle="default" action="0" />
      <NumberButton colorStyle="red" text="=" />

    </div>
  );
};

export default App;
