import axios from "axios";
import React, { useEffect, useState } from "react";

function AxiosSample() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function FetchData() {
      const response = await axios.get(
        "https://northwind.vercel.app/api/categories"
      );
      //console.log(response);

      setCategories(response.data);
    }
    FetchData();
  }, []);

  const AddData = async () => {
    var name = "Deneme";

    let requestBody = {
      name: name,
    };

    const response = await axios.post(
      "https://northwind.vercel.app/api/categories",
      requestBody
    );
    console.log(response);
  };
  //console.log(categories);

  return (
    <div>
      <button onClick={() => AddData()}>Ekle</button>
    </div>
  );
}

export default AxiosSample;
