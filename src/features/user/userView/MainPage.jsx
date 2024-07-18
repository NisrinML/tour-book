import AboutUs from "./MainPageComponent/AboutUs"
import ContactUs from "./MainPageComponent/ContactUs"
import HelpCenter from "./MainPageComponent/HelpCenter"
import OurPrivacy from "./MainPageComponent/OurPrivacy"
import Tours from "./MainPageComponent/Tours"
import WhatWeCanDo from "./MainPageComponent/WhatWeCanDo"

function MainPage() {
    return (
        <div className="flex flex-col space-y-14 overflow-x-hidden">

            <Tours/>
            <WhatWeCanDo />
            <AboutUs />
            <OurPrivacy />
            <ContactUs/>
            <HelpCenter />
        </div>
    )
}

export default MainPage