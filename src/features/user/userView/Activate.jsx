import { useDispatch } from "react-redux";
import { setToken } from "../userSlice";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Activate(){
    var uid,token
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [checkError,setCheckError]=useState(false)
    const [msg,setMsg]=useState('')
    const handelActivate=async()=>{
        const response = await axios.post('https://tourbook-q8wk.onrender.com/auth/users/activation/', {
            uid:uid,
            token:token
          }).then((response) => {
            console.log(response.data);
            dispatch(setToken({uid,token}));
            navigate('/login')
          })
          .catch((error) => {
           setCheckError(true)
           setMsg(error.code)
            console.error('Error:', error);
          });
    }
    return(
        <div className="flex flex-col justify-center items-center pt-64">
           {
            checkError&& <div className="flex flex-row justify-start  text-error-light font-['Open_Sans']  pb-10
            xl:text-xl lg:text-lg  md:text-base">{msg}
                </div>
           } 
        <button
              onClick={handelActivate}
              className="justify-center items-center text-center  font-['sans-serif'] text-loginButtonText-light flex-row
          bg-gradient-to-br from-loginButtonFrom-light via-loginButtonVia-light to-loginButtonTo-light 
          drop-shadow-[3px_6px_rgba(117,135,142,0.5)] rounded-md 
          hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-gradient-to-br hover:from-loginButtonVia-light hover:via-loginButtonVia-light hover:to-loginButtonVia-light
          xl:text-4xl xl:w-52 xl:h-20  
          lg:text-3xl  lg:w-44 lg:h-16 
          md:text-2xl  md:w-40 md:h-12 "
            >
              Activate
            </button>
        </div>
    )
}

export default Activate