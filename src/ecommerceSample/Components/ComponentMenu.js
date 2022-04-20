import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  HomeOutlined,
  ShopOutlined,
  PlusOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function ComponentMenu() {
  return (
    <Menu
      theme="dark"
      style={{ height: 50, paddingLeft: 250 }}
      mode="horizontal"
    >
      <Menu.Item key="mail" icon={<HomeOutlined />}>
        <Link to="/">Ana Sayfa</Link>
      </Menu.Item>
      <Menu.SubMenu key="SubMenu" title="Ürünler" icon={<ShopOutlined />}>
        <Menu.ItemGroup title="Ürünler">
          <Menu.Item key="app" icon={<PlusOutlined />}>
            <Link to="/yeniurun">Yeni Ürün</Link>
          </Menu.Item>
          <Menu.Item key="disabled" icon={<UnorderedListOutlined />}>
            Ürünleri Listele
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
    </Menu>
  );
}

export default ComponentMenu;
