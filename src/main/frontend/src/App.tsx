import 'bulma/css/bulma.min.css';
import './assets/theme.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/pro-thin-svg-icons";
import {faTimes as faTimesSharp} from "@fortawesome/sharp-duotone-solid-svg-icons";

function App() {

    return (
        <>
            <section className="section">
                <div className="container has-text-centered">
                    <div className="mb-5">
                        <h1 className={"title mb-0"}>Terrific Themed Tinder AI app</h1>
                        <FontAwesomeIcon icon={faTimesSharp} size={"3x"}/>
                        <FontAwesomeIcon icon={faTimes} size={"3x"}/>
                        <FontAwesomeIcon icon={faTimesSharp} size={"3x"}/>
                    </div>
                    <p className="subtitle mb-0">
                        My first website with <strong className="has-text-primary">Bulma</strong>!
                    </p>
                    <p>
                        This is the Terrific Themed Tinder AI app!
                    </p>
                </div>
            </section>
        </>
    )
}

export default App
