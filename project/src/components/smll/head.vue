<template>
  <div class="head">
		{{title}}
  </div>
</template>

<script>
export default {
  name: 'head',
  props:['title'],  
  data () {
    return {
      	
    }
  },
  mounted () {
  		
  },
  methods: {
   	
  }
}

</script>

<style scoped>
*{margin: 0;padding: 0};
html,body{height: 100%;width: 100%;}
.head{
	position: fixed;
	top: 0;
	background:green;
	color:#FFF;
	height: 44px;
	line-height: 44px;
	text-align: center;
	width: 100%;
	z-index:444;
}
</style>
