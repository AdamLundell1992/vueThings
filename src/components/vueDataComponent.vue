<template>
  <div>
    <!-- <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
    /> -->
    <div class="header2">
      <h1 class="title size-2">
        Welcome to a training ground for a young developer
      </h1>
      <div style="margin-bottom: 2rem">
        <img src="@/assets/logo.png" alt="image" />
      </div>
      <h2 style="margin-bottom: 2rem" class="title is-3">Data Documentation</h2>
      <div class="keyboard-rows-array box ">
        <div class="induvidual-a-list " style="  border-right: 2px solid black;">
          <div class="title is-4">
            How to make an arraylist of items:
            <h3 style="color: blue">Printed to the left</h3>
          </div>
          <h3 >
            arrayOfNames : [
            "Adam","Jonathan","Karl","Erik","Hassan","Marlene","Ingjegjerd","Kristina","Hanne","Ahmad","Tommi","Kai","Vidar","Nils","Geroge","Bob","Kevin","Knut","Eilief"
            ],
          </h3>
        </div>
        <div class="induvidual-a-list ">
          <div class="title is-4">
            How to make an arraylist of objects with data:
            <h3 style="color: blue">Printed to the right</h3>
          </div>
          <h3>
            objectgamesArrays:[ {title:"League of legends" ,console:"pc"
            ,ranking:"High"}, {title:"CS" ,console:"pc" ,ranking:"High"},
            {title:"Fifa" ,console:"Playstation" ,ranking:"low"}, {title:"Sonic"
            ,console:"Nintendo 64" ,ranking:"Middle"}, ]
          </h3>
        </div>
      </div>
    </div>

    <div class="row box row-box">
      <p style="text-align: center" class="title is-4">For loops</p>
      <div class="keyboard-rows">
        <ul>
          <li v-for="(arrayOfName, index) in arrayOfNames" :key="index">
            {{ index + 1 }}:{{ arrayOfName }}
          </li>
        </ul>
        <ul>
          <li
            class="box"
            v-for="(objectgamesArray, index) in objectgamesArrays"
            :key="index"
          >
            <h1>
              {{ index + 1 }} <template style="font-size: 2">Title:</template>
              {{ objectgamesArray.title }} Console:
              {{ objectgamesArray.console }} Ranking:
              {{ objectgamesArray.ranking }}
            </h1>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return{
        arrayOfNames : [
          "Adam","Jonathan","Karl","Erik","Hassan","Marlene","Ingjegjerd","Kristina","Hanne","Ahmad","Tommi","Kai","Vidar","Nils","Geroge","Bob","Kevin","Knut","Eilief"
        ],
        objectgamesArrays:[
           {title:"League of legends" ,console:"pc" ,ranking:"High"},
           {title:"CS" ,console:"pc" ,ranking:"High"},
           {title:"Fifa" ,console:"Playstation" ,ranking:"low"},
           {title:"Sonic" ,console:"Nintendo 64" ,ranking:"Middle"},
        ]
    };
  },
}
</script>
<style scoped>
.header2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.my-cuztumized-container {
  border: 3px solid black;
  justify-content: center;
}
.keyboard-rows {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.keyboard-rows-array {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly !important;
  border: 2px solid black;
  max-width: 90%;
}
.p-longtext {
  word-break: break-word;
}
.induvidual-a-list {
  word-break: break-word;


}
</style>