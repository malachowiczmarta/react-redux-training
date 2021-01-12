import React from "react";

export default function UserListElem({ user }) {
  return (
    <li>
      {user.name.first} {user.name.last}
    </li>
  );
}
