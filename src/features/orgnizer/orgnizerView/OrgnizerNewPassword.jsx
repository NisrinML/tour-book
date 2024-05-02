import Footer from "../../user/userView/Footer"
import Flower from"../../../assets/images/flower.png"
import BigHeader from "../../user/userView/BigHeader"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPassword } from "../orgnizerSlice"
import { useNavigate } from "react-router-dom"
function OrgnizerNewPassword(){
    const state = useSelector(state=>state.orgnizer)
    const [newPass,setNewPass]=useState('');
    const [confirm,setConfirm]=useState('');
    const [error,setError]=useState(false)
    const dispatch =useDispatch()
    const navigate =useNavigate();
    const [errorMessage,setErrorMessage]=useState('')
    function handelNewPassChange(e){
        setNewPass(e.target.value)
    }
    function handleConfirmChange(e){
        setConfirm(e.target.value)
    }
    function handelAdd(){
        if(newPass===confirm){
        dispatch(setPassword(newPass))
        setError(false)
        setErrorMessage('')
        setNewPass('')
        setConfirm('')
        navigate('/foot')
        }
        else if(newPass===''){
            setError(true)
            setErrorMessage('Password field is required !')
        }
        else if(confirm===''){
            setError(true)
            setErrorMessage('Confirm Password field is required !')
        }
        else{
            setError(true)
           setErrorMessage('The Password you entered does not match !')
        }
        console.log(errorMessage)
    }
return (
<div className="bg-orgnizerbg-light w-full h-screen">
    <BigHeader />
    <img src={Flower} className="absolute h-full w-5/12 right-0" />
    <div className="container flex flex-row items-center pt-24 relative">
        
        <div className="bg-offerbg-light rounded-3xl drop-shadow-[2px_4px_rgba(125,143,154,0.5)] w-2/5 my-44  mx-80">
            <div className="flex flex-col items-center justify-start px-6 my-28 mx-auto text-text-light gap-3 text-2xl font-['Arial']">
                <div className="flex flex-col gap-5">
                <span>new password :</span>
                <input type="text" 
                onChange={handelNewPassChange}
                value={newPass}
                className="h-10 drop-shadow-[1px_4px_rgba(117,135,142)] rounded-xl pl-3 text-input-text-light"/>
                <span className="pt-7">confirm password :</span>
                <input type="text" 
                onChange={handleConfirmChange}
                value={confirm}
                className="h-10 drop-shadow-[1px_4px_rgba(117,135,142)] rounded-xl pl-3 text-input-text-light"/>
                </div>
                {error&&<div className="flex flex-row justify-center text-lg text-error-light font-['Open_Sans']">{errorMessage}</div>}
                <div className="flex flex-row justify-between items-start pt-10 gap-12">
                    <button 
                    onClick={handelAdd}
                    className="flex flex-col w-28 h-12 font-['sans-serif'] pl-6 pt-1 drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-add-button-light text-button-text-light text-3xl rounded-md">Save</button>
                    <button className="flex flex-col w-28 h-12 font-['sans-serif'] pl-3 pt-1 drop-shadow-[3px_6px_rgba(117,135,142,0.5)] bg-back-button-light text-button-text-light text-3xl rounded-md">Cancel</button>
                </div>
            </div>
        </div>
        <div className="bg-orgnizerbg-light w-1/6 h-11 text-center text-text-light  rounded drop-shadow-[2px_2px_rgba(9,133,94,0.6)] absolute left-96 top-64">
            <span className="text-3xl font-['serif']">New Password</span>
        </div>
    
    </div>
    <Footer/>
</div>)
}
export default OrgnizerNewPassword