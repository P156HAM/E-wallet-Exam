import CardForm from "./component/CardForm/CardForm";
import Home from "./view/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/addcard',
        element: <CardForm />
    }
]); 

export default router