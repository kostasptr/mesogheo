import React from 'react';
import { BrowserRouter as Routing, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
// import Rooms from './components/Rooms';
import About from './components/About';
import Book from './components/Book';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import './App.css';

function App() {
  return (

    <Routing>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mesogheo" component={Home} />
          <Route path="/home" exact component={Home} />
          {/* <Route path="/rooms" component={Rooms} /> */}
          <Route path="/about" component={About} />
          <Route path="/book" component={Book} />
          <Route path="/faq" component={FAQ} />
        </Switch>
        <Footer />
      </div>
    </Routing>

  );
}

export default App;