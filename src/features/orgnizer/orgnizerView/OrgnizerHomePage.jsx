import SmallHeader from "../../layout/SmallHeader"
import WarningIcon from "../../../assets/images/WarningIcon.png"
import PlusIcon from "../../../assets/images/PlusIcon.png"
import MinusIcon from "../../../assets/images/minus.png"
import likeIcon from "../../../assets/images/filledLikeIcon.svg"
import disLikeIcon from "../../../assets/images/filledDislikeIcon.svg"
import commentIcon from "../../../assets/images/filledCommentIcon.svg"
import OptionIcon from "../../../assets/images/optionsIcon.svg"
import Person from "../../../assets/images/person.png"
import image1 from 'E:/IT/React/Folder/tour-book/src/assets/images/restaurant1.png'
import image2 from 'E:/IT/React/Folder/tour-book/src/assets/images/restaurant2.png'
import image3 from 'E:/IT/React/Folder/tour-book/src/assets/images/restaurant3.png'
import { useState } from "react"
import { useSelector } from "react-redux"
function OrgnizerHomePage() {
    const tours=useSelector(state=>state.orgnizer.tours)
    const [complete, setComplete] = useState(false)
    const images = [image1, image2, image3, image1, image2, image3]
    const [showFullGallery, setShowFullGallery] = useState(false);
    const [hideSubGallery, setHideSubGallery] = useState(true)
    const [showAllText,setShowAllText]=useState(false)
    //to show box image if number of image less than 4 else will show them as Gallery
    const handlePhotoClick = () => {
        setShowFullGallery(!showFullGallery);
        setHideSubGallery(!hideSubGallery)
    };

    const handleShowAllTextClick=()=>{
        setShowAllText(!showAllText)
    }
    return (
        <div className="flex flex-col">
            <SmallHeader />
            <div className="flex flex-row  justify-between items-center
            xl:py-12 xl:px-20 xl:space-x-5
            lg:py-10 lg:px-16 lg:space-x-4
            md:py-8 md:px-12 md:space-x-3">
                <div className="flex flex-col">
                    <div className="flex flex-row w-3/4  text-text-light hover:text-title-light font-['sans-serif']  hover:cursor-pointer 
                            xl:text-xl  xl:space-x-6
                            lg:text-lg
                            md:text-base ">
                        <div className="flex flex-col justify-center items-center text-title-light bg-selected-bg-light px-3 rounded" ><span>Home</span></div>
                        <div className="flex flex-col justify-center items-center px-3 rounded hover:bg-selected-bg-light"><span>Tours</span></div>
                        <div className="flex flex-col justify-center items-center px-3 rounded hover:bg-selected-bg-light"><span>Status</span></div>
                        <div className="flex flex-col justify-center items-center px-3 rounded hover:bg-selected-bg-light"><span>Offers</span></div>
                        <div className="flex flex-col justify-center items-center px-3 rounded hover:bg-selected-bg-light"><span>Weather</span></div>
                        <div className="flex flex-col w-fit justify-start items-center px-3 rounded hover:bg-selected-bg-light">
                            <div className="flex flex-row space-x-2">
                                <span>Settings</span>
                                {!complete && <img src={WarningIcon} className="xl:w-7 xl:h-7 lg:w-6 lg:h-6 md:w-5 md:h-5" />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-center items-center xl:space-x-8 xl:pr-32">
                        <span className="flex flex-col  text-text-light xl:text-2xl lg:text-xl md:text-base font-['Georgia']">User Name</span>
                        <img src={Person} className="flex flex-col drop-shadow-[2px_4px_rgba(125,143,154,0.5)] rounded-full
                            xl:w-32 xl:h-32
                            lg:w-28 lg:h-28
                            md:w-24 md:h-24" />

                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center p-10 ">
                <div className="flex flex-col items-center justify-start w-3/5 h-screen space-y-5 bg-post-bg-light   drop-shadow-[1px_1px_rgba(117,135,142)] rounded-2xl overflow-hidden hover:overflow-y-auto p-10">
                    <div className="flex flex-row justify-center items-center relative w-11/12 pt-5">
                        <div className="flex flex-col w-full bg-orgnizerbg-light border-solid border-2 border-title-light drop-shadow-[1px_1px_rgba(117,135,142)] rounded-xl p-5 space-y-5">
                            <div className="flex flex-row justify-between items-center text-title-light px-5 xl:text-lg lg:text-base md:text-sm">
                                <div className="flex flex-col justify-start items-center">23 Septemper 10:00 P.M</div>
                                <div className="flex flex-col justify-start items-center"><img src={OptionIcon} className="hover:cursor-pointer"/></div></div>
                            <div className={`flex flex-row justify-start items-center text-text-light px-5 xl:text-xl lg:text-lg md:text-base ${showAllText?'line-clamp-none':'line-clamp-3'}`}>Join us on an immersive dining experience as we take you on a tour of some of the best restaurants in the city. Over the course of 3-4 hours, you'll visit 4-5 carefully curated establishments, sampling signature dishes and learning about the unique culinary concepts and histories behind each one.

                                The tour begins at a classic bistro known for its fresh, locally-sourced ingredients and French-inspired fare. You'll start with a tasting of the restaurant's renowned house-made charcuterie and a glass of crisp white wine.

                                Next, we'll head to a family-owned Italian trattoria tucked away on a quiet side street. Here you'll savor a regional pasta dish and a seasonal salad while the chef shares insights into their time-honored recipes and techniques.</div>
                           {!showAllText&&<div className=" text-text-light px-5 xl:text-xl lg:text-lg md:text-base hover:cursor-pointer" onClick={handleShowAllTextClick}>Read More</div>}
                           <div className="flex flex-row items-center justify-center ">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* mapping images if they less than 3 */}
                                    {hideSubGallery && images.slice(0, 3).map((image, index) => (
                                        <div key={index} className="rounded-lg shadow-lg overflow-hidden">
                                            <a target="_blank" href={image}> <img
                                                src={image}
                                                alt={`Image ${index + 1}`}
                                                className="w-full max-h-32 object-cover"
                                            /></a>
                                        </div>
                                    ))}
                                    {hideSubGallery && images.length > 4 && (
                                        <div
                                            className="w-full h-48 bg-gray-200 text-gray-600 flex items-center justify-center rounded-md cursor-pointer"
                                            onClick={handlePhotoClick}
                                        >
                                            <img src={PlusIcon} />
                                        </div>
                                    )}
                                </div>
                                {/* mapping images as gallery if they more than 3 */}
                                {showFullGallery && (
                                    <div className="mt-4 space-y-4 "  >
                                        {images.map((photo, index) => (
                                            <a target="_blank" href={photo}>  <img
                                                key={index}
                                                src={photo}
                                                alt={`Photo ${index + 1}`}
                                                className="w-full h-auto object-cover rounded-lg py-4"
                                            />
                                            </a>

                                        ))}
                                        <img className="hover:cursor-pointer" src={MinusIcon} onClick={handlePhotoClick} />
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-row justify-end items-end border-solid border-2 border-title-light w-full rounded-full"></div>
                            <div className="flex flex-row justify-center items-center space-x-16 text-text-light 
                            xl:text-lg lg:text-base md:text-sm">
                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex flex-row items-center justify-center space-x-4"><span>100 likes</span>
                                        <img src={likeIcon} className="
                                xl:w-8 xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6"/></div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex flex-row items-center justify-center space-x-4"><span>10 dislikes</span>
                                        <img src={disLikeIcon} className="
                                xl:w-8 xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6"/></div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex flex-row items-center justify-center hover:cursor-pointer space-x-4"><span>50 comments</span>
                                        <img src={commentIcon} className="
                                xl:w-8 xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6"/></div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-orgnizerbg-light  text-center text-text-light absolute   drop-shadow-[2px_2px_rgba(9,133,94,0.6)] right-1/3 top-1/2 
             xl:rounded xl:px-4
             lg:rounded-md lg:px-3
             md:rounded-sm  md:px-2">
                <span className="xl:text-2xl lg:text-xl md:text-base font-['serif']">Memories</span>
            </div>
        </div>
    )
}
export default OrgnizerHomePage