import React, { Component, SyntheticEvent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../atoms/User';
import { actions as UserActions } from '../../store/modules/Users';
// import logo from './logo.svg';
import './App.css';

type Props = {
  user: Object
}

class App extends Component<Props> {
  
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

  handleClick = (event: SyntheticEvent<HTMLButtonElement>, user: Object) => {
    console.log(event.currentTarget);
    console.log(user);
    this.props.addUser({
      name: 'Sandy',
      age: 38
    });
  }

  render() {
    console.log(this.props.users);
    return (
      <div className="App">
        <header className="App-header">
          React App + Flow
        </header>
        { 
          this.props.users.map(user => {
            return (
              <User key={user.name}
                    user={user} 
                    handleClick={this.handleClick} />
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    users
  };

}

const mapDispatchToProps = dispatch => bindActionCreators({
  addUser: UserActions.addUserAction
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
