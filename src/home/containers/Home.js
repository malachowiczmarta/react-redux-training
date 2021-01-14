import React from "react";

import { connect } from "react-redux";
import Button from "../../UI/Button";
import { fetchUsers } from "../redux";

function Home() {
  function fetchData() {
    fetchUsers();
  }

  return (
    <div className="home-container">
      <h1>HOME</h1>
      <Button handleClick={fetchData} label="load" />
      <Button label="reset" />
      <Button label="add" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
