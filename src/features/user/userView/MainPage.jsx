import AboutUs from "./MainPageComponent/AboutUs"
import HelpCenter from "./MainPageComponent/HelpCenter"
import OurPrivacy from "./MainPageComponent/OurPrivacy"
import WhatWeCanDo from "./MainPageComponent/WhatWeCanDo"

function MainPage() {
    return (
        <div className="flex flex-col space-y-14 overflow-x-hidden">


            <WhatWeCanDo />
            <AboutUs />
            <OurPrivacy />
            <HelpCenter />
        </div>
    )
}

export default MainPage