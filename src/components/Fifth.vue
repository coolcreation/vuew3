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
    <h1>
    </h1>
   </div> 

  </div>

    <div id="components-demo">
      <button-counter></button-counter>
      <button-counter></button-counter>
      <button-counter></button-counter>
    </div>
  


</template>

<script>

  export default {
  name: 'Fifth',
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
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>