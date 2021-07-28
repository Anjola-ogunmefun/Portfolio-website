<template>
  <main>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 left">
            <img
              src="../utils/quiz-me1.jpeg"
              alt="image from quiz-me app"
              class="img-fluid"
              width="300"
            />
          </div>
          <div class="col-sm-12 col-md-6 right">
            <p class="lead">
              Quiz me is a learning resource that gives you free access to over
              5,000 practice questions to prepare adequately for your UTME,
              WASSCE and POST-UTME
            </p>
            <p class="lead">
              The app can be used anytime, anywhere, at home, work, or even on
              the go on multiple devices – whether that’s a smartphone, tablet,
              laptop, or desktop device.
            </p>
            <p class="lead">
              Technologies used: Vue.js3, VueX, Vue-router, Bootstrap, heroku,
              3rd-party API
            </p>
            <p class="lead">
              link to <a href="https://quiz--me.herokuapp.com/">Quiz me</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 right">
            <p class="lead">
              FEmail is a messaging platform that avails you the necessary
              mailing features, helping you to stay connected and organised.
            </p>
            <p class="lead">
              It is known how important communication is hence this super easy
              and efficient platform.
            </p>
            <p class="lead">
              Technologies used: Vue.js3, VueX, Vue-router, TailwindCSS,
              Firebase, heroku
            </p>
            <p class="lead">
              link to <a href="https://fe-mail.herokuapp.com/">FEmail</a>
            </p>
          </div>

          <div class="col-sm-12 col-md-6 left">
            <img
              src="../utils/femil.jpeg"
              alt="image from quiz-me app"
              class="img-fluid"
              width="300"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 left">
            <img
              src="../utils/goshop.png"
              alt="image from quiz-me app"
              class="img-fluid"
              width="400"
            />
          </div>
          <div class="col-sm-12 col-md-6 right">
            <p class="lead">
              GoShop is an online store dedicated to making your shopping
              experience stress-free. Get your goods delivered to your door
              step.
            </p>
            <p class="lead">
              Technologies used: Vue.js3, VueX, Bootstrap, Netlify
            </p>
            <p class="lead">
              link to
              <a href="https://goshopp.netlify.app/">GoShop</a>
            </p>
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
                <router-link class=" route nav-link" to="/contact">
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
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  font-family: monospace;
  background-image: url("../utils/dark2.jpg");
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(15, 1, 9, 0.6);
  overflow-x: hidden;
}
.left {
  color: white;
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
.right {
  color: white;
  margin-top: 50px;
  padding: 30px;
}
a {
  text-decoration: none;
  color: yellow;
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
a:hover {
  color: rgb(120, 221, 120);
}
@media only screen and (max-width: 600px) {
  .route {
    margin-left: 0px;
    margin-bottom: 100px;
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
  img {
    width: 100%;
  }
  .right {
    padding: 0;
    margin-top: 120px;
    margin-left: 0;
  }
  .left {
    padding: 30px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .route {
    margin-left: 120px;
  }
  img {
    width: 75%;
  }
  .right {
    padding: 0;
    margin-top: 180px;
    margin-left: 0;
  }
  .left {
    padding: 30px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .route {
    margin-left: 0px;
    margin-top: 200px;
  }
  img {
    width: 60%;
  }
  .right {
    padding: 0;
    margin-top: 180px;
    margin-left: 0;
  }
  .left {
    padding: 30px;
  }
}
</style>
