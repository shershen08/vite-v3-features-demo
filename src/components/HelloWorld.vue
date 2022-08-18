<script >
// SFC - single file components

// props <----- EXTERNAL API
// state <----- internal


// this.XXX
// ----
// Parent -> Child - props
// Child -> Parent - events
export default {
  name: 'HelloWorld',
  data: () => ({
    counter: 0,
    userList: [],
    configData: {
      foo: 'bar',
      number: 42
    },
    isActive: true,
    isFormValid2: false,
    text: '',
    name: '',
    styleObject: {
      fontSize: '42px',
      color: '#fc0'
    }
  }),
  emits: ['countChange', 'styleChange'],
  props: {
    // call: {
    //   type: Function
    // },
    isSuccess: {
      type: Boolean
    },
    msg: {
      type: String, //Number, Boolean
      default: 'No message'
    },
    users: {
      type: Array,
      default: []
    }
  },
  methods: {
    changeStyle(){
      this.styleObject.fontSize = '24px'
      this.styleObject.color = 'black'
      this.$emit('styleChange', this.styleObject)
    },
    handlerFunction(){
      this.counter += 1 
      console.log('42')
      this.$emit('countChange', this.counter)
      // this.call() // ----> call parent via props 
    },
    someOtherMethod(){
      this.handlerFunction()
    },
    send(){},
    searchCall(){}
  },
  computed: {
    isFormValid: function(){
      if(this.text.length < 10) return false
      if(this.name.length < 3) return false
      return true
    }
  },
  watch: {
    // styleObject: {
    //   handler:  function changeText (newValue) {
    //     //
    //   },
    //   deep: true
    // },
    // [
    //   function logger (newValue) {
    //     console.log(newValue)
    //   },
    // ],
    text: 'searchCall',
    // function(val){
    //   console.log(val)
    //   // ajax call /api?q=val
    //   //
    //   //
    //   //

    //   this.isFormValid2 = val.length >= 10
    // },
    name: function(val){
      this.isFormValid2 = val.length >= 3
    }
  }
}
</script>

<template>
  <div class="greetings">
    <!-- <h2 class="green">msg: {{ msg }}</h2>
    <h2>counter: {{ counter }}</h2> -->
<!-- 
    your name: >

    your comment:<br>
    <textarea v-model="text"/>
<br>
    <button @click="send" :disabled="!isFormValid">send</button> -->


    <h3 v-bind:class="{ 'active': isActive, 'success': isSuccess }"
        v-bind:style="styleObject">Hello Otus  </h3>

        <button v-on:click="changeStyle">changeStyle</button>
<br><br><br>
        <input type="text" v-model="text"/>


    <!-- <input type="text" v-model="text"/> -->
    
    <!-- hidden -->
    <!-- <h2 v-show="counter > 10"> counter &gt; 10</h2>
    
    <h2 v-if="counter > 10"> counter &gt; 10</h2>
    <h2 v-else>counter &lt; 10</h2>


      <button v-on:click="handlerFunction">click</button>
      <button v-on:mouseenter="handlerFunction">hove</button>
      
      <br>
      --
      <br>
      <h4>users:</h4>
      
      <div v-for="(user, index) in users" :key="user.name">
        {{index+1}} {{user.name}}
      </div>

      my styles: {<br>
      <template v-for="(prop, value) in styleObject" :key="value">
         {{value}} = {{prop}};<br>
      </template>
      <br>} -->
  
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
