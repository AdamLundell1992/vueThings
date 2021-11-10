<template>
<div>
    <div class="box container" >
        <h1 class="title" style="text-align: center">😎Computed Properties😎 </h1>
       <h2>
           I will do som snippets and show how you can use computed properties to hide/show things in the html.
           <p style="font-family:Fantasy">i got 1 picture where i set the data to false and true</p>
       </h2>
       <img src="@/assets/data.png" alt="image">
    <div class="mt-5">
        <button class="button is-primary is-rounded" @mouseover="isVisable = true" @mouseleave="isVisable = false">Hoover over this to test the computed property</button>
        <div>
            <div v-if="isShowAble">
            <p >🙄🤣😇😊🪓😥♣♠♠♥😘💕🙌🤷‍♀️🤷‍♀️😢😑❤😁😎😎😎🤞👍👍🙄👍😀😀</p>
            <br/>
            <p class="title is-4" >This shows because i use a hoover function that set isVisable to true and i have acomputed property named: isShowAble that will run when both
                isVisable AND isWritable IS TRUE:
            </p>
                <img src="@/assets/compprop.png" alt="image">
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
    isVisable: false,
    isWritable:true,
    };
  },
  props: {
  },
computed:{
    isShowAble() {
    return this.isVisable === true && this.isWritable === true;
    },
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
