<template>
  <main class="main">
    <section id="content">
      <div class="row">
        <div class="col-12">
          <div class="intro">
            <h1 class="text-white container">
              Hi! I'm Anjolaoluwa Ogunmefun
            </h1>
            <hr class="text-warning" style="height:3px;" />
            <h3 class="text-white container">{{ sentence }}</h3>
            <p class="text-white"></p>
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
                <router-link class=" route nav-link" to="/projects">
                  Projects</router-link
                >
              </li>
            </div>
            <div class="col-4">
              <li>
                <router-link class="route nav-link left" to="/about">
                  About
                </router-link>
              </li>
            </div>
            <div class="col-4">
              <li>
                <router-link class="route nav-link" to="/contact"
                  >Contact</router-link
                >
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      about: [
        "A",
        "Front-End",
        "Engineer",
        "with",
        "a",
        "passion",
        "for",
        "responsive",
        "design",
        "and",
        "a",
        "strong",
        "believer",
        "in",
        "the",
        "mobile-first",
        "approach",
        ".",
      ],
      sentence: "",
    };
  },
  methods: {
    appendWords() {
      const it = this.about[Symbol.iterator]();
      const int = setInterval(() => {
        const next = it.next();
        if (!next.done) {
          this.sentence += " " + next.value;
        } else {
          clearInterval(int);
        }
      }, 400);
    },
  },
  mounted() {
    this.appendWords();
  },
};
</script>

<style scoped>
main {
  font-family: monospace;
  background-image: url("../utils/dark.jpg");
  width: 100vw;
  height: 100vh;
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  font-family: monospace;
  margin-top: 200px;
  text-align: center;
}
.intro h3 {
  line-height: 40px;
  text-align: center;
}
.route {
  padding-top: 50px;
  margin-left: 20px;
  margin-top: 250px;
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
    margin-bottom: 50px;
    margin-top: 350px;
  }
  main {
    height: 100%;
  }
  .left {
    margin-left: 20px;
  }
  .intro h1 {
    margin-top: 250px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .route {
    margin-left: 80px;
  }
  .intro {
    margin-top: 300px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .route {
    margin-left: 10px;
  }
  .intro {
    margin-top: 300px;
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
