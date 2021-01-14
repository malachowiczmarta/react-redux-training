import React from "react";

import { connect } from "react-redux";
import Button from "../../UI/Button";
import { fetchUsers, reset, addUser } from "../redux";

function Home(props) {
  function fetchData() {
    props.fetchUsers();
  }

  return (
    <div className="home-container">
      <h1>HOME</h1>
      <Button handleClick={fetchData} label="load" />
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

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  reset: () => dispatch(reset()),
  addUser: () => dispatch(addUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
