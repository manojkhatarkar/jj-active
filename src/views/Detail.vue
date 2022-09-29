<template>
<body>
    <!-- Preloader End Here -->
    <div id="wrapper" class="wrapper">
        <!-- Header Area Start Here -->
        <Header />
        <!-- Header Area End Here -->
        <!-- Inne Page Banner Area Start Here -->
        <section class="inner-page-banner" style="background-image: url('https://jj-active.jurysoftprojects.com/api/uploads/Content/contact-banner.jpeg');">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumbs-area">
                            <h1>Event Details</h1>
                            <ul>
                                <li><router-link to="/">Home</router-link></li>
                                <li> {{detail.name}} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Inne Page Banner Area End Here -->
        <!-- Error Page Area Start Here -->
        <section class="section-space-event">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xs-12">
                        <div class="single-event-img">
                            <div class="et-carousel dot-control" data-loop="true" data-items="1" data-margin="30" data-autoplay="true" data-autoplay-timeout="5000" data-smart-speed="2000" data-dots="true" data-nav="false" data-nav-speed="false" data-r-x-small="1" data-r-x-small-nav="false" data-r-x-small-dots="true" data-r-x-medium="1" data-r-x-medium-nav="false" data-r-x-medium-dots="true" data-r-small="1" data-r-small-nav="false" data-r-small-dots="true" data-r-medium="1" data-r-medium-nav="false" data-r-medium-dots="true" data-r-large="1" data-r-large-nav="false" data-r-large-dots="true">
                                <img :src="$root.URL_ROOT+'uploads/Product/'+detail.front_image" class="img-fluid" alt="single-event">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xs-12">
                        <div class="event-description">
                            <h2 class="title title-bold color-dark"> {{detail.name}} </h2>
                            <p v-html="detail.description"></p>
                            <i class="fa fa-map-marker icn-clr-change" aria-hidden="true"></i> <strong>Location:</strong>   <a :href="detail.map" target="_blank"><p style="margin-left: 10%; !important">{{detail.venue}},<br /> {{detail.address}}, {{detail.state}},{{detail.city}} </p></a>
                            <i class="fa fa-calendar icn-clr-change" aria-hidden="true"></i> <strong>Event Start Date and Time:</strong>  <p style="margin-left: 10%; !important">  {{detail.date}}, {{detail.time}} </p>
                            <template v-if="detail.items">
                            <ul class="mission-meta contact-text-yellows mb-4" v-for="(item,d) in JSON.parse(detail.items)" :key="d">
                                <li style="text-align: center;"><a style="font-size:18px;font-weight:bold;">{{item.designation}}</a></li>
                                <li><i aria-hidden="true" class="fa fa-user"></i><a> {{item.name}} </a></li>
                                <li><i class="fa fa-phone" aria-hidden="true"></i><a :href="'tel:'+item.mobile"> {{item.mobile}} </a></li>
                                <li><i aria-hidden="true" class="fa fa-telegram"></i><a :href="'mailto:'+item.email"> {{item.email}} </a></li>
                            </ul>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
            <section class="overlay-primary90 overlay-icon-layout1 section-space-default2 bg-common" style="background-image: url(../assets/img/figure/figure1.jpg);">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-12 col-lg-12 col-mb-12 col-sm-12 col-xs-12" id="RegisterHere">
                            <div class="subscribe-layout1 zindex-up">
                                <h2>Register Here !!</h2>
                                <div class="input-group subscribe-input-area">
                                    <!-- <ValidationObserver ref="form"> -->
                                    <form id="contact-form" class="contact-form">
                                        <fieldset>
                                            <div class="row">
                                                <template v-for="(fields,index) in detail.fields">
                                                    <div class="col-lg-6" v-if="fields.type=='text'" :key="index">
                                                        <div class="form-group">
                                                            <label> {{fields.name}} </label>
                                                            <input type="text" :placeholder="fields.name" v-model="detail.fields[index].inputVal" class="form-control" data-error="Name field is required" required="">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6" v-if="fields.type=='dropdown'" :key="index">
                                                        <div class="form-group">
                                                            <label> {{fields.name}} </label>

                                                            <select type="text" :placeholder="fields.name" v-model="detail.fields[index].inputVal" class="form-control">
                                                                <!-- <option :value="fields.name"> {{fields.name}} </option> -->
                                                                <option :value="dropVal" v-for="(dropVal,index) in fields.drop" :key="index"> {{dropVal}} </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12" v-if="fields.type=='textarea'" :key="index">
                                                        <div class="form-group">
                                                            <label> {{fields.name}} </label>
                                                            <textarea :placeholder="fields.name" class="textarea form-control" :name="fields.name" v-model="detail.fields[index].inputVal" id="form-address" rows="5" cols="10" data-error="address field is required" required=""></textarea>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12" v-if="fields.type=='radio'" :key="index">
                                                        <div class="form-group d-flex radio-area">
                                                            <div v-for="(dropVal,indexVal) in fields.drop" :key="indexVal">
                                                            <label> {{fields.name}} </label>
                                                                <input :type="fields.type" :name="fields.name" :placeholder="fields.name" :value="dropVal" class="textarea form-control" v-model="detail.fields[index].inputVal" :id="dropVal">
                                                                <label :for="dropVal"> {{dropVal}} </label>
                                                            </div>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                </template>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-sm-12 text-left">
                                                    <div class="form-group margin-b-none">
                                                        <button type="button" @click="registerHere" class="btn-fill color-yellow border-radius-5">Register</button>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8 col-md-6 col-sm-6 col-sm-12">
                                                    <div class='form-response'></div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                    <!-- </ValidationObserver> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- <section class="overlay-primary91 overlay-icon-layout1 section-space-default2 bg-common bg-img">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-12 col-lg-12 col-mb-12 col-sm-12 col-xs-12">
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
                        </div>
                    </div>
                </div>
            </section> -->
            <iframe id="googleMap" style="width:100%; height:396px;" :src="detail.map"></iframe>
           
        </section>
        <!-- Error Page Area End Here -->
        <!-- Footer Area Start Here -->
        <Footer />
        <!-- Footer Area End Here -->
    </div>
