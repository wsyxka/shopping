<template>
  <div class="list">
    <div class="item" v-for="item in items" :key="item.id">
      <div class="item-l">
        <img class="item-img" :src="item.src">
      </div>
      <div class="item-r">
        <div class="item-title">
          {{item.title}} <small>x {{item.num}}</small>
        </div>
        <div class="item-price">{{item.price | currency}}</div>
        <div class="item-opt">
          <button @click="del(item.id)">删除</button>
        </div>
      </div>
    </div>
    <div class="item-total" v-if="items.length">
      商品总价:{{total | currency}}
    </div>
    <div class="item-empty" v-else>购物车中暂无商品</div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    computed:{
        ...mapState({
            items: state => state.shopcart.items
        }),
        ...mapGetters('shopcart',{total:'totalPrice'})
    },
    methods:mapActions('shopcart',['del']),
    filters:{
        currency (value){
            return '￥' + value
        }
    }
}
</script>