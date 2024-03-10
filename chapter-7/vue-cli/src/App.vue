<template>
  <div id="app" class="container mt-5">
    <h1>VueShop</h1>
    <product-list :maximum="maximum" :products="products"></product-list>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";

export default {
  name: "App",
  data: function () {
    return {
      maximum: 20,
      products: [],
    };
  },
  components: {
    ProductList,
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
};
</script>
