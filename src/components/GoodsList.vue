<template>
  <div class="list">
     <div class="item" v-for="goods in goodslist" :key="goods.id">
       <div class="item-l">
          <img class="item-img" :src="goods.src">
       </div>
       <div class="item-r">
          <div class="item-title">{{goods.title}}</div>
          <div class="item-price">{{goods.price | currency}}</div>
          <div calss="item-opt">
             <button @click="add (goods)">加入购物车</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: mapState({
        goodslist: state => state.goods.list
    }),
    methods: mapActions('shopcart',['add']),
    created () {
        this.$store.dispatch('goods/getList')
    },
    filters:  {
        currency (value) {
            return '￥ ' + value
        }
    }
}
</script>

<style>
.item-l,.item-r{border:green solid 5px}
</style>