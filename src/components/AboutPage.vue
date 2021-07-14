<template>
  <section id="about">
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
            <h5 >
              Immediately after graduating from the university as a Food
              Scientist, I embarked on the journey to becoming a self taught
              Front-End Engineer.
              <br />
              so far, I have been opportuned to work with great organizations
              alongside amazing team members.
            </h5>
            <br>
            <h5>
              I am passionate about giving life to designs and making software
              usage as seemless as possible
            </h5>
            <br>
            <h5>
              As a self motivated young lady I ensure that each day, I wake up
              better than the previous because everyday is an opportunity to be
              world class!
            </h5>
            <br>
          
            <h5>
              I always find time to exercise, that's one way I get to free my
              mind while also keeping fit. I write every now and then although
              i'm working on making it a habit and getting very good at it.
            </h5>
          </div>
       
        </div>
      </div>
    </div>

  <section id="nav">
        <div class="container">
          <div class="row">
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
    </section>
  </section>
  
</template>

<script>
export default {
};
</script>

<style scoped>
#about {
  font-family: monospace;
  background-image: url("../utils/dark2.jpg");
   position:relative;  
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
  margin-left: 40px;
  margin-bottom: 70px;
  /* text-align: center; */
  color: yellow;
  font-size: large;
}
.route:hover {
  color: white;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .route {
    margin-left: 70px;
  }
   #about{
    height: 100%;
  }
   img{
   width: 50%;
   margin-left: 180px;
 }
 .info{
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
 #about{
    height: 100%;
  }
 
   img{
   width: 50%;
   margin-left: 300px;
 }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .route {
    margin-left: 200px;
  }
  #about{
    height: 100%;
  }
    img{
   width: 30%;
   margin-left: 700px;
 }
 .info{
   padding: 80px;
 }
}
</style>
