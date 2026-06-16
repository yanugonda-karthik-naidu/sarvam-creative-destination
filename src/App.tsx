import { Routes, Route } from "react-router-dom";
import Home from "./routes/index";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}