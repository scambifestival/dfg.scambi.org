import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footers from "./pages/footer/Footers";

export default function PageLayout() {
    return (
      <div className='overflow-hidden'>
        <Navbar/>
        <div className='pt-32'></div>
        <Outlet/>
        <Footers/>
      </div>  
    );
};