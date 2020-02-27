import React from "react";
import Container from '@material-ui/core/Container';
import './myPortfolio.css'
import Grid from "@material-ui/core/Grid";
import '../../App.css';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
 const PortfolioCards = [
   {
     src:
       "https://designwebkit.com/wp-content/uploads/2015/04/restaurant-website-design-46867.jpg",
     title: "Inha University",
     content: "Cafe website using HTML, CSS, BOOtsrtap and javascreept"
   },
   {
     src: "https://static.kent.ac.uk/nexus/ems/818.jpg",
     title: "Light Industrial Collage",
     content: "Cafe website using HTML, CSS, BOOtsrtap and javascreept"
   },
   {
     src:
       "https://creativetimblog.com/blog/wp-content/uploads/2019/07/opt_pk_react_thumbnail-730x410.jpg",
     title: "Light Industrial Collage",
     content: "Cafe website using HTML, CSS, BOOtsrtap and javascreept"
   },
   {
     src:
       "https://uicookies.com/wp-content/uploads/2019/04/free-simple-website-template.jpg",
     title: "Light Industrial Collage",
     content: "Cafe website using HTML, CSS, BOOtsrtap and javascreept"
   },
   {
     src:
       "https://siteloft.com/wp-content/uploads/2017/07/AgencyTemplate-Marcus.jpg",
     title: "Light Industrial Collage",
     content: "Cafe website using HTML, CSS, BOOtsrtap and javascreept"
   },
   {
     src:
       "https://www.webdesigncity.com.au/wp-content/uploads/2018/07/single-page-website.jpg",
     title: "Light Industrial Collage",
     content: "Cafe website using HTML, CSS, BOOtsrtap and javascreept "
   }
 ];

function Portfolio() {
  const CardList = PortfolioCards.map(portfolioCard => (
    <Grid item xd={12} sm={6}>
      <Card style={{ width: "100%", height: "auto" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={portfolioCard.src}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {portfolioCard.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {portfolioCard.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="webPageLink">
          <Button className="buttonLearn" size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ));
  return (
    <Container
      className="portfolio"
      maxWidth="md"
      justify="center"
      alignItems="center"
      xs={12}
    >
      <div class="main_title">
        <h2>Portfolio</h2>
      </div>
      <Grid container spacing={2}>
        {CardList}
      </Grid>
    </Container>
  );
}

export default Portfolio; 


