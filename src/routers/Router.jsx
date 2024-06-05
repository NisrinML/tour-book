// this for configure all routers in the website
import { Route, Routes } from "react-router-dom"
import Footer from "../features/layout/Footer"
export const Router=()=>{
return(
    <Routes>
        <Route path="/foot" element={<Footer/>}/>
    </Routes>
   
)
}

