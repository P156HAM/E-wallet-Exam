import AddCard from "./view/AddCard/AddCard";
import Home from "./view/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/addcard',
        element: <AddCard />
    }
]); 

export default router