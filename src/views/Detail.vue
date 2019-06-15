<template>
  <div class="sm-detail">
    <div class="sm-detail-main">
       <div class="sm-detail-banners">
        <mt-swipe :auto="3000" class="sm-detail-banners__swipe">
          <mt-swipe-item
            v-for="photo in detail.photos"
            :key="photo.id"    
          >
            <img :src="photo.url" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <p class="sm-detail-title"><mt-badge size="small" color="#ff4040">{{detail.ratingType}}</mt-badge>{{detail.title}}</p>
      <p class="sm-detail-price">￥{{detail.price}}</p>
    </div>
    <div class="sm-detail-footer">
      <p class="sm-detail-footer-btn">加入购物车</p>
    </div>
   

  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      detail: {}
    }
  },
  created () {
    console.log(this.$route)
    this.id = this.$route.query.id
    this.$http.getDetail(this.id).then(resp => {
      console.log(resp)
      this.detail = resp.data.detail
    })
  }
}
</script>

<style lang="scss">
$grey: #eee;
$deepGrey:#383838;
$mainColor:#4e491b;

.sm-detail {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-main {
    flex: 1;
  }

  &-banners {
    width: 100%;
    height: 0;
    padding-top: 100%;
    position: relative;

    &__swipe {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
        top: 0;

      img {
        width: 100%;
        
      }
    }
  } 

  &-title {
    font-size: 12px;
    color: $deepGrey;
    line-height: 20px;
  }

  &-footer {
    height: 50px;

    &-btn {
      text-align: center;
      background-color: $mainColor;
      margin: 0 6px;
      border-radius: 8px;
      line-height: 30px;
      color: #fff;
    }
  } 
}  
</style>
