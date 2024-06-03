import SmallHeader from "../../layout/SmallHeader"
import backButton from "../../../assets/images/backButton.svg"
import { useState } from "react"
function MakeSpecialTour() {
    const [KMdistance,setKMdistance]=useState(0);
    const [HMdistance,setHMdistance]=useState(0);
    const [duration,setDuration]=useState(0);
    return (<div className="flex flex-col">
        <SmallHeader />
        <div className="flex flex-row justify-between  mx-20 mt-10">
            <div className="flex flex-row justify-between items-center space-x-10">
                <img src={backButton}  className="hover:cursor-pointer "/>
                <div className=" text-text-light xl:text-2xl lg:text-xl md:text-base font-['serif']">Tour Title :</div>
                <div>
                <input type="text"
                    className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light 
                    xl:h-10 xl:rounded-xl xl:pl-3 xl:text-xl 
                    lg:h-8 lg:rounded-lg lg:pl-2 lg:text-lg 
                    md:h-6 md:rounded-md md:pl-1 md:text-base" />
                       
                </div>
            </div>
            <div className="flex flex-row justify-start space-x-5  text-text-light">
                <div className="flex-col space-y-3">
                    <div >Distance (KM) : </div>
                    <div >Distance (hh:mm) :</div>
                    <div >Duration (days) :</div>
                </div>
                <div className="flex-col space-y-3">
                    <div >{KMdistance}</div>
                    <div >{HMdistance}</div>
                    <div >{duration}</div>
                </div>
            </div>
            <div className="flex flex-col justify-start space-y-5 ">
            <button className="flex flex-row font-['sans-serif']  drop-shadow-[2px_4px_rgba(117,135,142,0.5)] bg-add-button-light text-button-text-light pt-1
            xl:w-44 xl:h-10  xl:text-2xl xl:rounded-md xl:pl-3
            lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 lg:pl-2
            md:text-lg md:rounded-md  md:w-20 md:h-8 md:pl-1">Add New Place</button>
              <button className="flex flex-row font-['sans-serif']  drop-shadow-[2px_4px_rgba(117,135,142,0.5)] bg-save-button-light text-button-text-light pt-1
            xl:w-44 xl:h-10  xl:text-2xl xl:rounded-md xl:pl-11
            lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 lg:pl-9
            md:text-lg md:rounded-md  md:w-20 md:h-8 md:pl-7">Confirm</button>
            </div>
        </div>
        <div className="flex-row text-text-light xl:text-3xl lg:text-2xl md:text-xl font-['serif'] mx-32 mt-10">Select Iternary :</div>
        <div className="flex-row drop-shadow-[2px_4px_rgba(125,143,154,0.5)] w-3/4 h-1/2 align-middle">
  
        </div>
    </div>)
}
export default MakeSpecialTour