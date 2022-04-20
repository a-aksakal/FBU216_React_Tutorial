import React from "react";
import ComponentMenu from "./ComponentMenu";

function Header() {
  return (
    <div>
      <img style={{ maxHeight: 80, maxWidth: 80 }} src="/logo192.png"></img>
      <ComponentMenu />
    </div>
  );
}

export default Header;
