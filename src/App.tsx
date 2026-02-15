import "./index.scss";
import Counter from "./components/CounterTS.tsx/Counter.lazy";
import { Link, Route, Routes } from "react-router-dom";
import About from "./Pages/About.lazy";

export default function App() {
  return (
    <div className="app">
      <Link to={"/"}>Counter</Link>
      <Link to={"/about"}>About</Link>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}