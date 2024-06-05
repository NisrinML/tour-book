import Footer from "./Footer";
import { useSelector } from "react-redux"
function OrgnizerBigLayout({ children }) {

  const state = useSelector(state => state.user)
  //to change the background color based on the type of user
  var user = state.login.data.roleId;
  var mainColor = '';
  if (user === 2) {
    mainColor = 'bg-orgnizerbg-light';
  }
  else if (user === 1) {
    mainColor = 'bg-gradient-to-br from-clientBackgroundFrom-light from-3% via-clientBackgroundVia-light via-40% to-clientBackgroundTo-light to-80%'
  }
  return (
    <div className={`${mainColor} h-full min-h-screen w-full flex flex-col`}>
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default OrgnizerBigLayout;