import AboutUs from "./MainPageComponent/AboutUs"
import HelpCenter from "./MainPageComponent/HelpCenter"
import OurPrivacy from "./MainPageComponent/OurPrivacy"

function MainPage (){
    return(
        <div className="flex flex-col space-y-14 overflow-x-hidden">
            <div className="flex flex-row justify-center items center">
                <AboutUs/> 
            </div>
            <div className="flex flex-row justify-center items center">
                <OurPrivacy/>
            </div>
            <div className="flex flex-row justify-center items center">
                   <HelpCenter/>
            </div>
         
         
        </div>
    )
}

export default MainPage