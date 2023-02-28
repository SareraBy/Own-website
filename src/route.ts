import {CONTACT_ROUTE, HOME_ROUTE, INFO_ROUTE, LOADING_ROUTE} from "./utils/route";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import Loader from "./pages/Loader";



export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: INFO_ROUTE,
        Component: Info
    },
    {
        path: LOADING_ROUTE,
        Component: Loader
    },

    {
        path: CONTACT_ROUTE,
        Component: Contact
    }
]