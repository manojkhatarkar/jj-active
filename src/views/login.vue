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
                               
              <!-- <img
                src="../assets/images/banner/about-banner.png"
                class="img-responsive w-100"
                alt="img-holiwood"
            /> -->
            </a>
          </figure>
          <div class="title-banner">
            <h1>Login</h1>
            <p>
              <router-link to="/" class="theme-color-text" title="Home">Home</router-link
              ><i class="fa fa-caret-right"></i>Login
            </p>
          </div>
        </div>
      </div>

      <div class="container container-ver2">
        <div class="page-login box space-50">
          <div class="row">
            <div class="col-md-3 hidden-sm"></div>
            <div class="col-md-6  sign-in space-30 text-center">
              <h1>Sign In</h1>
              <p>Hello, Welcome to Your Account.</p>
              <!-- End social -->
              <form class="form-horizontal" method="POST">
                <div class="group box space-20">
                  <label class="control-label" for="inputemail"
                    >EMAIL ADDRESS *</label
                  >
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Your email"
                    id="inputemail" v-model="username"
                  />
                </div>
                <div class="group box">
                  <label class="control-label" for="inputemail"
                    >PASSWORD *</label
                  >
                  <input
                    class="form-control"
                    type="password"
                    placeholder="Password"
                    id="inputpass" v-model="password"
                  />
                </div>
                <div class="remember">
                 
                  <router-link  :to="{ name: 'forget' }" class="help" title="help ?"
                    >Forgot Your Password?</router-link>
                </div>
                <button type="button" @click="login" class="link-v1 rt">LOGIN NOW</button>
              </form>
               <hr>

                                <div class="no-accoun text-center">
                                    <router-link  :to="{ name: 'registration' }">
                                        No Account? Create New Account Here
                                    </router-link >
                                </div>
              <!-- End form -->
            </div>
          </div>
        </div>
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
      isHas: false,
      passshow: "password",
      username: "",
      password: "",
      role: "",
      token: localStorage.getItem("token"),
      msg: [],
      page: this.$route.params.page ? this.$route.params.page : 'myaccount'
    };
  },
  mounted() {
    // this.login()
    this.uid = localStorage.getItem("user");
    this.check();
    this.goToTop();
  },
  methods: {
    goToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    check() {
      if (this.uid != null) {
        window.location.href = "myaccount";
      }
    },
    login() {
      var vi = this;
      const axios = require("axios");
      var ip_address = JSON.parse(localStorage.getItem("ip_address"));
      if (vi.username === "") {
        vi.$toasted.global.error({
          message: "Please enter username",
        });
      } else if (vi.password === "") {
        vi.$toasted.global.error({
          message: "Please enter password",
        });
      } else {
        axios({
          method: "POST",
          url: vi.$root.URL_ROOT + "api.php",
          data: {
            type: "userlogin",
            username: vi.username,
            password: vi.password,
            ip_address: ip_address,
          },
        }).then(function (response) {
          var data = response.data;
          console.log(response);
          if (data.status === "success") {
            localStorage.setItem("user", data.session.uid);
            localStorage.setItem("token", data.session.uid);
            vi.$toasted.global.success({
              message: "Login Success Please wait...",
            });
            // setTimeout(() => {
            vi.$router.push({ name: vi.page });
            vi.$router.push('/'+vi.page);
            // }, 2000);
          } else {
            vi.$toasted.global.error({
              message: "Invalid id or password",
            });
          }
        });
      }
      return false;
    },
  },
};
</script>
