import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./assets/components/Home";
import Post from "./assets/components/Post";
import Frist from "./assets/Post/Frist";
import Second from "./assets/Post/Second";
import Three from "./assets/Post/Three";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/frist" element={<Frist />} />
        <Route path="/second" element={<Second />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
