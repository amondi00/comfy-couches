import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import GetCouches from "./components/GetCouches";
import Payment from "./components/Payment";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Aboutus from "./components/Aboutus";
import NewsletterSignup from "./components/NewsletterSignup";
import ChatBot from "./components/Chatbot";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="nav">
          <Link to={"/signin"} className="linked">
            Signin
          </Link>{" "}
          <br /> <br />
          <Link to={"/signup"} className="linked">
            Signup
          </Link>{" "}
          <br />
          <br />
          <Link to={"/getcouches"} className="linked">
            Get Couches{" "}
          </Link>
          <br />
          <Link to={"/aboutus"} className="linked">
            About us
          </Link>
          <Link to={"/newslettersignup"} className="linked">
            Newsletter signup
          </Link>
          <Link to= {"/chatbot"} className="linked">Chatbot</Link>
       
        </nav>
        <header className="App-header">Couch Haven</header>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/getcouches" element={<GetCouches />} />
          <Route path="/" element={<GetCouches />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/newslettersignup" element={<NewsletterSignup />} />
          <Route path="/chatbot" element={<ChatBot/>}/>
        </Routes>{" "}
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
