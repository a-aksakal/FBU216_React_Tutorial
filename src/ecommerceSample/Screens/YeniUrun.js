import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import { baseManager } from "../../services/BaseManager";

function YeniUrun() {
  const [componentSize, setComponentSize] = useState("default");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [quantityPerUnit, setQuantityPerUnit] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [price, setPrice] = useState(0);
  const [discontinued, setDiscontinued] = useState(false);

  const changePrice = (value) => {
    setPrice(value);
  };
  const changeDiscontinued = (value) => {
    setDiscontinued(value);
  };

  const AddProduct = () => {
    let requestBody = {
      name: name,
      unitPrice: price,
      discontinued: discontinued,
      quantityPerUnit: quantityPerUnit,
      supplier: {
        companyName: companyName,
        contactName: employeeName,
      },
    };

    baseManager
      .post("/products", requestBody)
      .then((data) => console.log(data));
  };

  return (
    <div>
      <Header />
      <div
        style={{
          backgroundColor: "#aeb8b1",
          marginTop: 50,
          marginLeft: 250,
          marginRight: 250,
          paddingBottom: 30,
          borderRadius: 20,
          paddingTop: 20,
        }}
      >
        <p style={{ fontSize: 26, fontWeight: "bold", paddingLeft: 240 }}>
          {" "}
          Yeni ürün Ekle{" "}
        </p>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          size={componentSize}
        >
          <Form.Item label="Ürün Adı:">
            <Input
              id="productName"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Paket Tanımı">
            <Select onChange={(e) => setQuantityPerUnit(e)}>
              <Select.Option value="16x16">16x16</Select.Option>
              <Select.Option value="32x32">32x32</Select.Option>
              <Select.Option value="64x64">64x64</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Tedarikçi Adı:">
            <Input
              id="companyName"
              autoComplete="off"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Tedarikçi İlgili Kişi:">
            <Input
              id="employeeName"
              autoComplete="off"
              onChange={(e) => setEmployeeName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Fiyatı">
            <InputNumber id="price" onChange={changePrice} />
          </Form.Item>
          <Form.Item label="Üretim Durumu" valuePropName="checked">
            <Switch onChange={changeDiscontinued} />
          </Form.Item>
          <Form.Item label="=>">
            <Button type="primary" onClick={() => AddProduct()}>
              Ekle
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default YeniUrun;
