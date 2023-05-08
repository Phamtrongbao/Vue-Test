<template>
  <div className="baner mt-2">
    <div className="row">
      <div className="col-4">
        <div className="banner-col">
          <button className="free-banner">MIỄN PHÍ VẬN CHUYỂN</button>
        </div>
      </div>
      <div className="col-4">
        <div className="banner-col">
          <button className="free-banner">MIỄN PHÍ ĐỔI TRẢ</button>
        </div>
      </div>
      <div className="col-4">
        <div className="banner-col">
          <button className="free-banner">THANH TOÁN TRỰC TUYẾN</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scope>
.free-banner {
  color: #b8d0de;
  font-family: "Times New Roman", Times, serif;
  font-size: 12px;
  font-weight: 700;
  border: solid 1px #fff;
  text-align: center;
  background-color: black;
  margin-top: 5px;
  margin-left: 5px;
  width: 97%;
  height: 40px;
}

.banner-col {
  background-color: black;
  width: 100%;
  height: 50px;
}
</style>
