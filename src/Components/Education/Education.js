import React from "react";
import "./myEdu.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
const posts = [
  {
    date: "02.01.2018",
    title: "Inha University",
    content:
      "Light industry collage is situated in Andijan Light industry collage is situated in Andijan Light industry collage is situated in Andijan Light industry collage is situated in Andijan "
  },
  {
    date: "02.01.2018",
    title: "Light Industrial Collage",
    content:
      "Light industry collage is situated in Andijan Light industry collage is situated in Andijan Light industry collage is situated in Andijan Light industry collage is situated in Andijan "
  },
  {
    date: "02.01.2018",
    title: "Light Industrial Collage",
    content:
      "Light industry collage is situated in Andijan Light industry collage is situated in Andijan Light industry collage is situated in Andijan Light industry collage is situated in Andijan "
  },
  {
    date: "02.01.2018",
    title: "Light Industrial Collage",
    content:
      "Light industry collage is situated in Andijan Light industry collage is situated in Andijan Light industry collage is situated in Andijan Light industry collage is situated in Andijan "
  },
  {
    date: "03.10.2013",
    title: "Light Industrial Collage",
    content:
      "Light industry collage is situated in Andijan Light industry collage is situated in Andijan Light industry collage is situated in Andijan Light industry collage is situated in Andijan "
  },
  {
    date: "22.01.2020",
    title: "Light Industrial Collage",
    content:
      "Light industry collage is situated in Andijan Light industry collage is situated in Andijan Light industry collage is situated in Andijan Light industry collage is situated in Andijan "
  }
];

function EducationCard() {
  const CardList = posts.map(post => (
    <Grid item md={6} justify="space-between">
      <Card className="cardSkill" style={{ width: "100%", height: "" }}>
        <CardContent>
          <Typography className={post.title} gutterBottom>
            <span className="dateOfEducation">{post.date}</span>
            <h4> {post.title} </h4>
          </Typography>
          <Typography variant="body2" component="p">
            <p>{post.content}</p>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ));
  return (
    <Container
      className="education"
      maxWidth="md"
      justify="center"
      alignItems="center"
      xs={12}
    >
      <div class="main_title">
        <h2>Education</h2>
      </div>
      <Grid
        container
        maxWidth="md"
        justify="center"
        alignItems="center"
        justify="space-between"
        spacing={2}
      >
        {CardList}
      </Grid>
    </Container>
  );
}



export default EducationCard;
