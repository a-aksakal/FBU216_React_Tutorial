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
      <ProductList></ProductList>
    </>
  );
}

export default App;
