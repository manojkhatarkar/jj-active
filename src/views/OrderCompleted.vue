<template>
  <body>
    <Header />
    <main>
      <div class="content-search">
        <div class="container container-100">
          <i class="far fa-times-circle" id="close-search"></i>
          <h3 class="text-center">what are your looking for ?</h3>
          <form
            method="get"
            action="http://landing.engotheme.com/search"
            role="search"
            style="position: relative"
          >
            <input
              type="text"
              class="form-control control-search"
              value=""
              autocomplete="off"
              placeholder="Enter Search ..."
              aria-label="SEARCH"
              name="q"
            />

            <button class="button_search" type="submit">search</button>
          </form>
        </div>
      </div>
      <div class="banner">
        <div class="container">
          <figure id="banner-about">
            <a href="#"
              ><img
                src="../assets/img/banner-about.jpg"
                class="img-responsive"
                alt="img-holiwood"
            /></a>
          </figure>
          <div class="title-banner">
            <h1>Order Completed</h1>
            <p>
              <a href="#" title="Home">Home</a
              ><i class="fa fa-caret-right"></i>Order Completed
            </p>
          </div>
        </div>
      </div>
      <div class="container container-ver2 space-padding-tb-30">
        <div class="row head-cart">
          <div class="col-md-4 space-30">
            <div class="item active center">
              <p class="icon">01</p>
              <h3>Shopping cart</h3>
            </div>
          </div>
          <!-- End col-md-4 -->
          <div class="col-md-4 space-30">
            <div class="item active center">
              <p class="icon">02</p>
              <h3>Check out</h3>
            </div>
          </div>
          <!-- End col-md-4 -->
          <div class="col-md-4 space-30">
            <div class="item center active">
              <p class="icon">03</p>
              <h3>Order completed</h3>
            </div>
          </div>
          <!-- End col-md-4 -->
        </div>
      </div>
      <!-- End container -->
      <div class="container container-ver2">
        <div class="box float-left order-complete center space-50">
          <div class="icon space-20">
            <img src="../assets/img/icon-order-complete.png" alt="icon" />
          </div>
          <p class="box center space-50">
            Thank you for shopping with us, your order is complete!
          </p>
          <div class="box">
            <a
              class="link-v1 lh-50 margin-right-20 space-20 color-brand"
              href="#"
              title="HOME PAGE"
              >HOME PAGE</a
            >
            <a
              class="link-v1 lh-50 rt space-20"
              href="#"
              title="CONTINUS SHOPPING"
              >CONTINUS SHOPPING</a
            >
          </div>
        </div>
      </div>
      <!-- End container -->
    </main>
    <Footer />
  </body>
</template>

