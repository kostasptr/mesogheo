import React from 'react';
import { BrowserRouter as Routing, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Book from './components/Book';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Arizona from './components/rooms/Arizona';
import Blu from './components/rooms/Blu';
import Verde from './components/rooms/Verde';
import Viola from './components/rooms/Viola';
import './App.css';

function App() {
  return (
    <Routing>
      <div className="h-full flex flex-col">
        <Header />
        <div className="flex-1-0-auto bg-92_green">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<Book />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/arizona" element={<Arizona />} />
            <Route path="/blu" element={<Blu />} />
            <Route path="/verde" element={<Verde />} />
            <Route path="/viola" element={<Viola />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Routing>

  );
}

export default App;