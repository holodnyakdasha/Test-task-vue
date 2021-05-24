<template>
  <nav class="navbar">
    <div class="products-count"> {{ products.length }} results </div>

    <div class="navbar-options-section">
      <div class="filter-block">
        <section>
          <select
            v-model="selectedFilter"
            name="filterOptions"
            class="filter-options"
            @change="$emit('filter-products', selectedFilter)"
          >
            <option
              v-for="option in filterOptions"
              :value="option.value"
              :key="option.value"
            >{{ option.text }}</option>
          </select>
        </section>
    
        <section>
          <select
            v-model="selectedSortOption"
            name="sortOptions"
            class="sort-options"
            @change="$emit('sort-products', selectedSortOption)"
          >
            <option
              v-for="option in sortOptions"
              :value="option.value"
              :key="option.value"
            >{{ option.text }}</option>
          </select>
    
        </section>
      </div>

      <div class="products-direction-selector">
        <div
          ref="gridView"
          class="grid-view-icon"
          :class="{'active': isActiveView === 'grid'}"
          @click="changeView('grid')"
        >
          <i class="fa fa-th" aria-hidden="true"></i> Grid view
        </div>
  
        <div
          ref="listView"
          class="list-view-icon"
          :class="{'active': isActiveView === 'list'}"
          @click="changeView('list')"
        >
          <i class="fa fa-list-ul" aria-hidden="true"></i> List view
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'ProductFilters',

  props: {
    products: {
      type: Array,
      required: true,
      default: () => ([]),
    }
  },

  data() {
    return {
      filterOptions: [
        { value: 'all', text: 'Filter' },
        { value: 'S', text: 'Filter By: Small' },
        { value: 'M', text: 'Filter By: Medium' },
        { value: 'L', text: 'Filter By: Large' },
        { value: 'XL', text: 'Filter By: Extra Large' },
      ],

      sortOptions: [
        { value: 'all', text: 'Sort By: Most Relevant' },
        { value: 'priceAsc', text: 'Sort By: Price Ascending' },
        { value: 'priceDesc', text: 'Sort By: Price Descending' },
        { value: 'name', text: 'Sort By: Name Ascending' },
      ],

      isActiveView: 'grid',
      selectedFilter: 'all',
      selectedSortOption: 'all'
    }
  },

  methods: {
    changeView(viewType) {
      this.isActiveView = viewType;
      this.$emit('change-products-view', viewType);
    }
  }
}
</script>

<style lang="less">
@import "../styles/productFilters.less";
</style>