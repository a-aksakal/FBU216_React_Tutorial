import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import { baseManager } from "../../services/BaseManager";
import { Row, Col, Button } from "antd";
import CartContext from "../../store/CartContext";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    baseManager.get("/products").then((data) => setProducts(data));
  }, []);

  const AddCart = (item) => {
    var findedProduct = cart.find((x) => x.id == item.id);
    if (findedProduct == undefined) {
      item.quantity = 1;
      setCart([...cart, item]);
    } else {
      item.quantity = item.quantity + 1;
      setCart([...cart]);
    }
  };
  return (
    <>
      {" "}
      <Header cart={cart} />
      <Row
        style={{
          backgroundColor: "#f0ebeb",
          marginTop: 30,
          paddingBottom: 30,
          marginLeft: 50,
          marginRight: 50,
        }}
      >
        {products.map((repo) => (
          <div
            style={{
              backgroundColor: "#c1d3d4",
              marginTop: 50,
              display: "flex",
              flexDirection: "column",
              minWidth: 1000,
              paddingLeft: 50,
              marginLeft: 400,
              paddingRight: 30,
              paddingBottom: 12,
              borderRadius: 15,
            }}
            span={24}
          >
            <p style={{ flex: 1, fontWeight: "bold", fontSize: 26 }}>
              {repo.name}
            </p>
            <p style={{ fontWeight: "bold", fontSize: 14 }}></p>
            <p style={{ fontWeight: "bold", fontSize: 14 }}>
              {repo.quantityPerUnit}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "flex-end",
              }}
            >
              <p
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                  color: "green",
                  alignSelf: "flex-end",
                }}
              >
                {repo.unitPrice.toFixed(2)}
              </p>
              <Button type="primary" onClick={() => AddCart(repo)}>
                Sepete Ekle
              </Button>
            </div>
          </div>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
