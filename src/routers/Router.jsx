import { Route, Routes } from "react-router-dom"
import Footer from "../features/user/userView/Footer"
export const Router=()=>{
return(
    <Routes>
        <Route path="/foot" element={<Footer/>}/>
    </Routes>
   
)
}

