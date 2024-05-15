import Footer from "./Footer";

function OrgnizerBigLayout({ children }) {
  var user = 2;
  var mainColor = '';
  if (user === 2) {
    mainColor = 'bg-orgnizerbg-light';
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