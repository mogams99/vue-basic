<template>
  <div class="pt-custom">
    <h1>Checkout</h1>
    <table class="table table-hover" v-if="cart.length">
      <caption class="text-right h3">
        <b>Total:</b>
        <price
          class="d-block text-success fw-light"
          :value="Number(cartTotal)"
        ></price>
      </caption>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Item</th>
          <th scope="col" class="text-center">Qty</th>
          <th scope="col" class="text-center">Price</th>
          <th scope="col" class="text-right">Sub-total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="item.product.id">
          <td class="text-center">
            <div class="btn-group">
              <button
                @click="$emit('add', item.product)"
                class="btn btn-info text-white"
              >
                +
              </button>
              <button
                @click="$emit('delete', index)"
                class="btn btn-outline-info"
              >
                -
              </button>
            </div>
          </td>
          <th scope="row">{{ item.product.name }}</th>
          <th class="text-center">{{ item.qty }}</th>
          <th class="text-right">{{ Number(item.product.price) }}</th>
          <th class="text-right">
            {{ Number(item.product.price * item.qty) }}
          </th>
        </tr>
      </tbody>
    </table>
    <router-link class="btn btn-sm btn-info text-white fw-bold" to="/"
      >Back to Shop</router-link
    >
  </div>
</template>

<script>
import Price from "./Price.vue";

export default {
  name: "checkout-div",
  props: ["cart", "cartTotal"],
  components: {
    Price,
  },
};
</script>

<style>
.pt-custom {
  padding-top: 100px; /* Atur sesuai kebutuhan Anda */
}
</style>
