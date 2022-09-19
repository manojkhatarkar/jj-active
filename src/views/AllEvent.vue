<template>
     <!-- Preloader End Here -->
        <div id="wrapper" class="wrapper">
            <!-- Header Area Start Here -->
            <Header/>
            <!-- Header Area End Here -->
            <!-- Inne Page Banner Area Start Here -->
            <section class="inner-page-banner" style="background-image: url('https://jj-active.jurysoftprojects.com/api/uploads/Content/contact-banner.jpeg');">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumbs-area">
                                <h1>Event Schedule</h1>
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>Schedule</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Inne Page Banner Area End Here -->
            <!-- Schedule Area Start Here -->
            <section class="section-space-default bg-light">
                <div class="container-fluid">
                    <div class="section-heading title-black color-dark text-center">
                        <h2>All Events</h2>
                        <!-- <p>Dorem ipsum dolor sit. Incidunt laborum beatae earum nihil odio consequatur</p> -->
                    </div>
                    <div class="container">
                    <div class="row no-gutters">
                        <div v-for="latest in latestData" :key="latest.id" class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div class="schedule-layout4 bg-common card" :style="'background-image: url('+$root.URL_ROOT+'uploads/Product/'+latest.front_image+');    border-radius: 15px;'">
                                <div class="item-content zindex-up">
                                    <ul>
                                        <li>
                                            <h3 class="title title-bold hover-yellow color-light size-xl">
                                                <a href="#">{{latest.date | formatDate}} </a>
                                            </h3>
                                        </li>
                                        <li>
                                            <h3 class="title title-regular color-light size-xl">Event StartUp</h3>
                                            <p>{{latest.time}}</p>
                                        </li>
                                        <li>
                                            <h3 class="title title-regular color-light size-lg">{{latest.name}}</h3>
                                        </li>
                                        <li>
                                            <h3 class="title title-regular color-light size-lg">Location</h3>
                                            <p><i style="margin-right:10px;" class="fa fa-map-marker" aria-hidden="true"></i>{{latest.state +','+latest.city}} </p>
                                    <router-link :to="{name:'Event',params:{id:latest.id}}" class="btn-fill size-xs color-yellow border-radius-5  btn-register" style="margin-top: 10px;">Register</router-link>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <!-- Schedule Area End Here -->
            <!-- Footer Area Start Here -->
                <Footer/>
            <!-- Footer Area End Here -->
        </div>
        <!-- Wrapper End -->
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
