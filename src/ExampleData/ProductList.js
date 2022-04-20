import React, { useEffect, useState } from "react";
import { productList } from "./products";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    setProducts(productList);
  }, []);

  const AddData = () => {
    const findedProduct = products.find((x) => x.name == name);
    if (findedProduct == undefined) {
      let newObject = {
        name: name,
      };
      //setProducts([...products, newObject]);
      setProducts([newObject, ...products]);
      //split operator.. Yeni bir dizi oluşturur ve ... koyarak eski dizinin elemanlarını içine yazdırabileceğimiz yöntem...
      //products.push(newObject); //bu sayfayı render etmez!
    }
  };
  return (
    <>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={() => AddData()}>Ekle</button>

        <ul>
          {products.map((value, key) => (
            <li key={key}>{value.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductList;
