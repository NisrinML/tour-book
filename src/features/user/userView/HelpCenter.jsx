import MainBackgrounGirl from "../../../assets/images/mainBackgrounGirl.png"
import Title from "./Title"

function HelpCenter(){
    return(
   <div className="flex flex-col justify-center items-center">
  <Title text="Help Center"/>
        <div className="flex flex-row bg-image bg-cover h-fit w-screen bg-center bg-no-repeat " 
        style={{backgroundImage: `url(${MainBackgrounGirl})`,
          }}>

          </div>
          </div>
     
    )
}
export default HelpCenter