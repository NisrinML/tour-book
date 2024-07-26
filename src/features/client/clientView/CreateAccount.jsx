import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SmallHeader from '../../layout/SmallHeader'
import backButton from '../../../assets/images/backButton.svg';
import createAccountGirl from '../../../assets/images/createAccountGirl.svg'
import createAccountCar from '../../../assets/images/createAccountCar.svg'
import arrowDesign from '../../../assets/images/arrowDesign.svg'
import { register } from "../clientSlice";
import { setPassword, setEmail,setConfirmPassword, setTheUserName}  from '../../user/userSlice'


function CreateAccount() {

    const [firtName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [theEmail, setTheEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [accountType, setAccountType] = useState('');
    const [thePassword, setThePassword] = useState('');
    const [confirmThePassword, setConfirmThePassword] = useState('');
    const [birthday, setBirthday] = useState('');    
    const [gender, setGender] = useState('');    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFirstName = (e) =>{
    setFirstName(e.target.value);
    }
    const handleLastName = (e) =>{
        setLastName(e.target.value);
    }
    const handleUserName = (e) =>{
        setUserName(e.target.value);
    }
    const handleEmail = (e) =>{
        setTheEmail(e.target.value);
    }
    const handleMobile= (e) =>{
        setMobile(e.target.value);
    }
    const handleAccountType = (e) =>{
        setAccountType(e.target.value);
    }
    const handlePassword= (e) =>{
      setThePassword(e.target.value);
    }
    const handleConfirmPassword= (e) =>{
      setConfirmThePassword(e.target.value);
    }
    const handleBirthday= (e) =>{
      setBirthday(e.target.value);
    }
    const handleGender= (e) =>{
      setGender(e.target.value);
    }
   const createAccount = () =>{
    var user ={
      firtName,lastName,mobile,birthday,gender
    }
    dispatch(register({user}));
    dispatch(setEmail(theEmail));
    dispatch(setPassword(thePassword));
    dispatch(setConfirmPassword(confirmThePassword));
    dispatch(setTheUserName(userName));
    navigate('/user-home-page')
   }
    const handleBack = () => {
    navigate("/");
      };
  return (
    <div className="w-full max-h-full">
      <SmallHeader />
      <div className="flex flex-col space-y-10 pb-10">
        <div className="flex flex-row space-x-6 
        xl:ml-20 xl:mt-10 lg:ml-16 lg:mt-10 md:ml-14 md:mt-9">
          <img
            src={backButton}
            onClick={handleBack}
            alt="Back"
            className="cursor-pointer 
            xl:w-11 xl:h-10 lg:w-9 lg:h-8 md:w-7 md:h-6"
          />
          <span className="text-title-light font-['sans-serif'] 
          xl:pt-1 xl:text-3xl lg:pt-1 lg:text-2xl md:pt-0 md:text-xl">
            Create Account
          </span>
        </div>
        <div className="flex flex-col space-y-10">
        <div className="flex flex-row justify-center
        xl:space-x-32 lg:space-x-10 md:space-x-10">
        <div className="flex flex-col space-y-10 rounded-2xl bg-orgnizerbg-light/5  
                 shadow-inputLabelShadow-light/50 drop-shadow-md shadow-md border border-inputLabelShadow-light/40
                 xl:py-10 xl:px-8
                 lg:py-8 lg:px-8
                 md:py-8 md:px-4
        ">
        <div className="flex flex-row space-x-10 pl-10">
            <label className="text-text-light
            xl:text-lg  lg:text-base md:text-sm
            ">First Name:</label>
            <input
              type="text"
              onChange={handleFirstName}
              className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light bg-button-text-light 
                         xl:h-10 xl:w-52 xl:rounded-xl xl:pl-3 xl:text-lg 
                         lg:h-10 lg:w-48 lg:rounded-lg lg:pl-2 lg:text-base
                          md:h-8 md:w-40 md:rounded-md md:pl-1 md:text-sm"
            />
          </div>
          <div className="flex flex-row space-x-10 pl-10">
            <label className="text-text-light
            xl:text-lg  lg:text-base md:text-sm
            ">Last Name:</label>
            <input
              type="text"
              onChange={handleLastName}
              className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light bg-button-text-light 
                         xl:h-10 xl:w-52 xl:rounded-xl xl:pl-3 xl:text-lg 
                         lg:h-10 lg:w-48 lg:rounded-lg lg:pl-2 lg:text-base
                          md:h-8 md:w-40 md:rounded-md md:pl-1 md:text-sm"
            />
          </div>
          <div className="flex flex-row space-x-10 pl-10">
            <label className="text-text-light
            xl:text-lg  lg:text-base md:text-sm
            ">User Name:</label>
            <input
              type="text"
              onChange={handleUserName}
              className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light bg-button-text-light 
                         xl:h-10 xl:w-52 xl:rounded-xl xl:pl-3 xl:text-lg 
                         lg:h-10 lg:w-48 lg:rounded-lg lg:pl-2 lg:text-base
                          md:h-8 md:w-40 md:rounded-md md:pl-1 md:text-sm"
            />
          </div>
        </div>
        <div className="bg-orgnizerbg-light/5 flex flex-col space-y-7 rounded-2xl
                 shadow-inputLabelShadow-light/50 drop-shadow-md shadow-md border border-inputLabelShadow-light/40
                 xl:py-10 xl:px-8 
                 lg:py-8 lg:px-8
                 md:py-8 md:px-4
        ">
        <div className="flex flex-row space-x-20 pl-10">
            <label className="text-text-light
            xl:text-lg  lg:text-base md:text-sm
            ">Email: </label>
            <input
              type="email"
              onChange={handleEmail}
              className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light bg-button-text-light 
                         xl:h-10 xl:w-52 xl:rounded-xl xl:pl-3 xl:text-lg 
                         lg:h-10 lg:w-48 lg:rounded-lg lg:pl-2 lg:text-base
                          md:h-8 md:w-40 md:rounded-md md:pl-1 md:text-sm"
            />
          </div>
          <div className="flex flex-row space-x-5 pl-10">
            <label className="text-text-light
            xl:text-lg  lg:text-base md:text-sm
            ">Phone Number:</label>
            <input
              type="text"
              onChange={handleMobile}
              className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light bg-button-text-light 
                         xl:h-10 xl:w-52 xl:rounded-xl xl:pl-3 xl:text-lg 
                         lg:h-10 lg:w-48 lg:rounded-lg lg:pl-2 lg:text-base
                          md:h-8 md:w-40 md:rounded-md md:pl-1 md:text-sm"
            />
          </div>
          <div className="flex flex-row space-x-10 pl-10">
            <label className="text-text-light
            xl:text-lg  lg:text-base md:text-sm
            ">Account Type:</label>
            <div className="flex flex-col text-text-light">
    <div className="flex flex-row space-x-11">
      <span>Client</span>
      <input
        type="radio"
        name="account-type"
        value="client"
        checked={accountType === "client"}
        onChange={handleAccountType}
      />
    </div>
    <div className="flex flex-row space-x-4">
      <span>Presenter</span>
      <input
        type="radio"
        name="account-type"
        value="presenter"
        checked={accountType === "presenter"}
        onChange={handleAccountType}
      />
    </div>
    <div className="flex flex-row space-x-4">
      <span>Organizer</span>
      <input
        type="radio"
        name="account-type"
        value="orgnizer"
        checked={accountType === "orgnizer"}
        onChange={handleAccountType}
      />
    </div>
  </div>
        </div>
        </div>
        </div>

        <img src={createAccountGirl} className="absolute
         xl:mr-36 xl:top-1/2  xl:w-52 xl:h-52
         lg:right-96 lg:top-80 lg:w-40 lg:h-48
         md:right-72 md:top-80 md:w-36 md:h-36"/>
        <div className="flex flex-row justify-start content-center
         xl:px-40 xl:space-x-32 lg:px-20 lg:space-x-32 md:px-8 md:space-x-20   "> 
        <img src={createAccountCar} className=" xl:w-96 xl:h-96 lg:w-72 lg:h-72 md:w-52 md:h-52"/>
        <div className="flex flex-col">
        <div className="bg-orgnizerbg-light/10 flex flex-col space-y-10 rounded-2xl h-fit items-center
                 shadow-inputLabelShadow-light/50 drop-shadow-md shadow-md border border-inputLabelShadow-light/40
                 xl:py-10  xl:px-10
                 lg:py-8 lg:px-10
                 md:py-8 md:px-4
        ">
        <div className="flex flex-row xl:space-x-24 lg:space-x-24 md:space-x-20">
            <label className="text-text-light
            xl:text-lg  lg:text-base md:text-sm
            ">Password: </label>
            <input
              type="password"
              onChange={handlePassword}
              className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light bg-button-text-light 
                         xl:h-10 xl:w-52 xl:rounded-xl xl:pl-3 xl:text-lg 
                         lg:h-10 lg:w-48 lg:rounded-lg lg:pl-2 lg:text-base
                          md:h-8 md:w-40 md:rounded-md md:pl-1 md:text-sm"
            />
          </div>
          <div className="flex flex-row space-x-10">
            <label className="text-text-light
            xl:text-lg  lg:text-base md:text-sm
            ">Confirm Password: </label>
            <input
              type="password"
              onChange={handleConfirmPassword}
              className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light bg-button-text-light 
                         xl:h-10 xl:w-52 xl:rounded-xl xl:pl-3 xl:text-lg 
                         lg:h-10 lg:w-48 lg:rounded-lg lg:pl-2 lg:text-base
                          md:h-8 md:w-40 md:rounded-md md:pl-1 md:text-sm"
            />
          </div>
          <div className="flex flex-row space-x-32">
            <label  className="text-text-light
            xl:text-lg  lg:text-base md:text-sm">Gender:</label>
            <select onChange={handleGender}
            className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light bg-button-text-light 
                         xl:h-10 xl:w-52 xl:rounded-xl xl:pl-3 xl:text-lg 
                         lg:h-10 lg:w-48 lg:rounded-lg lg:pl-2 lg:text-base
                          md:h-8 md:w-40 md:rounded-md md:pl-1 md:text-sm">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="flex flex-row space-x-32">
            <label  className="text-text-light
            xl:text-lg  lg:text-base md:text-sm">Birthday:</label>
            <input
              type="date"
              onChange={handleBirthday}
              className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light bg-button-text-light 
                         xl:h-10 xl:w-52 xl:rounded-xl xl:pl-3 xl:text-lg 
                         lg:h-10 lg:w-48 lg:rounded-lg lg:pl-2 lg:text-base
                          md:h-8 md:w-40 md:rounded-md md:pl-1 md:text-sm"
            />
          </div>
          </div>
          <div className="flex flex-col px-36">
          <img src={arrowDesign} className="rotate-90 xl:w-28 xl:h-28 lg:w-28 lg:h-28 md:w-24 md:h-24"/>
          <button
              type="button"
              onClick={createAccount}
              className="font-['sans-serif'] items-center justify-center
              drop-shadow-[3px_6px_rgba(117,135,142,0.5)]
              bg-add-button-light text-button-text-light
              hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-add-button-hover-light
              xl:text-xl xl:rounded-md xl:w-28 xl:h-10 ml-16
              lg:text-lg lg:rounded-md lg:w-20 lg:h-10
              md:text-md md:rounded-md md:w-16 md:h-10 "
            >
              Create
            </button>
          </div>
        </div>
          </div>
        </div>
        </div>
        </div>
  )
}

export default CreateAccount
