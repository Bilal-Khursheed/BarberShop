import { Component } from "react";
import "./schedulelist.css";
import $ from "jquery";
class ScheduleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: "",
      time: "",
      date: "",
    };
  }
  allServices = async () => {
    await fetch(`/allServices`)
      .then((respone) => respone.json())
      .then((res) => {
        if (res.message === "found") {
          console.log(res.data.length);
          var j = 0;
          var i;
          for (i in res.data) {
            $("#allinone").prepend(
              `<div class="card card1 col-md-5">
                <h3 class="title">` +
                res.data[j].service +
                `</h3>
                <div class="bar">
                  <div class="emptybar"></div>
                  <div class="filledbar"></div>
                  <br/>
                  <label style={{ color: "white" }}>Time : ` +
                res.data[j].time +
                `</label>
                  <label style={{ color: "white" }}>Date :` +
                res.data[j].date +
                `</label>
                </div>`
            );
            j++;
          }
        } else {
          console.log("not working");
          alert("User doesn't exist");
        }
        console.log("checked");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="fullbody" onLoad={this.allServices}>
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
        <div class="container container1 col-md-5" id="allinone">
              <div class="card card1 col-md-5">
            <h3 class="title">Add New Schedule</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div>
              <br></br>
              <a href="./schedule">
                New Schedule
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/1828/1828817.svg"
                  onerror="this.onerror=null; this.src='image.png'"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleList;

//https://www.flaticon.com/
