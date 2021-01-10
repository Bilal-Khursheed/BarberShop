import "./schedule.css";
import $ from "jquery";
import axios from "axios";
import { Redirect } from "react-router-dom";
const { Component } = require("react");

class schedule extends Component {
  state = {
    service: "",
    time: "",
    date: "",
    navigate: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("signup e value", e.target.value);
  };

  handleSubmit = async (e) => {
    console.log("pass" + this.state.date);
    console.log("email" + this.state.time);
    e.preventDefault();
    const userdata = {
      service: this.state.service.trim(),
      time: this.state.time.trim(),
      date: this.state.date.trim(),
    };
    await axios
      .post(`/createServices`, userdata)
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
      return <Redirect to="/scheduleList" />;
    }
    return (
      <div className="align-center">
               <br></br>
        <div className="float-left" style={{float:"right"}}>
        <a className="btn btn-danger  " href="./team">
            Team
          </a>
          &ensp;&ensp;

          <a className="btn btn-danger " href="./">
            Logout
          </a>
        </div>
        <br></br>
        <hr/>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <form class="box" onSubmit={this.handleSubmit}>
                  <h1>Schedule</h1>
                  <p class="text-muted"> Please enter the date and time</p>
                  <br />
                  <h3 className="text-light">Barber 01</h3>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="service"
                    required
                    placeholder="Enter Service"
                  />
                  <input
                    name="on"
                    name="time"
                    type="time"
                    required
                    onChange={this.handleChange}
                  />{" "}
                  <input
                    name="on"
                    name="date"
                    onChange={this.handleChange}
                    type="date"
                    required
                    
                  />
                  <input type="submit" name="" value="Book" href="#" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default schedule;
