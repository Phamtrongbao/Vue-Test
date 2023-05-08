<script>
import CarouselVue from "./Home/Carousel.vue";
import CategoryVue from "./Home/Category/Category.vue";
import FreeTransportVue from "./Home/FreeTransport.vue";
import RegisterNewVue from "./Home/RegisterNew/RegisterNew.vue";
import BrandVue from "./Home/RenderBrand/Brand.vue";
import ListVue from "./Product/List.vue";

export default {
  components: {
    CarouselVue,
    FreeTransportVue,
    BrandVue,
    CategoryVue,
    RegisterNewVue,
    ListVue,
  },
};
</script>

<template>
  <div>
    <div class="container">
      <free-transport-vue />
      <carousel-vue />
      <brand-vue />
      <list-vue />
      <category-vue />
    </div>
    <register-new-vue />
  </div>
</template>
