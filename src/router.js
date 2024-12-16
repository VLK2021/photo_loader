import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GeneralPage} from "./pages";


const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'/generalPage'}/>},
            {path: '/generalPage', element: <GeneralPage/>}
        ]}
]);

export {
    router
}