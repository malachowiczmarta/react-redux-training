import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import { connect } from "react-redux";
import { fetchUsers } from "../../home/redux";

function Users(props) {
  // const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // const [hasError, setError] = useState(false);

  useEffect(() => {
    props.fetchUsers();
    // setLoading(false);
  }, []);

  return (
    <div className="users-container">
      {props.isLoading && <p>loading...</p>}
      {props.isError && <p>an error has occurred</p>}
      <p>to jest users component</p>
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
