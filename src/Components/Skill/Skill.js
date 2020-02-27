import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import './mySkill.css'
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles({
  root: {
    width: 370,
    height: 30,
    backgroundColor: lighten("#ffffff", 0.5)
    
  },
  bar: {
    backgroundColor: "#fec608"
  }
})(LinearProgress);
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  }
}));


function Skill() {
  
  const classes = useStyles();
  
  return (
    <Container
      className="skill myskill-area"
      maxWidth="md"
      justify="center"
      alignItems="center"
      xs={12}
    >
      <div class="main_title">
        <h2>My Skill</h2>
      </div>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item lg={6}>
          <div class="skill-text">
            <h4>Web development Skills</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Loren Ipsum has been the industry's standard dummy text.
            </p>
          </div>
          <h4>Wordpress</h4>
          <div className="progress">
            <BorderLinearProgress
              className={"progressWidth  " + classes.margin}
              variant="determinate"
              color="secondary"
              value={85}
            />
            <p className="persent">85%</p>
          </div>
          <h4>HTML/CSS</h4>
          <div className="progress">
            <BorderLinearProgress
              className={"progressWidth  " + classes.margin}
              variant="determinate"
              color="secondary"
              value={65}
            />
            <p className="persent">65%</p>
          </div>
          <h4>React</h4>
          <div className="progress">
            <BorderLinearProgress
              className={"progressWidth  " + classes.margin}
              variant="determinate"
              color="secondary"
              value={75}
            />
            <p className="persent">75%</p>
          </div>
        </Grid>
        <Grid item lg={6}>
          <div class="skill-text">
            <h4>Web development Skills</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Loren Ipsum has been the industry's standard dummy text.
            </p>
          </div>
          <h4>MySQL</h4>
          <div className="progress">
            <BorderLinearProgress
              className={"progressWidth  " + classes.margin}
              variant="determinate"
              color="secondary"
              value={85}
            />
            <p className="persent">85%</p>
          </div>
          <h4>Vue</h4>
          <div className="progress">
            <BorderLinearProgress
              className={"progressWidth  " + classes.margin}
              variant="determinate"
              color="secondary"
              value={80}
            />
            <p className="persent">85%</p>
          </div>
          <h4>Python</h4>
          <div className="progress">
            <BorderLinearProgress
              className={"progressWidth  " + classes.margin}
              variant="determinate"
              color="secondary"
              value={90}
            />
            <p className="persent">85%</p>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Skill



