import React from "react";

import { fetchUser } from "../actions";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const user = this.props.users.find(user => user.id === this.props.userId);
    if (!user) {
      return null;
    }

    return <div className="header"> {user.name} </div>;
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
