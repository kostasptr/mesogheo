import { BrowserRouter as Routing, Routes, Route } from 'react-router-dom';
import Header from './components/_Header';
import Footer from './components/_Footer';

import Home from './components/Home';
import Rooms from './components/Rooms';
import About from './components/About';
import Book from './components/Book';
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
        <div className="max-w-screen-sm3 w-full m-auto">
          <Header />
        </div>
        <div className="flex-1-0-auto w-full max-w-screen-sm3 m-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<Book />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/arizona" element={<Arizona />} />
            <Route path="/blu" element={<Blu />} />
            <Route path="/verde" element={<Verde />} />
            <Route path="/viola" element={<Viola />} />
          </Routes>
        </div>
        <div className="bg-22_green w-full mt-4 md:mt-4d lg:mt-5c 2lg:mt-5 sm3:mt-6">
          <div className="max-w-screen-sm3 m-auto">
            <Footer />
          </div>
        </div>
      </div>
    </Routing>

  );
}

export default App;