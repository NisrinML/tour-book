import TitleStar from "../../../assets/images/titleStar.png"
function Title(props){
    return(
        <div className="flex flex-row  items-center justify-center relative w-3/5 h-4/5 bg-image bg-cover bg-center bg-no-repeat p-5 m-5
         " 
        style={{backgroundImage: `url(${TitleStar})`,
          }}>
   <div className="flex-col xl:text-3xl lg:text-2xl md:text-xl text-title-light font-['Georgia'] font-semibold">
                        {props.text}
                    </div>
          </div>
    )
}
export default Title