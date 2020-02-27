import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Footer from './Components/Footer';
import Container from "@material-ui/core/Container";

// import "./components/AboutMe/About.css"
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <Container className="InnerContainer">
            <Section id="aboutMe" />
            <Section dark={false} id="skill" />
            <Section id="education" />
            <Section id="service" />
            <Section id="portfolio" />
            <Section id="contact" />
          </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
