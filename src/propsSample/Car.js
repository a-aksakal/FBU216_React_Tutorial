import React from "react";
import CarDetail from "./CarDetail";

function Car() {
  const carDetail = {
    marka: "BMW",
    model: "320i",
    renk: "Siyah",
  };
  return <CarDetail carDetail={carDetail} />;
}

export default Car;
