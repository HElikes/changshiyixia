<template>
  <div class="sm-mall">
    <div class="sm-mall-sidebar">
      <ul>
        <router-link
        tag="li"
        :to="`/mall/${tab.id}`"
        v-for="tab in list"
        :key="tab.id"
        >{{tab.name}}</router-link>
      </ul>
    </div>
    <div class="sm-mall-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import * as ajax from '@/request'
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    ajax.getTabs().then(resp => {
      console.log(resp)
      let { list } = resp.data
      // 由于接口第0条数据不想要
      list = list.slice(1)
      this.list = list

      // 新进入商城，没点击左边list数据，右边item不显示的问题
      // 第一次进入判断有没有id，默然跳转第0条tab
      // 默认值的解构赋值，如果有id就是解构赋值的id，如果没有，就是默认为id为list里面的第0条tab的id
      const { proId = list[0].id } = this.$route.params
      // 编程式导航 根据解构出来的id跳转组件
      this.$router.push(`/mall/${proId}`)
    })
  }
}
</script>

<style lang="scss">
$grey: #eee;
$deepGrey:#383838;
$mainColor:#4e491b;

.sm-mall {
  display: flex;
  height: 100%;
  &-sidebar {
    width: 80px;
    background: #acacac;
    color: $deepGrey;
    padding-top: 8px;
    overflow-x: hidden;

    li {
      font-size: 13px;
      height: 33px;
      line-height: 33px;
      padding-left: 8px;
      border-left: 2px solid $grey;

      &.router-link-exact-active,
      &.router-link-active {
        background-color: #fff;
        border-left: 2px solid $mainColor;
      }
    }
  }

  &-main {
    flex: 1;
    overflow-x: hidden;
  }
}
</style>
