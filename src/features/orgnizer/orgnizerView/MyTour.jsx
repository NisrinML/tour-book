import SmallHeader from "../../layout/SmallHeader"
import backButton from "../../../assets/images/backButton.svg"
import acceptIcon from "../../../assets/images/acceptIcon.svg"
import waitingIcon from "../../../assets/images/waitingIcon.svg"
import { Tours } from "../../../assets/data/tempData"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deleteTour, updateTour } from "../orgnizerSlice"
function MyTour() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handelBack = () => {
        navigate('');
    }
    const handelPost = (id) => {
        dispatch(updateTour(id))
        navigate('');
    }
    const handelEdit = (id) => {
        dispatch(updateTour(id))
        navigate('');
    }
    const handelDelete = (id) => {
        alert(id)
        dispatch(deleteTour(id))
        navigate('');
    }
    const handelDetails = (id) => {
        dispatch(updateTour(id))
        navigate('');
    }
    const handelRequests  = (id) => {
        dispatch(updateTour(id))
        navigate('');
    }
    return (
        <div className="flex flex-col">
            <SmallHeader />
            <div className="flex flex-row items-center mx-10 mt-10
                    xl:space-x-10 xl:px-28 
                    lg:space-x-8 lg:px-24
                    md:space-x-6 md:px-20">
                <img src={backButton} onClick={handelBack} className=" hover:cursor-pointer 
                            xl:w-12 xl:h-12
                            lg:w-10 lg:h-10
                            md:w-8 md:h-8" />
                <div className=" text-title-light xl:text-3xl lg:text-2xl md:text-xl font-['Georgia']">My Tour</div>
            </div>
            <div className="flex flex-row  items-center justify-center h-screen ">
                <div className="flex flex-col w-3/4 h-3/4  border-solid border-2  border-text-light overflow-hidden hover:overflow-y-auto ">
                {/* Add box content depend on tour status & tour posted propereties */}
                    {
                    Tours.map((tour)=>{
                        const acceptedOrders = tour.clientRequest.filter(order=>order.status=='accept')
                        var reservedSeats =acceptedOrders.reduce((sum, order) => sum + order.numOfSeat, 0)
                                return (
                                    <div  key={tour.id} className="flex flex-row justify-center items-center 
                                    xl:p-10 lg:p-7 md:p-5">
                                    <div key={tour.id} className="flex flex-col bg-post-bg-light w-11/12 border-solid border-2 border-text-light drop-shadow-[2px_4px_rgba(125,143,154,0.5)]
                                    xl:h-96 xl:rounded-xl 
                                    lg:h-80 lg:rounded-lg
                                    md:h-64 md:rounded">
                                        <div className="flex flex-row justify-between items-center 
                                        xl:p-5 lg:p-3 md:p-2">
                                            <div className="flex flex-col rounded-full border-solid border-2 border-text-light items-center justify-center text-text-light
                                            xl:w-14 xl:h-14 xl:text-2xl 
                                            lg:w-12 lg:h-12
                                            md:w-10 md:h-10">
                                                {tour.sn}
                                            </div>
                                            <div className="flex flex-col justify-center items-center text-title-light xl:text-3xl lg:text-2xl md:text-xl font-['serif'] ">
                                                {tour.title}
                                            </div>
                                            <div className="flex flex-col justify-center items-center space-y-1">
                                               
                                                <img src={tour.status?acceptIcon:waitingIcon} className="flex flex-row justify-center items-center 
                                            xl:w-12 xl:h-12
                                            lg:w-10 lg:h-10
                                            md:w-8 md:h-8 " />
                                                <div className="flex flex-row justify-center items-center text-text-light xl:text-lg lg:text-base md:text-sm">{tour.status?'Done':'In Progress'}</div>
                                                 
                                                  </div>
                                        </div>
                                        <div className="flex flex-row justify-between items-center 
                                        xl:py-5  xl:px-40 
                                        lg:py-3 lg:px-20 
                                        md:py-2 md:px-16">
                                            <div className="flex flex-col justify-start items-start space-y-3">
                                                <div className="flex flex-row space-x-8">
                                                    <span className="text-title-light font-['Open_Sans'] xl:text-2xl lg:text-xl md:text-base">Date :</span>
                                                    <span className="text-text-light font-['Open_Sans'] xl:text-2xl lg:text-xl md:text-base">{tour.startTime +' | '+tour.startDate}</span>
                                                </div>
                                                <div className="flex flex-row space-x-8">
                                                    <span className="text-title-light font-['Open_Sans'] xl:text-2xl lg:text-xl md:text-base">Total cost :</span>
                                                    <span className="text-text-light font-['Open_Sans'] xl:text-2xl lg:text-xl md:text-base">{tour.totalCost} $</span>
                                                </div>
                                                <div className="flex flex-row space-x-8">
                                                    <span className="text-title-light font-['Open_Sans'] xl:text-2xl lg:text-xl md:text-base">Seat price :</span>
                                                    <span className="text-text-light font-['Open_Sans'] xl:text-2xl lg:text-xl md:text-base">{tour.seatCost} $</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-start items-start space-y-3">
                                            <div className="flex flex-row space-x-8">
                                                    <span className="text-title-light font-['Open_Sans'] xl:text-2xl lg:text-xl md:text-base">Number of avilable Seats :</span>
                                                    <span className="text-text-light font-['Open_Sans'] xl:text-2xl lg:text-xl md:text-base">{tour.numOfSeat-reservedSeats}</span>
                                                </div>
                                                <div className="flex flex-row space-x-8">
                                                    <span className="text-title-light font-['Open_Sans'] xl:text-2xl lg:text-xl md:text-base">Number of reserved seats :</span>
                                                    <span className="text-text-light font-['Open_Sans'] xl:text-2xl lg:text-xl md:text-base">{reservedSeats}</span>
                                                </div>
                                            </div>
                                        </div>
                                        {tour.status&&tour.posted? <div className="flex flex-row justify-between items-center 
                                        xl:p-5 xl:px-40
                                        lg:p-3 lg:px-20
                                        md:p-2 md:px-16 ">
                                        <button    onClick={()=>handelRequests(tour.id)}
                                            className="flex flex-col justify-center items-center text-center font-['sans-serif'] drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-save-button-light text-button-text-light 
                                            hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-save-button-hover-light
                                            xl:text-2xl xl:rounded-md  xl:w-28 xl:h-10  
                                            lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 
                                            md:text-lg md:rounded-md  md:w-20 md:h-8 ">ٌRequest</button>
                                            <button onClick={()=>handelEdit(tour.id)}
                                            className="flex flex-col justify-center items-center text-center font-['sans-serif'] drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-change-button-light text-button-text-light 
                                            hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-change-button-hover-light
                                            xl:text-2xl xl:rounded-md  xl:w-28 xl:h-10  
                                            lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 
                                            md:text-lg md:rounded-md  md:w-20 md:h-8 ">Edit</button>
                                            <button onClick={()=>handelDetails(tour.id)}
                                            className="flex flex-col justify-center items-center text-center font-['sans-serif'] drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-details-button-light text-button-text-light 
                                            hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-details-button-hover-light
                                            xl:text-2xl xl:rounded-md  xl:w-28 xl:h-10  
                                            lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 
                                            md:text-lg md:rounded-md  md:w-20 md:h-8 ">Details</button>
                                            <button onClick={()=>handelDelete(tour.id)}
                                            className="flex flex-col justify-center items-center text-center font-['sans-serif'] drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-delete-button-light text-button-text-light 
                                            hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-delete-button-hover-light
                                            xl:text-2xl xl:rounded-md  xl:w-28 xl:h-10  
                                            lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 
                                            md:text-lg md:rounded-md  md:w-20 md:h-8 ">Delete</button>
                                        </div>:tour.status?
                                        <div className="flex flex-row justify-between items-center p-5 px-40">
                                        <button onClick={handelPost(tour.id)}
                                            className="flex flex-col justify-center items-center text-center font-['sans-serif'] drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-add-button-light text-button-text-light 
                                            hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-add-button-hover-light
                                            xl:text-2xl xl:rounded-md  xl:w-28 xl:h-10  
                                            lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 
                                            md:text-lg md:rounded-md  md:w-20 md:h-8 ">Post</button>
                                            
                                            <button onClick={()=>handelDetails(tour.id)}
                                            className="flex flex-col justify-center items-center text-center font-['sans-serif'] drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-details-button-light text-button-text-light 
                                            hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-details-button-hover-light
                                            xl:text-2xl xl:rounded-md  xl:w-28 xl:h-10  
                                            lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 
                                            md:text-lg md:rounded-md  md:w-20 md:h-8 ">Details</button>
                                            <button onClick={()=>handelDelete(tour.id)}
                                            className="flex flex-col justify-center items-center text-center font-['sans-serif'] drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-delete-button-light text-button-text-light 
                                            hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-delete-button-hover-light
                                            xl:text-2xl xl:rounded-md  xl:w-28 xl:h-10  
                                            lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 
                                            md:text-lg md:rounded-md  md:w-20 md:h-8 ">Delete</button>
                                        </div>:<div className="flex flex-row justify-between items-center p-5 px-40">
                                            <button onClick={()=>handelDetails(tour.id)}
                                            className="flex flex-col justify-center items-center text-center font-['sans-serif'] drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-details-button-light text-button-text-light 
                                            hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-details-button-hover-light
                                            xl:text-2xl xl:rounded-md  xl:w-28 xl:h-10  
                                            lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 
                                            md:text-lg md:rounded-md  md:w-20 md:h-8 ">Details</button>
                                            <button onClick={()=>handelDelete(tour.id)}
                                            className="flex flex-col justify-center items-center text-center font-['sans-serif'] drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-delete-button-light text-button-text-light 
                                            hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-delete-button-hover-light
                                            xl:text-2xl xl:rounded-md  xl:w-28 xl:h-10  
                                            lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 
                                            md:text-lg md:rounded-md  md:w-20 md:h-8 ">Delete</button>
                                        </div>}
                                       
                                    </div>
                                    </div>
                                )
                            })}
                        
                   

                </div>
            </div>
        </div>
    )
}

export default MyTour