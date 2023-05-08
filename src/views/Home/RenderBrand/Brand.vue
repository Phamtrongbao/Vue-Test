<template>
  <div>
    <div class="row mb-5">
      <div v-for="brand in brands" :key="brand._id" class="col-4">
        <div class="image-container">
          <img class="img-brand" :src="brand.Img" alt="Your Image" />
          <router-link :to="'/' + brand.slug">
            <div class="curtain left">{{ brand.Name }}</div>
            <div class="curtain right"></div>
            <div></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { brand } from "../../../Service/BrandService";

export default {
  data() {
    return {
      brands: [],
    };
  },
  created() {
    this.getBrands();
  },
  methods: {
    async getBrands() {
      try {
        const response = await brand.GetBrand();
        this.brands = response.data;
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scope>
.curtain {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: 0;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.left {
  left: 0;
  transform: translateX(-100%);
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  padding-top: 200px;
}

.right {
  right: 0;
  transform: translateX(100%);
}
.img-brand {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.image-container {
  position: relative;
}
.image-container:hover .curtain {
  opacity: 1;
  transform: translateX(0%);
}
</style>
