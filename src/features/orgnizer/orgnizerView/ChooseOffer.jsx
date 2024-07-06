import SmallHeader from "../../layout/SmallHeader"
import backButton from "../../../assets/images/backButton.svg"
import ReportIcon from "../../../assets/images/reportIcon.svg"
import Person from "../../../assets/images/person.png"
import OfferComponent from "./OfferComponent"
import { useLayoutEffect, useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { selecteItem } from "../orgnizerSlice"
import { useNavigate } from "react-router-dom"

function ChooseOffer() {
    const [offers,setOffers]=useState([])
    const dispatch = useDispatch()
    const navigate= useNavigate()
    var presenterId=useSelector(state=>state.orgnizer.selected.presenterId)
    var positionOffers = useSelector(state=>state.orgnizer.tour.tourPoints)
    //to wait until the choozen presenter offers is loaded from slice
    const memo=useMemo(()=>{
        var items= positionOffers.filter(position=>position.id==presenterId)
        setOffers(items[0].offers)
    },[])
      
   
    const handelReport = () => {
        dispatch(selecteItem(presenterId))
        navigate('/orgnizer/report')
    }
    const handelBack = () => {
        navigate('/make-special-tour');
    }


    return (
        <div className="flex flex-col space-y-2 ">
            <SmallHeader />
            <div className="flex flex-row justify-start items-center ">
                <div className="flex flex-col justify-center items-center">

                    <div className="flex flex-row justify-center items-center 
                    xl:space-x-10 xl:px-28 xl:mx-10
                    lg:space-x-8 lg:px-24 lg:mx-8 
                    md:space-x-6 md:px-20 md:mx-6 ">
                        <img src={backButton} onClick={handelBack} className=" hover:cursor-pointer 
                                xl:w-12 xl:h-12
                            lg:w-10 lg:h-10
                            md:w-8 md:h-8" />
                        <img src={ReportIcon} onClick={handelReport} className=" hover:cursor-pointer 
                                xl:w-10 xl:h-10
                            lg:w-8 lg:h-8
                            md:w-6 md:h-6" />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-start items-center 
            xl:space-x-96 xl:pl-20
            lg:space-x-72 lg:pl-16
            md:space-x-56 md:pl-12">
                <div className="flex flex-col justify-center items-start space-y-3
                xl:text-2xl xl:mx-10 xl:px-28 
                lg:text-xl lg:mx-8 lg:px-20
                md:text-lg md:mx-6 md:px-12">
                    <div className="flex flex-row justify-start space-x-5 font-['serif'] text-text-light">
                        <div className="flex-col text-title-light">Size : </div>
                        <div className="flex-col">100 </div>
                    </div>
                    <div className="flex flex-row justify-start space-x-5 font-['serif'] text-text-light">
                        <div className="flex-col text-title-light">features : </div>
                        <div className="flex-col">100 </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-end items-center 
                    xl:space-x-16
                    lg:space-x-12
                    md:space-x-8 ">
                        <div className="flex flex-col justify-start items-center space-y-5 xl:text-2xl lg:text-xl md:text-base font-['Georgia']">
                            <span className="flex-row text-text-light">Presenter Name</span>
                            <a href="/" className="flex-row xl:text-xl lg:text-lg md:text-base text-title-light hover:text-text-light">presenter.com</a></div>
                        <img src={Person} className="flex flex-col drop-shadow-[2px_4px_rgba(125,143,154,0.5)] rounded-full
                            xl:w-32 xl:h-32
                            lg:w-28 lg:h-28
                            md:w-24 md:h-24" />

                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center p-10">
                <div className="flex flex-col items-center justify-start w-4/5 h-screen space-y-5 bg-post-bg-light   drop-shadow-[1px_1px_rgba(117,135,142)] rounded-2xl overflow-hidden hover:overflow-y-auto p-10">
                {offers.map(offer=>{
                    return(
                        <OfferComponent offer={offer} key={offer.id}/>
                    )
                })} 
                 </div>
            </div>
        </div>
    )
}
export default ChooseOffer