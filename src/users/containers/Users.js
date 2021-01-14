import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import { connect } from "react-redux";
import { fetchUsers } from "../../home/redux";

function Users(props) {
  useEffect(() => {
    props.fetchUsers();
    // setLoading(false);
  }, []);

  return (
    <div className="users-container">
      {props.isLoading && <p>loading...</p>}
      {props.isError && <p>an error has occurred</p>}
      <UserList users={props.users} />
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
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
