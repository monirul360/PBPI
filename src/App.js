import { Route, Routes } from "react-router-dom";
import "./App.css";
import Aboutus from "./Page/Aboutus/Aboutus";
import Error from "./Page/Error/Error";
import Footer from "./Page/Footer/Footer";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Nav from "./Page/Nav/Nav";
import Teacher from "./Page/Teacher/Teacher";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/teacher" element={<Teacher></Teacher>}></Route>
        <Route path="aboutUs" element={<Aboutus></Aboutus>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
