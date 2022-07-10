import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

export default function PageLayout() {
    return (
      <>
        <Navbar/>
        <Outlet/>
        {/*<Footer/>*/}
      </>  
    );
};