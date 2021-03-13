 <!---------------------------------------------------------------------------------------------------------------
  #Original Author:   Jeff Bohn :  "SWDV143 Class project week 3"    
  #Date Created:   3/12/2021    
  #Date Last Modified:                   
  #Modification log:  Create page               
  ------------------------------------------------------------------------------------------------------------------>

<template>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark mt-0">
  <!-- Brand/logo -->
  <a class="navbar-brand" href="index.html">
    <img src="jb-logo2.jpg" alt="logo" style="width:45px;">
  </a>
  <!-- Toggler/collapsibe Button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <!-- Links -->
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
  <ul class="navbar-nav ">
    <li class="nav-item">
      <a class="nav-link" href="index.html">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#second">Link 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#third">Link 3</a>
    </li>
       <li class="nav-item">
      <a class="nav-link" href="#fourth">Link 4</a>
    </li>
       <li class="nav-item">
      <a class="nav-link" href="#bottom">Link 5</a>
    </li>
  </ul>
  </div>
</nav>


  <Top msg="Welcome to Your Vue.js App"/> 
  <Second/> 
  <Third/> 
  <Fourth/>
  <Fifth/>
  <Bottom/>
</template>

<script>
import Top from './components/Top.vue'
import Second from './components/Second.vue'
import Third from './components/Third.vue'
import Fourth from './components/Fourth.vue'
import Fifth from './components/Fifth.vue'
import Bottom from './components/Bottom.vue'

export default {
  name: 'App',
  components: {
    Top,
    Second,
    Third,
    Fourth,
    Fifth,
    Bottom,
  },
};


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
}
.nav-link {
  color: #42b983 !important;
}
.navbar{
 margin-bottom: -.4em;
}
</style>

