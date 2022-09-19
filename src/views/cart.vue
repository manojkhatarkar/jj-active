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
        <div class="">
         <figure id="banner-about" class="max-height-500">
           
            <a href="#"
              >
                               
              <img
                src="../assets/images/other.png"
                class="img-responsive w-100"
                alt="img-holiwood"
            /></a>
          </figure>
          <div class="title-banner">
            <h1>Shopping Cart</h1>
            <p>
              <router-link class="theme-color-text" to="/" title="Home">Home</router-link
              ><i class="fa fa-caret-right"></i>Shopping Cart
            </p>
          </div>
        </div>
      </div>
     
      <div class="cart-box-container" v-if="!NoRecordFound">
        <div class="container container-ver2 space-padding-tb-30">
          <div class="row head-cart">
            <div class="col-md-4 space-30 px-15">
              <div class="item active center img-color-1">
                <p class="icon">01</p>
                <h3>Shopping cart</h3>
              </div>
            </div>
            <!-- End col-md-4 -->
            <div class="col-md-4 space-30 px-15">
              <div class="item center img-color-2">
                <p class="icon">02</p>
                <h3>Check out</h3>
              </div>
            </div>
            <!-- End col-md-4 -->
            <div class="col-md-4 space-30">
              <div class="item center img-color-3">
                <p class="icon">03</p>
                <h3>Order completed</h3>
              </div>
            </div>
            <!-- End col-md-4 -->
          </div>
        </div>
        <!-- End container -->
        <div class="container container-ver2">
          <div class="box cart-container">
            <table class="table cart-table space-30">
              <thead>
                <tr>
                  <th class="product-photo">Product List</th>
                  <th class="produc-name">Name</th>
                  <th class="produc-price">Price</th>
                  <th class="product-quantity">Quantity</th>
                  <th class="product-quantity">GST</th>
                  <th class="total-price">Total</th>
                  <th class="product-remove"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="item_cart" v-for="cart in cartCount.data" :key="cart.id">
                  <td class="product-photo"> 
                    <img :src="$root.URL_ROOT+'uploads/Product/'+cart.front_image" :alt="cart.front_image" />
                  </td>
                  <td class="produc-name">
                    <router-link :to="{name: 'productDetail', params:{id:cart.pid}}" title="">{{cart.name}}</router-link>
                  </td>
                  <td class="produc-price">
                    <input :value="cart.selling_cost" size="4" type="text" />
                  </td>
                  <td class="product-quantity">
                    <form enctype="multipart/form-data">
                      <div class="product-signle-options product_15 clearfix">
                        <div class="selector-wrapper size">
                           <div class="Quality">
                    <div class="input-group input-number-group m-res">
                      <div class="input-group-button"  @click="minusCart(cart.id,cart.qty)" :class="cart.qty==1 ? 'disabled' : ''">
                        <span class="input-number-decrement">-</span>
                      </div>
                      <input
                        class="input-number unset-size"
                        type="number"
                        min="0"
                        max="1000"
                        :value="cart.qty"
                      />
                      <div class="input-group-button" @click="addCart(cart.id,cart.qty)">
                        <span class="input-number-increment">+</span>
                      </div>
                    </div>
                  </div>
                        </div>
                      </div>
                    </form>
                  </td>
                    <td class="produc-price">{{LinksDetails.gst_number}}</td>
                  
                  <td class="total-price"> {{cart.totalamount}} </td>
                  <td class="product-remove">
                    <a class="remove pointer" @click="remove(cart.id)" title="close">
                      <img src="../assets/img/icon-delete-cart.png" alt="close" />
                    </a>
                  </td>
                </tr>
                
              </tbody>
            </table>
            <div class="row-total">
              <div class="float-left">
                <h3>Sub Total</h3>
              </div>
              <!--End align-left-->
              <div class="float-right">
                <p>INR {{cartCount.total_amount}} </p>
              </div>
              <!--End align-right-->
            </div>
            <div class="box space-30">
              <div class="float-left">
                <!-- <router-link
                  class="link-v1 lh-50 bg-brand"
                  :to="{name: 'Product', params:{name: 'Shop', id: 1}}"
                  title="CONTINUS SHOPPING"
                  >CONTINUS SHOPPING</router-link
                > -->
              </div>
              <!-- End float left -->
              <div class="float-right">
                  <div class="item card">
                    <h3 class="title">CART TOTAL</h3>
                    <p class="box">
                      <span class="float-left">SHIPPING</span
                      ><span class="float-right">INR {{shipping}}</span>
                    </p>
                    <p class="box space-30">
                      <span class="float-left"><b>SUBTOTAL</b></span
                      ><span class="float-right"
                        ><b class="color-brand">INR {{cartCount.total_amount + shipping}} </b></span
                      >
                    </p>
                                                <router-link :to="{ name: 'login',params:{page:'checkout'}}" v-if="!uid" :class="uid ? 'disabled' : ''" class="link-v1 lh-50 rt">Login for checkout</router-link>

                    <router-link
                    v-else
                      class="link-v1 lh-50 rt"
                      :to="{name: 'checkout'}"
                      title="POCEEED TO CHECKOUT"
                      >POCEEED TO CHECKOUT</router-link
                    >
                </div>
              </div>
              <!-- End float-right -->
            </div>
            <!-- End box -->
           
            <!-- End box -->
          </div>
          <!-- End container -->
        </div>
        <!-- End cat-box-container -->
      </div>
        <div class="container" v-if="NoRecordFound">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1>No Record Found</h1>
            </div>
          </div>
        </div>
    </main>
    <Footer />
  </body>
