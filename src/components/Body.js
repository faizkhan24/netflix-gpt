import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
