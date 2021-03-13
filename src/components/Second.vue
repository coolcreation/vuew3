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

<div class="jumbotron">
    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      <img class="img-fluid" id="second" src="picture1.jpg" alt="alaska sky image by pixabay">
    </h4>
   </div> 

  </div>
</template>

<script>
/* export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
} */
  export default {
  name: 'Second',
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
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
}
</style>
