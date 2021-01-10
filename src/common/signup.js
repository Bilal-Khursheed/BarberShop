import "./login.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
const { Component } = require("react");

class signup extends Component {
  state = {
    firstname: "",
    lastname: "",
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
    e.preventDefault();
    const userdata = {
      email: this.state.email.trim(),
      firstname: this.state.firstname.trim(),
      lastname: this.state.lastname.trim(),
      password: this.state.password.trim(),
    };
    await axios
      .post(`/create`, userdata)
      .then((res) => {
        setTimeout(() => this.setState({ navigate: true }), 20);
        alert("User Added Successfully...");
        console.log(" Successfully ...");
      })
      .catch((err) => {
        alert("Please try Again later ...");
        console.log(err);
      });
  };
  render() {
    if (this.state.navigate) {
      return <Redirect to="/login" />;
    }
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <form class="box" onSubmit={this.handleSubmit}>
                <h1>Signup</h1>
                <p class="text-muted"> Please enter your Credentials!</p>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                />
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
                <input type="password" name="" placeholder="Confirm Password" />

                <input type="submit" name="" value="Signup" />
                <div class="col-md-12">
                  <ul class="social-network social-circle">
                    <label className="text-light">
                      Already have account <a href="/login">Login</a>
                    </label>{" "}
                    <br />
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
export default signup;
