import {Route, Routes} from "react-router-dom";
import {Home} from "../components/pages/Home.tsx";
import {ErrorPage} from "../components/pages/ErrorPage.tsx";
import {Profiles} from "../components/pages/Profiles.tsx";
import {Matches} from "../components/pages/Matches.tsx";
import {Themes} from "../components/pages/Themes.tsx";
import {ThemeEditor} from "../components/pages/ThemeEditor.tsx";

export const MyRoutes = () => {

    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/profiles"} element={<Profiles/>}/>
            <Route path={"/matches"} element={<Matches/>}/>
            <Route path={"/themes"} element={<Themes/>}/>
            <Route path={"/theme-editor"} element={<ThemeEditor/>}/>
            <Route path={"*"} element={<ErrorPage/>}/>
        </Routes>
    );
}