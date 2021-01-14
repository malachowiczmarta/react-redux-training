import React from "react";
import UserListElem from "./UserListElem";

export default function UserList({ users }) {
  return (
    <>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <UserListElem key={user.login.uuid} user={user} />
        ))}
      </ul>
    </>
  );
}
