<template>
  <main class="main">
    <div class="contact container">
      <div class="message">
        <div class="col">
          <div class="row-12">
            <h1>CONTACT ME</h1>
          </div>
        </div>
      </div>
    </div>

    <section>
      <div class="container">
        <div class="row ">
          <div class="col-12 text-center" style="margin-top:40px">
            <span>
              <img
                src="../utils/github.svg"
                alt="github"
                class="img-fluid"
                width="35"
              />
              <a href="https://github.com/Anjola-ogunmefun">GitHub</a>
            </span>
          </div>
          <div class="col-6 media">
            <span>
              <img
                src="../utils/linkedin.svg"
                alt="linkedin"
                class="img-fluid"
                width="35"
              />
              <a href="http://linkedin.com/in/anjolaoluwa-ogunmefun"
                >Linkedin</a
              >
            </span>
          </div>

          <div class="col-6 media">
            <span>
              <img
                src="../utils/twitter.svg"
                alt="twitter"
                class="img-fluid"
                width="35"
              />
              <a href="">Twitter</a>
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6 mail">
            <span>
              <img
                src="../utils/gmail.svg"
                alt="email"
                class="img-fluid"
                width="35"
              />
              <p>ogunmefunanjola@gmail.com</p>
            </span>
          </div>
          <div class="col-sm-12 col-md-6 mail">
            <span>
              <img
                src="../utils/phone.svg"
                alt="phone number"
                class="img-fluid"
                width="35"
              />
              <p>+2347037378514</p>
            </span>
          </div>
        </div>
      </div>

    </section>


      <section id="nav">
      <div class="container">
        <div class="container">
          <div class="row">
            <ul class="nav nav-fill">
              <div class="col-4">
                <li>
                  <router-link class="route nav-link text-center" to="/about">
                    About</router-link
                  >
                </li>
              </div>
              <div class="col-4">
                <li>
                  <router-link class=" route nav-link " to="/projects">
                    Projects</router-link
                  >
                </li>
              </div>
              <div class="col-4">
                <li>
                  <router-link class="route nav-link" to="/home">
                    Home</router-link
                  >
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main {
  font-family: monospace;
}
main {
  background-image: url("../utils/dark.jpg");
  /* position: relative; */
  width: 100vw;
  height: 100vh;
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
  /* box-shadow:inset 0 0 0 2000px rgba(15, 1, 9,0.1);   */
}
.contact {
  padding: 40px;
  color: white;
}
.message {
  margin-top: 100px;
  margin-left: 20px;
  text-align: center;
}
a,
p {
  text-decoration: none;
  color: white;
  margin-left: 10px;
  font-size: 20px;
}

.media {
  margin: 30px 0px;
  padding: 20px;
  margin-left: 0px;
  text-align: center;
}
.mail{
  padding: 20px;
  margin-left: 0px;
  text-align: center;
}

.route {
  margin-left: 40px;
  margin-top: 100px;
  margin-bottom: 50px   ;
  color: yellow;
  font-size: larger;
}
.route:hover {
  color: white;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .route {
    margin-left: 70px;
  }

  .info {
    font-size: larger;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .route {
    margin-left: 120px;
  }
  .intro {
    margin-top: 300px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .route {
    margin-left: 200px;
    margin-top: 200px;
  }
  .info {
    padding: 80px;
  }
}
</style>
