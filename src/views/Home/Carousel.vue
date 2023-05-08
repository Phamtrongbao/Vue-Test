<template lang="">
  <div
    id="carouselExampleControlsNoTouching"
    class="carousel slide"
    data-touch="false"
    data-interval="false"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/slider_1.jpg?1678863742499"
          class="d-block"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/twobanner_1.png?1678863742499"
          class="d-block"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/twobanner_2.png?1678863742499"
          class="d-block"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-target="#carouselExampleControlsNoTouching"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-target="#carouselExampleControlsNoTouching"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style scope>
.carousel-item > img {
  height: 700px;
  margin-top: 20px;
  width: 1120px;
  object-fit: cover;
  margin-bottom: 30px;
}
</style>
