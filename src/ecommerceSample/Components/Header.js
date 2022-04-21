import { Avatar, Badge } from "antd";
import React, { useContext, useState } from "react";
import ComponentMenu from "./ComponentMenu";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import CartContext from "../../store/CartContext";

function Header() {
  const { cartlength } = useContext(CartContext);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 50,
          alignItems: "center",
        }}
      >
        <img style={{ maxHeight: 80, maxWidth: 80 }} src="/logo192.png"></img>
        <Badge count={cartlength}>
          <a>
            <Avatar shape="square" size="large">
              <ShoppingCartOutlined style={{ color: "black", fontSize: 24 }} />
            </Avatar>
          </a>
        </Badge>
      </div>
      <ComponentMenu />
    </div>
  );
}

export default Header;
