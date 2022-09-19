<template>
<body>
    <Header />
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
                <figure id="banner-about" style="overflow:hidden !important;" class="max-height-500">
                    <a href="#"><img src="../assets/img/banner-about.jpg" class="img-responsive w-100" alt="img-holiwood" /></a>
                </figure>
                <div class="title-banner">
                    <h1>SHIPPING POLICY</h1>
                    <!-- <p>
                       Note: This Privacy Policy forms an integral part of the Terms of Use and other policies, disclaimers etc. available on the Website of Vanilla Hues and shall be read in conjunction. </p> -->
                </div>
            </div>
        </div>
        <div class="wellcome pd-0" style="margin-top:50px;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-well">
<p v-html="pageData.pbody"></p>

                      <!--  -->
                    </div>

                </div>
            </div>
        </div>

        <div class="img-link pt-0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div class="img-color-1">
                            <div class="img-content">
                                <img src="../assets/img/like-about.png" class="img-responsive" alt="img-holiwood" />
                            </div>
                            <h1>100%</h1>
                            <h2>Product quality </h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div class="img-color-2">
                            <div class="img-content">
                                <img src="../assets/img/log-about.png" class="img-responsive" alt="img-holiwood" />
                            </div>
                            <h1>100%</h1>
                            <h2>Payment protection</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div class="img-color-3">
                            <div class="img-content">
                                <img src="../assets/img/time-about.png" class="img-responsive" alt="img-holiwood" />
                            </div>
                            <h1>100%</h1>
                            <h2>On-time shipment </h2>
                        </div>
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
import Testimonial from '@/components/Testimonial'
import Partners from '@/components/Partners'
import carousel2 from "vue-owl-carousel";
import carousel from 'vue-owl-carousel2'
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
            fields: {
                type: 'update_profile',
                uid: '',
                fullname: '',
                mobile: '',
                address: '',
                Token: this.$root.auth
            }
        }
    },
    mounted() {
        this.uid = localStorage.getItem('user')
        this.pData()
        this.goToTop()
    },
    methods: {
        goToTop() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        pData() {
            const axios = require('axios')
            var self = this
            axios.post(this.$root.URL_ROOT + 'api.php', {
                type: 'ShippingPolicy'
            }).then(function (response) {
                var data = response.data
                self.pageData = data
            })
        }
    }
}
</script>
