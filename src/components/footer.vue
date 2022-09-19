<template>
<footer class="overlay-icon-layout-footer ">
    <div class="footer-layout2">
        <div class="footer-top-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="widget">
                            <h3 data-v-6c4d8baa="" class="widgettitle"> ABOUT JJS</h3>
                            <div class="footer-widget-about">
                                <p v-html="LinksDetails.footer_content"></p>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-12"></div>
                    <div class="col-lg-2 col-md-6 col-sm-12">
                        <div class="widget">
                            <h3 class="widgettitle">Useful Links</h3>
                            <div class="footer-widget-menu">
                                <ul>
                                    <li>
                                        <router-link to="./">Home</router-link>
                                    </li>
                                    <li>
                                        <router-link to="./aboutus">About Us</router-link>
                                    </li>

                                    <li>
                                        <router-link to="./contactus">Contact Us</router-link>
                                    </li>

                                    <li>
                                        <router-link to="./TermsConditions">Terms & Conditions</router-link>
                                    </li>
                                     <li>
                                        <router-link to="./PricingPolicy">Pricing Policy</router-link>
                                    </li>
                                    <li>
                                        <router-link to="./ReturnRefundPolicy">Refund Policy</router-link>
                                    </li>
                                     <li>
                                        <router-link to="/privecypolicy">Privacy Policy</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="widget">
                            <h3 class="widgettitle">Get In Touch</h3>
                            <div class="footer-widget-newsletter">
                                <div class="footer-widget-social">
                                    <ul style="margin-bottom:20px">
                                        <li>
                                            <a href="#" title="facebook">
                                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="twitter">
                                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="instagram">
                                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="youtube">
                                                <i class="fa fa-youtube" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                     <div class="contact-area">
                                          <i class="fa fa-phone"></i>

                                            <a :href="'tel:'+LinksDetails.footer_content">+91 {{LinksDetails.mobile}}</a>
                                        </div>
                                         <div class="contact-area">
                                          <i class="fa fa-telegram"></i>
                                            <a :href="'tel:'+LinksDetails.email">{{LinksDetails.email}}</a>
                                        </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom-area">
            <p>© 2022 JJ Active. All Rights Reserved. Designed by
                <a target="_blank" href="5ines.com" rel="nofollow">
                    Jurysoft</a>
            </p>
        </div>
    </div>
</footer>
</template>

<script>
import axios from "axios";
export default {
    components: {},
    data() {
        return {
            catedatas: [],
            footData: [],
            name: "Subscriber",
            mobile: "",
            email: "",
            subject: "Subscriber",
            msg: "Subscriber",
            LinksDetails: [],
            site_logo: [],
            uid: localStorage.getItem("user"),
        };
    },
    mounted() {
        this.footerData();
        this.site_setting();
        this.site_logos();
        // this.sendEmail()
        // console.log(this.cdata)
    },
    methods: {
        footerData() {
            const axios = require("axios");
            var self = this;
            axios
                .get(this.$root.URL_ROOT + "api.php?type=footer_menu")
                .then(function (response) {
                    self.footData = response.data.data;
                    // console.log(response.data.data)
                });
        },
        contact_submit() {
            var vi = this;
            if (this.name == "") {
                this.$toasted.global.error({
                    message: "Please enter name",
                });
            } else if (this.email == "") {
                this.$toasted.global.error({
                    message: "Please enter email",
                });
            } else if (this.subject == "") {
                this.$toasted.global.error({
                    message: "Please enter subject",
                });
            } else if (this.msg == "") {
                this.$toasted.global.error({
                    message: "Please enter Message",
                });
            } else {
                axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: {
                        type: "contact",
                        name: this.name,
                        email: this.email,
                        mobile: this.mobile,
                        subject: this.subject,
                        msg: this.msg,
                    },
                }).then(function (response) {
                    var data = response.data;
                    console.log(response.data);
                    if (data.status == "success") {
                        vi.$toasted.global.success({
                            message: 'Thanks for subscribing',
                        });

                        vi.name = "";
                        vi.email = "";
                        vi.subject = "";
                        vi.mobile = "";
                        vi.msg = "";
                        $(".error-msg").addClass("hide");
                        setTimeout(function () {
                            $(".error-msg").removeClass("hide");
                        }, 10000);
                    } else {
                        vi.$toasted.global.error({
                            message: data.msg,
                        });
                    }
                });
            }
        },
    },
};
</script>

<style scoped>
.float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    background-color: #25d366;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
}

.my-float {
    margin-top: 16px;
}
</style>
