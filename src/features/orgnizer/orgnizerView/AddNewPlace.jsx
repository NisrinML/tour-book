import SmallHeader from "../../layout/SmallHeader"
import backButton from "../../../assets/images/backButton.svg"

function AddNewPlace() {
    const handelBack = () => {
        navigate('');
    }
    const handelAdd = () => {
       
    }
    return (
        <div >
            <SmallHeader />
            <div className="flex flex-row space-x-10">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-row float-start justify-between items-center space-x-10 px-28 pt-8">
                       <img src={backButton} onClick={handelBack} className=" hover:cursor-pointer 
                            xl:w-12 xl:h-12
                            lg:w-10 lg:h-10
                            md:w-8 md:h-8" />
                        <div className=" text-title-light xl:text-3xl lg:text-2xl md:text-xl font-['serif']">Add New Place</div>
                    </div>
                    <div className="flex-row text-text-light xl:text-2xl lg:text-xl md:text-base font-['serif'] mx-32 mt-10">Location :</div>
                    <div className="flex flex-row justify-end">
                    <button onClick={handelAdd}
                            className="flex flex-col text-center font-['sans-serif'] drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-add-button-light text-button-text-light 
                            hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-add-button-hover-light
                            xl:text-2xl xl:pt-1  xl:rounded-md  xl:w-28 xl:h-10 xl:pl-8 
                            lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 lg:pl-7 lg:pt-1 
                            md:text-lg md:rounded-md  md:w-20 md:h-8 md:pl-6 md:pt-0">Add</button></div>
                </div>
                <div className="flex flex-col">
                <div className="container flex flex-col items-center drop-shadow-[2px_2px_rgba(125,143,154,0.5)] h-fit bg-post-bg-light border-solid border-2 border-text-light
                xl:rounded-3xl xl:pt-24
                lg:mx-64 lg:rounded-3xl  lg:pt-32
                md:mx-56 md:rounded-2xl md:pt-32">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewPlace