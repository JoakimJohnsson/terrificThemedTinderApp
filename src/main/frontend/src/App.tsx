import './assets/main.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./Layout.tsx";
import {ErrorPage} from "./components/pages/ErrorPage.tsx";
import {Home} from "./components/pages/Home.tsx";
import {Profiles} from "./components/pages/Profiles.tsx";
import {Matches} from "./components/pages/Matches.tsx";
import {Themes} from "./components/pages/Themes.tsx";
import {ThemeEditor} from "./components/pages/ThemeEditor.tsx";
import {Profile} from "./components/pages/Profile.tsx";
import {Match} from "./components/pages/Match.tsx";
import {Theme} from "./components/pages/Theme.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <Home/>},
            {path: "profiles", element: <Profiles/>},
            {path: "profiles/:id", element: <Profile/>},
            {path: "matches", element: <Matches/>},
            {path: "matches/:id", element: <Match/>},
            {path: "themes", element: <Themes/>},
            {path: "themes/:id", element: <Theme/>},
            {path: "theme-editor", element: <ThemeEditor/>},
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
