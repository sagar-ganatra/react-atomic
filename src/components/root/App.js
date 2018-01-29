import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as UserActions } from '../../store/modules/Users';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.addUser({
      name: 'Sagar',
      age: 33
    });
    this.props.addUser({
      name: 'Santosh',
      age: 38
    });
  }
  render() {
    console.log(this.props.users);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { users } = state;
  console.log(users);
  return {
    users: users.toJS()
  };

}

const mapDispatchToProps = dispatch => bindActionCreators({
  addUser: UserActions.addUserAction
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
