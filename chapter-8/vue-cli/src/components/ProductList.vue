<template>
  <transition-group
    name="fade"
    tag="div"
    @beforeEnter="before"
    @enter="enter"
    @leave="leave"
  >
    <div
      class="row mb-3 align-items-center"
      v-for="(item, index) in showItem"
      :key="item.id"
      :data-index="index"
    >
      <div class="col-1 m-auto">
        <button
          class="btn btn-info text-white"
          @click="$emit('add-item', item)"
        >
          <font-awesome-icon icon="plus"></font-awesome-icon>
        </button>
      </div>
      <div class="col-sm-4">
        <img
          v-bind="{
            class: 'img-fluid d-block',
            src: item.image,
            alt: item.name,
          }"
        />
      </div>
      <div class="col">
        <h2 class="text-info fw-bold">{{ item.name }}</h2>
        <p class="mb-9">{{ item.description }}</p>
        <div class="h5 float-right fw-bold">
          <price :value="Number(item.price)"></price>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Price from "./Price.vue";

export default {
  name: "product-list",
  components: {
    FontAwesomeIcon,
    Price,
  },
  props: ["products", "maximum"],
  computed: {
    showItem: function () {
      let max = this.maximum;
      return this.products.filter(function (item) {
        return item.price <= max;
      });
    },
  },
  methods: {
    before: function (el) {
      el.className = "d-none";
    },
    enter: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          "row d-flex mb-3 align-items-center animate__animated animate__fadeInRight";
      }, delay);
    },
    leave: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          "row d-flex mb-3 align-items-center animate__animated animate__fadeOutRight";
      }, delay);
    },
  },
};
</script>
