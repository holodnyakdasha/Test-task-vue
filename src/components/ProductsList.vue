<template>
    <div
      v-if="products.length"
      ref="productList"
      class="products-list-container"
      :class="[viewMode === 'grid' ? 'grid' : 'list']"
    >
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </div>
</template>

<script>
import ProductCard from './ProductCard';


export default {
  name: "ProductsList",

  components: {
    ProductCard,
  },

  props: {
    viewMode: {
      type: String,
      default: 'grid'
    },

    products: {
      type: Array,
      required: true,
    }
  }
}

</script>

<style lang="less">
 @import "../styles/productCard";
</style>