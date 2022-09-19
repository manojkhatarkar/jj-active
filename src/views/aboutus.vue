<template>
<!-- Preloader End Here -->
<div id="wrapper" class="wrapper">
    <!-- Header Area Start Here -->
    <Header />
    <!-- Header Area End Here -->
    <!-- Inne Page Banner Area Start Here -->
    <section class="inner-page-banner" :style="'background-image: url('+$root.URL_ROOT+'uploads/Content/contact-banner.jpeg);'">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumbs-area">
                        <h1>About Us</h1>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Inne Page Banner Area End Here -->
    <!-- About Us Start Here -->
    <section class="section-space-less30">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="about-layout4">
                        <h2 class="bold"> {{pageData.heading}} </h2>
                        <p style="text-align: justify;" v-html="pageData.pbody"></p>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="progress-layout3">
                        <img :src="$root.URL_ROOT+'uploads/pages/'+pageData.image" alt="speaker" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Us Area End Here -->
    <!-- Sponsonrs Area Start Here -->
    <Partners />
    <!-- Sponsonrs Area End Here -->
    <!-- Map Area Start Here -->
    <section class="full-width-container">
        <div class="container-fluid">
            <div class="google-map-area">
                <iframe id="googleMap" style="width:100%; height:396px;" :src="LinksDetails.MapUrl"></iframe>
            </div>
        </div>
    </section>
    <!-- Map Area End Here -->
    <!-- Footer Area Start Here -->
    <Footer />
    <!-- Footer Area End Here -->
</div>
<!-- Wrapper End -->
</template>

<script>
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import Testimonial from "@/components/Testimonial";
import Partners from "@/components/Partners";
import carousel2 from "vue-owl-carousel";
import carousel from "vue-owl-carousel2";
export default {
    props: ["catedatas"],
    components: {
        Header,
        Footer,
        carousel,
        carousel2,
        Partners,
        Testimonial
    },
    data() {
        return {
            pageData: [],
            LinksDetails: [],
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
        this.pData();
        this.goToTop();
        this.site_setting();
    },
    methods: {
        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
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
                    // console.log(response);
                });
        },
    },
};
</script>

<style scoped>
.abt-img {
    position: absolute;
    top: 60%;
    right: 0;
    width: 100%;
}
</style>
