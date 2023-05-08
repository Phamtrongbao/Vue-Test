<template lang="">
  <div>
    <div class="login-logout">
      <div class="container">
        <div class="order">
          <p class="hotline">HOTLINE:1800675</p>

          <!-- {user ? (
          <div class="dropdown">
            <button
              class="button-check dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="ava-email">
                <div class="img">
                  <img src="{user.Avatar}" alt="" />
                </div>
                <div class="mt-1">{user.UserName.substring(0,20)}</div>
              </div>
            </button>
            <div class="dropdown-menu">
              {user.Type==="Admin"?<a className="dropdown-item" href="#"
                >Admin</a
              >
              :null}
              <div class="line-bottom"></div>
              <a class="dropdown-item" href="#">Profile</a>
              <div class="line-bottom"></div>
              <a style="cursor:'pointer" class="dropdown-item">Log Out</a>
            </div>
          </div>
          ) : (
          <button class="button-check mt-2 ml-5">
            <router-link to="/loginCustomer" style="color: grey"
              >LOGIN</router-link
            >
          </button>
          )} -->
        </div>
      </div>
    </div>
    <div class="menu container">
      <div class="search">
        <div class="inputseacrh">
          <input type="search" placeholder="Search product..." />
        </div>
        <button class="icon" type="button">
          <SearchOutlined />
        </button>
      </div>
      <div class="logo">
        <img
          src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/logo.png?1678863742499"
          style="padding-top: 5"
          alt=""
        />
      </div>
      <div class="cart">
        <div class="cart-icon mt-1">
          <ShoppingOutlined style="font-size: 25px" />
        </div>
        <div class="Cart-title"></div>
      </div>
    </div>
    <div class="NavStick">
      <div class="menubar container">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="/home">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/gioithieu">INTRODUCE</a>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <div class="dropdown-content">
                <a href="/product">PRODUCT</a>
              </div>

              <ul>
                <li>
                  <div class="link">
                    <a href="/product " style="padding-top: 15">PRODUCT </a>
                    <CaretRightOutlined className="right-out" />
                  </div>
                </li>
                <div class="line"></div>
                <li>
                  <div class="link">
                    <a href="/HotProduct" style="padding-top: 15">OUTSTAND </a>
                    <CaretRightOutlined className="right-out" />
                  </div>
                </li>
                <div class="line"></div>
                <li>
                  <div class="link">
                    <a href="/saleProduct" style="padding-top: 15"
                      >FLASHSALE
                    </a>
                    <CaretRightOutlined className="right-out" />
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link">NEWS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {
  SearchOutlined,
  ShoppingOutlined,
  CaretRightOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    SearchOutlined,
    ShoppingOutlined,
    CaretRightOutlined,
  },
};
</script>
<style scope>
.login-logout {
  background-color: #ffff;
}
.button-check {
  background-color: #fff;
  height: 40px;
  width: 100px;
  color: grey;
  font-weight: 400;
  font-size: 15px;
  border: 1px gray;
  padding-right: 5px;
}

.order {
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #000;
}
.hotline {
  padding-top: 15px;
  font-size: 15px;
  font-weight: 400;
  margin-left: 800px;
  font-family: sans-serif;
}
.menu {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  background-color: #fff;
}

.search {
  display: flex;
  justify-content: space-between;
}

.inputseacrh > input {
  width: 120%;
  height: 40px;
  border: 2px solid black;
  border-radius: 3px;
  padding-left: 10px;
}

.icon {
  width: 20%;
  height: 40px;
  background-color: #000;
  border: 1px solid black;
  color: #fff;
}

.icon:hover {
  color: red;
}

.cart {
  display: flex;
  justify-content: space-evenly;
  font-size: 15px;
  color: #000;
  font-weight: 800;
}

.Cart-title {
  padding-top: 5px;
}

.menubar {
  transition: background-color 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  height: 80px;
}
.menubar.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding-top: 15px;
  justify-content: space-around;
  z-index: 9999;
  margin-top: 0;
  height: 80px;
  width: 100%;
}

.menubar > .nav > .nav-item > .nav-link {
  color: #000;
  font-weight: 700;
  font-size: 20px;
  margin-left: 30px;
  text-align: center;
  transition: all 0.9 ease;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
}
.link {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.link > a {
  font-size: 13px;
  font-family: "Times New Roman", Times, serif;
  font-weight: 700;
}
.nav {
  margin-left: 0px;
}
.menubar > .nav > .nav-item > .nav-link:hover {
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 50px;
  transition: all 0.9 ease-in;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  min-width: 100px;
  z-index: 1;
}

.dropdown-content a {
  color: #000;
  font-size: 20px;
  font-weight: 700;
  font-family: "Times New Roman", Times, serif;
  padding: 7px 40px;
  text-decoration: none;
  display: block;
  display: flex;
  justify-content: center;
}
.dropdown-content a:hover {
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 50px;
}
.dropdown:hover .dropdown-content {
  display: block;
}

.line {
  background-color: #fff;
  height: 1px;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  font-family: "Times New Roman", Times, serif;
}

.link {
  display: flex;
  justify-content: space-around;
  color: #fff;
}

.right-out {
  /* margin-left: 50px; */
  padding-top: 18px;
  font-size: 25px;
}

.dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0px;
  background-color: #000;
  border: 1px solid #ccc;
  border-radius: 5px;
  border: 1px solid grey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: all 0.6s ease;
  width: 100%;
  z-index: 10000;
}

.dropdown ul li {
  margin: 0;
}

.dropdown ul li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;
}

.dropdown ul li a:hover {
  background-color: black;
}

.dropdown:hover ul {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.img > img {
  width: 30px;
  height: 30px;
  border-radius: 100px;
}

.ava-email {
  display: flex;
  justify-content: center;
  margin-top: 9px;
  color: gray;
  font-family: "Times New Roman", Times, serif;
  font-weight: 500;
}

.dropdown-toggle::after {
  display: none;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 4rem;
  padding: 0px;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: center;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid grey;
  border-radius: 0.25rem;
  font-family: "Times New Roman", Times, serif;
  font-weight: 500;
  /* height: 74px; */
}

#product-table.show {
  animation: fade-in 0.6s ease-in-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
