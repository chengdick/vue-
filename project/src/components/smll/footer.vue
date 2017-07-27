<template>
  <div class="footer"> 
      <div>首页</div>
   		<div><router-link to="/c/11">
   		   1
   		</router-link>
   		</div>
   		<div>3</div>
   		<div>4</div>
   </div>
</template>

<script>

export default {
  // name: 'footer',
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
.footer{
	position: fixed;
	bottom: 0;
	display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    -webkit-flex-direction: horizontal;
    -moz-flex-direction: horizontal;
    -ms-flex-direction: horizontal;
    flex-direction: horizontal;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
    color: #444;
    z-index: 5;
    width: 100%;
    height: 49px;
    background-size: 0;
    line-height: 49px;
    border-top: 1px solid #ccc
}

.footer div{
	-webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
    max-width: 150px;
    height: 100%;
    color: inherit;
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    font-size: 14px;
    font-family: "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;
}
</style>
