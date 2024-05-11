import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Companies from "./component/Companies";
import Categories from "./component/Categories";
import ProfileComponent from "./component/ProfileConponent";
import ApplyJobSection from "./component/ApplyJobSection";
import NewsletterSection from "./component/NewsletterSection";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="container mx-auto drop-shadow-2xl p-2 sm:p-5">
      <Navbar />
      <Home />
      <Companies />
      <Categories />
      <ProfileComponent />
      <ApplyJobSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;
