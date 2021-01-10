import "./team.css";
const { Component } = require("react");

class team extends Component {
  render() {
    return (
      <div class="container">
        <br></br>
        <div className="float-left" style={{float:"right"}}>
        
          &ensp;&ensp;

          <a className="btn btn-danger " href="./">
            Logout
          </a>
        </div>
        <br></br>
        <hr/>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="our-team">
              <div class="pic">
                <img src="images/team-1.png" />
              </div>
              <h3 class="title">Williamson</h3>
              <span class="post">
                <a href="/services">Hair Dresser</a>
              </span>
              <ul class="social">
                <li>
                  <a href="#" class="fa fa-facebook icoFacebook"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-twitter icoTwitter"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-google-plus icoGoogle"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-linkedin icoGoogle"></a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="our-team">
              <div class="pic">
                <img src="images/team-2.png" />
              </div>
              <h3 class="title">Kristiana</h3>
              <span class="post">
                <a href="/services">Hair Dresser</a>
              </span>
              <ul class="social">
                <li>
                  <a href="#" class="fa fa-facebook icoFacebook"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-twitter icoTwitter"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-google-plus icoGoogle"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-linkedin icoGoogle"></a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="our-team">
              <div class="pic">
                <img src="images/team-3.png" />
              </div>
              <h3 class="title">Kristiana</h3>
              <span class="post">
                <a href="/services">Hair Dresser</a>
              </span>
              <ul class="social">
                <li>
                  <a href="#" class="fa fa-facebook icoFacebook"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-twitter icoTwitter"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-google-plus icoGoogle"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-linkedin icoGoogle"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default team;
