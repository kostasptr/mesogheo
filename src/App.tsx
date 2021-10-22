import React from 'react';
import { BrowserRouter as Routing, Switch, Route } from 'react-router-dom';
import ScrollToTop from './helpers/ScrollToTop';
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
    <Routing basename="/mesogheo">
      <ScrollToTop />
      <div className="App bg-92_green">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/book" component={Book} />
          <Route path="/faq" component={FAQ} />
          <Route path="/arizona" component={Arizona} />
          <Route path="/blu" component={Blu} />
          <Route path="/verde" component={Verde} />
          <Route path="/viola" component={Viola} />
        </Switch>
        <Footer />
      </div>
    </Routing>

  );
}

export default App;