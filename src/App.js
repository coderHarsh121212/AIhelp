import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import Footer from "./components/Footer";
import AboutUsSection from "./Page/AboutUsPage";
import DocumentationAPISection from "./Page/ApiPage";
import IndustriesSection from "./Page/IndustryPage";
import PlatformSection from "./Page/Platform";
import SolutionsSection from "./components/SolutionsSection";
import ProductsPage from "./Page/ProductsPage";
import ResourcesSection from "./Page/SourcesPage";
import ContactUspage from "./Page/ContactUspage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} index></Route>
          <Route path="/aboutUs" element={<AboutUsSection />} index></Route>
          <Route path="/industry" element={<IndustriesSection />} index></Route>
          <Route path="/Products" element={<ProductsPage />} index></Route>
          <Route path="/contactus" element={<ContactUspage />} index></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
