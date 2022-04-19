import React from "react";
import UserDetail from "./UserDetail";

function User() {
  const user = {
    name: "Alican",
    surname: "Aksakal",
    address: {
      city: "istanbul",
    },
  };

  return <UserDetail userDetails={user}></UserDetail>;
}

export default User;
