

import Layout from "./features/layout/Layout"
import AddNewPlace from "./features/orgnizer/orgnizerView/AddNewPlace"
import MakeSpecialTour from "./features/orgnizer/orgnizerView/MakeSpecialTour"
import MyTour from "./features/orgnizer/orgnizerView/MyTour"
import OrgnizerForgetPassword from "./features/orgnizer/orgnizerView/OrgnizerForgetPassword"
import OrgnizerNewPassword from "./features/orgnizer/orgnizerView/OrgnizerNewPassword"
import OrgnizerReport from "./features/orgnizer/orgnizerView/OrgnizerReport"
import OrgnizerResetPassword from "./features/orgnizer/orgnizerView/OrgnizerResetPassword"
import OrgnizerSettings from "./features/orgnizer/orgnizerView/OrgnizerSettings"
import PresenterPage from "./features/orgnizer/orgnizerView/PresenterPage"
import TourConfirm from "./features/orgnizer/orgnizerView/TourConfirm"
import TourManager from "./features/orgnizer/orgnizerView/TourManager"
import PresenterLogin from "./features/presenter/presenterView/PresenterLogin"
import PresenterProfile from "./features/presenter/presenterView/PresenterProfile"
import { Router } from "./routers/Router"



function App() {

  return (

    <Layout>
<Router />
      {/* <OrgnizerNewPassword/> */}
      {/* <OrgnizerForgetPassword/> */}
      {/* <PresenterLogin /> */}
      {/* <OrgnizerReport/> */}
      {/* <OrgnizerResetPassword/> */}
      {/* <PresenterProfile /> */}
      {/* <MakeSpecialTour/> */}
      {/* <AddNewPlace /> */}
      {/* <TourConfirm/> */}
      {/* <TourManager/> */}
      {/* <MyTour/> */}
      {/* <OrgnizerSettings/> */}
      {/* <PresenterPage/> */}
    </Layout>

  )
}

export default App
