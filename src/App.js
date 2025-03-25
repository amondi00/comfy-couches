import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AddCouches from "./components/AddCouches";
import GetCouches from "./components/GetCouches";
import Payment from "./components/Payment";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="nav">
          <Link to={"/signin"} className="link">
            Signin
          </Link>{" "}
          <br /> <br />
          <Link to={"/signup"} className="link">
            Signup
          </Link>{" "}
          <br />
          <br />
          <Link to={"/getcouches"} className="link">
            Get Couches{" "}
          </Link>
          <br />
        </nav>
        <header className="App-header"> Couch Haven</header>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/addcouches" element={<AddCouches />} />
          <Route path="/getcouches" element={<GetCouches />} />
          <Route path="/" element={<GetCouches />} />
          <Route path="*"element= {<NotFound/>}/>
        </Routes> <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
