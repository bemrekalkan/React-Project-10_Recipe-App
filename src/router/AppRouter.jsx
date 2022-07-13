import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../comonents/nav/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
