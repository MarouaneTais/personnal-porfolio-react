import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div style={{ width: "100%", margin: "auto" }}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                alt="avatar"
                className="avatar-img"
              />
              <div className="banner-text">
                <h1>Full Stack Web Developer</h1>
                <hr />
                <p>
                  HTML/CSS | Bootstrap | Javascript | ReactJS | PHP | Laravel | Wordpress
                </p>
                <div className="social-links">
                  {/* Linkedin*/}
                  <a
                    href="https://www.linkedin.com/in/marouane-tais/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin" aria-hidden="true" />
                  </a>
                  {/* End Linkedin*/}
                  {/* Github*/}
                  <a
                    href="https://github.com/MarouaneTais"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-github-square" aria-hidden="true" />
                  </a>
                  {/* End Github*/}
                </div>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LandingPage;