<script>
import axios from "axios";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  props: ["catedatas"],
  components: {
    Header,
    Footer,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      FinalTotalAmount: 0,
      add_id: 0,
      cgstLess: 0,
      sgstLess: 0,
      withTextAmount: 0,
      withoutTextAmount: 0,
      totalwithoutgst: 0,
      ttotalwithoutgst: 0,
      billing_id: 0,
      paymentMethod: 1,
      couponCode: "",
      getCounts: "",
      myCouponMoney: localStorage.getItem("coupon")
        ? localStorage.getItem("coupon")
        : 0,
      isHas: false,
      isAdd: 0,
      shipping: 0,
      min: 0,
      dashboard_box: "step-1",
      ip_address: JSON.parse(localStorage.getItem("ip_address")),
      uid: localStorage.getItem("user"),
      userData: [],
      cartCount: [],
      amount: 100,
      addressDatas: [],
      paymenttype: "ppd",
      awbNumber: "",
      selectedAddress: [],
      getShippingAddressData: [],
      getBillingAddressData: [],
      selectedBillingAddress: [],
      userAddress: {
        add_title: "",
        mobile_no: "",
        add1: "",
        add2: "",
        c_state: "",
        city: "",
        zipcode: "",
        add_type: "Shipping",
        shippingBilling: false,
      },
      userAddressBilling: {
        add_title: "",
        mobile_no: "",
        add1: "",
        add2: "",
        c_state: "",
        city: "",
        zipcode: "",
        add_type: "",
      },
    };
  },
  watch: {
    add_id: function (id, oldId) {
      if (this.add_id > 0 && this.add_id != oldId) {
        this.getSelectedAddress(id);
        // if(this.userAddress.shippingBilling==true){
        //      this.billing_id = this.add_id
        // }
      }
    },
    billing_id: function (id, oldId) {
      if (this.billing_id > 0 && this.billing_id != oldId) {
        this.getSelectedBillingAddress(id);
      }
    },
    // userAddress: function(id){
    //     if(this.userAddress.shippingBilling==true){
    //         this.billing_id = this.add_id
    //     }
    // },
    //         selectedAddress: function(){
    //  if (this.add_id > 0) {
    //             this.getSelectedAddress(this.add_id);
    //         }
    //         },
    cartCount: function () {
      if (this.cartCount.count == 0) {
        // this.$toasted.global.error({
        //   message: "Your cart is empty please add some product",
        // });
      }
    },
  },
  mounted() {
    this.includeStripe("checkout.razorpay.com/v1/checkout.js");
    this.uid = localStorage.getItem("user");
    (this.ip_address = JSON.parse(localStorage.getItem("ip_address"))),
      this.userDetail();
    this.getAddress();
    this.getState();
    var ev = this;
    if (this.add_id > 0) {
      this.getSelectedAddress(this.add_id);
    }
    setTimeout(function () {
      ev.getSelectedAddress(this.add_id);
      // ev.getSelectedBillingAddress(this.billing_id);
    }, 2000);
    this.goToTop();
    this.getCart();
    this.shippingCharge();
    this.checkfirstSigup();
    this.getShippingAddress();
    this.getBillingAddress();
  },
  methods: {
    checkBillingShipping() {
      if (this.userAddress.shippingBilling == true) {
        this.billing_id = this.add_id;
      }
    },
    getShippingAddress() {
      var user_session = JSON.parse(localStorage.getItem("user"));
      var uid = "";
      if (user_session != null) {
        uid = user_session;
      } else {
        uid = null;
      }
      var ev = this;
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: {
          type: "getShippingAddress",
          uid: uid,
        },
      }).then(function (response) {
        var data = response.data;
        console.log("getShippingAddress", data);
        ev.add_id = data[0].add_id;
        ev.getShippingAddressData = data;
      });
    },
    getBillingAddress() {
      var user_session = JSON.parse(localStorage.getItem("user"));
      var uid = "";
      if (user_session != null) {
        uid = user_session;
      } else {
        uid = null;
      }
      var ev = this;
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: {
          type: "getBillingAddress",
          uid: uid,
        },
      }).then(function (response) {
        var data = response.data;
        // ev.add_id = ev.addressDatas[0].add_id
        ev.billing_id = data[0].add_id;
        ev.getBillingAddressData = data;
      });
    },
    getSelectedBillingAddress(id) {
      if (id == 0) {
      } else {
        var user_session = JSON.parse(localStorage.getItem("user"));
        var uid = "";
        if (user_session != null) {
          uid = user_session;
        } else {
          uid = null;
        }
        var ev = this;
        axios({
          method: "POST",
          url: this.$root.URL_ROOT + "api.php",
          data: {
            type: "getSelectedBillingAddress",
            uid: uid,
            aid: id,
          },
        }).then(function (response) {
          var data = response.data;
          ev.selectedBillingAddress = data;
          ev.billing_id = data.add_id;
        });
      }
    },
    getSelectedAddress() {
      if (this.add_id == 0) {
      } else {
        var user_session = JSON.parse(localStorage.getItem("user"));
        var uid = "";
        if (user_session != null) {
          uid = user_session;
        } else {
          uid = null;
        }
        var ev = this;
        axios({
          method: "POST",
          url: this.$root.URL_ROOT + "api.php",
          data: {
            type: "getSelectedAddress",
            uid: uid,
            aid: ev.add_id,
          },
        }).then(function (response) {
          var data = response.data;
          ev.selectedAddress = data;
          ev.add_id = data.add_id;
        });
      }
    },
    checkfirstSigup() {
      var self = this;
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: {
          type: "checkFirstSignup",
          uid: self.uid,
        },
      }).then(function (response) {
        var data = response.data;
        // console.log(data);
        if (data.data) {
        } else {
          self.couponCode = "FIRST";
          self.applyCoupon();
        }
      });
    },
    getCount(id) {
      var count = "";
      var data = count.push(id);
      this.getCounts = data;
    },
    generateAwbNumber() {
      var self = this;
      var oid = localStorage.getItem("oid");
      if (this.paymentMethod == 1) {
        self.paymenttype = "COD";
      }
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: {
          type: "generateAwb",
          payment: self.paymenttype,
          oid: oid,
        },
      }).then(function (response) {
        var data = response.data;
        // console.log('generateAwb',data)
        if (data.status == "success") {
          self.awbNumber = data.data;
          self.createShipping();
        }
      });
    },
    pincode_status() {
      if (this.add_id == 0 || this.add_id == undefined) {
        this.$toasted.global.error({
          message: "Please Select Shipping Address",
        });
      } else if (this.billing_id == 0 || this.billing_id == undefined) {
        this.$toasted.global.error({
          message: "Please Select Billing address",
        });
      } else if (this.cartCount.count == 0) {
        this.$toasted.global.error({
          message: "Your cart is empty please add some product",
        });
      } else {
        var self = this;
        axios({
          method: "POST",
          url: this.$root.URL_ROOT + "api.php",
          data: {
            type: "pincode_status",
            pincode: self.selectedAddress.zipcode,
          },
        }).then(function (response) {
          var data = response.data;
          if (data.status == "success") {
            self.orderGenerate();
          }
        });
      }
    },
    createShipping() {
      var amount = 0;
      var self = this;
      var getcouponMoney = parseFloat(this.myCouponMoney);
      if (this.paymentMethod == 1) {
        self.paymenttype = "COD";
        // amount = parseFloat((this.cartCount.total_amount + this.shipping) - this.myCouponMoney);
        var amount =
          parseFloat(
            this.cartCount.total_amount + this.shipping - getcouponMoney
          ) +
          parseFloat(
            (this.cartCount.total_gst / 100) * this.cartCount.total_amount
          );
        // {{parseFloat(this.cartCount.total_amount+this.shipping-getcouponMoney) + parseFloat((this.cartCount.total_gst / 100)*this.cartCount.total_amount )}}
      }
      var oid = localStorage.getItem("oid");
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: {
          type: "testingShipping",
          add_id: self.add_id,
          awb_number: self.awbNumber,
          oid: oid,
          product: self.paymenttype,
          qty: self.cartCount.count,
          amount: amount,
        },
      }).then(function (response) {
        var data = response.data;
        if (data.status == "success") {
          self.$toasted.global.success({
            message: "Success Please wait...",
          });
          if (self.paymentMethod == 1) {
            self.$router.push({
              name: "success_cod",
            });
          } else {
            self.$router.push({
              name: "success",
            });
          }
        }
      });
    },
    applyCoupon() {
      var self = this;
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: {
          type: "couponapply",
          coupon: self.couponCode,
          uid: self.uid,
        },
      }).then(function (response) {
        var data = response.data;
        if (data.status == "success") {
          self.myCouponMoney = data.data;
          localStorage.setItem("coupon", data.data);
          localStorage.setItem("coupon_name", self.couponCode);
          self.$toasted.global.success({
            message: data.msg,
          });
        } else {
          self.$toasted.global.error({
            message: data.msg,
          });
        }
      });
    },
    switchLoc() {
      var iv = this;
      var vali = this.$refs.form.validate();
      vali.then((val) => {
        if (val == true) {
          iv.save_address();
        }
      });
    },
    switchLocBilling() {
      var iv = this;
      var vali = this.$refs.formBilling.validate();
      vali.then((val) => {
        if (val == true) {
          iv.save_billing_address();
        }
      });
    },
    add_select() {
      if (this.add_id > 0) {
        this.dashboard_box = "step-3";
      } else {
        this.$toasted.global.error({
          message: "Please select address ",
        });
      }
    },
    includeStripe(URL, callback) {
      let documentTag = document,
        tag = "script",
        object = documentTag.createElement(tag),
        scriptTag = documentTag.getElementsByTagName(tag)[0];
      object.src = "https://" + URL;
      if (callback) {
        object.addEventListener(
          "load",
          function (e) {
            callback(null, e);
          },
          false
        );
      }
      scriptTag.parentNode.insertBefore(object, scriptTag);
    },
    makePayment: function (ev) {
      if (this.add_id == 0) {
        this.$toasted.global.error({ message: "Please add address" });
      } else {
        var ev = this;
        var getcouponMoney = parseFloat(this.myCouponMoney);
        if (ev.min > this.cartCount.total_amount) {
          this.shipping = 0;
        }
        // var amount = parseFloat((this.cartCount.total_amount + this.shipping) - getcouponMoney)
        // var amount = parseFloat(this.cartCount.total_amount + this.shipping - getcouponMoney)
        //var amount = parseFloat(this.cartCount.total_amount + this.shipping) - parseFloat((this.myCouponMoney / 100)*this.cartCount.total_amount)
        var amount = this.FinalTotalAmount.toFixed(0);
        // console.log(this.shipping);
        // console.log(this.cartCount.total_amount);
        // console.log(this.shipping);
        // console.log(getcouponMoney)
        var rzp1 = new Razorpay({
          key: "rzp_live_KQoPhy0e9bbSiB",
          amount: amount * 100,
          currency: "INR",
          handler: function (response) {
            ev.pay_id = response.razorpay_payment_id;
            localStorage.setItem("successData", response);
            ev.updatePayment(response);
          },
          ondismiss: function () {
            window.location.reload();
          },
          prefill: {},
          notes: {
            // address: this.address, //this.$store.state.profile.address
          },
          theme: {
            color: "#00FFFF",
          },
          //order_id: 1,
          redirect: false,
        });
        rzp1.open();
      }
    },
    updatePayment(payment_detail) {
      var self = this;
      var oid = localStorage.getItem("oid");
      var uid = localStorage.getItem("user");
      var coupon_name = localStorage.getItem("coupon_name");
      var couponMoney = localStorage.getItem("coupon");
      axios
        .post(this.$root.URL_ROOT + "api.php", {
          type: "payment_success",
          uid: uid,
          oid: oid,
          payment_detail: payment_detail,
          coupon_name: coupon_name,
          coupon: couponMoney,
        })
        .then(function (response) {
          var data = response.data;
          if (data.status == "success") {
            self.generateAwbNumber();
          }
        });
    },
    goToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    open_dashboard(vl) {
      this.dashboard_box = vl;
      window.scrollBy(100, 0);
    },
    open_dashboard2() {
      if (this.dashboard_box == "step-1") {
        this.dashboard_box = "step-3";
      } else {
        this.dashboard_box = "step-1";
      }
    },
    userDetail() {
      var ev = this;
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: {
          type: "userDetail",
          uid: ev.uid,
        },
      }).then(function (response) {
        var data = response.data;
        if (data.data) {
          ev.userData = data.data;
        } else {
          ev.logout();
          ev.$toasted.global.error({
            message: "Your Account is Deactivated",
          });
          setTimeout(function () {
            ev.$router.push({
              name: "Home",
            });
          }, 1000);
        }
      });
    },
    orderGenerate() {
      var ev = this;
      var paymentType = "Online";
      if (this.paymentMethod == 1) {
        paymentType = "COD";
      }
      var user_session = localStorage.getItem("user");
      var uid = "";
      if (user_session != null) {
        uid = user_session;
      } else {
        uid = null;
      }
      var gst = this.cartCount.total_gst;
      if (this.cartCount.total_amount >= this.min) {
        // var amount = parseFloat(this.cartCount.total_amount + this.shipping - this.myCouponMoney)
        // var amount = parseFloat(this.cartCount.total_amount + this.shipping) - parseFloat((this.myCouponMoney / 100)*this.cartCount.total_amount)
        var amount = this.FinalTotalAmount.toFixed(0);
        var shipping = this.shipping;
      } else {
        var amount = parseFloat(
          this.cartCount.total_amount - this.myCouponMoney
        );
        var amount =
          parseFloat(this.cartCount.total_amount) -
          parseFloat((this.myCouponMoney / 100) * this.cartCount.total_amount);
        var shipping = 0;
      }
      // console.log(amount);
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: {
          type: "order",
          uid: uid,
          address_id: ev.add_id,
          billing_id: ev.billing_id,
          total: amount,
          payment_type: paymentType,
          coupon: ev.myCouponMoney,
          shipping_amount: shipping,
          gst: gst,
        },
      }).then(function (response) {
        var data = response.data;
        if (data.status == "success") {
          localStorage.setItem("oid", data.oid);
          ev.isAdd = data.add_id;
          if (ev.paymentMethod == 2) {
            ev.makePayment();
          } else {
            ev.updatePayment();
          }
          ev.open_dashboard("step-3");
          ev.getAddress();
        }
      });
    },
    getAddress() {
      var ip_address = JSON.parse(localStorage.getItem("ip_address"));
      var user_session = JSON.parse(localStorage.getItem("user"));
      var uid = "";
      if (user_session != null) {
        uid = user_session;
      } else {
        uid = null;
      }
      var ev = this;
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: {
          type: "getAllAddress",
          uid: uid,
          ip_address: ip_address,
        },
      }).then(function (response) {
        var data = response.data;
        if (data.status == "success") {
          ev.addressDatas = data.data;
          if (ev.addressDatas.length == 0) {
            ev.dashboard_box = "step-2";
          }
          // ev.add_id = ev.addressDatas[0].add_id
          // ev.billing_id = ev.addressDatas[0].add_id
          ev.getSelectedAddress(ev.addressDatas[0].add_id);
        }
      });
    },
    save_address() {
      var ev = this;
      if (this.userAddress.add_title == "") {
        ev.$toasted.global.error({
          message: "please enter FullName ",
        });
      } else if (this.userAddress.mobile_no == "") {
        ev.$toasted.global.error({
          message: "please enter mobile number ",
        });
      } else if (this.userAddress.email == "") {
        ev.$toasted.global.error({
          message: "please enter Email ",
        });
      } else if (this.userAddress.add1 == "") {
        ev.$toasted.global.error({
          message: "please enter address 1 ",
        });
      } else if (this.userAddress.city == "") {
        ev.$toasted.global.error({
          message: "please enter city ",
        });
      } else if (this.userAddress.c_state == "") {
        ev.$toasted.global.error({
          message: "please select state ",
        });
      } else if (this.userAddress.add1 == "") {
        ev.$toasted.global.error({
          message: "please Enter address line 1 ",
        });
      } else if (this.userAddress.add2 == "") {
        ev.$toasted.global.error({
          message: "please Enter address line 2",
        });
      } else if (this.userAddress.zipcode == "") {
        ev.$toasted.global.error({
          message: "please Enter zipcode",
        });
      } else {
        var user_session = localStorage.getItem("user");
        var uid = "";
        if (user_session != null) {
          uid = user_session;
        } else {
          uid = null;
        }
        if (ev.userAddress.shippingBilling == true) {
          ev.userAddress.add_type = "Both";
        }
        // console.log(ev.userAddress.shippingBilling);
        axios({
          method: "POST",
          url: this.$root.URL_ROOT + "api.php",
          data: {
            type: "add_address",
            uid: uid,
            add_title: ev.userAddress.add_title,
            city: ev.userAddress.city,
            email: ev.userAddress.email,
            mobile: ev.userAddress.mobile_no,
            add1: ev.userAddress.add1,
            add2: ev.userAddress.add2,
            pincode: ev.userAddress.zipcode,
            state: ev.userAddress.c_state,
            country: ev.userAddress.country,
            add_type: ev.userAddress.add_type,
          },
        }).then(function (response) {
          var data = response.data;
          // console.log('add_address', response);
          if (data.status == "success") {
            ev.$toasted.global.success({
              message: data.msg,
            });
            ev.getShippingAddress();
            ev.getBillingAddress();
            ev.add_id = data.add_id;
            ev.isAdd = data.add_id;
            ev.open_dashboard("step-3");
            ev.getAddress();
          }
        });
      }
    },
    save_billing_address() {
      var ev = this;
      if (this.userAddressBilling.add_title == "") {
        ev.$toasted.global.error({
          message: "please enter FullName ",
        });
      } else if (this.userAddressBilling.mobile_no == "") {
        ev.$toasted.global.error({
          message: "please enter mobile number ",
        });
      } else if (this.userAddressBilling.email == "") {
        ev.$toasted.global.error({
          message: "please enter Email ",
        });
      } else if (this.userAddressBilling.add1 == "") {
        ev.$toasted.global.error({
          message: "please enter address 1 ",
        });
      } else if (this.userAddressBilling.city == "") {
        ev.$toasted.global.error({
          message: "please enter city ",
        });
      } else if (this.userAddressBilling.c_state == "") {
        ev.$toasted.global.error({
          message: "please select state ",
        });
      } else if (this.userAddressBilling.add1 == "") {
        ev.$toasted.global.error({
          message: "please Enter address line 1 ",
        });
      } else if (this.userAddressBilling.add2 == "") {
        ev.$toasted.global.error({
          message: "please Enter address line 2",
        });
      } else if (this.userAddressBilling.zipcode == "") {
        ev.$toasted.global.error({
          message: "please Enter zipcode",
        });
      } else {
        var user_session = localStorage.getItem("user");
        var uid = "";
        if (user_session != null) {
          uid = user_session;
        } else {
          uid = null;
        }

        axios({
          method: "POST",
          url: this.$root.URL_ROOT + "api.php",
          data: {
            type: "add_address",
            uid: uid,
            add_title: ev.userAddressBilling.add_title,
            city: ev.userAddressBilling.city,
            email: ev.userAddressBilling.email,
            mobile: ev.userAddressBilling.mobile_no,
            add1: ev.userAddressBilling.add1,
            add2: ev.userAddressBilling.add2,
            pincode: ev.userAddressBilling.zipcode,
            state: ev.userAddressBilling.c_state,
            country: ev.userAddressBilling.country,
            add_type: "Billing",
          },
        }).then(function (response) {
          var data = response.data;
          // console.log('add_address', response);
          if (data.status == "success") {
            ev.$toasted.global.success({
              message: data.msg,
            });
            ev.getShippingAddress();
            ev.getBillingAddress();
            ev.add_id = data.add_id;
            ev.isAdd = data.add_id;
            ev.open_dashboard("step-3");
            ev.getAddress();
          }
        });
      }
    },
    getState() {
      var ev = this;
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: {
          type: "getState",
        },
      }).then(function (response) {
        var data = response.data;
        ev.stateData = data;
      });
    },
    checked_add(id) {
      this.aid = id;
      this.getSelectedAddress();
      this.address_box = true;
    },
  },
};
</script>

