import React from "react";
import Menu from "./Menu";

function Header() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <p>Burası Header</p>
        <Menu />
      </div>
    </>
  );
}

export default Header;
