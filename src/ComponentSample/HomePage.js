import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function HomePage() {
  return (
    <>
      <div style={{ padding: "12px" }}>
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
