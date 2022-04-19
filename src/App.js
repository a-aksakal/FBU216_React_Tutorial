import logo from "./logo.svg";
import "./App.css";
import JsxSample from "./jsxSample/JsxSample";
import JsxSample2 from "./jsxSample/JsxSample2";
import StateSample from "./StateSample/StateSample";
import EffectSample from "./effectSample/EffectSample";

function App() {
  return (
    <>
      {/* {<JsxSample></JsxSample>} */}
      {/* <JsxSample /> */}
      {/* <StateSample /> */}
      <EffectSample></EffectSample>
    </>
  );
}

export default App;
