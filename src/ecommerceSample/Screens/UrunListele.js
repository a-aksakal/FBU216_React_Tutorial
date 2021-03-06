import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Table, Tag, Space } from "antd";
import { baseManager } from "../../services/BaseManager";
import { useNavigate } from "react-router-dom";

function UrunListele() {
  const { Column } = Table;
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("username") != "alican") {
      navigate("/login");
    }
    baseManager.get("/products").then((data) => setProducts(data));

    setRefresh(false);
  }, [refresh]);
  var filteredProducts = products.filter((item) => item.unitPrice >= 22);

  console.log(filteredProducts);
  const DeleteData = (item) => {
    baseManager.del("/products/" + item.id).then((data) => console.log(data));
    setRefresh(true);
  };
  return (
    <>
      <Header />
      <div
        style={{
          marginLeft: 100,
          marginTop: 50,
          marginRight: 100,
          paddingBottom: 30,
          paddingRight: 30,
          paddingLeft: 30,
          backgroundColor: "#FCFCFC",
          borderRadius: 20,
        }}
      >
        <Table dataSource={products}>
          <Column title="Ürün Adı" dataIndex="name" key="name" />
          <Column
            title="Paket Tanımı"
            dataIndex="quantityPerUnit"
            key="quantityPerUnit"
          />

          <Column
            title="Tedarikçi Adı"
            dataIndex="supplier"
            key="supplier"
            render={(supplier) => <p>{supplier && supplier.companyName}</p>}
          />
          <Column
            title="Tedarikçi İlgili Kişi"
            dataIndex="supplier.contactName"
            key="supplier.contactName"
          />
          <Column title="Birim Fiyatı" dataIndex="unitPrice" key="unitPrice" />
          <Column
            title="Üretim Durumu"
            dataIndex="discontinued"
            key="discontinued"
          />
          <Column
            title="İşlemler"
            key="action"
            render={(text, record) => (
              <Space size="middle">
                <a key={record.id}>Invite {record.lastName}</a>
                <a key={record.id + 1} onClick={() => DeleteData(record)}>
                  Sil
                </a>
              </Space>
            )}
          />
        </Table>
      </div>
    </>
  );
}

export default UrunListele;
