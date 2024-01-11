import React, { Component } from "react";
import Movie from "./components/movie";
import Navbar from "./components/nabvar";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/commons/not-found";
import Home from "./components/home";
import LoginForm from "./components/commons/loginForm";
import RegisterForm from "./components/commons/registerForm";
import MovieForm from "./components/commons/movieForm";
import Logout from "./components/logout";
import "react-toastify/dist/ReactToastify.css";
import * as auth from "./services/authService";
import ProtectedRoute from "./components/commons/protectedRoute";

class App extends Component {
  state = { user: { name: "Mosh" } };

  componentDidMount() {
    const user = auth.getCurrentUser();

    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Navbar user={this.state.user} />

        <main className="container p-3">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/register" exact component={RegisterForm} />
            <ProtectedRoute path="/movies/:id" component={<MovieForm />} />
            <Route
              path="/movies"
              render={(props) => <Movie {...props} user={this.state.user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/logout" component={Logout} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
