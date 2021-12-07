import Home from "./univercity/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeRank from "./univercity/welcome/WelcomeRank";
function index() {
  return (
    <>
  <div className="container-fluid Header-BackgroundMask">
  <Home/>
    <WelcomeRank/>
  </div>
    </>
  );
}

export default index;
