import React, { useEffect, useState } from "react";

function FetchPostSample() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState([]);
  useEffect(() => {
    //GET methodu için;
    fetch("https://northwind.vercel.app/api/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    console.log("datalar yenilendi.");
  }, [name]);
  const AddData = () => {
    var productName = document.getElementById("name").value;
    setName(productName);
    let requestBody = {
      CityName: name,
    };

    let requestOptions = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(requestBody),
    };

    //POST Methodu için;
    fetch(
      "https://private-de332a-insaatapi6.apiary-mock.com/postCity",
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <input type="text" id="name" />
      <button onClick={() => AddData()}>Ekle</button>
      <ul>
        {products.map((value, index) => (
          <li key={index}>{value.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchPostSample;
