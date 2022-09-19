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
            <h1>Track Order</h1>
            <p>
              <a href="#" title="Home">Home</a
              ><i class="fa fa-caret-right"></i>Track Order
            </p>
          </div>
        </div>
      </div>
      <div class="container container-ver2 order-tracking space-padding-tb-30">
        <p>
          Please enter your Order ID in the box below and press Enter. This was
          given to you on your receipt and in the confirmation email you should
          have received.
        </p>
        <div class="tracking-content center">
          <form class="form-horizontal">
            <div class="box space-20">
              <label for="inputfname" class="control-label">ORDER ID</label>
              <input id="inputfname" class="form-control" type="text" />
            </div>
            <div class="box space-40">
              <label for="email" class="control-label">BILLING EMAIL</label>
              <input id="email" class="form-control" type="text" />
            </div>
            <a class="link-v1 lh-50 rt" href="#" title="PLACE ORDER">TRACK</a>
          </form>
        </div>
      </div>
    </main>
    <Footer />
  </body>
</template>

<script>
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import Testimonial from "@/components/Testimonial";
import Partners from "@/components/Partners";
import carousel2 from "vue-owl-carousel";
import carousel from "vue-owl-carousel2";
import axios from "axios";
import $ from "jquery";

export default {
  props: ["catedatas"],
  components: {
    Header,
    Footer,
    carousel,
    carousel2,
    Partners,
    Testimonial,
  },
  data() {
    return {
      trackOrderDetail: [],
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
  mounted() {
    this.uid = localStorage.getItem("user");
    this.trackMyOrder(this.$route.params.id);
    this.goToTop();
  },
  methods: {
    goToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    async clickme() {
      var x = document.getElementsByTagName("field");
      var iv = this;
      for (var i = 0; i <= x.length; i++) {
        var check = x[i]["attributes"]["name"]["nodeValue"]; //=='awb_number';
        // console.log(check);
        if (check == "awb_number") {
          // iv.loadProgressBar()
          document.getElementById("awb_num").innerHTML = x[i]["innerHTML"];
        } else if (check == "orderid") {
          document.getElementById("oid").innerHTML = x[i]["innerHTML"];
        } else if (check == "destination") {
          document.getElementById("destination").innerHTML = x[i]["innerHTML"];
        } else if (check == "current_location_name") {
          document.getElementById("current_location").innerHTML =
            x[i]["innerHTML"];
        } else if (check == "customer") {
          document.getElementById("customer").innerHTML = x[i]["innerHTML"];
        } else if (check == "status") {
          document.getElementById("status").innerHTML = x[i]["innerHTML"];
        } else if (check == "pickupdate") {
          document.getElementById("pickupdate").innerHTML = x[i]["innerHTML"];
        } else if (check == "tracking_status") {
          document.getElementById("tracking_status").innerHTML =
            x[i]["innerHTML"];
        } else if (check == "expected_date") {
          console.log("expected_date", x[i]["innerHTML"]);

          document.getElementById("expected_date").innerHTML =
            x[i]["innerHTML"];
        } else if (check == "delivery_date") {
          document.getElementById("delivery_date").innerHTML =
            x[i]["innerHTML"];
        } else if (check == "city") {
          document.getElementById("city").innerHTML = x[i]["innerHTML"];
        } else if (check == "state") {
          document.getElementById("state").innerHTML = x[i]["innerHTML"];
        }
      }
    },
    trackMyOrder(awb_number) {
      var ev = this;
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: {
          type: "trackMyOrder",
          awb_number: awb_number,
        },
      }).then(function (response) {
        var data = response.data;
        ev.trackOrderDetail = data;
        ev.getCart();
        setTimeout(() => {
          ev.clickme();
        }, 1000);
      });
    },
  },
};
</script>
