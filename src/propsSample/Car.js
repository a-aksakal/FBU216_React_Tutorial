import React from "react";
import CarDetail from "./CarDetail";

function Car() {
  const carDetail = {
    marka: "BMW",
    model: "316i",
    renk: "Siyah",
  };
  return <CarDetail carDetail={carDetail} />;
}

export default Car;
