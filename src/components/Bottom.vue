<!---------------------------------------------------------------------------------------------------------------
  #Original Author:   Jeff Bohn :  "SWDV143 Class project week 3"    
  #Date Created:   3/12/2021    
  #Date Last Modified:                   
  #Modification log:  Create page               
  ------------------------------------------------------------------------------------------------------------------>

<template>
<!-- <div class="hello">
    <h1>{{ msg }}</h1> -->
    <div>


<button v-html="hack"></button>

    <ul class="bg-dark" id="bottom">
      <li><a class="nav-link" href="index.html">Home</a></li>
      <li><a class="nav-link" href="#second">Link 2</a></li>
      <li><a class="nav-link" href="#third">Link 3</a></li>
      <li><a class="nav-link" href="#fourth">Link 4</a></li>
      <li><a class="nav-link" href="#bottom">Link 5</a></li>
    </ul>
  </div>
</template>

<script>

 /* export default {
  name: 'Bottom',
  } */
export default {
  name: 'Bottom',
  data(){
    return{
      hack: `<a href="#" onclick="alert('You have been hacked! v-html not for api')">Win a Prize!</a>`,
    }; 
  }, 
};


  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 0;
  padding: 0;
  background-color: rgb(65, 64, 64);
  color: white;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 0;
}
li {
  display: inline-block;
  margin: 0 .3em;
}
a {
  color: #42b983;
   text-decoration: none;
}
button {
  padding: .3em 1em;
  background-color: rgba(0, 0, 0, 0.863);
  margin-bottom: 2em;
  font-size: 1.3em;
}

</style>
