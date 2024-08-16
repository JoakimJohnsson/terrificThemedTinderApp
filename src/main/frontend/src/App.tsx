import './assets/main.scss';
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";


function App() {
    return (
        <>
            <Header/>
            <main className="section">
                <div className="container has-text-centered">
                    <p className="subtitle mb-0">
                        My first website with <strong className="has-text-primary">Bulma</strong>!
                    </p>
                    <p>
                        This is the Terrific Themed Tinder AI app!
                    </p>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default App
