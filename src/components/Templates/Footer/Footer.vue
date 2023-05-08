<template>
  <div>
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <h6 className="name">Infomation</h6>
            <ul>
              <li>
                <router-link style="color: grey" to="">Trang Chủ</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Giới Thiệu</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Sản Phẩm</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Tin Tức</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Liên Hệ</router-link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h6 className="name">Support</h6>
            <ul>
              <li>
                <router-link style="color: grey" to="">Trang Chủ</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Giới Thiệu</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Sản Phẩm</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Tin Tức</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Liên Hệ</router-link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h6 className="name">Instruct</h6>
            <ul>
              <li>
                <router-link style="color: grey" to="">Trang Chủ</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Giới Thiệu</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Sản Phẩm</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Tin Tức</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Liên Hệ</router-link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h6 className="name">list</h6>
            <ul>
              <li>
                <router-link style="color: grey" to="">Trang Chủ</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Giới Thiệu</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Sản Phẩm</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Tin Tức</router-link>
              </li>
              <li>
                <router-link style="color: grey" to="">Liên Hệ</router-link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h6 className="name">Contact</h6>
            <ul>
              <li>Tầng 6 - Tòa nhà Ladeco</li>
              <li>1900 6750</li>
              <li>support@sapo.vn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-footer">
      <div className="container">
        <p style="color:grey, padding-top: 20px, padding-left: 35px">Cung cấp bởi Sapo</p>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 pay_footer">
          <ul className="follow_option">
            <li>
              <a href="#"
                ><img
                  src="//bizweb.dktcdn.net/100/004/366/themes/900241/assets/pay_1.png?1678863742499"
                  alt="Gentleman"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  src="//bizweb.dktcdn.net/100/004/366/themes/900241/assets/pay_2.png?1678863742499"
                  alt="Gentleman"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  src="//bizweb.dktcdn.net/100/004/366/themes/900241/assets/pay_3.png?1678863742499"
                  alt="Gentleman"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  src="//bizweb.dktcdn.net/100/004/366/themes/900241/assets/pay_4.png?1678863742499"
                  alt="Gentleman"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  src="//bizweb.dktcdn.net/100/004/366/themes/900241/assets/pay_5.png?1678863742499"
                  alt="Gentleman"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  src="//bizweb.dktcdn.net/100/004/366/themes/900241/assets/pay_6.png?1678863742499"
                  alt="Gentleman"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  src="//bizweb.dktcdn.net/100/004/366/themes/900241/assets/pay_7.png?1678863742499"
                  alt="Gentleman"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scope>
.container > p {
  padding-top: 15px;
  padding-left: 35px;
}
.footer-top {
  background-color: #232323;
  width: 100%;
  height: 200px;
  color: #fff;
  padding-top: 25px;
  font-size: 13px;
}
.bottom-footer {
  width: 100%;
  height: 50px;
}
.bottom-footer > .container {
  display: flex;
  justify-content: space-between;
}
.follow_option {
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
}
.name {
  padding-left: 38px;
  color: #ffff;
}

ul li {
  list-style-type: none;
  line-height: 28px;
}
</style>
