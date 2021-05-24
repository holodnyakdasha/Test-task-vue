<template>
  <div class="product-card">
    <div class="product-card-header">
      <p class="favorite">
        <span class="icon">
            <i v-if="product.isFav" class="fa fa-heart" aria-hidden="true"></i>
            <i v-else class="fa fa-heart-o" aria-hidden="true"></i>
        </span>
      </p>
        <img :src="product.picture" alt="product image">
    </div>
    <div class="card-body">
      <p class="title">{{ product.name }}</p>
      <p class='product-details'><span class="size">{{ product.size }}</span> 
        <span class="rating">
          <i
            v-for="i in product.rating"
            :key="i"
            :value="i"
            class="fa fa-star"
            aria-hidden="true"
            />
        </span>
      </p>
      <p class="product-pricing">
        <span class="price"> {{ product.price }}</span>
        <span class="striked-text">
          {{ product.oldPrice ? product.oldPrice : "" }}
        </span>
        <span class="red-text">
          {{ product.savings ? " You save " + product.savings : "" }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProductCard",

  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({}),
    }
  },
}

</script>

<style lang="less">
 @import "../styles/productCard";
</style>