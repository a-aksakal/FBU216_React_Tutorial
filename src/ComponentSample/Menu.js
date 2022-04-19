import React from "react";
import "./Menu.css";
function Menu() {
  return (
    <>
      <div style={{ flex: 5 }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "space-between",
          }}
        >
          <li className="li-item">Ana Sayfa</li>
          <li className="li-item">Hakkında</li>
          <li className="li-item">Ürünler</li>
          <li className="li-item">İletişim</li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
