import React from "react";

function UserDetail(props) {
  //const { name, surname, address } = props.userDetails;
  const { userDetails } = props;
  return (
    <>
      <div>
        <p>{userDetails.name}</p>
        <p>{userDetails.surname}</p>
      </div>
    </>
  );
}

export default UserDetail;
