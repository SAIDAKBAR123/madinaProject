
import React from 'react';
import './About.css';
import '../../App.css';
import personalImg from '../../personal.jpg';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import "font-awesome/css/font-awesome.min.css";


export default function AboutMe() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        className="about-person-area pad"
        maxWidth="md"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid container clasName="row">
          <Grid item lg={5} xs={12} className="personal-img-resume">
            <img src={personalImg} className="person-img" alt="jpg" />
            <a href="D:\MY_PHOTOS\resume.pdf" className="download-btn" download>
              <span>Download resume </span>
            </a>
          </Grid>
          <Grid item lg={7} clasName="row person-details">
            <h3>
              Hi I'm <span>MadinaBonu</span>
            </h3>
            <h4>Web Designer and Web Developer</h4>
            <p>
              My name is  Madina Mukhammadyusupova. I am 23 years old. Lorem
              ipsum dolor sit amet, consectetur ascing elits, sed do eiusmod
              tempor incidunt ut labore et dolore mafgna aliqua. Ut enim ad mini
              vniam quis nerci, tation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis autes irure dolor in reprehenderit in etrs
              voluptate velit esse lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem
            </p>
            <Grid container>
              <Grid item md={4} sm={6} xs={6} className="person-information">
                <ul>
                  <li>
                    <a href="#">Age</a>
                  </li>
                  <li>
                    <a href="#">Nationality</a>
                  </li>
                  <li>
                    <a href="#">Address</a>
                  </li>
                  <li>
                    <a href="#">Phone</a>
                  </li>
                  <li>
                    <a href="#">Skype</a>
                  </li>
                  <li>
                    <a href="#">Email</a>
                  </li>
                  <li>
                    <a href="#">Website</a>
                  </li>
                </ul>
              </Grid>
              <Grid item md={8} sm={6} xs={6} ld className="person-information">
                <ul>
                  <li>
                    <a href="#">23</a>
                  </li>
                  <li>
                    <a href="#">Citizen of United States</a>
                  </li>
                  <li>
                    <a href="#">23 High </a>
                  </li>
                  <li>
                    <a href="#">+88 01911854378</a>
                  </li>
                  <li>
                    <a href="#">sumon.backpiper</a>
                  </li>
                  <li>
                    <a href="#">backpiper.com@gmail.com</a>
                  </li>
                  <li>
                    <a href="www.topsmmpanel.com">www.topsmmpanel.com</a>
                  </li>
                </ul>
              </Grid>
              <Grid item className="social-icon" md={12}>
                <ul className="social-icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-skype"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-flickr"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-rss"></i>
                    </a>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}


