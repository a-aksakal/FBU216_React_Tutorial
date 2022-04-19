import React, { useEffect, useState } from "react";

function FetchPostSample2() {
  const [categories, setCategories] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
    setRefresh(false);
  }, [refresh]);
  const AddData = () => {
    const categoryName = "Deneme2";
    const description = document.getElementById("description").value;
    let requestBody = {
      name: "Deneme2221",
      description: description,
    };

    let requestOptions = {
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(requestBody),
    };

    fetch("https://northwind.vercel.app/api/categories", requestOptions)
      .then((res) => res.json())
      .then((response) => console.log(response));
    setRefresh(true);
  };
  return (
    <div>
      <input type="text" id="name" />
      <input type="text" id="description" />
      <button onClick={() => AddData()}>Ekle</button>
      <ul>
        {categories.map((value, index) => (
          <li key={index}>{value.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchPostSample2;
