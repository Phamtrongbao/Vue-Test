<template lang="">
  <div class="line-bottom"></div>
  <div class="header-title">
    <h3 class="mt-5">PRODUCT</h3>
  </div>
  <div class="row mb-5">
    <div
      v-for="product in Product.slice(0, 8)"
      :key="product._id"
      className="col-3 mt-5"
    >
      <div className="Product-box">
        <div className="sale-off" v-if="product.Discount === 'Đang Khuyến mãi'">
          <p>Sale</p>
        </div>
        <div v-else></div>
        <div className="product-image">
          <img
            className="img-product"
            :src="product.Image"
            :alt="product.Name"
          />
        </div>
        <div className="title-product mt-3">
          <p>
            {{ product.Name.substring(0, 30) }}
          </p>

          <div
            className="price-product"
            v-if="product.Discount === 'Đang Khuyến mãi'"
          >
            <p>
              <del>{{
                Number(product.Price).toLocaleString("en-US", {
                  style: "currency",
                  currency: "VND",
                })
              }}</del>
            </p>
            <p class="titile-sale">
              {{
                (
                  Number(product.Price) - Number(product.PriceDiscount)
                ).toLocaleString("en-US", {
                  style: "currency",
                  currency: "VND",
                })
              }}
            </p>
          </div>
          <p v-else class="mt-3">
            {{
              Number(product.Price).toLocaleString("en-US", {
                style: "currency",
                currency: "VND",
              })
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <button class="button-view" v-bind:item="Product">
    <router-link to="/allproduct" class="view-more"> View More </router-link>
  </button>
</template>
<script>
import { brand } from "../../Service/BrandService";
export default {
  components: {},
  data() {
    return {
      Product: [],
    };
  },

  methods: {
    async getProduct() {
      try {
        const response = await brand.GetProduct();
        this.Product = response.data;
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
<style scope>
.header-title {
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  font-weight: 700;
  font-size: 25px;
  margin-top: 30px;
}
.img-brand {
  width: 100%;
  height: 280px;
  object-fit: cover;
}
.button-view {
  width: 40%;
  height: 50px;
  border: solid 1px grey;
  background-color: #fff;
  margin-left: 320px;
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
  font-weight: 700;
  margin-bottom: 70px;
  transition: all 0.9s ease;
}
.button-view > .view-more {
  color: black;
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
  font-weight: 700;
  margin-bottom: 70px;
  transition: all 0.9s ease;
}
.button-view > .view-more:hover {
  color: #fff;
}
.button-view:hover {
  background-color: black;
  color: #fff;
  transition: all 0.9s ease;
}
.line-bottom {
  width: 100%;
  height: 1px;
  background-color: rgb(155, 173, 83);
}

.price-product {
  display: flex;
  justify-content: space-evenly;
  padding-top: 10px;
}
.title-product > p {
  color: grey;
  font-family: Times, serif;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
}
.titile-sale {
  color: red;
  font-family: Times, serif;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
}
.img-product {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.sale-off {
  position: absolute;
  z-index: 1;
  margin-left: 211px;
  color: red;
  font-family: fantasy;
  width: 15%;
  height: 30px;
  text-align: center;
  padding-top: 3px;
  border: solid 1px;
}
</style>
