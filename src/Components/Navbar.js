import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import '../App.css';

// for burger 


export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  // burger
 
  render() {
    return (
      <div id="nav" className="fadeInDown animated">
        <Container
          xs={12}
          maxWidth="md"
          className="nav"
          style={{ padding: "0px" }}
        >
          <Grid container direction="row" maxWidth="md">
            <Grid item sm={2} container direction="row" justify="flex-start">
              <div className="nav-logo" onClick={this.scrollToTop}>
                Madina
              </div>
            </Grid>
            <Grid
              item
              className="nav-content"
              sm={10}
              container
              justify="flex-end"
            >
              <ul className="nav-items">
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="skill"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Skill
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="service"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        
        </Container>
      </div>
    );
  }
}