<style scoped>
.mr-10 {
  margin: 10px;
}

.payment-radio {
  width: 20px !important;
  height: 25px !important;
}

.visiblity-none {
  visibility: hidden;
}

.total-table {
  position: absolute;
  right: 20px;
  top: 3px;
  font-weight: bold;
  font-size: 22px;
  color: #ba2930;
}

#frmStripePayment {
  max-width: 500px;
  padding: 25px;
  border: #d0d0d0 1px solid;
  border-radius: 4px;
  margin: auto;
}

.hide {
  display: none;
}

.test-data {
  margin-top: 40px;
}

.tutorial-table {
  border: #d0d0d0 1px solid;
  font-size: 0.8em;
  color: #4e4e4e;
}

.tutorial-table th {
  background: #efefef;
  padding: 12px;
  border-bottom: #e0e0e0 1px solid;
  text-align: left;
}

.tutorial-table td {
  padding: 12px;
  border-bottom: #d0d0d0 1px solid;
}

#frmStripePayment .field-row {
  margin-bottom: 20px;
}

#frmStripePayment div label {
  margin: 5px 0px 0px 5px;
  color: #49615d;
  width: auto;
}

.demoInputBox {
  padding: 10px;
  border: #d0d0d0 1px solid;
  border-radius: 4px;
  background-color: #fff;
  width: 100%;
  margin-top: 5px;
  box-sizing: border-box;
}

