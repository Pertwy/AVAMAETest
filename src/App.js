import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import AboutUsPage from "./pages/AboutUsPage"
import ContactUsPage from "./pages/ContactUsPage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>

      <div>
        <Navbar />
      </div>

      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/contact-us" component={ContactUsPage} />
      </div>

      <div>
        <Footer/>
      </div>

  </Router>
  );
}

export default App;
