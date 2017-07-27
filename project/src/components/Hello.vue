<template>
  <div class="hello">
      <Headnav title="首页"></Headnav>
     <!--  <router-link to="/c/11">
              <p>商店超市</p>
          </router-link> -->
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide,index) in movies" :key="index">
            <img v-bind:src='slide.url' />
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    <Conternav></Conternav>
    
    <Fixednav></Fixednav>  
  </div>
  
</template>

<script>
import Fixednav from './smll/footer';
import Headnav from './smll/head';
import Conternav from './smll/nav';
export default {
  name: 'hello',
  data () {
    return {
       movies:[
        {"url":'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg'} ,
        {"url":'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg'} ,
        {"url":'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg'} ,
        {"url":'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'}
        ],
      swiperOption: {
        pagination : '.swiper-pagination',
        loop:true,
        grabCursor: true,
        paginationClickable: true,
        autoplayDisableOnInteraction : false,
        mousewheelControl : true,
        autoplay: 3000
      },
    }
  },
  mounted () {
    console.log(1);
  },
  components: {
    Headnav,
    Conternav,
    Fixednav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{height: 100%;width: 100%}
.swiper-container{height: 150px;position: relative;top: 44px;}
.swiper-slide img{width: 100%;height: 150px;}
</style>
