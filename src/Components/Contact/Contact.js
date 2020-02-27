import React from "react" 
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './myContact.css'
function Contact(){
 return (
   <Container
     className="contact"
     maxWidth="md"
     container
     direction="row"
     justify="center"
     alignItems="flex-start"
     xs={12}
     >
     <div class="main_title">
       <h2>Contact Me</h2>
     </div>
     <Grid container maxWidth="md" spacing={3}>
       <Grid item md={6}>
         <div class="contact_title">
           <h4>Contact Info</h4>
         </div>
         <p>
           There are many variations of passages of Lorem Ipsum available, but
           the et majori have suffered alteration in some form, by injected
           humour, Domised words which don't look even slightly believable. If
           you are going to use a pas of Lorem Ipsum, you need to be sure there
           isn't anything embarrassing hidden in the middle of text.
         </p>
         <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </p>
         <div class="media">
           <div class="media-left">
             <i class="fa fa-map-marker"></i>
           </div>
           <div class="media-body">
             <h5>Address</h5>
             <p>Freedom Way, Jersey City, NJ 07305, USA</p>
           </div>
         </div>
         <div class="media">
           <div class="media-left">
             <i class="fa fa-phone"></i>
           </div>
           <div class="media-body">
             <h5>Skype</h5>
             <p>sumon.backpiper</p>
           </div>
         </div>
         <div class="media">
           <div class="media-left">
             <i class="fa fa-envelope-o"></i>
           </div>
           <div class="media-body">
             <h5>Email</h5>
             <p>backpiper.com@gmail.com</p>
           </div>
         </div>
       </Grid>
       <Grid item md={6}  direction="column" display="block">
         <div class="contact_title">
           <h4>Send Message</h4>
         </div>
         <form action="">
           <input
             type="text"
             id="fname"
             name="firstname"
             placeholder="Your name.."
           />
           <input
             type="text"
             id="lname"
             name="lastname"
             placeholder="Your last name.."
           />
           <input
             type="text"
             id="lname"
             name="pasport number"
             placeholder="Your pasport number.."
             
           />
           <textarea
             id="subject"
             name="subject"
             placeholder="Write something.."
             
           ></textarea>
           <input
             id="form-button"
             type="submit"
             value="Submit"
           />
         </form>
       </Grid>
     </Grid>
   </Container>
 );
}

export default Contact;
