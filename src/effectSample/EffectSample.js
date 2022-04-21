import React, { useEffect, useState } from "react";

function EffectSample() {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");

  //bu hook sadece sayfa ilk render olduktan sonra çalışacak kod.
  //componentdidmount yapısı
  useEffect(() => {
    console.log("Sayfa render edildi.");
  }, []);

  //sayfada name state'i değiştikten sonra çalışacak kod.
  //componentdidupdate yapısı.
  useEffect(() => {
    console.log("Name state'i değişti");
  }, [name]);

  //herhangi bir state değişmesi durumunda çalışır.
  useEffect(() => {
    console.log("Herhangi bir state değişti.");
  });

  //component artık kullanılmadığında çalışacak olan kod.
  //componentdidunmount yapısı.
  useEffect(() => {
    console.log("");
    return () => {
      console.log("sayfadan çıkış yapıldı.");
    };
  }, []);

  return (
    <div>
      <center>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <input type="text" onChange={(e) => setSurName(e.target.value)}></input>
        <p>{name}</p>
      </center>
    </div>
  );
}

export default EffectSample;
