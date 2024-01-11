import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Sheard/Navbar/Navbar";
import Footer from "../Pages/Sheard/Footer/Footer";
import Container from "../Components/Container";

const Main = () => {
  return (
    <div>
      <Container><Navbar></Navbar></Container>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
