import logo from "./logo.svg";
import "./App.css";
import Spline from "@splinetool/react-spline";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Timeline from "./components/timeline/Timeline";
import Faq from "./components/faqs/Faq";
import Footer from "./components/footer/Footer";
import SignUpModal from "./components/signup/SignUpModal";
import CL from "./components/cl/CL";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Rt from "./Rt";
import Loader from "./components/loader/Loader";
import CS from "./components/cs/CS";
import Event from "./components/events/Event";
import Events from "./components/events/Events";
import Accomodation from "./components/accomodation/Accomodation";
import Portal from "./components/portal/Portal";
import Leaderboard from "./components/leaderboard/Leaderboard";
import CLlead from "./components/leaderboard/CLlead";
import MF from "./components/events/MF";
import Sponsor from "./components/sponsors/Sponsor";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route exact path={"/"} element={<Rt/>}/>
      <Route exact path={"/cl"} element={<CLlead/>}/>
      <Route exact path={"/cs"} element={<CS/>}/>
      <Route exact path={"/mv"} element={<Event/>}/>
      <Route exact path={"/events"} element={<Events/>}/>
      <Route exact path={"/mvportal"} element={<Portal/>}/>
      <Route exact path={"/leaderboard"} element={<Leaderboard/>}/>
      <Route exact path={"/accommodation"} element={<Accomodation/>}/>
      <Route exact path={"/minifest"} element={<MF/>}/>
      
      
      </Routes>
     </Router>
     
    </div>
  );
}

export default App;