</template>

<script>
import axios from "axios";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
export default {
  props: ["catedatas"],
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      data: "",
      cartCount: [],
      shipping: 0,
      min: 0,
      card: "",
      LinksDetails: [],
      uid: localStorage.getItem("user"),
      NoRecordFound: false,
      fields: {
        type: "update_profile",
        uid: "",
        fullname: "",
        mobile: "",
        address: "",
        Token: this.$root.auth,
      },
    };
  },
  watch: {
      // this.getCart();
 cartCount: function () {
            if (this.cartCount.count == 0) {
              
                this.NoRecordFound = true
            }
        },
    cartCount: function (cartCount) {
      this.cartCount = cartCount;
      // this.getCart();
    },
  },
  mounted() {
    this.uid = localStorage.getItem("user");
    this.goToTop();
    this.getCart();
    this.shippingCharge();
    this.site_setting()
  },
  methods: {
    addCart(id, qty) {
      var ev = this;
      axios
        .post(this.$root.URL_ROOT + "api.php", {
          type: "addQty",
          cart_id: id,
          qty: qty,
        })
        .then(function (response) {
          console.log(response);
          if (response.data.status == "success") {
            ev.$toasted.global.success({
              message: response.data.msg,
            });
            ev.getCart();
          } else {
            ev.$toasted.global.error({
              message: response.data.msg,
            });
          }
        });
    },
    minusCart(id, qty) {
      var ev = this;
      axios
        .post(this.$root.URL_ROOT + "api.php", {
          type: "minQty",
          cart_id: id,
          qty: qty,
        })
        .then(function (response) {
          console.log(response);
          if (response.data.status == "success") {
            ev.$toasted.global.success({
              message: response.data.msg,
            });
            ev.getCart();
          } else {
            ev.$toasted.global.error({
              message: response.data.msg,
            });
          }
        });
    },
    remove(id) {
      var ev = this;
      var param = {
        id: id,
        table: "mss_cart",
        type: "commonDelete",
      };
      this.$swal({
        title: "Delete this ?",
        text: "Are you sure? You won't be able to revert this!",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#f00",
        confirmButtonText: "Yes, Delete it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            method: "POST",
            url: this.$root.URL_ROOT + "api.php",
            data: param,
          }).then(function (response) {
            var data = response.data;
            ev.getCart();
            console.log(data);
            // this.deleted = data
            ev.$toasted.global.success({
              message: "Deleted successfully",
            });
          });
        }
      });
    },
    goToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    update_cart_pre(cid, pid, pname, qty, price, mode) {
      var t = this.update_cart(cid, pid, pname, qty, price, mode);
      console.log(t);
      setTimeout(() => {
        if (t != null) {
          this.getCart();
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
.shopping-cart .img-thumbnail {
  width: 50px;
}
/* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	table { 
	  	width: 100%; 
	}

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}

	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
		/* Label the data */
		content: attr(data-column);

		color: #000;
		font-weight: bold;
	}

}
</style>
