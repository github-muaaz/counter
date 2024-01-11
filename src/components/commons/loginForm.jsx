import Joi from "joi-browser";
import Form from "./form";
import * as userServices from "../../services/userService";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("aaa")
    // try{
    //   userServices.register(this.state.data)
    // } catch(ex){
    //   if(ex.response && ex.response.status === 400){
    //     const errors = {...this.state.errors};
    //     errors.username = ex.response.data;

    //     console.log(ex.response.data);
    //     this.setState({errors});
    //   }
    // }
  };

  render() {

    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}

          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
