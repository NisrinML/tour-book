
import ResetPassword from "../../../assets/images/resetPassword.png"
import Header from "../../layout/Header"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPassword } from "../orgnizerSlice"
import { useNavigate } from "react-router-dom"
function OrgnizerResetPassword() {
    const state = useSelector(state => state.orgnizer)
    const [oldPass,setOldPass]= useState('')
    const [newPass, setNewPass] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')
    function handelOldPassChange(e) {
        setOldPass(e.target.value)
    }
    function handelNewPassChange(e) {
        setNewPass(e.target.value)
    }
    function handleConfirmChange(e) {
        setConfirm(e.target.value)
    }
    function handelChange() { 
        console.log(state)
        if(oldPass === '' && newPass === '' && confirm === ''){
            setError(true)
            setErrorMessage('Please enter required field !')
        } 
        else if (newPass === '') {
            setError(true)
            setErrorMessage('Password field is required !')
        }
        else if (confirm === '') {
            setError(true)
            setErrorMessage('Confirm Password field is required !')
        }
        else if (oldPass === '') {
            setError(true)
            setErrorMessage('Old Password field is required !')
        }
        else if (oldPass != state.password) {
            setError(true)
            setErrorMessage('The Password you entered does not match !')
        }
        else if (newPass === confirm && oldPass ===state.password) {
            dispatch(setPassword(newPass))
            setError(false)
            setErrorMessage('')
            setNewPass('')
            setConfirm('')
            setOldPass('')
            navigate('/')
        }
       
        else {
            setError(true)
            setErrorMessage('The Password and COnfirm does not match !')
        }
        console.log(errorMessage)
    }
    return (
        <div className=" w-full h-screen max-h-full">
            <Header />
            <img src={ResetPassword} className="absolute h-screen w-8/12  right-0 " />
            <div className="container flex flex-row items-center relative pt-48 ">

                <div className="bg-offerbg-light  drop-shadow-[2px_4px_rgba(125,143,154,0.5)] h-fit w-2/5 xl:mx-60 xl:rounded-3xl lg:mx-60 lg:rounded-3xl md:mx-52 md:rounded-2xl ">
                    <div className="flex flex-col items-center justify-start mx-auto text-text-light font-['Arial'] gap-1 px-2  xl:text-2xl xl:my-12 lg:text-xl lg:my-14 md:text-lg md:my-16">
                        <div className="flex flex-col xl:gap-4 lg:gap-3 md:gap-3">
                            <span>old password :</span>
                            <input type="password"
                                onChange={handelOldPassChange}
                                value={oldPass}
                                className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light xl:h-10 xl:rounded-xl xl:pl-3 xl:text-xl lg:h-8 lg:rounded-lg lg:pl-2 lg:text-lg md:h-6 md:rounded-md md:pl-1 md:text-base" />
                            <span>new password :</span>
                            <input type="password"
                                onChange={handelNewPassChange}
                                value={newPass}
                                className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light xl:h-10 xl:rounded-xl xl:pl-3 xl:text-xl lg:h-8 lg:rounded-lg lg:pl-2 lg:text-lg md:h-6 md:rounded-md md:pl-1 md:text-base" />
                             <span>confirm password :</span>
                            <input type="password"
                                onChange={handleConfirmChange}
                                value={confirm}
                                className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light xl:h-10 xl:rounded-xl xl:pl-3 xl:text-xl lg:h-8 lg:rounded-lg lg:pl-2 lg:text-lg md:h-6 md:rounded-md md:pl-1 md:text-base" />
                       </div>
                        {error && <div className="flex flex-row justify-center  text-error-light font-['Open_Sans'] xl:text-lg lg:text-base md:text-sm">{errorMessage}</div>}
                        <div className="flex flex-row justify-between items-start pt-10 xl:gap-6 lg:gap-4 md:gap-3">
                            <button
                                onClick={handelChange}
                                className="flex flex-col text-center font-['sans-serif'] drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-change-button-light text-button-text-light xl:text-2xl xl:pt-1  xl:rounded-md  xl:w-28 xl:h-10 xl:pl-5 lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 lg:pl-4 lg:pt-1 md:text-lg md:rounded-md  md:w-20 md:h-8 md:pl-3 md:pt-0">Change</button>
                            <button className="flex flex-col text-center font-['sans-serif']  drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-back-button-light text-button-text-light xl:pt-1 xl:pl-5 xl:w-28 xl:h-10  xl:text-2xl xl:rounded-md lg:text-xl lg:rounded-md  lg:w-24 lg:h-10 lg:pl-5 lg:pt-1 md:text-lg md:rounded-md  md:w-20 md:h-8 md:pl-4 md:pt-0">Cancel</button>

                        </div>
                    </div>
                </div>
                <div className="bg-orgnizerbg-light  text-center text-text-light absolute   drop-shadow-[2px_2px_rgba(9,133,94,0.6)] xl:rounded xl:left-80 xl:top-44 xl:w-56 xl:h-10 lg:rounded-md lg:left-80 lg:top-44 lg:w-48 lg:h-8 md:rounded-sm md:left-64 md:top-44 md:w-44 md:h-8 ">
                    <span className="xl:text-3xl lg:text-2xl md:text-xl font-['serif']">Reset Password</span>
                </div>

            </div>
        </div>)
}
export default OrgnizerResetPassword