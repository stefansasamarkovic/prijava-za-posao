import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Succsess from "./pages/Succsess";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="applications" element={<Applications />} />
        <Route path="success" element={<Succsess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
