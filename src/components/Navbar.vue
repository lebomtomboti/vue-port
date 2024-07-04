<template>
  <nav>
    <a href="#" class="logo">Lebu</a>
    <ul>
      <li><a href ="" class="acive">Home</a></li>
      <li><a href ="/about">About</a></li>
      <li><a href ="/resume">Resume</a></li>
      <li><a href ="/projects">Projects</a></li>
      <li><a href ="/testimonials">Testimonials</a></li>
      <li><a href ="/contact">Contact</a></li>
    </ul>
  </nav>
  <section class="home-content">
    <div class="home">
      <div class="container">
        <div class="row vh-100 justify-content-center align-items-center">
      <div class="col-5">
        <div class="clearfix">
          <div class="home-header">
            <h2 class="typed"><i class="bi bi-dash"></i> Hi I'm Lebo Mtomboti</h2>
          </div>
          <p class="home-con display-2">Aspiring full stack web developer</p>
        
         
          <div class="home-button">
            <a class="nav-link mx-3" href="#projects"><button class="home-btn border-0 text-white py-2 px-5 fs-5">view Projects</button></a>
          </div>
        </div>
        <div class="social-icons">
          <i class="bi bi-github fs-3"></i>
          <i class="bi bi-linkedin fs-3"></i>
        </div>

      </div>
      <div class="col-3">
        <div id="image" class="container">
          <img src="https://lebomtomboti.github.io/hostedimages/images/20240422_120346.jpg" alt="Lebo's-profile-image" width="250" class="img-fluid rounded" loading="lazy">
        </div>
      </div>
    </div>
      </div>
    </div>
   

  </section>
</template>

<script>
export default {
  name: 'NavbarItem'
};
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
nav{
  background-color:black;
  height:80px;
  width:100%;
}
nav ul li {
  display:inline-block;
  line-height:80px;
  margin: 0 5px;
}

nav ul{
  float:right;
  margin-right:55px;
}
nav ul li a{
 font-size:18px;
 color:white;
 text-decoration:none;
 font-weight: 500;
 margin-right: 35px;
}


a:hover,a.active{
  color:blue;
}
.logo{
  font-size:25px;
  color:white;
  text-decoration:none;
  font-weight:600px;
  cursor:default;
  display:inline-block;
}
.home-content{
    background-image: linear-gradient(109deg, transparent 0%, transparent 5%,rgba(149, 149, 149,0.04) 5%, rgba(149, 149, 149,0.04) 38%,transparent 38%, transparent 100%),linear-gradient(324deg, transparent 0%, transparent 31%,rgba(149, 149, 149,0.04) 31%, rgba(149, 149, 149,0.04) 99%,transparent 99%, transparent 100%),linear-gradient(259deg, transparent 0%, transparent 11%,rgba(149, 149, 149,0.04) 11%, rgba(149, 149, 149,0.04) 57%,transparent 57%, transparent 100%),linear-gradient(221deg, transparent 0%, transparent 5%,rgba(149, 149, 149,0.04) 5%, rgba(149, 149, 149,0.04) 37%,transparent 37%, transparent 100%),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0));
    background-position: center;
    background-attachment: fixed;
    height:100vh;
    background-repeat: no-repeat;
    background-size:cover;
}
.social-icons{
    position: absolute;
    margin-left: -20%;
}

.sep-link, .home-btn{
    background-color: blue;
}

</style>



