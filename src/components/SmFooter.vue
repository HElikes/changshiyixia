<template>
  <ul class="sm-footer">
    <router-link
      tag="li"
      v-for="tabbar in tabbars"
      :key="tabbar.name"
      :to="tabbar.path"
    >
      <i class="icon" v-html="tabbar.meta.icon"></i>
      <span v-html="tabbar.meta.title"></span>
    </router-link>
  </ul>
</template>

<script>
import route from '@/router/routes'
export default {
  data () {
    return {
      tabbars: route.filter(route => route.meta.isTabbar)
    }
  }
}
</script>

<style lang="scss" scoped>
$mainColor: #26a2ff;
.sm-footer{
  display: flex;
  height: 52px;
  justify-content: space-around;
  text-align: center;
  border-top:1px solid #dedede;

  i {
    display: block;
    font-size: 20px;
    line-height: 32px;
  }

  span{
    font-size: 12px;
    line-height: 16px;
  }

  .router-link-exact-active,
  .router-link-active{
    color: $mainColor;
  }
}
</style>
