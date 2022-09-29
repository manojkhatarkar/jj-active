<template>
<header>
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>

        <router-link :to="{name:'Home'}">Home</router-link>

        <router-link :to="{name:'aboutus'}">About us</router-link>

        <router-link :to="{name:'allEvent'}">Events</router-link>

        <router-link :to="{name:'Certificate'}">Certificate</router-link>

        <router-link :to="{name:'contactus'}">Contact Us</router-link>

    </div>
    <div class="mobile-nav">
     
        <div class="logo-area">
            <router-link to="./">
                <img :src="$root.URL_ROOT+'uploads/Content/'+site_logo.image" width="150" alt="logo">
            </router-link>
            <span style="font-size:30px;cursor:pointer;margin-right:20px;" @click="openNav()">&#9776;</span>

        </div>
    </div>
    <div id="header-one" class="hidden-sm header-area header-fixed full-width-compress">
        <div class="main-menu-area" id="sticker">
            <div class="container-fluid">
                <div class="row no-gutters d-flex align-items-center">
                    <div class="col-lg-2 col-md-2 d-none d-lg-block">
                        <div class="logo-area">
                            <router-link to="/">
                                <img :src="$root.URL_ROOT+'uploads/Content/'+site_logo.image" width="150" alt="logo">
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-10 col-md-6 possition-static">
                        <div class="eventalk-main-menu">
                            <nav class="d-none d-lg-block">
                                <ul>
                                    <li>
                                        <router-link :to="{name:'Home'}">Home</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name:'aboutus'}">About us</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name:'allEvent'}">Events</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name:'Certificate'}">Certificate</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name:'contactus'}">Contact Us</router-link>
                                    </li>
                                    <!-- <li>
                                                    <a href="#">Sponsors</a>
                                                </li>
                                                <li>
                                                    <a href="#">Result</a>
                                                </li> -->
                                </ul>
                            </nav>
                            <!-- Mobile Menu start -->
                            <nav id="dropdown" class="d-md-none">
                                <ul>
                                    <li>
                                        <a href="#">Home</a>

                                    </li>

                                    <li>
                                        <a href="#">Speakers</a>

                                    </li>
                                    <li>
                                        <a href="#">Schedule</a>

                                    </li>
                                    <li>
                                        <a href="#">Sponsors</a>
                                    </li>
                                    <li>
                                        <a href="#">Result</a>
                                    </li>
                                </ul>
                            </nav>
                            <!-- Mobile Menu End -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<script>
import axios from "axios";
export default {
    components: {},
    props: ["isHas"],
    data() {
        return {
            SearchKey: '',
            activeClass: false,
            isSubCategory: false,
            showMe: false,
            isToggle: false,
            mySearch: false,
            myaccountdropdown: false,
            wish: [],
            isShowing: false,
            isShowingCart: false,
            showSearch: false,
            LinksDetails: [],
            uid: localStorage.getItem("user"),
            cartCount: [],
            postroute: [],
            searchData: [],
            allCategory: [],
            catedatas: [],
            site_logo: [],
            fields: {
                type: "nav",
                uid: localStorage.getItem("user"),
                fullname: "",
                mobile: "",
                address: "",
                Token: this.$root.auth,
            },
        };
    },
    mounted() {

        if (this.$route.name == "Product") {
            this.activeClass = true;
        }
        this.isShowing = this.isHas;
        this.shownav();
        this.getCart();
        this.categories();
        this.site_logos();
        this.site_setting();

    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    },
    watch: {

        cartCount: function (cartCount) {
            // if(this.cartCount.count != cartCount.count){
            this.cartCount = cartCount;
            // this.getCart();
            // }
        },
    },
    methods: {
        openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        },

        closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        },
        showSearchBar() {
            if (this.mySearch == false) {
                this.mySearch = true
            } else {
                this.mySearch = false
            }
        },

        showNav() {
            if (this.showMe == false) {
                this.showMe = true;
            } else {
                this.showMe = false;
            }
        },
        showToggle() {
            if (this.isToggle == true) {
                this.isToggle = false;
            } else {
                this.isToggle = true;
            }
        },
        openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        },
        closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        },
        shownav() {
            this.responsive = true;
        },
        categories() {
            var ev = this;
            axios
                .get(this.$root.URL_ROOT + "api.php?type=getMyCategory")
                .then(function (response) {
                    var data = response.data;
                    if (data.status == "success") {
                        ev.allCategory = data.category;
                    }
                });
        },
        whichCount() {
            var ev = this;
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = JSON.parse(localStorage.getItem("user"));
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            axios
                .post(this.$root.URL_ROOT + "api.php?type=whichCount", {
                    uid: uid,
                    ip_address: ip_address,
                })
                .then(function (response) {
                    ev.wish = response.data;
                    // console.log(response.data)
                });
        },
        search() {
            if (this.SearchKey == '') {
                this.$toasted.global.error({
                    message: 'Please enter product or category name'
                })

            } else {
                this.$emit("change", this.SearchKey);
                this.$router.push({
                    name: 'Product',
                    query: {
                        searchkey: this.SearchKey
                    }
                }).catch(() => {});
            }
        },
    },
};
</script>

<style>
.showclass {
    opacity: 1 !important;
    left: 0 !important;
    top: 0px;
    z-index: 99999999999 !important;
    visibility: visible !important;
    padding-top: 50px;
}

.shadow {
    box-shadow: 1px 4px 9px #5d5b5b;
}

.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.sidenav a:hover {
    color: #f1f1f1;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }

    .sidenav a {
        font-size: 18px;
    }
}
</style>
