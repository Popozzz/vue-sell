<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" @click="decreaseCart" v-show="this.food.count>0">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
      <div class="cart-count" v-show="this.food.count>0">
        {{this.food.count}}
      </div>
      <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: { // vue2不允许修改传过来的属性消息，可以通过向上冒泡通知父组件进行修改
    addCart(even) {
      this.$emit('add', this.food, even)
    },
    decreaseCart(even) {
      this.$emit('decrease', this.food, even)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      transition: all 0.4s linear
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0,160,220)
        transition: all 0.4s linear
        transform: rotate(0)
      &.move-enter,&.move-leave-to
        opacity: 0
        transform: translate3d(24px, 0, 0)
      &.move-enter-to,&.move-leave
        opacity: 1
        transform: translate3d(0, 0, 0)
      &.move-enter-active,&.move-leave-active
        .inner
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147,153,159)
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0,160,220)
</style>
