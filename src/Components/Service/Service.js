import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./myService.css"

const services = [
  {
    src: "fa fab fa-wordpress",
    title: "Wordpress Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod, tempor ets incididunt ut labore et dolore magna aliqua. Ut enim adtiesm minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    src: "fa fa-mobile",
    title: " Mobile Apps Development ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod, tempor ets incididunt ut labore et dolore magna aliqua. Ut enim adtiesm minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    src: "fa fas fa-camera",
    title: "Creative Design",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod, tempor ets incididunt ut labore et dolore magna aliqua. Ut enim adtiesm minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    src: "fa fa-paint-brush",
    title: "Social Media Marketing",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod, tempor ets incididunt ut labore et dolore magna aliqua. Ut enim adtiesm minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    src: "fa fab fa-maxcdn",
    title: "Professional Photography",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod, tempor ets incididunt ut labore et dolore magna aliqua. Ut enim adtiesm minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    src: "fa fas fa-laptop",
    title: "Website Development",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod, tempor ets incididunt ut labore et dolore magna aliqua. Ut enim adtiesm minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];
function Service() {
  const ServiceList = services.map(service => (
    <Grid item xd={12} sm={6}>
    <div class="service-item">
    <i class={service.src}></i>
    <h4>{service.title}</h4>
    <p>{service.description}</p>
    </div>
    </Grid>
  ));
  return (
    <Container
      className="service"
      maxWidth="md"
      justify="center"
      alignItems="center"
      xs={12}
    >
      <div class="main_title">
        <h2>Services</h2>
      </div>
      <Grid container>{ServiceList}</Grid>
    </Container>
  );
}

export default Service;
