import {PAGES} from "../../assets/constants.tsx";


export const ErrorPage = () => {

/*    const error: unknown = useRouteError();
    console.error(error);
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.data?.message || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }*/

    return (
        <main className="section pt-3">
            <div className="container">
                <h1 className={"title"}>{PAGES.ERROR_PAGE.NAME}</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                </p>
            </div>
        </main>
    )
}