</body>
</template>

<script>
import axios from "axios";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import Rating from "@/components/starRating";
import carousel from "vue-owl-carousel2";
import Product from "../components/product.vue";
import imageZoom from "vue-image-zoomer";
import {
    ValidationProvider,
    ValidationObserver
} from "vee-validate";

export default {
    components: {
        Header,
        Footer,
        Rating,
        imageZoom,
        carousel,
        Product,
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            ratingDisable: false,
            userRating: [],
            isShow: 1,
            detail: [],
            ratingProduct: 0,
            uid: localStorage.getItem("user"),
            product_id: this.$route.params.id,
            qty: 1,
            mainImage: "",
            allimages: "",
            myVideo: false,
            feedbackData: [],
            userData: [],
            comment: '',
            selectedSize: 0,
            allSize: [],
            preview: '',
            image: null,
            showImgError: false,
            showContentError: false,
            content: '',
            formData: [{
                type: 'registrations',
            }],
            fields: [{
                type: 'registrationEvent'
            }]
        };
    },
    mounted() {
        this.productDetail();
        this.check_rating();
        this.goToTop();
        this.feedbackDatas()
        this.userDetail()
    },

    watch: {
        searchingVar(value) {
            this.searchingVar = value;
            this.search();
        },
        ratingProduct: function (newVal) {
            if (newVal > 0) {
                this.reviewRating();
            }
        },
        "$route.params.id": function (vl) {
            this.product_id = vl;
            this.goToTop()
            this.mainImage = "";
            this.detail = [];
            this.productDetail();
            this.userDetail()
        },
        detail: function (vl) {
            this.detail = vl;
        }
    },
    methods: {
        getFields(val) {
            return JSON.parse(val)
        },
        switchLoc() {
            console.log(this.formData);
            var vali = this.$refs.form.validate();
            vali.then(val => {
                if (val == true) {
                    this.registerHere()
                }
            })
        },
        registerHere() {
            var vi = this
            this.errorList = [];
            this.detail.fields.filter((e, index) => {
                if (typeof(e.inputVal) === "undefined") {
                   vi.$toasted.global.error({
                    message: 'Please enter '+e.name
                })
                } 
                else {
                    console.log('Call Funtion');
                }
            });
            // e.preventDefault();
            // return
            // if (this.fields.fullname === '') {
            //     this.$toasted.global.error({
            //         message: 'Please enter First Name'
            //     })
            // } else {
                // this.detail.fields = [{
                //     type:'registrationEvents'
                // }]
                var vi = this
                var params = {
                    eid : vi.product_id,
                    type : 'registrationEvents',
                    data : vi.detail.fields
                }
                axios({
                    method: 'POST',
                    url: this.$root.URL_ROOT + 'api.php',
                    data: params
                }).then(function (response) {
                    var data = response.data
                    if (data.status == 'success') {
                        vi.$swal(
                            {
                                title: "You Have Registrate Successfully",
                                text: "Your BIB Number is "+data.bib,
                                icon: "info"
                            }
                        );
                    } else {
                        vi.$toasted.global.error({
                            message: data.msg
                        })
                    }
                })
            // }
        },
        addgiftcart(pid, pname, qty, price, gift) {
            var ev = this
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = localStorage.getItem('user')
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = null
            }
            var ev = this
            this.file = this.$refs.giftImage.files[0];

            if (this.content == "" || this.file == undefined) {
                if (this.content == "") {
                    ev.$toasted.global.error({
                        message: "Please Enter Content",
                    });
                }
                if (this.file == undefined) {
                    ev.$toasted.global.error({
                        message: "Please Select Image",
                    });
                }
            } else {
                console.log(this.file);
                let formData = new FormData();
                formData.append('giftImage', ev.file);
                formData.append('uid', uid);
                formData.append('ip', ip_address);
                formData.append('pid', pid);
                formData.append('qty', qty);
                formData.append('amount', price);
                formData.append('total_amount', price);
                formData.append('content', ev.content);
                formData.append('gift', gift);
                formData.append('type', 'addtocart');
                axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: formData,
                }).then(function (response) {
                    var data = response.data;
                    if (data.status == 'success') {
                        ev.$toasted.global.success({
                            message: "Your product successfully added to cart",
                        });
                        ev.qtyCarts()
                        ev.getCart()
                    } else {
                        ev.$toasted.global.error({
                            message: "Somthing went wrong",
                        });
                    }
                });
            }

        },
        addgiftcartcontent(pid, pname, qty, price, gift) {
            var ev = this
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = localStorage.getItem('user')
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = null
            }
            var ev = this
            if (this.content == "") {
                if (this.content == "") {
                    ev.$toasted.global.error({
                        message: "Please Enter Content",
                    });
                }
            } else {
                let formData = new FormData();
                formData.append('uid', uid);
                formData.append('ip', ip_address);
                formData.append('pid', pid);
                formData.append('qty', qty);
                formData.append('amount', price);
                formData.append('total_amount', price);
                formData.append('content', ev.content);
                formData.append('gift', gift);
                formData.append('type', 'addtocart');
                axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: formData,
                }).then(function (response) {
                    var data = response.data;
                    if (data.status == 'success') {
                        ev.$toasted.global.success({
                            message: "Your product successfully added to cart",
                        });
                        ev.qtyCarts()
                        ev.getCart()
                    } else {
                        ev.$toasted.global.error({
                            message: "Somthing went wrong",
                        });
                    }
                });
            }

        },
        imgCheck() {
            this.showImgError = true
            this.showContentError = true
        },
        previewImage: function (event) {
            var input = event.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                    this.showImgError = false
                }
                this.image = input.files[0];
                reader.readAsDataURL(input.files[0]);
            }
        },
        changeProduct() {
            if (this.selectedSize > 0) {
                this.$router.push({
                    name: "productDetail",
                    params: {
                        id: this.selectedSize
                    }
                });
                window.location.reload();

            }
        },
        userDetail() {
            var ev = this;
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "userDetail",
                    uid: ev.uid
                },
            }).then(function (response) {
                var data = response.data;
                if (data.status == 'success') {
                    ev.userData = data.data
                }
            });
        },
        showVideo() {
            if (this.myVideo == false) {
                this.myVideo = true
            } else {
                this.myVideo = false
            }
        },
        qtyAdd() {
            this.qty = this.qty + 1;
        },

        qtyMin() {
            this.qty = this.qty - 1;
        },
        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        isActive(id) {
            this.isShow = id;
        },
        changeImage(img) {
            this.myVideo = false
            this.mainImage = img;
        },
        check_rating() {
            var self = this;
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "getRatingByUser",
                    pid: self.$route.params.id,
                    uid: self.uid,
                },
            }).then(function (response) {
                var data = response.data;
                if (data.data) {
                    // console.log("getRatingByUser", data);
                    self.ratingProduct = data.data.rating;
                    self.ratingDisable = true;
                } else {
                    self.ratingDisable = false;
                }
            });
        },
        async productDetail() {
            var ev = this;
            var mergeImages = []
            var mergeImages2 = []
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = JSON.parse(localStorage.getItem("user"));
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            const response = await axios.post(
                this.$root.URL_ROOT + "api.php?type=getProductDetail", {
                    id: ev.product_id,
                    uid: uid,
                    ip_address: ip_address,
                }
            );
            var data = response.data;
            if (data.status == "success") {
                ev.selectedSize = data.product.id
                ev.detail = data.product;
                ev.detail.fields = JSON.parse(ev.detail.fields)
                ev.mainImage = ev.detail.front_image;
                if (ev.detail.image_collection) {
                    ev.allimages = JSON.parse(ev.detail.image_collection);
                }
                if (ev.detail.video) {
                    ev.myVideo = true;
                }
                ev.allSize = ev.detail.allsize
                var sizeary = {
                    id: ev.detail.id,
                    size: ev.detail.size
                }
                ev.allSize.push(sizeary)
                // console.log('dasdadadadads');
                // console.log(ev.detail)
            }
        },
        reviewRating() {
            var self = this;
            if (this.uid == '' || this.uid == null) {
                self.$toasted.global.error({
                    message: 'Please login first to give rating'
                })
            } else if (self.comment == '' || self.uid == null) {
                self.$toasted.global.error({
                    message: 'Please Write comment'
                })
            } else {
                axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: {
                        type: "addRating",
                        pid: self.$route.params.id,
                        uid: self.uid,
                        rating: self.ratingProduct,
                        username: self.userData.username,
                        comment: self.comment,
                    },
                }).then(function (response) {
                    var data = response.data;
                    // console.log('feedback', data)
                    if (data.status == 'success') {
                        self.$toasted.global.success({
                            message: 'Thankyou for feedback'
                        })
                        self.userRating = data.data
                        self.feedbackDatas()
                    } else if (data.status == 'error') {
                        // self.userRating = data.data
                    }
                });
            }

        },
        feedbackDatas() {
            var self = this;
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "feedbackData",
                    pid: self.$route.params.id,
                },
            }).then(function (response) {
                var data = response.data;
                if (data.status == 'success') {
                    // console.log('feedbackData', data.data)
                    self.feedbackData = data.data
                } else {
                    self.feedbackData = false
                }
            });

        },
    },
};
</script>

