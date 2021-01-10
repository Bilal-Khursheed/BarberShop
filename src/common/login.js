import "./login.css";
import { Redirect } from "react-router-dom";
const { Component } = require("react");

class login extends Component {
  state = {
    email: "",
    password: "",
    navigate: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("signup e value", e.target.value);
  };
  handleSubmit = async (e) => {
    console.log("pass" + this.state.password);
    console.log("email" + this.state.email);
    const email = this.state.email;
    const password = this.state.password;
    e.preventDefault();
    await fetch(`/AdminLogin?email=${email}&&password=${password}`)
      .then((respone) => respone.json())
      .then((res) => {
        if (res.message === "found") {
          console.log("working and login");
          alert("Successfully Logged In");
          setTimeout(() => this.setState({ navigate: true }), 20);
        } else {
          console.log("not working");
          alert("User doesn't exist");
        }
        console.log("checked");
      })
      .catch((err) => {
        console.log(e);
      });
  };

  render() {
    if (this.state.navigate) {
      return <Redirect to="/team" />;
    }
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <form class="box" onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <p class="text-muted"> Please enter your login and password!</p>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <a class="forgot text-muted" href="#">
                  Forgot password?
                </a>
                <input type="submit" name="" value="Login" />
                <div class="col-md-12">
                  <label className="text-light">
                    Dont have account? <a href="/signup">Signup</a>
                  </label>{" "}
                  <br />
                  <ul class="social-network social-circle">
                    <li>
                      <a href="#" class="icoFacebook" title="Facebook">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="icoTwitter" title="Twitter">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="icoGoogle" title="Google +">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default login;
