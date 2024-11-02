import React from "react"
import {Route, Routes} from 'react-router-dom'
import BasicLayout from "../BasicLayout";
import Home from "../home";

const SwitchRoutes = () => {

    return (
        <React.Suspense>
            <Routes>
                <Route path='/' element={<BasicLayout/>}>
                    <Route path='/' element={<Home/>}/>
                </Route>
            </Routes>
        </React.Suspense>
    )
}
export default SwitchRoutes