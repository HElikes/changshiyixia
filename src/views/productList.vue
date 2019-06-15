<template>
  <div>
    <productItem
      v-for="productItem in list"
      :key="productItem.id"
      :id="productItem.id"
      :price="productItem.price"
      :image="productItem.image"
      :title="productItem.title"
    ></productItem>
    <!-- isEnd默认是false，所以，如果还有就是取反加载更多，如果没有就走else -->
    <p v-if="!isEnd" @click="onLoadMore" class="sm-btn-load__more">加载更多...</p>
    <p v-else class="sm-btn-load__more">没有了没有了...</p>
  </div>
</template>

<script>
import * as ajax from '@/request'
import productItem from '@/components/ProductItem'
export default {
  data () {
    return {
      isEnd: false,
      list: [],
      nextIndex: 0,
      id: ''
    }
  },
  components: {
    productItem
  },
  // created () {
  //   // 携带id请求列表里面的数据
  //   let id = this.$route.params.proId
  //   this.getList(id)
  // },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.id = to.params.proId
      vm.getList()
    })
  },
  // 全局导航守卫
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    // 从to里获取id值然后重新请求数据
    this.id = to.params.proId
    // 重新冲start0开始请求新的分类商品列表
    this.nextIndex = 0
    this.list = []
    this.getList()
    next()
  },
  methods: {
    // 请求列表的方法
    getList () {
      ajax.getProductList(this.id, this.nextIndex).then(resp => {
        console.log(resp.data.items)
        // this.list = resp.data.items.list
        // 加载更多的时候不会替代以前的数据，而是合并起来
        this.list = this.list.concat(resp.data.items.list)
        // this.list = [...this.list,...resp.data.items.list]
        this.nextIndex = resp.data.items.nextIndex
        this.isEnd = resp.data.items.isEnd
      })
    },
    onLoadMore () {
      this.getList()
    }
  }
}
</script>

<style lang="scss">
$grey: #eee;
$deepGrey:#383838;
$mainColor:#4e491b;
.sm-btn-load__more{
  background-color: $mainColor;
  color: #fff;
  text-align: center;
  padding: 6px;
  margin: 0 6;
  border-radius: 3px;
}
</style>
