// this for configure all routers in the website
import { Route, Routes } from "react-router-dom"
import MakeSpecialTour from "../features/orgnizer/orgnizerView/MakeSpecialTour"
import AddNewPlace from "../features/orgnizer/orgnizerView/AddNewPlace"
import TourConfirm from "../features/orgnizer/orgnizerView/TourConfirm"
import OrgnizerForgetPassword from "../features/orgnizer/orgnizerView/OrgnizerForgetPassword"
import OrgnizerNewPassword from "../features/orgnizer/orgnizerView/OrgnizerNewPassword"
import OrgnizerReport from "../features/orgnizer/orgnizerView/OrgnizerReport"
import OrgnizerResetPassword from "../features/orgnizer/orgnizerView/OrgnizerResetPassword"
import MyTour from "../features/orgnizer/orgnizerView/MyTour"
import OrgnizerHomePage from "../features/orgnizer/orgnizerView/OrgnizerHomePage"
import OrgnizerNotifications from "../features/orgnizer/orgnizerView/OrgnizerNotifications"
import OrgnizerSettings from "../features/orgnizer/orgnizerView/OrgnizerSettings"
import PresenterPage from "../features/orgnizer/orgnizerView/PresenterPage"
import TourManager from "../features/orgnizer/orgnizerView/TourManager"
import News from "../features/orgnizer/orgnizerView/News"
import TourItenrary from "../features/orgnizer/orgnizerView/TourItenrary"
import ChooseOffer from "../features/orgnizer/orgnizerView/ChooseOffer"
import EditTour from "../features/orgnizer/orgnizerView/EditTour"
import TourDetails from "../features/orgnizer/orgnizerView/TourDetails"
export const Router=()=>{
return(
    <Routes>
        <Route path="/make-special-tour/add-new-place" element={<AddNewPlace/>}/>
        <Route  path="/make-special-tour" element={<MakeSpecialTour/>}/>
        <Route path="/my-tour" element={<MyTour/>}/>
        <Route path="/orgnizer/forget-password" element={<OrgnizerForgetPassword/>}/>
        <Route path="/" element={<OrgnizerHomePage/>}/>
        <Route path="/orgnizer/new-password" element={<OrgnizerNewPassword/>}/>
        <Route path="/orgnizer-notification" element={<OrgnizerNotifications/>}/>
        <Route path="/orgnizer/report" element={<OrgnizerReport/>}/>
        <Route path="/make-special-tour/confirm-tour" element={<TourConfirm/>}/>
        <Route path="/orgnizer/reset-password" element={<OrgnizerResetPassword/>}/>
        <Route path="/orgnizer-settings" element={<OrgnizerSettings/>}/>
        <Route path="/make-special-tour/choose-position/presenter-page" element={<PresenterPage/>}/>
        <Route path="/make-special-tour/confirm" element={<TourConfirm/>}/>
        <Route path="/my-tour/requests" element={<TourManager/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/make-special-tour/edit-itenrary" element={<TourItenrary/>}/>
        <Route path="/make-special-tour/presenter-offers" element={<ChooseOffer/>}/>
        <Route path="/my-tour/details/edit" element={<EditTour/>}/> 
        <Route path="/my-tour/details" element={<TourDetails/>}/>
    </Routes>
   
)
}

