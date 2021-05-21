import React from 'react';
import Result from './Result';
import Keypad from './Keypad';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '',
      computed: false
    }
  }

  onClick = (button) => {
    if(button === '=') {
      this.calculate()
    } else if(button === 'C') {
      this.reset()
    } else if(button === 'CE') {
      this.backspace()
    } else {
      if(this.state.computed === true && !isNaN(Number(button))) {
        this.setState({result: '' + button, computed: false});
      } else if(this.state.computed === true && isNaN(Number(button))) {
        this.setState({result: this.state.result + button, computed: false});
        } else {
          this.setState({result: this.state.result + button});
          }
      }
  };

  calculate = () => {
    try {
      // eslint-disable-next-line
      this.setState({result: eval(this.state.result) + '', computed: true});
    } catch (e) {
      this.setState({result: 'error'})
    }
  };

  reset = () => {
    this.setState({result: ''})
  }

  backspace = () => {
    if(this.state.computed === true) {
      return;
    } else {
      this.setState({result: this.state.result.slice(0,-1)});
    }
  }

  render() {
    return (
      <div>
        <h3>Simple Calculator</h3>
        <Result result={this.state.result}/>
        <Keypad onClick={this.onClick} />
      </div>
    )
  }
}
