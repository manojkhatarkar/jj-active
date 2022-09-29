<template>
  <body>
   <Header/>
     <!-- Inne Page Banner Area Start Here -->
            <section class="inner-page-banner" :style="'background-image: url('+$root.URL_ROOT+'uploads/Content/contact-banner.jpeg);'">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumbs-area">
                                <h1>Contact Us</h1>
                                <ul>
                                    <li>
                                        <router-link to="./">Home</router-link>
                                    </li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Inne Page Banner Area End Here -->
           
            <!-- Contact Form Area Start Here -->
            <section class="section-space-default2-less30">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-12 margin-b-30rem">
                            <h2 class="title-bold color-dark size-sm title-bar">GET IN TOUCH WITH US</h2>
                            <form id="contact-form" class="contact-form">
                                <fieldset>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label class="contact-label-black">Name*</label>
                                                <input type="text" placeholder="Name*" v-model="name" class="form-control" name="name" id="form-name" data-error="Name field is required" required="">
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label class="contact-label-black">Mobile*</label>
                                                <input type="number" placeholder="Mobile*" v-model="mobile" class="form-control" name="mobile" id="form-mobile" data-error="Mobile field is required" required="">
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                       <div class="col-lg-6">
                                            <div class="form-group">
                                                <label class="contact-label-black">Email*</label>
                                                <input type="email" placeholder="Email*" v-model="email" class="form-control" name="email" id="form-email" data-error="Email field is required" required="">
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                         <div class="col-lg-6">
                                            <div class="form-group">
                                                <label class="contact-label-black">Subject*</label>
                                                <input type="text" placeholder="Subject*" v-model="subject" class="form-control" name="email" id="form-email" data-error="Subject field is required" required="">
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label class="contact-label-black">Message*</label>
                                                <textarea placeholder="Message*" v-model="msg" class="textarea form-control" name="message" id="form-message" rows="10" cols="20" data-error="Message field is required" required=""></textarea>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6 col-sm-12">
                                            <div class="form-group margin-b-none">
                                                <button type="button" @click="contact_submit" class="btn-fill color-yellow border-radius-5">Send Message</button>
                                            </div>
                                        </div>
                                        <div class="col-lg-8 col-md-6 col-sm-6 col-sm-12">
                                            <div class='form-response'></div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div class="sidebar-widget-area sidebar-break-md col-lg-4 col-md-12">
                            <div class="widget">
                                <h2 class="title-bold color-dark size-sm title-bar title-bar-high">Contact Info</h2>
                                <div class="contact-us-info">
                                    <ul>
                                        <li>
                                            <i class="fa fa-map-marker" aria-hidden="true"></i> {{LinksDetails.address}} </li>
                                        <li>
                                            <i class="fa fa-phone" aria-hidden="true"></i> <a class="text-black" :href="'mailto:'+LinksDetails.mobile">{{LinksDetails.mobile}}</a> </li>
                                        <li>
                                            <i class="fa fa-envelope-o" aria-hidden="true"></i><a :href="'mailto:'+LinksDetails.email" class="__cf_email__ text-black">{{LinksDetails.email}}</a></li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Contact Form Area End Here -->
             <!-- Map Area Start Here -->
            <section class="full-width-container">
                <div class="container-fluid">
                    <div class="google-map-area">
                    <iframe id="googleMap" style="width:100%; height:396px;" :src="LinksDetails.MapUrl"></iframe>
                </div>
                </div>
            </section>
            <!-- Map Area End Here -->
  <Footer/>
  </body>
</template>
<script>
import axios from "axios";
import $ from "jquery";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import VueRecaptcha from "vue-recaptcha";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  components: {
    Header,
    Footer,
    VueRecaptcha,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      name: "",
      mobile: "",
      email: "",
      subject: "",
      msg: "",
      reCap: false,
      LinksDetails: [],
    };
  },
  mounted() {
    this.goToTop();

    this.site_setting();
    this.uid = localStorage.getItem("user");
  },

  methods: {
    markRecaptchaAsVerified(response) {
      this.pleaseTickRecaptchaMessage = "This field is required";
      this.recaptchaVerified = true;
    },
    switchLoc() {
      var vali = this.$refs.form.validate();
      // if (!this.recaptchaVerified) {
      //   this.pleaseTickRecaptchaMessage = "Please tick recaptcha.";
      //   this.reCap = true;
      // } else {
        this.reCap = false;
        vali.then((val) => {
          if (val == true) {
            this.contact_submit();
          }
        });
      // }
    },

    quickbox() {
      if ($(window).width() > 767) {
        $(".quickview-button").magnificPopup({
          type: "iframe",
          delegate: "a",
          preloader: true,
          tLoading: "Loading image #%curr%...",
        });
      }
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
      } else if (this.mobile == "") {
        this.$toasted.global.error({
          message: "Please enter mobile number",
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
              message: data.msg,
            });

            vi.name = "";
            vi.email = "";
            vi.subject = "";
            vi.mobile = "";
            vi.msg = "";
            $(".error-msg").addClass("hide");
            setTimeout(function () {
              $(".error-msg").removeClass("hide");
            }, 50000);
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
