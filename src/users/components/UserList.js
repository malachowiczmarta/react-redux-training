import React from "react";
import UserListElem from "./UserListElem";

export default function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <UserListElem key={user.login.uuid} user={user} />
      ))}
    </ul>
  );
}
