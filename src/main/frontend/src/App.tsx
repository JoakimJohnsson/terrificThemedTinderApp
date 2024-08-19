import './assets/main.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./Layout.tsx";
import {ErrorPage} from "./components/pages/ErrorPage.tsx";
import {Home} from "./components/pages/Home.tsx";
import {Profiles} from "./components/pages/Profiles.tsx";
import {Matches} from "./components/pages/Matches.tsx";
import {Themes} from "./components/pages/Themes.tsx";
import {ThemeEditor} from "./components/pages/ThemeEditor.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/profiles", element: <Profiles/>},
            {path: "/matches", element: <Matches/>},
            {path: "/themes", element: <Themes/>},
            {path: "/theme-editor", element: <ThemeEditor/>},
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
