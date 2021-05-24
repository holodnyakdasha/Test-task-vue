<template>
    <div>
      <product-filters
        ref="productFilters"
        :products="productsData"
        @change-products-view="changeProductsView"
        @filter-products="filterProducts"
        @sort-products="sortProducts"
      />
      <products-list
        :view-mode="viewMode"
        :products="productsData"
      />
    </div>
</template>

<script>
import ProductsList from '../components/ProductsList';
import ProductFilters from '../components/ProductFilters';
import products from "../data/products.json"


export default {
  name: "ProductsListPage",

  components: {
    ProductsList,
    ProductFilters
  },

  data() {
    return {
      products: [],
      filteredProducts: [],
      productsData: [],
      viewMode: 'grid'
    }
  },

  async created() {
    this.products = await this.fetchProducts();
    this.products.map((product, index) => {
      products[index].sortPrice = parseInt(product.price.replace('$', ''));
    });
    this.productsData = [...this.products];
  },

  methods: {
    fetchProducts() {
      return Promise.resolve(products)
    },

    changeProductsView(viewType) {
      this.viewMode = viewType;
    },

    filterProducts(option) {
      let productsForFiltering = [...this.products];

      switch(option) {
        case 'all':
          productsForFiltering = [...this.products];
          break;
        case 'S':
          productsForFiltering = productsForFiltering.filter((product) => product.size === "S - Small");
          break;
        case 'M':
          productsForFiltering = productsForFiltering.filter((product) => product.size === "M - Medium");
          break;
        case 'L':
          productsForFiltering = productsForFiltering.filter((product) => product.size === "L - Large");
          break;
        case 'XL':
          productsForFiltering = productsForFiltering.filter((product) => product.size === "XL - Extra large");
          break;
      }
      this.filteredProducts = [...productsForFiltering];
      this.productsData = [...this.filteredProducts];
    },

    sortProducts(option) {
      const sortedProducts = this.filteredProducts.length ? [...this.filteredProducts] : [...this.products];

      switch (option) {
        case 'priceAsc':
          sortedProducts.sort((a, b) => {
            return a.sortPrice - b.sortPrice;
          });
          break;
        case 'priceDesc':
          sortedProducts.sort((a, b) => {
            return b.sortPrice - a.sortPrice;
          });
          break;
        case 'name':
          sortedProducts.sort((a, b) => {
            return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
          });
          break;
        }
      this.productsData = [...sortedProducts];
    },

  }
}

</script>

<style lang="less">
 @import "../styles/productCard";
</style>