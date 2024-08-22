import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/pro-thin-svg-icons";


export const OverlaySpinner = () => {
    return (
        <div className={"overlay-spinner-wrapper"} role="status" aria-live="polite" aria-label="Loading">
            <FontAwesomeIcon icon={faSpinner} size={"4x"} className={"overlay-spinner"} spin/>
        </div>
    )
}
