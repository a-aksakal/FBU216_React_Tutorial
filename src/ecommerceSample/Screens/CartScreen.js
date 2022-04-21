import { Button } from "antd";
import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import Header from "../Components/Header";

function CartScreen() {
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#FCFCFC",
          flexWrap: "wrap",
          marginTop: 30,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        {" "}
        {cart.map((repo) => (
          <div
            style={{
              backgroundColor: "greenyellow",
              display: "flex",
              flexDirection: "column",
              width: 500,
              marginLeft: 50,
              padding: 20,
              marginTop: 20,
            }}
          >
            <p style={{ fontSize: 26, fontWeight: "800" }}>{repo.name}</p>
            <p style={{ fontSize: 16, fontWeight: "bold" }}>{repo.quantity}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: 24, color: "green", fontWeight: "800" }}>
                {repo.unitPrice}
              </p>
              <Button type="primary">Add</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CartScreen;