<style scoped>
.max-50 {
    max-width: 50px;
    max-height: 120px;
}

.detail-iframe {
    width: 355px;
}

.pb-10 {
    padding-bottom: 10px;
}

.main-img {
    max-width: 113px;
    margin-right: 8px !important;
}

.click-disabled {
    pointer-events: none;
    cursor: default;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.product-tabcontent .tabs #tab-content {
    border: 2px solid #f1f1f1;
    margin-top: 0;
    width: 100%;
    float: left;
    text-align: left;
    padding: 20px;
    background: #fff;
}

#new_comment_form {
    width: 585px;
    color: #333;
    text-align: left;
    background-color: #fff;
}

.new_comment_form_content {
    padding: 15px;
    background: #f8f8f8;
}

.max-60 {
    min-width: 160px;
}

.avatar-upload {
    position: relative;
}

.avatar-upload .avatar-edit {
    position: absolute;
    right: -40px;
    z-index: 1;
    top: 7px;

}

.avatar-upload .avatar-edit input {
    display: none;

}

.avatar-upload .avatar-edit input+label {
    display: inline-block;
    width: 34px;
    height: 34px;
    margin-bottom: 0;
    border-radius: 100%;
    background: #FFFFFF;
    border: 1px solid transparent;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    font-weight: normal;
    transition: all .2s ease-in-out;

}

.avatar-upload .avatar-edit input:hover {
    background: #f1f1f1;
    border-color: #d6d6d6;
}

.avatar-upload .avatar-edit input:after {
    content: "\f040";
    font-family: 'FontAwesome';
    color: #757575;
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    text-align: center;
    margin: auto;
}

.avatar-preview {
    width: 250px;
    height: 50px;
    border-radius: 20px;
    position: relative;
    border: 1px solid #F8F8F8;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
}

.avatar-preview div {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.avatar-upload .avatar-edit input+label:after {
    content: "\f040";
    font-family: 'FontAwesome';
    color: #757575;
    position: absolute;
    top: 7px;
    left: 0;
    right: 0;
    text-align: center;
    margin: auto;
}

.img-btn {
    text-align: center;
    margin: auto;
    background: #0000;
    border: 1px solid #c6b4b3;
    border-radius: 20px;
    padding: 10px 0;
    color: #c6b4b3;
    font-weight: bold;
    font-size: 18px;
}
.contact-form .form-group {
    margin-bottom: 10px;
    text-align: left;
}
.contact-form .form-group label {
    color: #fff;
    font-weight: bold;
}
</style>
