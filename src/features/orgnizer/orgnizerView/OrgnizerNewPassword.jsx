
import Flower from "../../../assets/images/flower.png"
import Header from "../../layout/Header"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPassword } from "../orgnizerSlice"
import { useNavigate } from "react-router-dom"
function OrgnizerNewPassword() {
    const state = useSelector(state => state.orgnizer)
    const [newPass, setNewPass] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')
    function handelNewPassChange(e) {
        setNewPass(e.target.value)
    }
    function handleConfirmChange(e) {
        setConfirm(e.target.value)
    }
    function handelAdd() {
        if (newPass === confirm) {
            dispatch(setPassword(newPass))
            setError(false)
            setErrorMessage('')
            setNewPass('')
            setConfirm('')
            navigate('/foot')
        }
        else if (newPass === '') {
            setError(true)
            setErrorMessage('Password field is required !')
        }
        else if (confirm === '') {
            setError(true)
            setErrorMessage('Confirm Password field is required !')
        }
        else {
            setError(true)
            setErrorMessage('The Password you entered does not match !')
        }
        console.log(errorMessage)
    }
    return (
        <div className=" w-full h-screen max-h-full">
            <Header />
            <img src={Flower} className="absolute h-screen w-5/12  right-0 " />
            <div className="container flex flex-row items-center relative pt-52">

                <div className="bg-offerbg-light  drop-shadow-[2px_4px_rgba(125,143,154,0.5)] xl:w-2/5 xl:mx-64 xl:rounded-3xl xl:h-fit">
                    <div className="flex flex-col items-center justify-start mx-auto text-text-light font-['Arial'] xl:gap-1 xl:text-2xl xl:px-2 xl:my-14 ">
                        <div className="flex flex-col xl:gap-3">
                            <span>new password :</span>
                            <input type="text"
                                onChange={handelNewPassChange}
                                value={newPass}
                                className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light xl:h-10  xl:rounded-xl xl:pl-3 xl:text-xl" />
                            <span className="xl:pt-7 lg:pt-5">confirm password :</span>
                            <input type="text"
                                onChange={handleConfirmChange}
                                value={confirm}
                                className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light xl:h-10  xl:rounded-xl xl:pl-3 xl:text-xl" />
                        </div>
                        {error && <div className="flex flex-row justify-center  text-error-light font-['Open_Sans'] xl:text-lg lg:text-lg">{errorMessage}</div>}
                        <div className="flex flex-row justify-between items-start xl:gap-6 xl:pt-10">
                            <button
                                onClick={handelAdd}
                                className="flex flex-col text-center font-['sans-serif'] drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-add-button-light text-button-text-light xl:text-2xl xl:rounded-md  xl:w-28 xl:h-10 xl:pl-8 xl:pt-1">Save</button>
                            <button className="flex flex-col text-center font-['sans-serif']  drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-back-button-light text-button-text-light xl:pl-6 xl:pt-1 xl:w-28 xl:h-10  xl:text-2xl xl:rounded-md">Cancel</button>

                        </div>
                    </div>
                </div>
                <div className="bg-orgnizerbg-light  text-center text-text-light absolute  xl:rounded drop-shadow-[2px_2px_rgba(9,133,94,0.6)] xl:left-80 xl:top-48 xl:w-56 xl:h-10">
                    <span className="xl:text-3xl font-['serif']">New Password</span>
                </div>

            </div>
        </div>)
}
export default OrgnizerNewPassword