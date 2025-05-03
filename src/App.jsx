import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ThemeCustomizer } from "@/components/ThemeCustomizer";
import { WelcomePage } from "@/components/WelcomePage";
import { Registration } from "@/components/sections/Registration";

function App() {
  const [showWelcomePage, setShowWelcomePage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomePage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {showWelcomePage ? (
        <WelcomePage />
      ) : (
        <>
          <>
            <Navbar />
            <main className="bg-white min-h-screen">
              <Routes>
                <Route path="/" element={<><Hero /><Registration /></>} />
                <Route path="/events" element={<Features />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            < Features/>
            <Contact />
            <Footer />
            <ThemeCustomizer />
          </>

        </>
      )}
    </div>
  );
}

export default App;
