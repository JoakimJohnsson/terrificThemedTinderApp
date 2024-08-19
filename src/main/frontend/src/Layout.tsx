import {Outlet} from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

export const Layout = () => {
    return (
        <>
            <Header/>
            <main className="section pt-3">
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}
