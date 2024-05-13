import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import Footer from "./components/Footer";
import AboutUsSection from "./Page/AboutUsPage";

import IndustriesSection from "./Page/IndustryPage";

import ProductsPage from "./Page/ProductsPage";

import ContactUspage from "./Page/ContactUspage";
import DemoPage from "./components/ScheduleDemo";
import FreeTrial from "./components/FreeTrial";

import GetStartedAIDemo from "./components/GetStarted";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} index></Route>
          <Route path="/aboutUs" element={<AboutUsSection />} index></Route>
          <Route path="/industry" element={<IndustriesSection />} index></Route>
          <Route path="/Products/:id" element={<ProductsPage />} index></Route>
          <Route path="/contactus" element={<ContactUspage />} index></Route>
          <Route path="/scheduleDemo" element={<DemoPage />} index></Route>
          <Route path="/freetrial" element={<FreeTrial />} index></Route>
          <Route path="/getStarted" element={<GetStartedAIDemo />} index></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
