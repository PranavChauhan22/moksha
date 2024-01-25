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

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route exact path={"/"} element={<Rt/>}/>
      <Route exact path={"/cl"} element={<CL/>}/>
      <Route exact path={"/cs"} element={<CS/>}/>
      
      </Routes>
     </Router>
     
    </div>
  );
}

export default App;
