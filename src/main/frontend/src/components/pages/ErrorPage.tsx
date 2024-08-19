import {PAGES} from "../../assets/constants.tsx";
import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import {Header} from "../Header.tsx";
import {Footer} from "../Footer.tsx";


export const ErrorPage = () => {

    const error: unknown = useRouteError();
    console.error(error);
    let errorMessage: string;
    let status: string = "";

    if (isRouteErrorResponse(error)) {
        errorMessage = error.data?.message || error.statusText;
        status = error.status.toString() || "";
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }

    return (
        <>
            <Header/>
            <div className="container">
                <h1 className={"title is-1"}>{PAGES.ERROR_PAGE.NAME}</h1>
                <p className={"subtitle"}>Sorry, an unexpected error has occurred.</p>
                <p>{status && status + " - "} {errorMessage}</p>
            </div>
            <Footer/>
        </>
    )
}
