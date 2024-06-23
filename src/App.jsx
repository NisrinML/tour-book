

import Layout from "./features/layout/Layout"
import AddNewPlace from "./features/orgnizer/orgnizerView/AddNewPlace"
import MakeSpecialTour from "./features/orgnizer/orgnizerView/MakeSpecialTour"
import MyTour from "./features/orgnizer/orgnizerView/MyTour"
import OrgnizerForgetPassword from "./features/orgnizer/orgnizerView/OrgnizerForgetPassword"
import OrgnizerNewPassword from "./features/orgnizer/orgnizerView/OrgnizerNewPassword"
import OrgnizerNotifications from "./features/orgnizer/orgnizerView/OrgnizerNotifications"
import OrgnizerReport from "./features/orgnizer/orgnizerView/OrgnizerReport"
import OrgnizerResetPassword from "./features/orgnizer/orgnizerView/OrgnizerResetPassword"



import PresenterLogin from './features/presenter/PresenterView/PresenterLogin'
import PresenterProfile from './features/presenter/PresenterView/PresenterProfile'
import PresenterHome from "./features/presenter/PresenterView/PresenterHome"

import OrgnizerSettings from "./features/orgnizer/orgnizerView/OrgnizerSettings"
import PresenterPage from "./features/orgnizer/orgnizerView/PresenterPage"
import TourConfirm from "./features/orgnizer/orgnizerView/TourConfirm"
import TourManager from "./features/orgnizer/orgnizerView/TourManager"
import PresenterLogin from "./features/presenter/presenterView/PresenterLogin"
import PresenterProfile from "./features/presenter/presenterView/PresenterProfile"
import { Router } from "./routers/Router"
import OrgnizerHomePage from "./features/orgnizer/orgnizerView/OrgnizerHomePage"



function App() {

  return (

    <Layout>


     {/* <PresenterHome /> */}
<Router />

      {/* <OrgnizerNewPassword/> */}
      {/* <OrgnizerForgetPassword/> */}
      {/* <PresenterLogin /> */}
      {/* <OrgnizerReport/> */}
      {/* <OrgnizerResetPassword/> */}
      {/* <PresenterProfile /> */}
      {/* <MakeSpecialTour/> */}

      <AddNewPlace />


      {/* <AddNewPlace /> */}
      {/* <TourConfirm/> */}
      {/* <TourManager/> */}
      {/* <MyTour/> */}
      {/* <OrgnizerSettings/> */}
      {/* <PresenterPage/> */}

      {/* <OrgnizerNotifications/> */}
      {/* <OrgnizerHomePage/> */}

      <OrgnizerNotifications/>


    </Layout>

  )
}

export default App
