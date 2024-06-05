
import ForgetPassword from "../../../assets/images/forgetPassword.png"
import Header from "../../layout/Header"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setEmail } from "../../user/userSlice"
import { useNavigate } from "react-router-dom"
function OrgnizerForgetPassword() {
    const state = useSelector(state => state.user)
    const [email, setNewEmail] = useState('');
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')
    function handelEmailChange(e) {
        setNewEmail(e.target.value)
    }

    function handelSend() {
        if (email === '') {
            setError(true)
            setErrorMessage('Please enter your email !')
        }
        else {
            dispatch(setEmail(email))
            setError(false)
            setErrorMessage('')
            setNewEmail('')
            navigate('/')
        }
    }
    return (
        <div className=" w-full h-screen max-h-full">
            <Header />
            <img src={ForgetPassword} className="absolute h-screen w-5/12  right-0 " />
            <div className="container flex flex-row items-center relative pt-60 ">

                <div className="bg-offerbg-light  drop-shadow-[2px_4px_rgba(125,143,154,0.5)] h-fit w-2/5 xl:mx-64 xl:rounded-3xl lg:mx-64 lg:rounded-3xl md:mx-56 md:rounded-2xl ">
                    <div className="flex flex-col items-center justify-start mx-auto text-text-light font-['Arial'] gap-1 px-2 xl:text-2xl xl:my-16 lg:text-xl lg:my-16 md:text-lg md:my-20">
                        <div className="flex flex-col xl:gap-3 lg:gap-2 md:gap-2">
                            <span>enter your email :</span>
                            <input type="email"
                                onChange={handelEmailChange}
                                value={email}
                                className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light xl:h-10 xl:rounded-xl xl:pl-3 xl:text-xl lg:h-8 lg:rounded-lg lg:pl-2 lg:text-lg md:h-6 md:rounded-md md:pl-1 md:text-base" />
                        </div>
                        {error && <div className="flex flex-row justify-center  text-error-light font-['Open_Sans'] xl:text-lg lg:text-base md:text-sm">{errorMessage}</div>}
                        <div className="flex flex-rowjustify-center text-text-light font-['Arial'] mt-16 xl:text-lg lg:text-base  md:text-sm ">
                            <a href="/foot">resend link again ?</a>
                        </div>
                        <div className="flex flex-row justify-between items-start pt-10 xl:gap-6 lg:gap-4 md:gap-2">
                            <button
                                onClick={handelSend}
                                className="flex flex-col text-center font-['sans-serif'] drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-add-button-light text-button-text-light 
                                hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-add-button-hover-light
                                xl:text-2xl xl:pt-1  xl:rounded-md  xl:w-28 xl:h-10 xl:pl-8 
                                lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 lg:pl-7 lg:pt-1 
                                md:text-lg md:rounded-md  md:w-20 md:h-8 md:pl-6 md:pt-0">Send</button>

                        </div>
                    </div>
                </div>
                <div className="bg-orgnizerbg-light  text-center text-text-light absolute   drop-shadow-[2px_2px_rgba(9,133,94,0.6)] top-56 xl:rounded xl:left-80 xl:w-56 xl:h-10 lg:rounded-md lg:left-72 lg:w-48 lg:h-8 md:rounded-sm md:left-64  md:w-44 md:h-8 ">
                    <span className="xl:text-3xl lg:text-2xl md:text-xl font-['serif']">Forget Password</span>
                </div>

            </div>
        </div>)
}
export default OrgnizerForgetPassword