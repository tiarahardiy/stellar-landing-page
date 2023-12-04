import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from '../src/components/assets images/logo.gif'
const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Location = lazy(() => import("./pages/Location"));
const Training = lazy(() => import("./pages/Training"));
const SuccessStory = lazy(() => import("./pages/SuccessStory"));
const Privilige = lazy(() => import("./pages/Privilige"));
const Career = lazy(() => import("./pages/Career"));
const CareerDetail = lazy(() => import("./pages/CareerDetail"));
const Merchant = lazy(() => import("./pages/Merchant"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function App() {
  const loading = (
    <div className="logo-center">
      <img src={Logo} alt='logo' />
      <p className="text-logo-loading">Stellar Powerhouse</p>
    </div>
  );

  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/training" element={<Training />} />
          <Route path="/success-story" element={<SuccessStory />} />
          <Route path="/privilige" element={<Privilige />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career-detail" element={<CareerDetail />} />
          <Route path="/merchant" element={<Merchant />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
