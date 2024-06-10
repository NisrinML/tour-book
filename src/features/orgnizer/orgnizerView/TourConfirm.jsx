import SmallHeader from "../../layout/SmallHeader"

function TourConfirm() {
    return (
        <div>
            <SmallHeader />
            <div className="flex flex-row justify-center p-10 mb-5 xl:gap-x-36 lg:gap-x-16 md:gap-x-8">
                <div className="flex flex-col justify-center ">
                <div className="container flex flex-col items-start drop-shadow-[2px_2px_rgba(125,143,154,0.5)] h-fit w-fit bg-post-bg-light border-solid border-2 border-text-light space-y-5
                xl:px-16 xl:rounded-3xl xl:pt-8
                lg:px-10 lg:rounded-3xl  lg:pt-6 lg:mr-10
                md:px-6 md:rounded-2xl md:pt-4 md:mr-10">
                        <div className="flex flex-row justify-between">
                            <span className="flex flex-col  text-text-light font-['sans-serif']  
                           xl:text-2xl xl:w-44
                            lg:text-xl lg:w-36
                            md:text-lg md:w-28">Distance (KM) :</span>
                            <input type="text"
                                className="flex flex-col drop-shadow-[1px_1px_rgba(117,135,142)] text-input-text-light bg-offerbg-light border-solid border-2 border-text-light text-center
                            xl:rounded-xl xl:text-xl xl:h-10 xl:w-64
                            lg:rounded-lg lg:text-lg  lg:h-9 lg:w-56
                            md:rounded-md md:text-base md:h-8 md:w-48" />
                        </div>
                        <div className="flex flex-row justify-between">
                            <span className="flex flex-col  text-text-light font-['sans-serif']  
                            xl:text-2xl xl:w-44
                            lg:text-xl lg:w-36
                            md:text-lg md:w-28">Distance (H) :</span>
                            <input type="text" 
                                className="flex flex-col drop-shadow-[1px_1px_rgba(117,135,142)] text-input-text-light bg-offerbg-light border-solid border-2 border-text-light text-center
                            xl:rounded-xl xl:text-xl xl:h-10 xl:w-64
                            lg:rounded-lg lg:text-lg lg:h-9 lg:w-56
                            md:rounded-md md:text-base md:h-8 md:w-48" />
                        </div>
                        <div className="flex flex-row justify-between">
                            <span className="flex flex-col  text-text-light font-['sans-serif']  
                            xl:text-2xl xl:w-44
                            lg:text-xl lg:w-36
                            md:text-lg md:w-28">Date :</span>
                               <input type="date" 
                                    className="flex flex-col drop-shadow-[1px_1px_rgba(117,135,142)] text-input-text-light bg-offerbg-light border-solid border-2 border-text-light py-1
                            xl:rounded-xl xl:text-xl xl:px-14  xl:h-10 xl:w-64 
                            lg:rounded-lg lg:text-lg lg:px-12 lg:h-9 lg:w-56
                            md:rounded-md md:text-base md:px-10 md:h-8 md:w-48" />
                        </div>
                        <div className="flex flex-row justify-between">
                            <span className="flex flex-col  text-text-light font-['sans-serif']  
                            xl:text-2xl xl:w-44
                            lg:text-xl lg:w-36
                            md:text-lg md:w-28">Start Time :</span>
                            <input type="text" 
                                className="flex flex-col drop-shadow-[1px_1px_rgba(117,135,142)] text-input-text-light bg-offerbg-light border-solid border-2 border-text-light text-center
                            xl:rounded-xl xl:text-xl xl:h-10 xl:w-64
                            lg:rounded-lg lg:text-lg lg:h-9 lg:w-56
                            md:rounded-md md:text-base md:h-8 md:w-48" />
                        </div>
                        <div className="flex flex-row justify-start space-x-24">
                            <span className="flex flex-col text-text-light font-['sans-serif']  
                            xl:text-2xl xl:w-44
                            lg:text-xl lg:w-36
                            md:text-lg md:w-28">Number of Seats :</span>
                            <input type="number" 
                                className="flex flex-col drop-shadow-[1px_1px_rgba(117,135,142)] text-input-text-light bg-offerbg-light border-solid border-2 border-text-light text-center
                            xl:rounded-xl xl:text-xl xl:h-10 xl:w-16
                            lg:rounded-lg lg:text-lg lg:h-9 lg:w-12
                            md:rounded-md md:text-base md:h-8 md:w-8" />
                        </div>
                        <div className="flex flex-row justify-between space-x-6">
                            <span className="flex flex-col text-text-light font-['sans-serif']  
                            xl:text-2xl xl:w-40
                            lg:text-xl lg:w-36
                            md:text-lg md:w-32">Notes :</span>
                            <textarea type="text" 
                                className="drop-shadow-[1px_1px_rgba(117,135,142)] text-input-text-light bg-offerbg-light border-solid border-2 border-text-light py-1 text-center
                                    xl:h-24 xl:rounded-xl xl:text-xl xl:w-60 xl:mb-8
                                    lg:h-20 lg:rounded-lg lg:text-lg lg:w-56 lg:mb-6
                                    md:h-16 md:rounded-md md:ml-2 md:text-base md:mb-4" />
                        </div>
                       
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                <div className="container flex flex-col items-start drop-shadow-[2px_2px_rgba(125,143,154,0.5)] h-fit w-fit bg-post-bg-light border-solid border-2 border-text-light space-y-5
                xl:px-16 xl:rounded-3xl xl:pt-8
                lg:px-10 lg:rounded-3xl  lg:pt-6 lg:mr-10
                md:px-6 md:rounded-2xl md:pt-4 md:mr-10">
                        <div className="flex flex-row justify-between">
                            <span className="flex flex-col  text-text-light font-['sans-serif']  
                            xl:text-2xl xl:w-44
                            lg:text-xl lg:w-36
                            md:text-lg md:w-28">Seat Price :</span>
                            <input type="text"
                                className="flex flex-col drop-shadow-[1px_1px_rgba(117,135,142)] text-input-text-light bg-offerbg-light border-solid border-2 border-text-light text-center
                            xl:rounded-xl xl:text-xl xl:h-10 xl:w-64
                            lg:rounded-lg lg:text-lg  lg:h-9 lg:w-56
                            md:rounded-md md:text-base md:h-8 md:w-48" />
                        </div>
                        <div className="flex flex-row justify-between">
                            <span className="flex flex-col  text-text-light font-['sans-serif']  
                            xl:text-2xl xl:w-44
                            lg:text-xl lg:w-36
                            md:text-lg md:w-28">Transport Cost :</span>
                            <input type="text" 
                                className="flex flex-col drop-shadow-[1px_1px_rgba(117,135,142)] text-input-text-light bg-offerbg-light border-solid border-2 border-text-light text-center
                            xl:rounded-xl xl:text-xl xl:h-10 xl:w-64
                            lg:rounded-lg lg:text-lg lg:h-9 lg:w-56
                            md:rounded-md md:text-base md:h-8 md:w-48" />
                        </div>
                        <div className="flex flex-row justify-between">
                            <span className="flex flex-col  text-text-light font-['sans-serif']  
                            xl:text-2xl xl:w-44
                            lg:text-xl lg:w-36
                            md:text-lg md:w-28">External Cost :</span>
                            <input type="text" 
                                className="flex flex-col drop-shadow-[1px_1px_rgba(117,135,142)] text-input-text-light bg-offerbg-light border-solid border-2 border-text-light text-center
                            xl:rounded-xl xl:text-xl xl:h-10 xl:w-64
                            lg:rounded-lg lg:text-lg lg:h-9 lg:w-56
                            md:rounded-md md:text-base md:h-8 md:w-48" />
                        </div>
                        <div className="flex flex-row justify-between">
                            <span className="flex flex-col  text-text-light font-['sans-serif']  
                            xl:text-2xl xl:w-44
                            lg:text-xl lg:w-36
                            md:text-lg md:w-28">Total Cost :</span>
                            <input type="text" 
                                className="flex flex-col drop-shadow-[1px_1px_rgba(117,135,142)] text-input-text-light bg-offerbg-light border-solid border-2 border-text-light text-center
                            xl:rounded-xl xl:text-xl xl:h-10 xl:w-64
                            lg:rounded-lg lg:text-lg lg:h-9 lg:w-56
                            md:rounded-md md:text-base md:h-8 md:w-48" />
                        </div>
                        <div className="flex flex-row justify-between">
                            <span className="flex flex-col  text-text-light font-['sans-serif']  
                            xl:text-2xl xl:w-44
                            lg:text-xl lg:w-36
                            md:text-lg md:w-28">Producted Porfit :</span>
                            <input type="text" 
                                className="flex flex-col drop-shadow-[1px_1px_rgba(117,135,142)] text-input-text-light bg-offerbg-light border-solid border-2 border-text-light text-center
                            xl:rounded-xl xl:text-xl xl:h-10 xl:w-64  xl:mb-8
                            lg:rounded-lg lg:text-lg lg:h-9 lg:w-56 lg:mb-6
                            md:rounded-md md:text-base md:h-8 md:w-48 md:mb-4" />
                        </div>
                       
                    </div>
                </div>
                
            </div>
            <div className="flex flex-row justify-center items-start pb-10 xl:gap-6 lg:gap-4 md:gap-2">
                                <button
                                    type="submit"
                                    className="flex flex-col text-center font-['sans-serif'] drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-save-button-light text-button-text-light 
                                hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-save-button-hover-light
                                xl:text-2xl xl:pt-1  xl:rounded-md  xl:w-28 xl:h-10 xl:pl-8 
                                lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 lg:pl-7 lg:pt-1 
                                md:text-lg md:rounded-md  md:w-20 md:h-8 md:pl-6 md:pt-0">Save</button>
                                <button className="flex flex-col text-center font-['sans-serif']  drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-back-button-light text-button-text-light 
                            hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-back-button-hover-light
                            xl:pt-1 xl:pl-6 xl:w-28 xl:h-10  xl:text-2xl xl:rounded-md 
                            lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 lg:pl-5 lg:pt-1 
                            md:text-lg md:rounded-md  md:w-20 md:h-8 md:pl-4 md:pt-0">Leave</button>

             </div>
        </div>
    )
}
export default TourConfirm