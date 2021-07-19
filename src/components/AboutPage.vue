<template>
  <main>
    <section>
      <div class="">
        <div class="row">
          <div class="col-md-12">
            <div class="pics">
              <img
                src="../utils/anjola.jpeg"
                alt="profile picture"
                class="img-fluid container"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="info container">
              <h5>
                Immediately after graduating from the university as a Food
                Scientist, I embarked on my journey into the tech space.
                <br />
                So far, I have been opportuned to work with great organizations
                alongside amazing team members.
              </h5>
              <br />
              <h5>
                I am passionate about giving life to designs and making software
                usage as seemless as possible
              </h5>
              <br />
              <h5>
                As a self motivated young lady I ensure that each day, I wake up
                better than the previous because to me everyday is an
                opportunity to be world class.
              </h5>
              <br />

              <h5>
                I find time to exercise often, as that's one way I get to free
                my mind while also keeping fit. I write every now and then
                although i'm working on making it an habit and getting very good
                at it.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <section id="nav">
        <div class="container">
          <div class="row text-center">
            <ul class="nav nav-fill">
              <div class="col-4">
                <li>
                  <router-link class="route nav-link text-center" to="/contact">
                    Contact</router-link
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
              <div class="col-4">
                <li>
                  <router-link class=" route nav-link " to="/projects">
                    Projects</router-link
                  >
                </li>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped>
main {
  margin: 0px;
  font-family: monospace;
  background-image: url("../utils/dark2.jpg");
  width: 100vw;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(15, 1, 9, 0.6);
}
img {
  padding: 30px;
  width: 75%;
  border-radius: 100%;
  margin-left: 60px;
}
.info {
  color: white;
  text-align: inherit;
  padding: 40px;
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
    margin-bottom: 120px;
  }
  main {
    height: 100%;
  }
  img {
    margin-left: 40px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .route {
    margin-left: 40px;
  }
  #about {
    height: 100%;
  }
  img {
    width: 50%;
    margin-left: 180px;
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
  #about {
    height: 100%;
  }

  img {
    width: 50%;
    margin-left: 300px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .route {
    margin-left: 100px;
  }
  #about {
    height: 100%;
  }
  img {
    width: 30%;
    margin-left: 700px;
  }
  .info {
    padding: 80px;
  }
}
</style>
