import React, { useEffect, useState } from "react";

function FetchGetSample() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //default olarak get methodu çalışır.
    fetch("https://northwind.vercel.app/api/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div>
        <ul>
          {products.map((repo, index) => (
            <li key={index}>{repo.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FetchGetSample;
