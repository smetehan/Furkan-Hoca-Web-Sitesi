import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Konu from "../pages/Konu";
import Login from "../pages/Login";
import Blog from "../pages/Blog";
import Test from "../pages/Test";
import Test1 from "../testler/Test1";
import Test2 from "../testler/Test2";
import Test3 from "../testler/Test3";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="kt" element={<PrivateRouter />}>
          <Route path="" element={<Konu />}>
            <Route index element={<Test />} />
            <Route path="test1" element={<Test1 />} />
            <Route path="test2" element={<Test2 />} />
            <Route path="test3" element={<Test3 />} />
          </Route>
        </Route>
        <Route path="/blog" element={<PrivateRouter />}>
          <Route path="" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
