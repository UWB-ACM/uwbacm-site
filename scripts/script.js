function loadComponents() {
  loadHeader();
  loadFooter();
}

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
              <a class="nav-link" href="events.html">Events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    `;
}

function loadFooter() {
  var x = document.getElementById("injectable-footer");
  var todayYear = new Date().getFullYear();
  x.innerHTML = `<footer id="site-footer">
  <div class="top-footer">
    <div class="container my-md-5 my-4">
      <div class="row">
        <div class="col-lg-6">
          <div class="footer-logo mb-3 mx-auto">
            <img src="assets/images/logos/acm/acm-color.svg" alt="ACM UWB logo">
          </div>
        </div>
        <!-- Quick Links -->
        <div class="col-lg-6 mx-auto mx-1">
          <h4 class="footer-title">Quick Links</h4>
          <ul class="footer-list">
            <li><a href="./index.html"> Home</a></li>
            <li><a href="./about.html"> About UWB ACM</a></li>
            <li><a href="./events.html"> Events</a></li>
            <li><a href="./contact.html"> Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-footer">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 text-lg-left text-center mb-lg-0 mb-3">
          <p class="copyright">&#169<span id="demo"></span><small>
            ${todayYear}
            The ACM at The University of Washington, Bothell. Template by <a href="https://w3layouts.com/" target="_blank">W3Layouts</a></small></p>
        </div>
        <div class="col-lg-4 align-center text-lg-right text-center">
          <a href="https://www.facebook.com/uwbacm" target="_blank" class="social-item"><span
              class="fa fa-facebook-f"></span></a>
          <a href="https://twitter.com/hacksuwb" arget="_blank" class="social-item"><span
              class="fa fa-twitter"></span></a>
          <a href="https://www.linkedin.com/organization-guest/company/uwb-acm-club" target="_blank"
            class="social-item"><span class="fa fa-linkedin"></span></a>
          <a href="https://discord.gg/YBrxBTg" target="_blank" class="social-item"><span
              class="fab fa-discord"></span></a>
          <a href="https://www.instagram.com/uwb_acm/" target="_blank" class="social-item"><span
              class="fa fa-instagram"></span></a>
        </div>
      </div>
    </div>
  </div>
</footer>`;
}