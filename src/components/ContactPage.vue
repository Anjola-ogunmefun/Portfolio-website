<template>
  <main>
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
              <a href="https://twitter.com/OgunmefunAnjola">Twitter</a>
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
              <br>
              <a href="ogunmefunanjola@gmail.com">ogunmefunanjola@gmail.com</a>
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
        <div class="row text-center">
          <ul class="nav nav-fill">
            <div class="col-4">
              <li>
                <router-link class="route nav-link" to="/about">
                  About</router-link
                >
              </li>
            </div>
            <div class="col-4">
              <li>
                <router-link class=" route nav-link" to="/projects">
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
    </section>
  </main>
</template>

<style scoped>
main {
  margin: 0px;
  font-family: monospace;
  background-image: url("../utils/dark.jpg");
  width: 100vw;
  height: 100vh;
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
}
.contact {
  padding: 40px;
  color: white;
}
.message {
  margin-top: 50px;
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
.mail {
  padding: 20px;
  margin-left: 0px;
  text-align: center;
}

.route {
  padding-top: 50px;
  margin-left: 20px;
  margin-bottom: 70px;
  color: yellow;
  font-size: large;
}
.route:hover {
  color: white;
}

@media only screen and (max-width: 600px) {
  .route {
    margin-left: 0px;
    margin-top: 100px;
    margin-bottom: 150px;
  }
  main {
    height: 100%;
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .route {
    margin-left: 70px;
  }

  .message {
    margin-top: 150px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .route {
    margin-left: 120px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .route {
    margin-left: 100px;
    margin-top: 200px;
  }
}
</style>
