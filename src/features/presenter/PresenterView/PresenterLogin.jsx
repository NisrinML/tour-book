import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import icon from "../../../assets/images/icon.svg";

function PresenterLogin() {
  const state = useSelector(state => state.presenter)
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('')
  function handelUserName(e) {
    setUserName(e.target.value)
}
  function handelPassword(e) {
    setPassword(e.target.value)
}
function handleUserEnter() { 
  if(userName === '' && password === ''){
      setError(true)
      setErrorMessage('Please enter required field !')
  }
  else if (userName === '') {
    setError(true)
    setErrorMessage('User Name field is required !')
}
  else if (password === '') {
    setError(true)
    setErrorMessage('Password field is required !')
}
else {
  setError(true)
  setErrorMessage('The Password you entered does not match !')
}

}
  return (
    <div className=" w-full h-screen max-h-full">
      <div
        className="flex flex-row container items-center relative w-3/4 h-3/4 mx-auto
                 bg-gradient-to-b from-loginBackgroundFrameFrom-light from-20% to-loginBackgroundFrameTo-light to-50%
                 shadow-inputLabelShadow-light/50 drop-shadow-md shadow-md
                 xl:rounded-3xl xl:mt-20 xl:h-3/4 
                 lg:rounded-2xl lg:mt-28 lg:h-3/5 
                 md:rounded-xl  md:mt-36 md:h-96"
      >
        <div
          className="flex flex-col text-text-light font-['Arial'] items-center justify-start
                        xl:text-2xl xl:space-y-8 xl:mt-1 xl:ml-36
                        lg:text-xl  lg:space-y-8 lg:mt-1 lg:ml-16
                        md:text-lg  md:space-y-8 md:mt-1 md:ml-8"
        >
          <div className="flex flex-col xl:space-y-3 lg:space-y-2 md:space-y-1">
            <span className="xl:pt-7 lg:pt-5 md:pt-5">User Name:</span>
            <input
              type="text"
              onChange={handelUserName}
              value={userName}
              className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light bg-inputLabel-light
                   xl:h-12 xl:w-72 xl:rounded-xl xl:pl-3 xl:text-xl 
                   lg:h-10 lg:w-60 lg:rounded-lg lg:pl-2 lg:text-lg 
                   md:h-8 md:w-48 md:rounded-md md:pl-1 md:text-base"
            />
          </div>
          <div className="flex flex-col xl:space-y-3 lg:space-y-2 md:space-y-1">
            <span className="xl:pt-7 lg:pt-5 md:pt-5 ">Password:</span>
            <input
              type="password"
              onChange={handelPassword}
              value={password}
              className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light bg-inputLabel-light
                   xl:h-12 xl:w-72 xl:rounded-xl xl:pl-3 xl:text-xl 
                   lg:h-10 lg:w-60 lg:rounded-lg lg:pl-2 lg:text-lg 
                   md:h-8 md:w-48 md:rounded-md md:pl-1 md:text-base"
            />
                  {error && <div className="flex flex-row justify-center  text-error-light font-['Open_Sans'] 
                                xl:text-lg lg:text-base md:text-sm">
       {errorMessage}
      </div>}
          </div>
          <a 
          className="xl:text-base xl:font-light lg:text-s lg:font-normal md:text-xs md:font-normal cursor-pointer">
            {" "}
            Did you forget your password?
          </a>
          <button
           onClick={handleUserEnter}
            className="text-center  font-['sans-serif'] text-loginButtonText-light flex
          bg-gradient-to-br from-loginButtonFrom-light via-loginButtonVia-light to-loginButtonTo-light 
          drop-shadow-[3px_6px_rgba(117,135,142,0.5)] rounded-md 
          xl:text-2xl xl:w-28 xl:h-10 xl:pl-7 xl:pt-1 
          lg:text-xl  lg:w-24 lg:h-10 lg:pl-7 lg:pt-1
          md:text-lg  md:w-20 md:h-8  md:pl-5 md:pt-0 "
          >
            Login
          </button>
        </div>
        <img src={icon} className="w-1/2 h-3/4 ml-auto right-0" />
      </div>
      <div
        className="text-center pt-2.5 absolute bg-loginBackgroundFrameFrom-light text-text-light rounded-md 
        drop-shadow-[2px_2px_rgba(230,190,105,0.6)]
        xl:left-56 xl:top-12 xl:w-36 xl:h-16 
        lg:left-48 lg:top-20 lg:w-36 lg:h-16
        md:left-36 md:top-32 md:w-24 md:h-10 "
      >
        <span className="xl:text-3xl lg:text-2xl md:text-xl font-['serif']">
          Login
        </span>
      </div>
    </div>
  );
}

export default PresenterLogin;
