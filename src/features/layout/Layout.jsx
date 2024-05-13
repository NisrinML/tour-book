
import Footer from "./Footer";

function OrgnizerBigLayout({children}){
    var user=2;
    var mainColor=''
    if(user==2){
        mainColor='bg-orgnizerbg-light'
    }
    return(
        <div className={mainColor+' h-dvh w-full'}>
           {children}
            <Footer/>
        </div>
    )
}
export default OrgnizerBigLayout