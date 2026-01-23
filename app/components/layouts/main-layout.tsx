import Navbar from "../navbar";
import Footer from "../footer";
import { Outlet } from "react-router";

const MainLayout = () => (
    <main>
        <Navbar></Navbar>
        <Outlet />
        <Footer></Footer>
    </main>
)

export default MainLayout