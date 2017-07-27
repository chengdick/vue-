<template>
  <div class="c">
    <!-- <div  v-on:click="greet">{{imgss}}</div> -->
    <div class="text-left txt" v-for="(d,index) in list"  :class="{'class1':d.is}">{{d.name}}</div>
    
  </div>
</template>
<script>
export default {
  name: 'c',
  data () {
    return {
      imgss: '你好',
      list :[]

    }
  },
  mounted () {
    this.gotoRoute();
    this.greet();
  },
  methods: {
    gotoRoute () {
      console.log(this.$route.params.id)
    },
    greet () {
      var that = this;
      $.get("./static/dsda.json").then(function(response){
        that.list=response
        
        console.info(that.list)
      })
    }
  }
}



</script>
<style>
.txt{color: blue;width: 100%;height: 50px;border-bottom: 1px solid #ccc;line-height: 50px;}
.class1{color: red}

</style>
