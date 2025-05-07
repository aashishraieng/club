import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import Members from "@/components/sections/Members";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ThemeCustomizer } from "@/components/ThemeCustomizer";
import { WelcomePage } from "@/components/welcomepage";
import JoiningForm from "@/components/JoinForm.jsx";
import { Registration } from "@/components/sections/Registration";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomePage(false);
    }, 3000);
    console.log(window.location.pathname);
    return () => clearTimeout(timer);
  }, [showWelcomePage]);

  return (
    <div className="min-h-screen bg-white">
      {showWelcomePage ? (
        <WelcomePage />
      ):(
        <>
          <>
            <Navbar />
            <main className="bg-white min-h-screen">
              <Routes>
                <Route path="/" element={
		  <>
		   <Hero />
		   <Registration />
		   <Features />
		</>} />
                <Route path="/members" element={<Members />} />
                <Route path="/contact" element={<Contact />} />
	      	<Route path="/join-club" element={<JoiningForm />} />
              </Routes>
            </main>
            <Footer />
          </>

        </>
      )}
    </div>
  );
}

export default App;
