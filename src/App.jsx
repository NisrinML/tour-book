

import Layout from "./features/layout/Layout"
import OrgnizerForgetPassword from "./features/orgnizer/orgnizerView/OrgnizerForgetPassword"
import OrgnizerNewPassword from "./features/orgnizer/orgnizerView/OrgnizerNewPassword"
import OrgnizerResetPassword from "./features/orgnizer/orgnizerView/OrgnizerResetPassword"



function App() {

  return (
  
 <Layout>

 {/* <OrgnizerNewPassword/> */}
 {/* <OrgnizerForgetPassword/> */}
 <OrgnizerResetPassword/>

  </Layout>

  )
}

export default App
