

import Layout from "./features/layout/Layout"
import AddNewPlace from "./features/orgnizer/orgnizerView/AddNewPlace"
import ChooseOffer from "./features/orgnizer/orgnizerView/ChooseOffer"
import EditTour from "./features/orgnizer/orgnizerView/EditTour"
import MakeSpecialTour from "./features/orgnizer/orgnizerView/MakeSpecialTour"
import MyTour from "./features/orgnizer/orgnizerView/MyTour"
import News from "./features/orgnizer/orgnizerView/News"
import OrgnizerForgetPassword from "./features/orgnizer/orgnizerView/OrgnizerForgetPassword"
import OrgnizerHomePage from "./features/orgnizer/orgnizerView/OrgnizerHomePage"
import OrgnizerNewPassword from "./features/orgnizer/orgnizerView/OrgnizerNewPassword"
import OrgnizerNotifications from "./features/orgnizer/orgnizerView/OrgnizerNotifications"
import OrgnizerReport from "./features/orgnizer/orgnizerView/OrgnizerReport"
import OrgnizerResetPassword from "./features/orgnizer/orgnizerView/OrgnizerResetPassword"
import OrgnizerSettings from "./features/orgnizer/orgnizerView/OrgnizerSettings"
import PresenterPage from "./features/orgnizer/orgnizerView/PresenterPage"
import TourConfirm from "./features/orgnizer/orgnizerView/TourConfirm"
import TourDetails from "./features/orgnizer/orgnizerView/TourDetails"
import TourItenrary from "./features/orgnizer/orgnizerView/TourItenrary"
import TourManager from "./features/orgnizer/orgnizerView/TourManager"
import TourPost from "./features/orgnizer/orgnizerView/TourPost"
import PresenterLogin from "./features/presenter/presenterView/PresenterLogin"
import PresenterProfile from "./features/presenter/presenterView/PresenterProfile"
import { Router } from "./routers/Router"



function App() {

  return (

    <Layout>


{/* <Router /> */}

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
      {/* <OrgnizerNotifications/> */}
      {/* <OrgnizerHomePage/> */}
      {/* <News/> */}
      {/* <TourItenrary/> */}
      {/* <ChooseOffer/> */}
      {/* <EditTour/> */}
      {/* <TourDetails/> */}
      <TourPost/>
    </Layout>

  )
}

export default App
