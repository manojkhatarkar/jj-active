 <template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import axios from "axios";
require("./assets/css/normalize.css")
require("./assets/css/main.css")
require("./assets/css/bootstrap.min.css")
require("./assets/css/animate.min.css")
require("./assets/css/font-awesome.min.css")
require("./assets/css/meanmenu.min.css")
require("./assets/css/magnific-popup.css")
require("./assets/vendor/slider/css/nivo-slider.css")
require("./assets/vendor/slider/css/preview.css")
require("./assets/style.css")

export default {
  //mixins: [Cart],
  data() {
    return {
      ip_address: JSON.parse(localStorage.getItem("ip_address")),
      ratings: 0,
    };
  },
  mounted() {
    this.goToTop();
    //  this.getConfig()
    this.myIpData();
    this.ip_address = JSON.parse(localStorage.getItem("ip_address"));
    this.uid = localStorage.getItem("user");
    this.setRatings();
  },
  methods: {
    setRatings() {
      var ev = this;
      axios
        .post(this.$root.URL_ROOT + "api.php?type=setRating")
        .then(function (response) {
          var data = response.data;
          // console.log(response)
          if (data.status == "success") {
            ev.ratings = data.data;
          }
        });
    },
    // async getConfig () {
    //   const response = await axios.get(this.$root.URL_ROOT + 'api.php?type=linksdetails')
    //   this.$store.commit('getConfig', response.data.data)
    // },
    goToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    myIpData() {
      var ip_address = JSON.parse(localStorage.getItem("ip_address"));

      if (ip_address == null) {
        var min = 100000;
        var max = 999999;
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        localStorage.setItem("ip_address", JSON.stringify(num));
      }
    },
  },
};
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Abril+Fatface);
@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,700);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);
/* .banner::before {
    background: url(./assets/img/jpvanilla-removebg-preview.png);
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 99999999;
    width: 200px;
    } */
    #myCarousel .item{
      background: #dcd0fd;
    }
    .d-iframe{
  width: 500px;
}
.video-center{
  position: absolute;
    top: 0;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.align-items {
    display: flex;
    align-items: center;
}
.theme-card {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
}
.b-logo{
     position: absolute;
    top: 20%;
    left: 25%;
    width: 150px;
    background: #fff;
    border-radius: 10px;
}
.searching-bar{
  position: absolute;
    z-index: 999;
    right: 40px;
    width: 400px;
    top: 90px;
}
#nprogress{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: 20%;
  background-position: 50% 50%;
  /* background-image: url("./assets/images/progress-circle.gif"); */
}
.img-color-1 {
    min-height: 260px !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
}
.img-color-2 {
    min-height: 260px !important;
}
.img-color-3 {
    min-height: 260px !important;
}
.product-text{
  padding: 0 0;
}
.p-detail{
  margin-top: 100px;
}
.fa-dropdown-icon {
  margin-left: 10px;
}
.carousel-inner .slide-1 .carousel-caption h1{
  color: white;
}
.carousel-inner .slide-1 .carousel-caption p{
    color: white;
}
.pt-0{
  padding-top: 0 !important;
}
.text-black {
  color: #000 !important;
  font-weight: bold !important;
}
.overlay {
  position: absolute;
 top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0.3;
    transition: .5s ease;
    background-color: #000;
}
.overlay-banner {
  position: absolute;
 top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0.1;
    transition: .5s ease;
    background-color: #000;
}
header .menu-main li.shop-menu .dropdown-menu{
  left: 0 !important;
  /* width: 250px; */
}
.pointer {
  cursor: pointer;
}
td.product-photo img{
  width: 100px;
}
.menu-main::before{
  display: none;
}

