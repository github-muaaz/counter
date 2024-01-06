import React, { Component } from "react";
import Movie from "./components/movie";
import Navbar from "./components/nabvar";
import { Redirect, Route, Switch } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/commons/not-found";
import Home from "./components/home";
import MovieDetail from "./components/commons/movieDetail";
import LoginForm from "./components/commons/loginForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <main className="container p-3">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/movies/:id" component={MovieDetail} />
            <Route path="/movies" component={Movie} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
