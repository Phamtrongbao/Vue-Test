<template lang="">
  <div class="register-new">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h4>Đăng Ký Nhận Tin</h4>
          <div class="Emaail">
            <input type="email" placeholder="Nhập Địa Chỉ Email Của Bạn" />
            <button>Đăng Ký</button>
          </div>
        </div>
        <div class="col-6">
          <h4>Mạng Xã Hội</h4>
          <div class="group-local">
            <button class="but-local">
              <FacebookFilled />
            </button>
            <button class="but-local">
              <YoutubeFilled />
            </button>
            <button class="but-local">
              <InstagramFilled />
            </button>
            <button class="but-local">
              <TwitterCircleFilled />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  FacebookFilled,
  YoutubeFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from "@ant-design/icons-vue";
export default {
  components: {
    FacebookFilled,
    YoutubeFilled,
    InstagramFilled,
    TwitterCircleFilled,
  },
};
</script>
<style scope>
.register-new {
  background-color: #f8f8f8;
  width: 100%;
  height: 200px;
  text-align: center;
  padding-top: 50px;
  font-weight: 700;
  font-family: "Times New Roman", Times, serif;
  text-transform: uppercase;
  font-size: 20px;
}
.but-local {
  width: 50px;
  height: 50px;
  border-radius: 150px;
  margin-left: 10px;
  line-height: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  transform: rotate(0deg);
  transition: all 0.5s ease-in-out;
}
.but-local:hover {
  background-color: #fff;
  color: #000;
  transform: rotate(360deg);
  transition: all 0.6s ease-out;
}
.Emaail > input {
  width: 60%;
  height: 50px;
  border: solid 2px;
  border-radius: 2px;
  font-family: "Times New Roman", Times, serif;
  background-color: #fff;
}
.Emaail > button {
  width: 90px;
  height: 48px;
  margin-left: 10px;
  margin-top: 5px;
  background: #000;
  color: #fff;
  font-family: "Times New Roman", Times, serif;
}
@keyframes slide-up {
  from {
    transform: translateX(50%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}
</style>
