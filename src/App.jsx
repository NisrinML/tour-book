

import Layout from "./features/layout/Layout"
import OrgnizerForgetPassword from "./features/orgnizer/orgnizerView/OrgnizerForgetPassword"
import OrgnizerNewPassword from "./features/orgnizer/orgnizerView/OrgnizerNewPassword"
import OrgnizerReport from "./features/orgnizer/orgnizerView/OrgnizerReport"
import OrgnizerResetPassword from "./features/orgnizer/orgnizerView/OrgnizerResetPassword"


import PresenterLogin from "./features/presenter/presenterView/PresenterLogin"

import PresenterProfile from "./features/presenter/PresenterView/PresenterProfile"
import PresenterLogin from './features/presenter/PresenterView/PresenterLogin'



function App() {

  return (
  
 <Layout>

 {/* <OrgnizerNewPassword/> */}
 {/* <OrgnizerForgetPassword/> */}
 {/* <OrgnizerResetPassword/> */}
 {/* <PresenterLogin /> */}
{/* <OrgnizerReport/> */}
 <OrgnizerResetPassword/>


 {/* <PresenterLogin /> */}
{/* <PresenterProfile /> */}

  </Layout>

  )
}

export default App
