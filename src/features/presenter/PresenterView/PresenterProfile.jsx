import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {setSize, setWebsite, setServices,setImages} from '../presenterSlice'
import SmallHeader from '../../layout/SmallHeader'
import backButton from '../../../assets/images/backButton.svg'



function PresenterProfile() {
const state = useSelector(state=>state.presenter)
const state1 = useSelector(state => state.user);
const dispatch = useDispatch();
const navigate = useNavigate();
var presenterName = state1.login.data.userName;
const [theSize, setTheSize] = useState(state.profileInfo.size);
const [theWebsite, setTheWebsite] = useState(state.profileInfo.website);
const [theServices, setTheServices] = useState(state.profileInfo.services);
const [uploadedImages, setUploadedImages] = useState(state.profileInfo.images);

const handleImageUpload = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const newImage = e.target.result;
    setUploadedImages((prevImages) => [...prevImages, newImage]);
    dispatch(addImage(newImage));
  };

  reader.readAsDataURL(file);
};
const handleDeleteImage = (index) => {
  setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  dispatch(removeImage(imageToDelete));
};

const handleSize =(e)=> {
    setTheSize(e.target.value)
}
const handleWebsite =(e)=> {
  setTheWebsite(e.target.value)
}
const handleServices=(e)=> {
  setTheServices(e.target.value)
}
  
  function handleSaveInfo() {
    dispatch(setSize(theSize))
    dispatch(setWebsite(theWebsite))
    dispatch(setServices(theServices))
    navigate("#")
  }

  const handleBack = () => {
    navigate("#");
  };

  return (
    <div className=" w-full h-screen max-h-full">
      <SmallHeader/>
      <div className="flex flex-col">
      <div className="flex flex-row space-x-6
                      xl:ml-20 xl:mt-10
                      lg:ml-16 lg:mt-10
                      md:ml-14 md:mt-9">
        <img src={backButton} onClick={handleBack} className='cursor-pointer xl:w-11 xl:h-10 lg:w-9 lg:h-8 md:w-7 md:h-6'/>
        <span className="text-text-light font-['sans-serif'] xl:pt-1 xl:text-3xl lg:pt-1 lg:text-2xl md:pt-0 md:text-xl">
          {presenterName}
        </span>
      </div>
      <div className="flex flex-row space-x-4 overflow-x-auto xl:ml-28 xl:mt-8 lg:ml-24 lg:mt-8 md:ml-20 md:mt-8 ">
      {uploadedImages.map((image, index) => ( <div className="relative">
        <a target="_blank" href={image}>
        <img key={index} src={image}
      className="drop-shadow-[1px_4px_rgba(117,135,142)] rounded-lg cursor-pointer xl:w-80 xl:h-60 lg:w-60 lg:h-52 md:w-40 md:h-36"
  /></a>
  <div className="bg-error-light cursor-pointer rounded-full px-1.5 absolute top-1 right-1" onClick={() => {handleDeleteImage(index)}}>
    <span className=" text-button-text-light" >X</span>
    </div>
</div>
))}
      <div className="flex flex-col space-y-4 items-center
                      xl:mt-16 xl:pl-14 lg:mt-12 lg:pl-5 md:mt-8 md:pl-4 ">
        <span className="font-['sans-serif'] text-text-light xl:text-2xl lg:text-xl md:text-lg">
          Add Images
        </span>
          <label  className="bg-button-text-light border border-text-light text-center content-center cursor-pointer
                           xl:w-14 xl:h-12 xl:rounded-xl xl:mx-16
                           lg:w-12 lg:h-10 lg:rounded-lg
                           md:w-10 md:h-8 md:rounded-md"> 
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden"/>
          <span className="text-text-light xl:text-3xl lg:text-2xl md:text-xl">+</span>
          </label>
      </div>
      </div>
      <div className="flex flex-row xl:space-x-80 xl:ml-28 xl:mt-10 lg:space-x-32 lg:ml-24 lg:mt-10 md:space-x-10 md:ml-20 md:mt-16">
        <div className="flex flex-row space-x-5">
          <div className="flex flex-col xl:space-y-16 xl:pt-2 lg:space-y-16 lg:pt-1 md:space-y-10 md:pt-0">
          <label className="text-text-light">Size:</label>
          <label className="text-text-light">Website:</label>
          </div>
          <div className="flex flex-col space-y-7">
          <input type="text" value={theSize} onChange={handleSize}
                  className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light bg-button-text-light
                   xl:h-12 xl:w-60 xl:rounded-xl xl:pl-3 xl:text-lg 
                   lg:h-10 lg:w-60 lg:rounded-lg lg:pl-2 lg:text-base 
                   md:h-8 md:w-44 md:rounded-md md:pl-1 md:text-sm"/>
          <input  type="text" value={theWebsite} onChange={handleWebsite}
                  className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light bg-button-text-light
                   xl:h-12 xl:w-60 xl:rounded-xl xl:pl-3 xl:text-lg 
                   lg:h-10 lg:w-60 lg:rounded-lg lg:pl-2 lg:text-base 
                   md:h-8 md:w-44 md:rounded-md md:pl-1 md:text-sm"/>
           </div>
        </div>
      <div className="flex items-end xl:flex-row xl:space-x-20 lg:flex-col lg:space-y-20 md:flex-col md:space-y-20">
      <div className="flex flex-row space-x-12">
      <label className="text-text-light">Services:</label>
      <textarea type="text" value={theServices} onChange={handleServices}
                  className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light bg-button-text-light
                   xl:h-28 xl:w-60 xl:rounded-xl xl:pl-3 xl:text-lg 
                   lg:h-28 lg:w-56 lg:rounded-lg lg:pl-2 lg:text-base 
                   md:h-24 md:w-44 md:rounded-md md:pl-1 md:text-sm"/>
      </div>
      <button onClick={handleSaveInfo} className="flex flex-col text-center font-['sans-serif'] drop-shadow-[3px_6px_rgba(117,135,142,0.5)]
       bg-add-button-light text-button-text-light mt-20
       xl:text-2xl xl:pt-1  xl:rounded-md  xl:w-28 xl:h-10 xl:pl-8
        lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 lg:pl-7 lg:pt-1
        md:text-lg md:rounded-md  md:w-20 md:h-8 md:pl-6 md:pt-0">Save</button></div>
      </div>
      </div>
    </div>
  )
}

export default PresenterProfile
