// this for configure all routers in the website
import { Route, Routes } from "react-router-dom"
import MakeSpecialTour from "../features/orgnizer/orgnizerView/MakeSpecialTour"
import AddNewPlace from "../features/orgnizer/orgnizerView/AddNewPlace"
import TourConfirm from "../features/orgnizer/orgnizerView/TourConfirm"
import OrgnizerForgetPassword from "../features/orgnizer/orgnizerView/OrgnizerForgetPassword"
import OrgnizerNewPassword from "../features/orgnizer/orgnizerView/OrgnizerNewPassword"
import OrgnizerReport from "../features/orgnizer/orgnizerView/OrgnizerReport"
import OrgnizerResetPassword from "../features/orgnizer/orgnizerView/OrgnizerResetPassword"
export const Router=()=>{
return(
    <Routes>
        <Route  path="/make-special-tour" element={<MakeSpecialTour/>}/>
        <Route path="/make-special-tour/add-new-place" element={<AddNewPlace/>}/>
        <Route path="/make-special-tour/confirm-tour" element={<TourConfirm/>}/>
        <Route path="/orgnizer/forget-password" element={<OrgnizerForgetPassword/>}/>
        <Route path="/orgnizer/new-password" element={<OrgnizerNewPassword/>}/>
        <Route path="/orgnizer/report" element={<OrgnizerReport/>}/>
        <Route path="/orgnizer/reset-password" element={<OrgnizerResetPassword/>}/>
    </Routes>
   
)
}

