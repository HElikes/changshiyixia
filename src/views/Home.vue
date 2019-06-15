<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div
        class="swiper-slide"
        v-for="banner in banners"
        :key="banner.id"
        >
          <img :src="banner.imageUrl" :alt="banner.title">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import SwiperCss from 'swiper/dist/css/swiper.min.css'

// 这个写法指的是把模块导出的所有方法放到ajax对象里，index可以省略
import * as ajax from '@/request' // 引入request里面的所有东西放在ajax这个变量里
import { constants } from 'crypto';

export default {
  data () {
    return {
      banners: [

      ]
    }
  },
  created () {
    ajax.getHome().then( resp => {
      this.banners = resp.data.banners
      // 通过异步返回的数据去操作DOM，那就放到nextTick里去执行
      this.$nextTick().then( () => {
        this.initSwiper()
      })
    })
  },
  methods: {
    initSwiper () {
      var mySwiper = new Swiper ('.swiper-container', {
        autoplay: true,
        loop: true, // 循环模式选项       
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
}
</script>

<style lang="scss">
.swiper-container {
  height: 0;
  height: (400 / 1080) * 100%;
  width: 100%;

  .swiper-wrapper {
    position: absolute;
    top: 0;
    left: 0;
  }

  img {
    width: 100%;
  }

  .swiper-pagination-bullets,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 80px;
  }

}

</style>