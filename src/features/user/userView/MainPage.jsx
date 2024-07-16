import HelpCenter from "./MainPageComponent/HelpCenter"
import OurPrivacy from "./MainPageComponent/OurPrivacy"

function MainPage (){
    return(
        <div className="flex flex-col space-y-5 overflow-x-hidden">
            <OurPrivacy/>
            <HelpCenter/>
        </div>
    )
}

export default MainPage