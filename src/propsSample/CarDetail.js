import React from "react";

function CarDetail(props) {
  const { marka, model, renk } = props.carDetail;
  return (
    <>
      <div>
        <p>{marka}</p>
        <p>{model}</p>
        <p>{renk}</p>
      </div>
    </>
  );
}

export default CarDetail;
