import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../public/favicon.ico';
import Home from './components/home/Home';
import About from './components/about/About';
import Works from './components/work/Works';
import Contact from './components/contact/Contact';
import Pintper from './components/pintper/Pintper';
import EstadoReal from './components/estadoReal/EstadoReal';
import NotFound from './components/notFound/NotFound';

class App extends Component {
  render() {
    return (
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/work' component={Works} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/pintper' component={Pintper} />
            <Route exact path='/estadoReal' component={EstadoReal} />
            <Route exact path='404' component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;