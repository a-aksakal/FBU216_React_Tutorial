import React, { useState } from "react";

function StateSample() {
  const [name, setName] = useState("");

  var number = "16";
  var number2 = 16;
  //JS'de iki eşittir yazdığınızda değerlerin türüne bakmaksızın içeriğini kontrol eder.
  //Eğer üç eşittir koyarsanız değerlerin türünü de göz önünde bulundurarak içeriğini kontrol eder.
  if (number === number2) {
    //alert("Doğru");
  } else {
    //alert("Yanlış");
  }

  //   useEffect(() => {

  //   }, [name]);

  //JSX yazarken eğer js kodu kullanmak istiyorsak {} scope kullanmamız gerekiyor...
  return (
    <div>
      <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
    </div>
  );
}

export default StateSample;
