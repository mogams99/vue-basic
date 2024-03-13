<template>
  <nav class="navbar navbar-light bg-light fixed-top">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">Vue Basic</a>
      <div class="navbar-text ml-auto d-flex">
        <button class="btn btn-sm btn-outline-success" @click="$emit('toggle')">
          <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
        </button>
        <div class="dropdown ms-3" v-if="cart.length > 0">
          <button
            class="btn btn-success btn-sm dropdown-toggle"
            type="button"
            id="dropDownCart"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <!-- <b>cart:</b> -->
            <span class="badge rounded-pill bg-success">{{ cartQty }}</span>
            <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
            <price :value="Number(cartTotal)"></price>
          </button>
          <div
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropDownCart"
          >
            <div v-for="(item, index) in cart" :key="index">
              <div class="dropdown-item-text text-nowrap text-right">
                <span class="badge rounded-pill bg-warning align-text-top me-1">
                  {{ item.qty }}
                </span>
                {{ item.product.name }}
                <b>{{ (item.product.price * item.qty) | currencyFormat }}</b>
                <a
                  href="#"
                  class="badge bg-danger text-white text-decoration-underline"
                  @click.stop="deleteItem(index)"
                  >-</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Price from "./Price.vue";

export default {
  name: "navbar-div",
  components: {
    FontAwesomeIcon,
    Price,
  },
  props: ["cart", "cartQty", "cartTotal"],
  filters: {
    currencyFormat: function (value) {
      return "Rp" + Number.parseFloat(value).toFixed(2);
    },
  },
};
</script>
