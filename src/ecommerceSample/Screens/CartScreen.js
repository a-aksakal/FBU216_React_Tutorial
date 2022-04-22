import { Button } from "antd";
import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import Header from "../Components/Header";

function CartScreen() {
  const { cart, setCart, total, setTotal } = useContext(CartContext);
  const DeleteCart = (item) => {
    var findedProduct = cart.find((x) => x.id == item.id);
    var index = cart.indexOf(findedProduct);
    cart.splice(index, 1);
    setTotal(total - item.unitPrice * item.quantity);
    setCart([...cart]);
  };
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <div style={{ width: 50, height: 50 }}>
          <p>Total Price</p>
          <p>{total.toFixed(2)}</p>
        </div>
      </div>
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
                {repo.unitPrice * repo.quantity}
              </p>
              <Button type="primary" onClick={() => DeleteCart(repo)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CartScreen;
