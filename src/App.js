import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Page/Footer/Footer";
import Home from "./Page/Home/Home";
import Nav from "./Page/Nav/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
