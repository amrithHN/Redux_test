import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increment, decrement } from './actions'


export class App extends Component {

  constructor(props) {
    super(props);
    this.add = this.add.bind(this);

  }
  add() {
    console.log("add");
    this.props.in();
  }

  subtract() {
    console.log("sub");
    this.props.de();
  }

  render() {

    let { counter, logger } = this.props;
    return (
      <div>
        <h1> counter : {counter}</h1>
        <h2> logged in : {logger ? 'logged' : 'not logged'}</h2>
        <button onClick={() => this.add()}> + </button>
        <button onClick={() => this.subtract()}> - </button>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return store;
}

const mapDispatchToProps = {
  in: increment,
  de: decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
