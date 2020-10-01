import React, { Component } from 'react';

class App extends Component {
  state = {
    firstNumber: null,
    secondNumber: null,
    result: null,
  };

  changeFirstNumber = (ev) => {
    const value = ev.target.value;

    this.setState({
      firstNumber: Number(value)
    });
  }

  changeSecondNumber = (ev) => {
    const value = ev.target.value;

    this.setState({
      secondNumber: Number(value)
    });
  }

  addNumbers = () => {
    const { firstNumber, secondNumber } = this.state;
    
    this.setState({
      result: firstNumber + secondNumber,
    })
  }

  subtractNumbers = () => {
    const { firstNumber, secondNumber } = this.state;
    
    this.setState({
      result: firstNumber - secondNumber,
    })
  }

  multiplyNumbers = () => {
    const { firstNumber, secondNumber } = this.state;
    
    this.setState({
      result: firstNumber * secondNumber,
    })
  }

  divideNumbers = () => {
    const { firstNumber, secondNumber } = this.state;
    
    this.setState({
      result: firstNumber / secondNumber,
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.result // condição
          ? <h1>{this.state.result}</h1> // if
          : <h1>nenhum resultado ainda!</h1> // else
        }
        <div className="numbers-container">
          <input
            type='number'
            className='input-number'
            onChange={this.changeFirstNumber}
          />
          <input
            type='number'
            className='input-number'
            onChange={this.changeSecondNumber}
          />
        </div>
        <div className='buttons-container'>
          <button
            className='btn'
            onClick={this.addNumbers}
          >+</button>
          <button
            className='btn'
            onClick={this.subtractNumbers}
          >-</button>
          <button
            className='btn'
            onClick={this.multiplyNumbers}
          >*</button>
          <button
            className='btn'
            onClick={this.divideNumbers}
          >/</button>
        </div>
      </div>
    );
  }
}

export default App;
