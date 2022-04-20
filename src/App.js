import logo from "./logo.svg";
import "./App.css";
import JsxSample from "./jsxSample/JsxSample";
import JsxSample2 from "./jsxSample/JsxSample2";
import StateSample from "./StateSample/StateSample";
import EffectSample from "./effectSample/EffectSample";
import User from "./propsSample/User";
import FetchGetSample from "./FetchSample/FetchGetSample";
import FetchPostSample from "./FetchSample/FetchPostSample";
import FetchPostSample2 from "./FetchSample/FetchPostSample2";
import AxiosSample from "./axiosSample/AxiosSample";
import HomePage from "./ComponentSample/HomePage";
import ProductList from "./ExampleData/ProductList";
import { Route, Routes, Switch } from "react-router-dom";
import Menu from "./ecommerceSample/Components/ComponentMenu";
import Layout from "./ecommerceSample/Components/Layout";
import Header from "./ecommerceSample/Components/Header";
import YeniUrun from "./ecommerceSample/Screens/YeniUrun";

function App() {
  return (
    <>
      {/* {<JsxSample></JsxSample>} */}
      {/* <JsxSample /> */}
      {/* <StateSample /> */}
      {/*<EffectSample></EffectSample>*/}
      {/* <User></User> */}
      {/* <FetchGetSample></FetchGetSample> */}
      {/* <FetchPostSample></FetchPostSample> */}
      {/* <FetchPostSample2></FetchPostSample2> */}
      {/* <AxiosSample></AxiosSample> */}
      {/* <HomePage /> */}
      {/* <ProductList></ProductList> */}
      {/* Routes componentini kullanarak bütün Route componentlerini içine sarmallıyoruz. Ardından aşağıdaki şekildeki gibi componentimizi eklemiş oluyoruz. */}
      <div style={{ padding: 20 }}>
        <Routes>
          {/* <Route path="/" element={<HomePage />}></Route>
        <Route path="/fetch" element={<FetchPostSample2 />}></Route> */}
          <Route path="/" element={<Header />}></Route>
          <Route path="/layout" element={<Layout />}></Route>
          <Route path="/yeniurun" element={<YeniUrun />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
