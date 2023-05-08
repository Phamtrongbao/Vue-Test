<template lang="">
  <div class="line-bottom"></div>
  <div class="header-title">
    <h3 class="mt-5">PRODUCT</h3>
  </div>
  <div class="row mb-5">
    <div
      v-for="product in this.$props.item"
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
</template>
<script>
export default {
  props: {
    item: Array,
  },
  watch: {
    item(Array) {
      console.log("Name prop changed to: ", Array);
    },
  },
};
</script>
<style lang=""></style>
