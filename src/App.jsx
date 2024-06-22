

import Layout from "./features/layout/Layout"
import AddNewPlace from "./features/orgnizer/orgnizerView/AddNewPlace"
import MakeSpecialTour from "./features/orgnizer/orgnizerView/MakeSpecialTour"
import OrgnizerForgetPassword from "./features/orgnizer/orgnizerView/OrgnizerForgetPassword"
import OrgnizerNewPassword from "./features/orgnizer/orgnizerView/OrgnizerNewPassword"
import OrgnizerReport from "./features/orgnizer/orgnizerView/OrgnizerReport"
import OrgnizerResetPassword from "./features/orgnizer/orgnizerView/OrgnizerResetPassword"


import PresenterLogin from './features/presenter/PresenterView/PresenterLogin'
import PresenterProfile from './features/presenter/PresenterView/PresenterProfile'
import PresenterHome from "./features/presenter/PresenterView/PresenterHome"



function App() {

  return (

    <Layout>

     {/* <PresenterHome /> */}
      {/* <OrgnizerNewPassword/> */}
      {/* <OrgnizerForgetPassword/> */}
      {/* <PresenterLogin /> */}
      {/* <OrgnizerReport/> */}
      {/* <OrgnizerResetPassword/> */}
      {/* <PresenterProfile /> */}
      {/* <MakeSpecialTour/> */}
      <AddNewPlace />

    </Layout>

  )
}

export default App
