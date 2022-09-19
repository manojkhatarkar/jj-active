<template>
<body>
    <Header/>
    <main>
        <div class="content-search">
            <div class="container container-100">
                <i class="far fa-times-circle" id="close-search"></i>
                <h3 class="text-center">what are your looking for ?</h3>
                <form method="get" action="http://landing.engotheme.com/search" role="search" style="position: relative">
                    <input type="text" class="form-control control-search" value="" autocomplete="off" placeholder="Enter Search ..." aria-label="SEARCH" name="q" />
                    <button class="button_search" type="submit">search</button>
                </form>
            </div>
        </div>
 <div class="banner">
        <div class="">
         <figure id="banner-about" class="max-height-500">
            <a href="#">
              <!-- <img
                src="../assets/images/banner/about-banner.png"
                class="img-responsive w-100"
                alt="img-holiwood"
            /> -->
            </a>
          </figure>
          <div class="title-banner">
            <h1>Register</h1>
            <p>
              <router-link to="/" class="theme-color-text" title="Home">Home</router-link
              ><i class="fa fa-caret-right"></i>Register
            </p>
          </div>
        </div>
      </div>
        <div class="container container-ver2">
            <div class="page-login box space-50">
                        <ValidationObserver ref="form">
                <div class="row margin-auto">
                    <form class="form-horizontal" method="POST">
                            <div class="col-md-6 sign-in space-30">
                                <h3>Sign Up</h3>
                                <p>Hello, Welcome to Vanilla Hues.</p>
                                <!-- End social -->
                                <div class="group box mb-20">
                                    <label class="control-label" for="inputemail">Full Name *</label>
                                    <validation-provider rules="required|alpha_spaces|min:3" v-slot="{ errors }">
                                        <input type="text" id="fname" v-model="fields.fullname" class="form-control" name="name" placeholder="Enter Your Fullname Here">
                                        <span class="error-msgs">{{ errors[0] }}</span>
                                    </validation-provider>
                                </div>
                                <div class="group box mb-20">
                                    <label class="control-label" for="inputemail">Email *</label>
                                    <validation-provider rules="required|email" v-slot="{ errors }">
                                        <input type="email" class="form-control" id="email" v-model="fields.email" name="email" placeholder="Your Email Here">
                                        <span class="error-msgs">{{ errors[0] }}</span>
                                    </validation-provider>
                                </div>
                                <div class="group box mb-20">
                                    <label class="control-label" for="inputemail">Mobile *</label>
                                    <validation-provider rules="required|integer|min:10|max:10" v-slot="{ errors }">
                                        <input type="number" id="mobile" v-model="fields.mobile" class="form-control" name="mobile" placeholder="Your Mobile Number Here">
                                        <span class="error-msgs">{{ errors[0] }}</span>
                                    </validation-provider>
                                </div>
                                <!-- End form -->
                            </div>
                            <!-- End col-md-6 -->
                            <div class="col-md-6 sign-in space-30">
                                <div class="space-109"></div>
                                <div class="group box mb-20">
                                    <label class="control-label" for="inputemail">Country *</label>
                                    <input type="text" class="form-control" id="Country" v-model="fields.country" name="Country" disabled placeholder="Enter your country here..">
                                </div>
                                <div class="group box mb-20">
                                    <label class="control-label" for="inputemail">Password *</label>
                                    <validation-provider rules="required|min:5" v-slot="{ errors }">
                                        <input class="form-control" type="password" v-model="fields.password" placeholder="Your Password Here" value="sfsg" name="Password">
                                        <span class="error-msgs">{{ errors[0] }}</span>
                                    </validation-provider>
                                </div>
                                <div class="group box mb-20">
                                    <label class="control-label" for="inputemail">Confirm Password *</label>
                                    <validation-provider rules="required|min:5" v-slot="{ errors }">
                                        <input class="form-control" v-model="fields.cpassword" type="password" placeholder="Your Confirm Password Here" value="ssres" name="Confirm Password">

                                        <span class="error-msgs">{{ errors[0] }}</span>
                                    </validation-provider>
                                </div>
                            </div>
                    </form>
                    <!-- End col-md-6 -->
                </div>
                <div class="row margin-auto" >
                    <div class="col-md-6 pl-0">
                        <button type="button" @click="switchLoc" class="link-v1 rt">Continue</button>
                    </div>
                </div>
                        </ValidationObserver>
            </div>
        </div>
    </main>
    <Footer />
</body>
<!-- end of page-wrapper -->
</template>

<script>
import axios from 'axios'
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import VueRecaptcha from 'vue-recaptcha';

import {
    ValidationProvider,
    ValidationObserver
} from "vee-validate";

export default {
    components: {
        Header,
        Footer,
        VueRecaptcha,
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            isHas: false,
            passshow: 'password',
            passshows: 'password',
            uid: localStorage.getItem('user'),
            reCap: false,
            fields: {
                type: 'signup',
                fullname: '',
                address: '',
                city: '',
                state: '',
                pincode: '',
                mobile: '',
                email: '',
                password: '',
                cpassword: '',
                add1: '',
                add2: '',
                mobile_no: '',
                zipcode: '',
                add_title: '',
                country: 'India',
                ip_address: JSON.parse(localStorage.getItem('ip_address')),
            },

        }
    },
    mounted() {
        this.uid = localStorage.getItem('user')
        this.check()
        this.goToTop()
    },
    methods: {
        markRecaptchaAsVerified(response) {
            this.pleaseTickRecaptchaMessage = 'This field is required';
            this.recaptchaVerified = true;
        },
        switchLoc() {
            var vali = this.$refs.form.validate();
                vali.then(val => {
                        if (val == true) {
                            this.signup()
                        }
                    }

                )
        },
         signup() {
            if (this.fields.fullname === '') {
                this.$toasted.global.error({
                    message: 'Please enter First Name'
                })
            } else if (this.fields.email === '') {
                this.$toasted.global.error({
                    message: 'Please enter Email'
                })
            } else if (this.fields.mobile === '') {
                this.$toasted.global.error({
                    message: 'Please enter Valid Mobile'
                })
            } else if (this.fields.password === '') {
                this.$toasted.global.error({
                    message: 'Please enter password'
                })
            } else if (this.fields.cpassword === '') {
                this.$toasted.global.error({
                    message: 'Please enter confirm password'
                })
            } else if (this.fields.cpassword !== this.fields.password) {
                this.$toasted.global.error({
                    message: 'Confirm password and password must be same'
                })
            } else {
                var vi = this
                vi.fields.add1 = vi.fields.address,
                vi.fields.add2 = '',
                vi.fields.mobile_no = vi.fields.mobile,
                vi.fields.add_title = vi.fields.fullname,
                axios({
                    method: 'POST',
                    url: this.$root.URL_ROOT + 'api.php',
                    data: this.fields
                }).then(function (response) {
                    var data = response.data
                    if (data.status === 'success') {
                        vi.$toasted.global.success({
                            message: 'Success Please wait...'
                        })
                        vi.$router.push({
                            name: 'login'
                        });
                    } else {
                        vi.$toasted.global.error({
                            message: data.msg
                        })
                    }
                })
            }
        },
        goToTop() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        check() {
            if (this.uid != null) {
                window.location.href = 'myaccount';
            }
        },
       
    }
}
</script>
