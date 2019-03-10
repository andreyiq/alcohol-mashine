<template>
  <div id="app">
    <div class="t water"><p>{{$store.getters.tWater + '&deg;'}}</p></div>
    <div class="t tank"><p>{{$store.getters.tTank + '&deg;'}}</p></div>
    <div class="t defl"><p>{{$store.getters.tDefl + '&deg;'}}</p></div>
    <div class="t fridge"><p>{{$store.getters.tFridge + '&deg;'}}</p></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}
</script>

<style lang="scss">
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 8pt;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center; 

  transform: rotate(90deg); 
}

#app {
  display: inline-block;
  position: relative;
  border: 1px solid #000000;
  width: 320px;
  height: 480px;
  margin: auto;
  background: url('./assets/alcohol-mashine.svg');
  background-size: cover;

  .t {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    // border: 1px solid red;

    p {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }
  }

  .water {
    top: 65%;
    left: 20%;
    right: 55%;
    bottom: 10%;
  }

  .tank {
    top: 55%;
    left: 20%;
    right: 55%;
    bottom: 35%;
  }

  .defl {
    top: 20%;
    left: 20%;
    right: 55%;
    bottom: 60%;
  }

  .fridge {
    top: 20%;
    left: 60%;
    right: 10%;
    bottom: 60%;
  }
}
</style>
