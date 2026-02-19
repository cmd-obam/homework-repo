import { Route, Routes } from "react-router-dom";
import MainLayout from "./assets/components/layout/MainLayout";
import MainPage from "./assets/pages/MainPage";
import WirtePage from "./assets/pages/WirtePage";
import LoginPage from "./assets/pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/write" element={<WirtePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
