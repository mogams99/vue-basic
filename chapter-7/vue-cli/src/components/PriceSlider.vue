<template>
  <transition
    name="costum"
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__slideOutRight"
  >
    <div v-if="sliderStatus">
      <div class="align-items-center pt-4" :class="sliderState">
        <label class="fw-bold mr-2">Max</label>
        <input
          type="text"
          class="form-control mx-2"
          style="width: 60px; text-align: center"
          v-model="maxAmount"
          @change="updateMaxAmount"
        />
        <input
          type="range"
          class="custom-range w-100"
          min="0"
          max="200"
          :value="parseInt(maxAmount)"
          @input="updateMaxAmount"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "price-slider",
  data: function () {
    return {
      maxAmount: 50,
    };
  },
  props: ["sliderStatus", "maximum"],
  computed: {
    sliderState: function () {
      return this.sliderStatus ? "d-flex" : "d-none";
    },
  },
  methods: {
    updateMaxAmount(event) {
      const value = parseInt(event.target.value); // Mengkonversi nilai ke tipe number
      this.maxAmount = value;
      this.$emit("update:maximum", value);
    },
  },
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 3s ease-in-out;
}
</style>