.demoSelectBox {
  padding: 10px;
  border: #d0d0d0 1px solid;
  border-radius: 4px;
  background-color: #fff;
  margin-top: 5px;
}

select.demoSelectBox {
  height: 35px;
  margin-right: 10px;
}

.error {
  background-color: #ff6600;
  padding: 8px 10px;
  border-radius: 4px;
  font-size: 0.9em;
}

.success {
  background-color: #c3c791;
  padding: 8px 10px;
  border-radius: 4px;
  font-size: 0.9em;
}

.info {
  font-size: 0.8em;
  color: #ff6600;
  letter-spacing: 2px;
  padding-left: 5px;
}

.btnAction {
  background-color: #586ada;
  padding: 10px 40px;
  color: #fff;
  border: #5263cc 1px solid;
  border-radius: 4px;
  cursor: pointer;
}

.btnAction:focus {
  outline: none;
}

.column-right {
  margin-right: 6px;
}

.contact-row {
  display: inline-block;
}

.cvv-input {
  width: 60px;
}

#error-message {
  margin: 0px 0px 10px 0px;
  padding: 5px 25px;
  border-radius: 4px;
  line-height: 25px;
  font-size: 0.9em;
  color: #ca3e3e;
  border: #ca3e3e 1px solid;
  display: none;
  width: 300px;
}

