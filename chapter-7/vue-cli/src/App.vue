<template>
  <div id="app" class="container mt-5">
    <h1>VueShop</h1>
    <p class="animate__animated animate__fadeInTopRight">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde doloribus
      provident dolorem cum qui alias in facere placeat commodi reiciendis
      nostrum ea velit totam pariatur nisi, voluptas ex suscipit perspiciatis!
    </p>
    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "App",
  components: {
    FontAwesomeIcon,
  },
};
</script>
