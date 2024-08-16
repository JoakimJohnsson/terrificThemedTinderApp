import './assets/main.scss';
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import {faUser, faMessage} from "@fortawesome/sharp-duotone-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function App() {
    return (
        <>
            <Header/>
            <main className="section pt-3">
                <div className="container has-text-centered">
                    <FontAwesomeIcon icon={faUser} size={"2x"} className={"mr-2"}/>
                    <FontAwesomeIcon icon={faMessage} size={"2x"} className={"mr-2"}/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default App