#success-message {
  margin: 0px 0px 10px 0px;
  padding: 5px 25px;
  border-radius: 4px;
  line-height: 25px;
  font-size: 0.9em;
  color: #3da55d;
  border: #43b567 1px solid;
  width: 300px;
}

.display-none {
  display: none;
}

#response-container {
  padding: 40px 20px;
  width: 270px;
  text-align: center;
}

.ack-message {
  font-size: 1.5em;
  margin-bottom: 20px;
}

#response-container.success {
  border-top: #b0dad3 2px solid;
  background: #e9fdfa;
}

#response-container.error {
  border-top: #c3b4b4 2px solid;
  background: #f5e3e3;
}

.img-response {
  margin-bottom: 30px;
}

#loader {
  display: none;
}

.checkout-span {
  font-size: 14px;
  font-weight: normal;
}

#loader img {
  width: 45px;
  vertical-align: middle;
}

.addSection {
  margin-top: 50px;
}

.sec-head {
  background: #c1c1c1;
  padding: 10px;
}

.card {
  box-shadow: 0px 0px 5px #c1c1c1;
  padding: 20px 0 0 50px;
  color: #000;
  font-weight: bold;
  font-size: 16px;
}

.mt-20 {
  margin-top: 20px;
}

.radiobtn {
  position: absolute;
  top: 60px;
  left: 20px;
  visibility: hidden;
}

.margin {
  margin: 10px;
}

.margin-left {
  margin-left: 10px;
}

.checkout-card {
  padding: 20px !important;
}

.checkout-step {
  border: 1px solid #f1f1f1;
  padding: 20px 0 15px 30px;
  border-radius: 10px;
  margin-bottom: 15px;
}

section.checkout-step.-reachable.-complete h1 .step-edit {
  cursor: pointer;
  display: block;
  float: right;
  margin-right: 2.125rem;
  text-transform: capitalize;
  font-weight: 500;
}

@media only screen and (max-width: 600px) {
  .card[data-v-fd530f40] {
    box-shadow: 0px 0px 1px hsl(0, 0%, 76%);
    padding: 15px 10px 10px 35px;
    color: #000;
    width: 100%;
    font-weight: bold;
    font-size: 13px;
  }

  .sidemenu-hide {
    display: none;
  }
}
</style>
