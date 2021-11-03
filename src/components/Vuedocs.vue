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
        Event Documentation
      </h2>
    </div>
    <div class="my-cuztumized-container container">
      <div class="row box row-box">
        <a
          style="color: blue"
          class="title is-5 is-right"
          href="https://flaviocopes.com/vue-cheat-sheet/#modifying-events"
          >press to find list of click event listeners</a
        >
        <p class="title is-4">Click event</p>

        <p class="title is-6">
          Using @click or v-on:click (same thing) and inside the click you can
          put a variable that you can use custumized settings to make a event on
          ex: @click="event"
        </p>

        <button
          @click="clickShow = true"
          class="button is-primary is-rounded"
          style="margin-right: 0.5rem"
        >
          click me to Add Something
        </button>
        <p class="title is-5" v-if="clickShow === true">
          Something appears when click on button
        </p>
        <button
          @click="clickShow = false"
          class="button is-secondary is-rounded"
        >
          click me to Take something away
        </button>

        <div><br /></div>
      </div>
      <div class="row box row-box">
        <p class="title is-4">Double Click event</p>
        <p class="title is-6">
          This button use a double click to start the event , there is also a
          eventlistner for a click event
        </p>
        <button
          @dblclick="(dblclickseesymbol = true), (clickseesymbol = false)"
          @click="(clickseesymbol = true), (dblclickseesymbol = false)"
          class="button is-primary is-rounded"
          style="margin-left: 5px"
        >
          click/doubleclick
        </button>
        <span v-if="clickseesymbol === true">
          <p class="title is-5">clicked one time on button</p></span
        >
        <span v-if="dblclickseesymbol === true">
          <p class="title is-5">dobbel clicked button</p></span
        >
      </div>
      <div class="row box row-box">
        <p class="title is-4">Mouseover event</p>
        <p class="title is-6">
          This button use a Focus listener to start event
        </p>
        <button
          @mouseover="MouseOverEvent = true"
          @mouseleave="MouseOverEvent = false"
          style="margin-left: 5px"
          class="button is-primary is-rounded"
        >
          Take mouse over Button
        </button>
        <span v-if="MouseOverEvent === true">
          <p class="title is-5" style="color: blue">
            Mouse-cursor is over the button
          </p></span
        >
        <span v-show="!MouseOverEvent"
          ><p class="title is-5" style="color: red">
            Mouse-cursor is not over the button
          </p></span
        >
      </div>
      <div class="row box row-box" style="text-align: center">
        <a
          style="color: blue"
          class="title is-5"
          href="https://flaviocopes.com/vue-cheat-sheet/#mouse-event-modifiers"
        >
          List of mouse event modifiers</a
        >
        <br />
        <br />
        <br />
        <div class="keyboard-rows">
          <div>
            <p class="title is-5">
              this button click only work once and must bi right click
            </p>
            <button
              @click.right.once="clickOnce = true"
              class="button is-primary is-rounded"
            >
              only right click aloud once
            </button>
            <p v-if="clickOnce === true">You clicked it</p>
          </div>
          <div>
            <p class="title is-5">this button counts on middleclick</p>
            <button
              @click.middle="middlecount += 1"
              class="button is-primary is-rounded"
            >
              middle clicked
            </button>
            <p>count: {{ middlecount }}</p>
          </div>
        </div>
      </div>

      <div class="row box row-box">
        <a
          style="color: blue"
          class="title is-5 is-right"
          href="https://flaviocopes.com/vue-cheat-sheet/#submit-an-event-only-if-a-particular-key-is-pressed"
          >press to find list of keyboard event listeners</a
        >
        <br />
        <a
          style="color: blue"
          class="title is-5 is-right"
          href="https://flaviocopes.com/vue-cheat-sheet/#keyboard-event-modifiers"
          >press to find list of keyboard event modifiers</a
        >
        <p class="title is-4">keyboard click event</p>
        <p class="title is-6">
          Write something in the input field and the keyboard key will be used
          as a listener to start event
        </p>
        <div class="keyboard-rows">
          <div>
            <p>press enter to start event listener</p>
            <input
              @keyup.enter="pressEnterEvent"
              type="text"
              placeholder="Write something here"
              v-model="writtenByUser"
            />
            <p class="title is-5" style="color: blue">{{ enterText }}</p>
          </div>

          <div>
            <p class="p-longtext">
              write/print using v-model as parameter to uppd text
            </p>
            <input
              type="text"
              v-model="ppEvent"
              placeholder="Write something here"
            />
            <p class="title is-5" style="color: blue">{{ ppEvent }}</p>
          </div>
          <div>
            <p>press enter and alt to start event listener</p>
            <input
              @keyup.enter.alt="pressEnteraltEvent"
              v-model="altenterkeyup"
              type="text"
              placeholder="Write something here"
            />
            <p class="title is-5" style="color: blue">{{ eltEnterRandpm }}</p>
          </div>
        </div>
      </div>
      <div class="row box row-box">
        <a
          class="title is-5"
          style="color: blue"
          href="https://flaviocopes.com/vue-cheat-sheet/#directives"
          >link to directives and how they are used</a
        >
        <br />
        <p class="title is-5">
          This section uses a switch and print the condition of the switch when
          cond= true you can press te button to executen event
        </p>

        <div>
          <b-switch v-model="switchCondition"></b-switch>
          <br />
          <p>{{ switchCondition ? switchOn : switchOf }}</p>
        </div>
        <div>
          <button
            v-if="switchCondition === true"
            @click="dangerevent"
            class="button is-danger is-rounded"
          >
            click me!
          </button>
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
        clickShow: false,
        writtenByUser:"",
        altenterkeyup:"",
        clickseesymbol:false,
        dblclickseesymbol:false,
        MouseOverEvent:false,
        enterText:"",
        ppEvent:"",
        clickOnce:false,
        middlecount: 0,
        switchCondition: false,
        switchOn:"Switch on",
        switchOf:"Switch Off",
        eltEnterRandpm:"",
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

  methods:{
    pressEnteraltEvent() {
      this.eltEnterRandpm = this.altenterkeyup ;
    },
    pressEnterEvent(){
      this.enterText = this.writtenByUser;
    },
    dangerevent(){
      alert("Pressed danger button");
    },
  }
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
