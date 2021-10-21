import React from 'react';
import { BrowserRouter as Routing, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Book from './components/Book';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Arizona from './components/rooms/arizona';
import Blu from './components/rooms/blu';
import Verde from './components/rooms/verde';
import Viola from './components/rooms/viola';
import './App.css';

function App() {
  return (

    <Routing>
      <div className="App bg-92_green">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mesogheo" component={Home} />
          <Route path="/home" exact component={Home} />
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