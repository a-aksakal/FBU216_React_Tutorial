import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseManager } from "../services/BaseManager";

function FetchPostSample2() {
  const [categories, setCategories] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    // fetch("https://northwind.vercel.app/api/categories")
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data));

    baseManager.get("/categories").then((data) => {
      setCategories(data);
    });
    setRefresh(false);
  }, [refresh]);

  const AddData = () => {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    let requestBody = {
      name: name,
      description: description,
    };

    baseManager.post("/categories", requestBody).then((data) => {
      console.log(data);
    });

    // let requestOptions = {
    //   header: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   method: "POST",
    //   body: JSON.stringify(requestBody),
    // };

    // fetch("https://northwind.vercel.app/api/categories", requestOptions)
    //   .then((res) => res.json())
    //   .then((response) => console.log(response));
    setRefresh(true);
  };

  //Bu functionda ise useNavigate hook'u yardımıyla yukarıda tanımlamış olduğumuz değişkeni kullanarak içine gitmek istediğimiz yolu yazıyoruz.
  const GetHome = () => {
    navigate("/");
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
      {/* Link componenti sayesinde to property'sine atamış olduğumuz yolu tanıtıyoruz. Daha sonrasında buraya tıklanınca bizi istediğimiz yerer tönlendirmiş oluyor. */}
      <button>
        <Link to="/">Click Me!</Link>
      </button>
      <button onClick={() => GetHome()}>Home Page</button>
    </div>
  );
}

export default FetchPostSample2;