.router-link-exact-active{
  font-weight: 600 !important;
  color: #000 !important;
}
header .menu-main li a.router-link-exact-active::before{
  content: unset;
  position: absolute;
    width: 30px;
    height: 2px;
    background-color: black;
    bottom: 8px;
    left: 15px;
}
.footer-v2 {
  height: auto !important;
}
.home-header {
  background: #fff;
  height: 120px;
}
.footer-pd {
  padding: 50px 0;
}
.showMobile {
  left: 0px !important;
}
.contact-icon {
  font-size: 18px;
  margin-right: 5px;
}
header .menu-main li a:hover {
  font-weight: bold;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
}
.partners-img {
  width: 150px !important;
}
body {
  overflow-x: hidden;
}
.home-header .logo img {
  width: 100px !important;
  top: -15px !important;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
}

.w-100-p{
  width: 100px !important;
}
.w-100{
  width: 100%;
}
header .icon-menu::before{
  display: none;
}
.count .title-count{
  right: 200px;
}
.theme-btn{
  font-family: Abril Fatface;
    font-weight: 400;
    font-size: 18px;
    color: black;
    transition: all .3s ease-in-out 0.08s;
    color: white;
    padding: 10px 40px;
    background-color: black;
    border: 1px solid black;
    background-image: linear-gradient(90deg, black 50%, transparent 50%);
    background-size: 600px;
    background-repeat: no-repeat;
    background-position: 0%;
    transition: background .3s ease-in-out;
    margin-left: 10px;
}
.theme-btn:hover{
      background-position: 100%;
    background-color: #fff;
    color: black;
    text-decoration: none;
}
.not-active {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
  color: black;
}
.mt--10{
  margin-top: 5px;
}
.unset-size{
  height: 30px !important;
  width: unset !important;
}
.space-109 {
    margin: 109px;
}
.dropdown-menu{
  display: block !important;
  /* max-height: 710px;
    overflow: auto; */
}
.error-msgs{
  color: red;
}
.pos-relative{
  position: relative;
}
.ml-15{
  margin-left: 15px;
}
.mb-20{
  margin-bottom: 20px;
}
@media (max-width: 1400px) {
  .nav-logo{
    width: 100px;
  }
  .icon-menu{
    padding: 0px !important;
    margin: 20px auto;
    width: auto !important;
  }
}
.d-align-items{
  display: flex;
  align-items: center;
}
@media (max-width: 991px) {
  /* .icon-menu{
    padding: 0px !important;
  } */
  .title-banner h1{
  margin-top: 20px !important;
}
  .partners-img {
    width: 80px !important;
  }
  
}
@media (max-width: 600px) {
  .avatar-upload .avatar-edit {
    right: unset !important;
    left: 15px;
}
  .d-input{
  margin: 20px 0 !important;
}
  header .menu-main li.shop-menu .dropdown-menu{
    top: 125px !important;
  }
  .count .title-count {
    right: 200px;
    top: -35px !important;
    right: 20px !important;
    text-align: right;
}
  .d-align-items{
  display: unset !important;
  align-items: center;
}
.centered-t-33{
   position: absolute;
   top: 36% !important;
    left: 40% !important;
    transform: translate(-50%, -50%);
    width: 275px;
}
.video-content p{
  margin-top: 20px;
  line-height: 1.2 !important;
  text-align: center;
}
.margin-auto{
  margin: auto;
}
.p-detail{
  margin-top: auto;
}
.m-mt-100{
  margin-top: 100px;
}
.d-iframe{
  width: 250px;
  margin-top: 25px;
}
#myNavbar{
  box-shadow: 2px 6px 10px #858181;
}
.mega-sub-menu:not(:hover) { 
  display: none;
 }
.mega-sub-menu {
      position: unset !important;
      background: #fff;
      left: unset;
      top: unset;
      width: 100%;
      box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
}
.megas-sub-menu:not(:hover) { 
  display: none;
 }
