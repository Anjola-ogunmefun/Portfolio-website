<template>
        <section id="nav">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <ul class="nav nav-fill">
              <li>
                <router-link class="route nav-link text-center" to="/about">
                  About me</router-link
                >
              </li>

              <li>
                <router-link class=" route nav-link " to="/projects">
                  Projects</router-link
                >
              </li>
              <li>
                <router-link class="route nav-link" to="/contact">
                  Contact</router-link
                >
              </li>
               <li>
                <router-link class="route nav-link" to="/home">
                  Home</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</template>
<style scoped>
.route {
  padding-top: 50px;
  margin-left: 4px;
  /* text-align: center; */
  color: yellow;
  font-size: larger;
}
.route:hover {
  color: white;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .route {
    margin-left: 50px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .route {
    margin-left: 100px;
  }
 
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .route {
    margin-left: 140px;
  }
}
</style>