/*---------------------------------------------------------------------------------------------------------------
  #Original Author:   Jeff Bohn :  "SWDV143 Class project week 3"    
  #Date Created:   3/12/2021    
  #Date Last Modified:                   
  #Modification log:  Create page               
  ----------------------------------------------------------------------------------------------------------------*/

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import Vue from 'vue';
window.Vue = Vue;

// Create a Vue application
const app = Vue.createApp({})

// Define a new global component called button-counter
app.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button v-on:click="count++">
      You clicked me {{ count }} times.
    </button>`
})

app.mount('#components-demo')
