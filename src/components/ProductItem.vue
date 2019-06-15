<template>
  <router-link tag="div" :to="{name: 'Detail', query: { id }}" class="sm-item">
    <div class="sm-item-img">
      <img :src="image" alt="">
    </div>
    <p class="sm-item-title">{{title}}</p>
    <p class="sm-item-price">￥{{price}}</p>
    <p class="sm-item-btn" @click.stop="addCart">加入购物车</p>
    <!-- <-- @click.stop  事件修饰符  阻止冒泡 -->
  </router-link>
</template>

<script>
export default {
  props: {
    id: Number,
    image: String,
    title: String,
    price: Number
  },
  methods: {
    addCart () {
      console.log(this.id)
    }
  }
}
</script>

<style lang="scss">
$grey: #eee;
$deepGrey:#383838;
$mainColor:#4e491b;
.sm-item {
  width: 50%;
  box-sizing: border-box;
  display: inline-block;
  padding: 8px;

  &-title {
    font-size: 12px;
    color: $deepGrey;
    line-height: 26px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &-price {
    color:#e00;
    line-height: 30px;
  }

  &-btn {
    font-size: 12px;
    line-height: 24px;
    background-color: $mainColor;
    border-radius: 3px;
    text-align: center;
    color: #fff;

  }
  img {
    width: 100%;
  }
}
</style>
