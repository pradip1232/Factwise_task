import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserItem from "./UserItem";

export default function UserList() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      age: "25",
      gender: "Male",
      country: "USA",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      name: "John Doe",
      age: "22",
      gender: "Male",
      country: "USA",
      description: "Lorem ipsum dolor sit amet.",
    },
  ];

  const handleDeleteUser = (id) => {
    console.log("Delete user with id:", id);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">List View</h1>
      {users.map((user) => (
        <UserItem key={user.id} user={user} onDelete={handleDeleteUser} />
      ))}
    </div>
  );
}
