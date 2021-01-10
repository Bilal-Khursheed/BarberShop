import "./services.css";
const { Component } = require("react");

class services extends Component {
  render() {
    return (
      <div>
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
      <div className="body1">
       
        <div class="flip-card-container col-md-5" style={{ hue: "220" }}>
          <div class="flip-card ">
            <div class="card-front">
              <figure>
                <div class="img-bg"></div>
                <img
                  src="https://images.unsplash.com/photo-1582771498000-8ad44e6c84db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  alt="Brohm Lake"
                />
                <figcaption>Haircut</figcaption>
              </figure>

              <ul className="ul1">
                <li className="li1">Time taken: 30 min</li>
                <li className="li1">Price: 30$</li>
              </ul>
            </div>

            <div class="card-back">
              <figure>
                <div class="img-bg"></div>
                <img
                  src="https://images.unsplash.com/photo-1582771498000-8ad44e6c84db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  alt="Brohm Lake"
                />
              </figure>

              <button>
                <a href="./scheduleList">Schedule</a>
              </button>

              <div class="design-container">
                <span class="design design--1"></span>
                <span class="design design--2"></span>
                <span class="design design--3"></span>
                <span class="design design--4"></span>
                <span class="design design--5"></span>
                <span class="design design--6"></span>
                <span class="design design--7"></span>
                <span class="design design--8"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="flip-card-container col-md-5" style={{ hue: "170" }}>
          <div class="flip-card">
            <div class="card-front">
              <figure>
                <div class="img-bg"></div>
                <img
                  src="https://images.unsplash.com/photo-1603899968034-1a56ca48d172?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  alt="Image 2"
                />
                <figcaption>Facial</figcaption>
              </figure>

              <ul className="ul1">
                <li className="li1">Time taken: 50 min</li>
                <li className="li1">Price: 40$</li>
              </ul>
            </div>

            <div class="card-back">
              <figure>
                <div class="img-bg"></div>
                <img
                  src="https://images.unsplash.com/photo-1603899968034-1a56ca48d172?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  alt="image-2"
                />
              </figure>

              <button>
                <a href="./scheduleList">Schedule</a>
              </button>

              <div class="design-container">
                <span class="design design--1"></span>
                <span class="design design--2"></span>
                <span class="design design--3"></span>
                <span class="design design--4"></span>
                <span class="design design--5"></span>
                <span class="design design--6"></span>
                <span class="design design--7"></span>
                <span class="design design--8"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="flip-card-container col-md-5" style={{ hue: "350" }}>
          <div class="flip-card">
            <div class="card-front">
              <figure>
                <div class="img-bg"></div>
                <img
                  src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Brohm Lake"
                />
                <figcaption>Beard</figcaption>
              </figure>

              <ul className="ul1">
                <li className="li1">Time taken: 40 min</li>
                <li className="li1">Price: 25$</li>
              </ul>
            </div>

            <div class="card-back">
              <figure>
                <div class="img-bg"></div>
                <img
                  src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Brohm Lake"
                />
              </figure>

              <button>
                <a href="./scheduleList">Schedule</a>
              </button>

              <div class="design-container">
                <span class="design design--1"></span>
                <span class="design design--2"></span>
                <span class="design design--3"></span>
                <span class="design design--4"></span>
                <span class="design design--5"></span>
                <span class="design design--6"></span>
                <span class="design design--7"></span>
                <span class="design design--8"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default services;
