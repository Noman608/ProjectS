import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cheackout from "./Cheackout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/checkout" element={<Cheackout/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
