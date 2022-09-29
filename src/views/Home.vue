<template>
<body>
    <div id="wrapper" class="wrapper">
       <div style="position:fixed;z-index: 999;width: 100%;">
       <!-- Header Area Start Here -->
        <Header />
        <!-- Header Area End Here -->
    </div>
    <div class="d-fixed">

        <!-- Slider Area Start Here -->
        <Slider />
        <!-- Slider Area End Here -->
    </div>

        <div class="space-hearder"></div>
        <!-- About Area Start Here -->
        <section class="overlay-icon-layout-event section-space-equal bg-light" style="background-color:#f1f1f1 !important;">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-12 col-lg-12">
                        <div class="about-layout1">
                            <h2 class="bold"> {{LinksDetails.about_heading}} </h2>
                            <p style="text-align: center;">
                            {{LinksDetails.about_content}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       <div style="z-index:999;">
       <section class="overlay-icon-layout-event section-space-default2 bg-common section-space-default bg-light section-space-default bg-light">
            <div class="container zoom-gallery menu-list-wrapper">
                <div class="section-heading title-black color-dark text-center">
                    <h2>Event Schedule</h2>
                    <!-- <p>Dorem ipsum dolor sit. Incidunt laborum beatae earum nihil odio consequatur</p> -->
                </div>
                <div class="table-responsive hide">
                    <table class="table table-striped schedule-layout1">
                        <tbody class="menu-list">
                            <tr v-for="latest in latestData" :key="latest.id" class="menu-item">
                                <th>
                                    <!-- <div class="day-number">Day - 01</div> -->
                                    <div class="schedule-date"> {{latest.date | formatDate}}  </div>
                                </th>
                                <td>
                                    <div class="schedule-title">
                                        <!-- <img :src="$root.URL_ROOT+'uploads/Product/'+latest.front_image" class="img-responsive " alt="img-holiwood" /> -->
                                        <a href="#">{{latest.name}}</a>
                                    </div>
                                </td>
                                 <td>
                                    <div class="schedule-time">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>{{latest.state +','+latest.city}} </div>
                                </td>
                                <td>
                                    <div class="schedule-time">
                                        <i class="fa fa-clock-o" aria-hidden="true"></i>{{latest.stime}} - {{latest.etime}}  </div>
                                </td>
                                <td>
                                    <router-link :to="{name:'Event',params:{id:latest.id}}" class="btn-fill size-xs color-yellow border-radius-5 pull-right btn-register">Register</router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="row event-row">
                    <template v-for="latest in latestData" >
                        <div class="col-md-4 col-sty" :key="latest.id">
                            <div class="body-box">
                                <div class="header-body-box">
                                    <div class="header-txt">
                                        <h3 class="heading-txt">{{latest.date | formatDate}} </h3>
                                    </div>
                                </div>
                                <div class="main-content-box">
                                    <div clas="content-txt">
                                        <div class="event-name-box">
                                            <h3 class="event-nm">{{latest.name}}</h3>
                                        </div>
                                        <div class="location-box">    
                                            <i class="fa fa-map-marker icn-styl" aria-hidden="true"></i>{{latest.state +','+latest.city}}
                                        </div>
                                        <div class="timing-box">
                                            <i class="fa fa-clock-o icn-styl" aria-hidden="true"></i>{{latest.stime}} - {{latest.etime}}
                                        </div>
                                       

                                    </div>
                                </div>
                               
                                    <router-link :to="{name:'Event',params:{id:latest.id}}" class="btn btn-info reg-btn" >Register</router-link>
                                
                            </div>
                            
                            
                        </div>
                    </template>
                </div>

                <div class="row">
                    <div class="col-12 text-center">
                        <router-link to="AllEvent" title="More Schedule" class="loadmore-one-item btn-fill size-lg border-radius-5 color-yellow margin-t-50">More Schedule</router-link>
                    </div>
                </div>
            </div>
        </section>
        <!-- Schedule Area End Here -->
        <!-- Subscribe Area Start Here -->
        <section class="overlay-primary91 overlay-icon-layout1 section-space-default2 bg-common bg-img">
            <div class="container">
                <div class="row align-items-center">
                    <!-- <div class="col-xl-6 col-lg-6 col-mb-6 col-sm-12 col-xs-12">
                        <div class="subscribe-layout1 zindex-up">
                            <div class="input-group subscribe-input-area">
                                <div style="width:100%;">
                                    <h2 class="title pt-1 mt-1 pb-1 mb-3" style="padding-left:0;"><span>Venue :</span> <span style="color: #fad03b;">BDA Sculpture Park</span></h2>
                                    <h3 style="color: #fff;">BDA Sculpture Park, Banashankari 6th Stage, Bengaluru</h3>
                                    <ul class="mission-meta text-white">
                                        <li>
                                            <i class="fas fa-calendar-alt"></i>
                                            19-Jun-2022</li>
                                        <li><i class="fa fa-clock"></i>6:30 AM</li>
                                    </ul>
                                    <ul class="mission-meta contact-text-yellow mb-4">
                                        <li><i aria-hidden="true" class="fa fa-phone-alt"></i><a href="tel:9930114088">9930114088</a></li>
                                        <li><i aria-hidden="true" class="fa fa-user"></i><a href="mailto:admin@jjactive.in">Nilesh Kamble</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <div class="col-xl-12 col-lg-12 col-mb-12 col-sm-12 col-xs-12" id="RegisterHere">
                        <div class="subscribe-layout1 zindex-up">
                            <h2>Contact Us !!</h2>
                            <div class="input-group subscribe-input-area">
                                <ValidationObserver ref="form">
                                    <form id="contact-form" class="contact-form">
                                        <fieldset>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label class="contact-label">Name*</label>
                                                        <validation-provider rules="required|alpha_spaces" v-slot="{ errors }">
                                                            <input type="text" placeholder="Name*" v-model="fields.fullname" class="form-control" name="name" id="form-name" data-error="Name field is required" required="">
                                                            <span class="error-msgs">{{ errors[0] }}</span>
                                                        </validation-provider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label class="contact-label">Email*</label>
                                                        <validation-provider rules="required|email" v-slot="{ errors }">
                                                            <input type="email" placeholder="Email *" class="form-control" v-model="fields.email" name="email" id="form-email" data-error="Email field is required" required="">
                                                            <span class="error-msgs">{{ errors[0] }}</span>
                                                        </validation-provider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label class="contact-label">Phone*</label>
                                                        <validation-provider rules="required|integer|min:10|max:10" v-slot="{ errors }">
                                                            <input type="number" placeholder="Phone*" class="form-control" name="Mobile Number" v-model="fields.mobile" id="form-phone" data-error="Phone field is required" required="">
                                                            <span class="error-msgs">{{ errors[0] }}</span>
                                                        </validation-provider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label class="contact-label">Subject*</label>
                                                        <validation-provider rules="required|alpha_spaces" v-slot="{ errors }">
                                                            <input type="text" placeholder="Subject *" class="form-control" v-model="fields.e_name" name="Emergency Contact Name" id="form-phone1" data-error="Phone field is required" required="">
                                                            <span class="error-msgs">{{ errors[0] }}</span>
                                                        </validation-provider>
                                                    </div>
                                                </div>

                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <label class="contact-label">Address*</label>
                                                        <validation-provider rules="required" v-slot="{ errors }">
                                                            <textarea placeholder="Address*" class="textarea form-control" name="Address" v-model="fields.address" id="form-address" rows="5" cols="10" data-error="address field is required" required=""></textarea>
                                                            <span class="error-msgs">{{ errors[0] }}</span>
                                                        </validation-provider>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-sm-12 text-left">
                                                    <div class="form-group margin-b-none">
                                                        <button type="button" @click="switchLoc" class="btn-fill color-yellow border-radius-5">Register</button>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8 col-md-6 col-sm-6 col-sm-12">
                                                    <div class='form-response'></div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </ValidationObserver>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- Subscribe Area End Here -->
        <!-- Subscribe Area Start Here -->
        <!-- <section class="overlay-primary90 overlay-icon-layout1 section-space-default2 bg-common" style="background-image: url(../assets/img/figure/figure1.jpg);">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-12 col-lg-12 col-mb-12 col-sm-12 col-xs-12" id="RegisterHere">
                        <div class="subscribe-layout1 zindex-up">
                            <h2>Contact Us !!</h2>
                            <div class="input-group subscribe-input-area">
                                <ValidationObserver ref="form">
                                    <form id="contact-form" class="contact-form">
                                        <fieldset>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <validation-provider rules="required|alpha_spaces" v-slot="{ errors }">
                                                            <input type="text" placeholder="Name*" v-model="fields.fullname" class="form-control" name="name" id="form-name" data-error="Name field is required" required="">
                                                            <span class="error-msgs">{{ errors[0] }}</span>
                                                        </validation-provider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <validation-provider rules="required|email" v-slot="{ errors }">
                                                            <input type="email" placeholder="Email *" class="form-control" v-model="fields.email" name="email" id="form-email" data-error="Email field is required" required="">
                                                            <span class="error-msgs">{{ errors[0] }}</span>
                                                        </validation-provider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <validation-provider rules="required|integer|min:10|max:10" v-slot="{ errors }">
                                                            <input type="number" placeholder="Phone*" class="form-control" name="Mobile Number" v-model="fields.mobile" id="form-phone" data-error="Phone field is required" required="">
                                                            <span class="error-msgs">{{ errors[0] }}</span>
                                                        </validation-provider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                         <validation-provider rules="required|alpha_spaces" v-slot="{ errors }">
                                                            <input type="text" placeholder="Emergency Contact Name *" class="form-control" v-model="fields.e_name" name="Emergency Contact Name" id="form-phone1" data-error="Phone field is required" required="">
                                                            <span class="error-msgs">{{ errors[0] }}</span>
                                                        </validation-provider>
                                                    </div>
                                                </div>
                                                 <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <validation-provider rules="required|integer|min:10|max:10" v-slot="{ errors }">
                                                            <input type="number" placeholder="Phone*" class="form-control" name="Emergency Mobile Number" v-model="fields.e_mobile" id="Emergency-phone"  required="">
                                                            <span class="error-msgs">{{ errors[0] }}</span>
                                                        </validation-provider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                         <validation-provider rules="required" v-slot="{ errors }">
                                                            <textarea placeholder="Address*" class="textarea form-control" name="Address" v-model="fields.address" id="form-address" rows="5" cols="10" data-error="address field is required" required=""></textarea>
                                                            <span class="error-msgs">{{ errors[0] }}</span>
                                                        </validation-provider>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-sm-12 text-left">
                                                    <div class="form-group margin-b-none">
                                                        <button type="button" @click="switchLoc" class="btn-fill color-yellow border-radius-5">Register</button>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8 col-md-6 col-sm-6 col-sm-12">
                                                    <div class='form-response'></div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </ValidationObserver>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        <!-- Subscribe Area End Here -->
        <!-- Footer Area Start Here -->
        <Footer />
        <!-- Footer Area End Here -->
        </div>
    </div>
</body>
</template>
<script>
import axios from "axios";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import Testimonial from "@/components/Testimonial";
import Partners from "@/components/Partners";
import carousel from "vue-owl-carousel";
import Product from "../components/product.vue";
import Slider from "../components/Slider.vue";
import {
    ValidationProvider,
    ValidationObserver
} from "vee-validate";

export default {
    components: {
        Header,
        Product,
        Footer,
        Testimonial,
        Partners,
        Slider,
        carousel,
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            LinksDetails: [],
            isHas: true,
            uid: "",
            showSliders: true,
            testimonialData: [],
            partnerData: [],
            discountData: [],
            featureData: [],
            featureDelay: false,
            latestDelay: false,
            dealOfDay: false,
            categorydata: [],
            productData: [],
            latestData: [],
            OfferProduct: [],
            active_el: 1,
            pageData: [],
            allCategory: [],
            fields: {
                type: 'registrations',
                fullname: '',
                address: '',
                mobile: '',
                email: '',
                e_name: '',
                e_mobile: '',
            },
        };
    },

    mounted() {
        this.uid = localStorage.getItem("user");
        this.aboutData()
        this.site_setting();
        this.latestDatas()

    },
    methods: {
        aboutData() {
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php", {
                    type: "aboutus",
                })
                .then(function (response) {
                    var data = response.data;
                    self.pageData = data.data;
                    //   console.log(response);
                });
        },
        switchLoc() {
            var vali = this.$refs.form.validate();
            vali.then(val => {
                    if (val == true) {
                        this.registerHere()
                    }
                }

            )
        },
        registerHere() {
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
            } else if (this.fields.e_name === '') {
                this.$toasted.global.error({
                    message: 'Please enter emergency name'
                })
            } else if (this.fields.e_mobile === '') {
                this.$toasted.global.error({
                    message: 'Please enter Emergency Mobile Number'
                })
            } else if (this.fields.address == '') {
                this.$toasted.global.error({
                    message: 'Please enter your address'
                })
            } else {
                var vi = this

                axios({
                    method: 'POST',
                    url: this.$root.URL_ROOT + 'api.php',
                    data: this.fields
                }).then(function (response) {
                    console.log(response);
                    var data = response.data
                    if (data.status == 'success') {
                        vi.$toasted.global.success({
                            message: data.msg
                        })
                    } else {
                        vi.$toasted.global.error({
                            message: data.msg
                        })
                    }
                })
            }
        },
        categories() {
            var ev = this;
            axios
                .get(this.$root.URL_ROOT + "api.php?type=getCategory")
                .then(function (response) {
                    var data = response.data;
                    if (data.status == "success") {
                        // console.log(data)
                        ev.allCategory = data.category;
                    }
                });
        },
        pData() {
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php", {
                    type: "aboutus",
                })
                .then(function (response) {
                    var data = response.data;
                    self.pageData = data.data;
                });
        },
        discountProd() {
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = JSON.parse(localStorage.getItem("user"));
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php?type=discount_product", {
                    uid: uid,
                    ip_address: ip_address,
                })
                .then(function (response) {
                    var data = response.data;
                    self.discountData = data.data;
                });
        },

        activate: function (el) {
            this.active_el = el;
        },
        catData() {
            const axios = require("axios");
            var self = this;
            axios
                .get(this.$root.URL_ROOT + "api.php?type=getCategory")
                .then(function (response) {
                    var data = response.data;
                    if (data.status == "success") {
                        self.categorydata = data.category;
                    }
                });
        },
        FeaturedProduct() {
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = localStorage.getItem("user");
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php?type=getFeaturedProduct", {
                    uid: uid,
                    ip_address: ip_address,
                })
                .then(function (response) {
                    var data = response.data;
                    if (data.status == "success") {
                        self.featureDelay = true;
                        self.featureData = data.data;
                    }
                });
        },
        getOfferProduct() {
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = localStorage.getItem("user");
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php?type=getOfferProduct", {
                    uid: uid,
                    ip_address: ip_address,
                })
                .then(function (response) {
                    var data = response.data;
                    if (data.status == "success") {
                        self.dealOfDay = true;
                        self.OfferProduct = data.data;
                    }
                });
        },
        latestDatas() {
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = localStorage.getItem("user");
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php?type=getSeasionalProduct", {
                    uid: uid,
                    ip_address: ip_address,
                })
                .then(function (response) {
                    var data = response.data;
                    if (data.status == "success") {
                        self.latestDelay = true;
                        self.latestData = data.data;
                    }
                });
        },
        testimonial() {
            const axios = require("axios");
            var self = this;
            axios
                .get(this.$root.URL_ROOT + "api.php?type=testimonial")
                .then(function (response) {
                    var data = response.data;
                    self.testimonialData = data.data;
                });
        },
        partner() {
            const axios = require("axios");
            var self = this;
            axios
                .get(this.$root.URL_ROOT + "api.php?type=partner")
                .then(function (response) {
                    var data = response.data;
                    if (data.status == "success") {
                        self.partnerData = data.data;
                        self.showSliders = true;
                    } else {
                        self.showSliders = false;
                    }
                });
        },
        classActive(id) {
            this.isActive = id;
        },
    },
};
</script>
