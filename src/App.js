import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homemain from "./componnets/Homemain";
import Contacthomex from "./componnets/Contact/Contacthomex";
import Context from "./componnets/Context";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homemain />} />
          <Route path="/contact" element={<Contacthomex />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
