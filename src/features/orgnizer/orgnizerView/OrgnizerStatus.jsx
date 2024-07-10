import SmallHeader from "../../layout/SmallHeader"
import backButton from "../../../assets/images/backButton.svg"
function OrgnizerStatus (){
    const handelBack = () => {
        navigate('/');
    }
    return(
        <div className="flex flex-col">
            <SmallHeader/>
            <div className="flex flex-row float-start items-center mx-10 mt-10
                    xl:space-x-10 xl:px-28 
                    lg:space-x-8 lg:px-24
                    md:space-x-6 md:px-20">
                <img src={backButton} onClick={handelBack} className=" hover:cursor-pointer 
                            xl:w-12 xl:h-12
                            lg:w-10 lg:h-10
                            md:w-8 md:h-8" />
                <div className=" text-title-light xl:text-3xl lg:text-2xl md:text-xl font-['Georgia']">Status</div>
            </div>
        </div>
    )
}

export default OrgnizerStatus