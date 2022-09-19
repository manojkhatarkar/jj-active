<template>
 <div class="page-wrapper">
        <!-- Start header -->
        <Header />
        <!-- end of header -->
             <div class="banner">
        <div class="">
          <figure id="banner-about" class="max-height-200">
            <a href="#"
              >
                            <div class="banner-logo">
                     <!-- <img src="../assets/images/banner/about-banner.png" class="b-logo hidden-sm" /> -->
              </div>
              <img
                src="../assets/img/banner-about.jpg"
                class="img-responsive w-100"
                alt="img-holiwood"
            /></a>
          </figure>
          <div class="title-banner">
            <h1>Forgot Password</h1>
            <p>
              <router-link to="/" title="Home">Home</router-link
              ><i class="fa fa-caret-right"></i>Forgot Password
            </p>
          </div>
        </div>
      </div>
        <!-- login-area start -->

  <div class="container container-ver2">
        <div class="page-login box space-50">
          <div class="row">
            <div class="col-md-3 hidden-sm"></div>
            <div class="col-md-6  sign-in space-30 text-center">
              <h1>Forgot Password</h1>
              <p>Sign into your pages account</p>
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
                    id="inputemail" v-model="email"
                  />
                </div>
                
                
                <button type="button" @click="forget" class="link-v1 rt">Send OTP</button>
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

      
        <!-- login-area end -->
        <!-- start of tp-site-footer-section -->
        <Footer />
        <!-- end of tp-site-footer-section -->

    </div>
</template>

<script>
import Header from "@/components/navbar";
import Footer from "@/components/footer";
export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            email: '',
            password: '',
            role: '',
            token: localStorage.getItem('token'),
            msg: []
        }
    },
    mounted() {
        // this.login()
        this.uid = localStorage.getItem('user')
        this.check()
   this.goToTop ()

    },
    methods: {
        check() {
            if (this.uid != null) {
                window.location.href = 'myaccount';
            }
        },
        forget() {
            var vi = this
            const axios = require('axios')
            if (this.email === '') {
                this.$toasted.global.error({
                    message: 'Please enter Your Email'
                })
            } else {
                        localStorage.setItem('forgotemail', this.email)
                axios({
                    method: 'POST',
                    url: this.$root.URL_ROOT + 'api.php',
                    data: {
                        type: 'forgot',
                        email: this.email
                    }
                }).then(function (response) {
                    var data = response.data
                    console.log(response)
                    if (data.status === 'success') {
                        vi.$toasted.global.success({
                            message: 'An OTP Code Send To Your Email Address Please Check...'
                        })
                        // window.location.href = 'resetpassword';
                        vi.$router.push({ name: 'resetpassword' });
                    } else {
                        // vi.$toasted.global.error({
                        //     message: data.msg
                        // })
                         vi.$toasted.global.success({
                            message: 'An OTP Code Send To Your Email Address Please Check...'
                        })
                        // window.location.href = 'resetpassword';
                        vi.$router.push({ name: 'resetpassword' });
                    }
                })
            }
            return false
        }
    }
}
</script>
