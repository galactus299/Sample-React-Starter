import React from "react"
import {Route, Routes} from 'react-router-dom'
import BasicLayout from "../components/basic-layout";
import Home from "../pages/home";
import NavigateExample from "../pages/navigate-example";

const SwitchRoutes = () => {

    return (
        <React.Suspense>
            <Routes>
                <Route path='/' element={<BasicLayout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/navigate-example' element={<NavigateExample/>}/>
                </Route>
            </Routes>
        </React.Suspense>
    )
}
export default SwitchRoutes