<template>
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
                        <h1>{{pageData.heading}} </h1>
                        <ul>
                            <li>
                                <router-link to="./">Home</router-link>
                            </li>
                            <li>{{pageData.heading}} </li>
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
                <div class="col-lg-12">
                    <div class="about-layout4">
                        <p style="text-align: justify;" v-html="pageData.pbody"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    <!-- Footer Area End Here -->
</div>
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
                type: 'REFUNDPOLICY'
            }).then(function (response) {
                var data = response.data
                self.pageData = data
            })
        }
    }
}
</script>
