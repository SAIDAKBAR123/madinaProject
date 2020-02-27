import React from "react" 
import Grid from "@material-ui/core/Grid";
function Footer(){
 return (
   <footer class="footerAre">
     <div class="footerInner">
       <div>
         <h1 class="footerLogo">Madinabonu</h1>
       </div>
       <div class="socialIconAria">
         <ul class="socialIcon">
           <Grid
             container
             md={12}
             direction="row"
             justify="center"
             alignItems="center"
             xs={12}
           >
             <ul className="social-icon_footer">
               <li>
                 <a href="https://www.facebook.com/madina.muhammadyusupova?ref=bookmarks">
                   <i class="fa fa-facebook"></i>
                 </a>
               </li>
               <li>
                 <a href="https://twitter.com/Madinka19972">
                   <i class="fa fa-twitter"></i>
                 </a>
               </li>
               <li>
                 <a href="https://www.instagram.com/madinabo__nu">
                   <i class="fa fa-instagram"></i>
                 </a>
               </li>
               <li>
                 <a href="m.mukhammadyusupova111@gmail.com">
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
         </ul>
       </div>
     </div>
   </footer>
 );
}

export default Footer;