import Footer from "./Footer";

function OrgnizerBigLayout({ children }) {
  var user = 2;
  var mainColor = '';
  if (user === 2) {
    mainColor = 'bg-orgnizerbg-light';
    // mainColor = 'bg-gradient-to-br from-clientBackgroundFrom-light from-3% via-clientBackgroundVia-light via-40% to-clientBackgroundTo-light to-80%'
    // mainColor = 'bg-presenterbg-light'
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