import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Servise from "./pages/service";
import Contacts from "./pages/contacts";
import Portfolio from "./pages/portfolio";
import Error from "./pages/error";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/service" element={<Servise />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
