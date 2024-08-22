import "./assets/css/main.scss";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./Layout";
import {ErrorPage} from "./components/pages/ErrorPage";
import {Home} from "./components/pages/Home";
import {Profiles} from "./components/pages/Profiles";
import {Matches} from "./components/pages/Matches";
import {Themes} from "./components/pages/Themes";
import {Profile} from "./components/pages/Profile";
import {Match} from "./components/pages/Match";
import {Theme} from "./components/pages/Theme";

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
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
