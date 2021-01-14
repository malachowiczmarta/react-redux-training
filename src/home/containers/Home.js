import React from "react";

import { connect } from "react-redux";
import Button from "../../UI/Button";
import { fetchUsers, reset, addUser } from "../redux";

function Home(props) {
  return (
    <div className="home-container">
      <h1>HOME</h1>
      <Button handleClick={() => props.fetchUsers()} label="load" />
      <Button handleClick={() => props.reset()} label="reset" />
      <Button handleClick={() => props.addUser()} label="add" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.home.users,
    isLoading: state.home.isLoading,
    isError: state.home.isError
  };
};

const mapDispatchToProps = {
  fetchUsers,
  reset,
  addUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
