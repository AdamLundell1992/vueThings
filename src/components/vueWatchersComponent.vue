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
      <h2 style="margin-bottom: 2rem" class="title is-3">
        Vue Watchers
      </h2>
    </div>
    <div class="my-cuztumized-container container">

      <div class="row box row-box">
        <p style="text-align: center" class="title is-4">Watchers</p>
        <p class="title is-6" style="color: grey">
          watch:This is an object where keys are expressions to watch and values
          are the corresponding callbacks. Basically it listens to when your
          data property has been changed.
        </p>
        <div class="keyboard-rows">
          <div>
            <input type="text" v-model="nameChange" />
            <p>newname:{{ nameChange }}</p>
            <p>oldname:{{ oldname }}</p>
          </div>
          <div>
            gigaByte:
            <input number="number" v-model.number="gigaByte" /> megabyte:
            <input number="number" v-model.number="megaByte" />
          </div>
        </div>
      </div>
      
      </div>
    </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return{
        nameChange:"Adam",
        oldname:"",
        gigaByte:null,
        megaByte:null,
    };
  },
  props: {
  },
  watch:{
    nameChange(newn,oldn){
      this.nameChange = newn;
      this.oldname = oldn;
    },
    gigaByte(val){
      this.megaByte = val * 1024
    },
    megaByte(val){
      this.gigaByte = val /1024
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.p-longtext {
  word-break: break-word;
}
</style>
