const DISCORD_INVITE_LINK = "https://discord.gg/Bg9vZvBP9A"; 
const LINKEDIN_INVITE_LINK = "https://www.linkedin.com/company/uwb-acm-club/mycompany/"; 
const INSTAGRAM_INVITE_LINK = "https://www.instagram.com/uwb_acm/"; 
const FACEBOOK_INVITE_LINK = "https://www.facebook.com/uwbacm/"; 

// Close hamburger menu when click elsewhere
$(document).on("click", function () {
  return $(".collapse").collapse("hide");
});

function loadComponents() {
  loadHeader();
  loadFooter();
}

// Dynamically injects the header into div with id "injectable-header"
// Issues will arise with links and images since their paths are relative, meaning each page may have
// a different relative path to the requested page/image/resource.
function loadHeader() {
  var x = document.getElementById("injectable-header");
  x.innerHTML = `
    <header id="site-header">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="./index.html">
          <span>
            <img src="./assets/images/logos/favicons/favicon.ico">
          </span> UWB ACM
        </a>
        <button class="navbar-toggler bg-gradient" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav m-auto">
            <li class="nav-item">
              <a class="nav-link" href="./index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://uwb.presence.io/events/acm">Events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="hiring.html">Join Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    `;
}

// Dynamically injects the footer into div with id "injectable-footer"
// Issues will arise with links and images since their paths are relative, meaning each page may have
// a different relative path to the requested page/image/resource.
function loadFooter() {
  var x = document.getElementById("injectable-footer");
  var todayYear = new Date().getFullYear();
  x.innerHTML = `<footer id="site-footer">
  <div class="top-footer">
    <div class="container my-md-5 my-4">
      <div class="row">
        <div class="col-lg-6">
          <div class="footer-logo mb-3 mx-auto" >
            <img src="assets/images/logos/acm/acm-color.svg" alt="ACM UWB logo">
          </div>
        </div>
        <!-- Quick Links -->
        <div class="col-lg-3 mx-auto mx-1">
          <h4 class="footer-title">Quick Links</h4>
          <ul class="footer-list">
            <li><a href="./index.html"> Home</a></li>
            <li><a href="./about.html"> About UWB ACM</a></li>
            <li><a href="https://uwb.presence.io/events/acm"> Events</a></li>
            <li><a href="./contact.html"> Contact Us</a></li>
          </ul>
        </div>
        <!-- Quick Links -->
        <div class="col-lg-3 mx-auto mx-1">
          <h4 class="footer-title">Connect With Us</h4>
          <ul class="footer-list">
            <li><a href="${DISCORD_INVITE_LINK}" target="_blank">Discord</a></li>
            <li><a href="${LINKEDIN_INVITE_LINK}" target="_blank">Linkedin</a></li>
            <li><a href="${INSTAGRAM_INVITE_LINK}" target="_blank">Instagram</a></li>
            <li><a href="${FACEBOOK_INVITE_LINK}" target="_blank">Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 align-center text-lg-left text-center">
          <a href="https://www.facebook.com/uwbacm" target="_blank" class="social-item"><span
              class="fa fa-facebook-f fa-2x"></span></a>
          <a href="https://twitter.com/hacksuwb" arget="_blank" class="social-item"><span
              class="fa fa-twitter fa-2x"></span></a>
          <a href="https://www.linkedin.com/organization-guest/company/uwb-acm-club" target="_blank"
            class="social-item"><span class="fa fa-linkedin fa-2x"></span></a>
          <a href="https://discord.gg/YBrxBTg" target="_blank" class="social-item"><span
              class="fab fa-discord fa-2x"></span></a>
          <a href="https://www.instagram.com/uwb_acm/" target="_blank" class="social-item"><span
              class="fa fa-instagram fa-2x"></span></a>
        </div>
        <div class="col-xl-8 text-lg-right text-center mb-lg-0 my-3">
          <p class="copyright">&#169<span id="demo"></span><small>
            ${todayYear}
            The ACM at The University of Washington, Bothell. </p>
            <br> 
            <p class="text-muted">Template by <a class="text-decoration-none" href="https://w3layouts.com/" target="_blank">W3Layouts</a></small></p>
        </div>
      </div>
    </div>
  </div>
</footer>`;
}
