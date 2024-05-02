import BigLogo from "../../../assets/images/bigLogo.svg"
import BigTitle from "../../../assets/images/bigTitle.svg"

function BigHeader(){
    return(
        <div class=" absolute top-16 left-16 flex flex-row justify-start items-center w-2/5 h-32 gap-4">
<img src={BigLogo} className=" flex flex-col"/>
<img src={BigTitle} className="flex flex-col pt-10"/>
        </div>
    )
}
export default BigHeader