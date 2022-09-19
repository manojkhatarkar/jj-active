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
            action="#"
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
         <figure id="banner-about" style="overflow: hidden !important;
    max-height: 400px;">
            <a href="#"
              ><img
                src="../assets/img/banner-about.jpg"
                class="img-responsive w-100"
                alt="img-holiwood"
            /></a>
          </figure>
          <div class="title-banner">
            <h1>Wishlist</h1>
            <p>
              <router-link to="/" title="Home">Home</router-link
              ><i class="fa fa-caret-right"></i>Wishlist
            </p>
          </div>
        </div>
      </div>
      <div class="cart-box-container">
        <div class="container container-ver2">
          <div class="box cart-container">
            <table class="table cart-table space-30" v-if="Allproducts.length>0">
              <thead>
                <tr>
                  <th class="product-photo">PRODUCT NAME</th>
                  <th class="produc-name"></th>
                  <th class="produc-price">PRICE</th>
                  <th class="total-price">ADD TO CART</th>
                  <th class="product-remove"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="item_cart" v-for="cart in Allproducts" :key="cart.id">
                  <td class="product-photo">
                    <img :src="$root.URL_ROOT+'uploads/Product/'+cart.front_image"  alt="Futurelife" />
                  </td>
                  <td class="produc-name">
                    <a href="#" title="">{{cart.product_name}}</a>
                  </td>
                  <td class="produc-price">
                    <input :value="cart.selling_cost" size="4" type="text" />
                  </td>
                 
                  <td class="add-to-cart">
                    <a class="btn-shop pointer" @click="add_to_cart(cart.pid,cart.product_name,'1',cart.selling_cost)">SHOP NOW</a>
                  </td>
                  <td class="product-remove">
                    <a class="remove pointer" @click="remove(cart.id)"  title="close"
                      ><img
                        src="../assets/img/icon-delete-cart.png"
                        alt="close"
                    /></a>
                  </td>
                </tr>
               
              </tbody>
            </table>
            <div v-else class="text-center card" style="margin:50px;">
                                <h1>No Record Found</h1>
                            </div>
          </div>
          <!-- End container -->
        </div>
        <!-- End cat-box-container -->
      </div>
    </main>
    <Footer />
  </body>
</template>

<script>
import Header from "@/components/navbar";
import Footer from "@/components/footer";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      Allproducts: [],
      loading: true,
      NoRecord: false,
      AllproductsShow: false,
      name: this.$route.params.name,
      uid: localStorage.getItem("user"),
    };
  },
  mounted() {
    this.getData();
    this.goToTop();
  },
  watch: {
    // Allproducts: function (id) {
    //     this.Allproducts = id;
    //     this.getData();
    // },
  },
  methods: {
    remove(id) {
      const axios = require("axios");
      var ev = this;
      var param = {
        id: id,
        table: "mss_wishlist",
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
            ev.getData();
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
    getData() {
      const axios = require("axios");
      var ip_address = localStorage.getItem("ip_address");
      var user_session = localStorage.getItem("user");
      var uid = "";
      if (user_session != null) {
        uid = user_session;
      } else {
        uid = null;
      }
      var self = this;
      axios
        .post(this.$root.URL_ROOT + "api.php", {
          type: "getMyWishList",
          uid: uid,
          ip: ip_address,
        })
        .then(function (response) {
          var data = response.data;
          if (data.status == "success") {
            self.AllproductsShow = true;
            self.Allproducts = data.data;
          } else {
            self.NoRecord = true;
            self.AllproductsShow = false;
          }
        });
    },
  },
};
</script>

<style>
.color-div {
  width: 50px;
  height: 50px;
}
</style>
