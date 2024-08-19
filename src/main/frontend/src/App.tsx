import './assets/main.scss';
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import {MyRoutes} from "./routes/MyRoutes.tsx";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <MyRoutes/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
