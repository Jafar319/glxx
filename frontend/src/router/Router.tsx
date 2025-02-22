import LandingPage from "@components/landingPage/LandingPage";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import After10th from "@components/Education/After10th";
import AfterInter from "@components/Education/AfterInter";
import Degree from "@components/Education/Degree";
import Engineering from "@components/Education/Engineering";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";

const Router=createBrowserRouter([
    {
    path:"/",
    element:<App/>,
    children:[
        {
            path:"",
            element:<LandingPage/>
        },
        {
            path:"/After10th",
            element:<ProtectedRoutes><After10th/></ProtectedRoutes>
        },
        {
            path:"/AfterInter",
            element:<ProtectedRoutes><AfterInter/></ProtectedRoutes>
        },
        {
            path:"/Degree",
            element:<ProtectedRoutes><Degree/></ProtectedRoutes>
        },
        {
            path:"/Engineering",
            element:<ProtectedRoutes><Engineering/></ProtectedRoutes>
        }
    ]
    }
])
export default Router;