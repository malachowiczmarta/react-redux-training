import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading && <p>loading...</p>}
      <p>to jest users component</p>
      <UserList users={users} />
    </div>
  );
}
