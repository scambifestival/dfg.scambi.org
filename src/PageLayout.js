import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footers from "./pages/footer/Footers";

export default function PageLayout() {
    return (
      <>
        <Navbar/>
        <Outlet/>
        <Footers/>
      </>  
    );
};