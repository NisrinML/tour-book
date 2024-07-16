import TitleStar from "../../../../assets/images/titleStar.png"
function Title(props){
    return(
        <div className="flex flex-row  items-center justify-center bg-image bg-cover bg-center bg-no-repeat p-5 m-5
         " 
        style={{backgroundImage: `url(${TitleStar})`,
          }}>
   <div className="flex-col  text-title-light font-['Georgia'] font-semibold
    xl:text-3xl xl:px-48 xl:py-10 
    lg:text-2xl lg:px-40 lg:py-7
    md:text-xl md:px-32 md:py-5 ">
                        {props.text}
                    </div>
          </div>
    )
}
export default Title