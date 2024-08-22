import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/pro-thin-svg-icons";


export const BackButton = () => {

    const navigate = useNavigate();

    return (
        <button className={"button is-primary"} onClick={() => navigate(-1)}>
            <FontAwesomeIcon className={"mr-2"} icon={faArrowLeft}/> Go Back
        </button>
    )
}
