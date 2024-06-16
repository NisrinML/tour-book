

import Layout from "./features/layout/Layout"
import AddNewPlace from "./features/orgnizer/orgnizerView/AddNewPlace"
import MakeSpecialTour from "./features/orgnizer/orgnizerView/MakeSpecialTour"
import OrgnizerForgetPassword from "./features/orgnizer/orgnizerView/OrgnizerForgetPassword"
import OrgnizerNewPassword from "./features/orgnizer/orgnizerView/OrgnizerNewPassword"
import OrgnizerReport from "./features/orgnizer/orgnizerView/OrgnizerReport"
import OrgnizerResetPassword from "./features/orgnizer/orgnizerView/OrgnizerResetPassword"
import TourConfirm from "./features/orgnizer/orgnizerView/TourConfirm"
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
    </Layout>

  )
}

export default App
