import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/user.action';

class Users extends Component {

  componentDidMount = () => {
    this.props.dispatch(actions.getUsers());
  }

  render() {
    const { users } = this.props;
    return (
      <div className='users-wrapper'>
        {
          users ? users.map(user => {
            return (
              <div key={user._id} className='user-card'>
                <p><span>Name</span> - {user.username}</p>
                <p><span>Email</span> - {user.email}</p>
              </div>
            )
          }) : 'Loading...'
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users || []
  }
}

export default connect(mapStateToProps)(Users);