.megas-sub-menu {
      position: unset !important;
      background: #fff;
      left: unset;
      top: unset;
      width: 100%;
      box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
}
}
footer .info-footer ul li a{
  text-transform: uppercase;
}
.banner #banner-about{
  overflow: unset !important;
}
/* #banner-about a::before { */
    /* content: "";
    top: 0;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(120deg, #000000, #000000);
    opacity: 0.3; */
/* } */
.search-btn {
    position: absolute;
    right: 0;
    top: 0px;
    height: 46px;
    width: 125px;
}
.mega-sub-menu {
    position: absolute;
    background: #fff;
left: 270px;
    top: -25px;
    width: 100%;
    box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
}
.mega-sub-menu li a{
  border-bottom: 1px solid #d9d8d8;
}
.sub-menus:hover .megas-sub-menu{
  display: block;
}
.megas-sub-menu {
    position: absolute;
    background: #fff;
left: 270px;
    top: -25px;
    width: 100%;
    box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
    display: none;
}
.megas-sub-menu li a{
  border-bottom: 1px solid #d9d8d8;
}
header .menu-main li.shop-menu .dropdown-menu ul li{
  position: relative;
}
.mega-menu{
  min-width: 300px;
    padding: 0 0 0 20px;
}
.menu-border{
  border-bottom: 1px solid #d9d8d8;
}
.menu-border:hover .sub-menus{
  display: block;
}
.menu-border:hover .sub-menuss{
  display: block;
}
.menu-border:hover .mega-sub-menu{
    display: block;
}
/* .menu-border:hover .megas-sub-menu{
    display: block;
} */
.drop-icon{
  position: absolute;
    right: 0px;
    font-weight: bold;
    font-size: 16px;
}
.mega-sub-menu{
  display: none;
}
.megas-sub-menu{
  display: none;
}
.menu-breadcrumb{
  padding-left: 30px;
}
.product-imgs{
      min-height: 388px;
      max-height: 388px;
    object-fit: cover;
}
.sub-menus{
  display: none;
  color: #000;
  font-weight: bold;
  padding-left: 20px !important;
  /* position: absolute; */
  /* right: 0; */


}
.sub-menuss{
  display: none;
  color: #000;
  font-weight: 500;

}
.list-filer {
  padding: 0 !important;
  min-width: unset !important;
}
.list-filer ul{
  list-style: none;
  padding: 0;
}
.mb-10{
  margin-bottom: 10px;
}
.no-border{
  border: none !important;
}
.title-banner h1{
  margin-top: 0;
}
.header-bg {
  background: #f5e7e6a3;
}
.centered{
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.centered-t-33{
   position: absolute;
    top: 36%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.video-content p{
  margin-top: 20px;
  line-height: 2.2;
  text-align: center;
}
.collection .product-collection .product-image-collec .hot::before, .wedding .product-collection .product-image-collec .hot::before, .holiday .product-collection .product-image-collec .hot::before{
  right: 15px;
}
.gift-area-list {
}
.gift-area-list th {
  font: 700 16px/50px "Poppins";
    color: #565656;
    text-align: center;

}
.gift-area-list td {
  font: 700 16px/50px "Poppins";
    color: #565656;
}
.gift-area-list td.names {
  font: 700 16px/50px "Poppins";
    color: #a7a7a7;
    min-width: 100px;
    text-align: center;
    margin: auto;
    padding: 5px 0 !important;
}
.gift-area-list td.names .a{
  font: 700 16px/50px "Poppins";
    color: #a7a7a7;
    min-width: 100px;
    text-align: center;
    margin: auto;
    padding: 5px 0 !important;
}
.checkout-btn {
    font-size: 14px  !important;
    padding: 0px 5px !important;
}
.img-error{
    color: red;
    text-align: center;
    font-weight: bold;
    margin: 5px auto;
}
.d-input{
  margin: 20px auto;
    width: 250px;
}
.up-img {
  font-family: "Lato",sans-serif;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: #0081b3;
}
.be-none::before{
    padding-right: 0px;
}
</style>
