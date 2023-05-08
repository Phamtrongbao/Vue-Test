<template lang="">
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="handme">
          <div class="content-hadme">
            <h4 style="color: white">HANDMADE</h4>
            <hr />
            <p>sản phẩm thủ công bởi những người thợ tài ba</p>
            <button class="collect">Xem Thêm</button>
          </div>
          <div class="hadme-img">
            <img
              style="height: 400px"
              src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/twobanner_1.png?1678863742499"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="content-hadme">
          <h4 style="color: white">Bộ Sưu Tập</h4>
          <hr />
          <p>Những mẫu mới nhất được cập nhật tại cửa hàng</p>
          <button class="collect">Xem Thêm</button>
        </div>
        <div class="hadme-img">
          <img
            style="height: 400px"
            src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/twobanner_2.png?1678863742499"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="titleban mt-5">
      <h5
        style="
          text-align: center;
          font-family: Times, serif;
          font-size: 18px;
          font-weight: 800;
        "
      >
        VỀ CHÚNG TÔI
      </h5>
      <p
        class="mt-3"
        style="font-family: Times, serif; font-size: 15px,text-align:center"
      >
        Gentleman sẽ mang lại cho khách hàng những trải nghiệm mua sắm thời
        trang hàng hiệu trực tuyến thú vị từ các thương hiệu thời trang quốc tế
        và trong nước, cam kết chất lượng phục vụ hàng đầu cùng với những bộ sưu
        tập quần áo nam nữ khổng lồ từ giày dép, trang phục, phụ kiện đến mỹ
        phẩm cho cả phụ nữ và nam giới với những xu hướng thời trang mới nhất.
        Bạn có thể tìm thấy những bộ trang phục mình muốn từ những bộ đồ ở nhà
        thật thoải mái hay tự tin trong những bộ trang phục công sở phù hợp.
        Những trải nghiệm mới chỉ có ở trang mua sắm hàng hiệu trực tuyến
        Gentleman.
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scope>
.handme {
  width: 100%;
}
.content-hadme {
  position: absolute;
  top: 100px;
  left: 100px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.line-bottom {
  width: 100%;
  height: 1px;
  background-color: rgb(155, 173, 83);
}
.collect {
  width: 50%;
  height: 50px;
  border: none;
  background-color: #fff;
  color: #000;
  font-weight: 700;
  transition: transform 0.6s ease-in-out;
}
.collect:hover {
  background-color: #090939;
  color: #fff;
  transform: scale(1.1);
  transition: transform 0.3s ease-out;
}
.titleban {
  text-align: center;
  color: #000;
}
.titleban > p {
  font-size: 15px;
}
</style>
