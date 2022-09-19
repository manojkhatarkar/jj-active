import axios from 'axios'
import Toasted from 'vue-toasted';
import Vue from 'vue'
Vue.use(Toasted)
export default {
    data() {
        return {
            isqtyCart: false,
            searchingVar: '',
            isCarLoad: false,
            cartCount: [],
            cartCountShow: false,
            qtyCart: [],
            couponData: [],
            cartShow: false,
            cartCounthide: false,
            key: null,
            showthis: false,
            wishlists: 0,
            wish: [],
            shipping: 0,
            q: null,
            loading: false,
            LinksDetails: [],
            site_logo: [],
            min: 0,
            giftCat: 0,
            showMe: false
        }
    },
    watch: {
        '$route' () {
            this.showMe = false
        }
      },
    mounted() {
        document.addEventListener("DOMContentLoaded", function () {
            window.addEventListener('scroll', function () {
                // if (window.scrollY > 250) {
                    // document.getElementById('header-one').classList.add('header-scroll');
                    // document.getElementById('eventalk-main-menu').classList.add('eventalk-main-menu-color');
                // } else {
                    // document.getElementById('header-one').classList.remove('header-scroll');
                    // document.getElementById('eventalk-main-menu').classList.remove('eventalk-main-menu-color');
                // }
            });
        });
    },

    methods: {
        DateFormate(value){
            return value
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var d = new Date(value);
            //return days[d.getDay()]+'-'+months[d.getMonth()]+'-'+years[d.getFullYear()];
        },
        showMyNav() {
            if (this.showMe == false) {
                this.showMe = true;
            } else {
                this.showMe = false;
            }
        },
        goToTop() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        shippingCharge() {
            const axios = require('axios')
            var self = this
            axios.post(this.$root.URL_ROOT + 'api.php', {
                type: 'shipping_charge'
            }).then(function (response) {
                // console.log('shippingCharge', response)
                var data = response.data
                self.shipping = data.data.charge
                self.min = data.data.min
            })
        },
        site_logos() {
            const axios = require('axios')
            var self = this
            axios.post(this.$root.URL_ROOT + 'api.php', {
                type: 'site_logo'
            }).then(function (response) {
                // console.log(response)
                var data = response.data
                self.site_logo = data.data
            })
        },
        site_setting() {
            const axios = require('axios')
            var self = this
            axios.post(this.$root.URL_ROOT + 'api.php', {
                type: 'site_setting'
            }).then(function (response) {
                var data = response.data
                self.LinksDetails = data
            })
        },
        getCart() {
            // this.loading = true;
            var self = this
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = JSON.parse(localStorage.getItem('user'))
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = null
            }
            axios({ method: 'POST', url: this.$root.URL_ROOT + 'api.php', data: { type: 'getMyCart', uid: uid, ip: ip_address } }).then(function (response) {
                // console.log(response)
                var data = response.data
                if (data.status == 'success') {
                    self.cartCount = data;
                    // document.getElementById("cartcount").innerHTML = data.count;
                    // self.loading = false;
                    self.cartShow = true
                    self.cartCountShow = true
                    if(self.cartCount.length == 0){
                    self.giftCat = 0
                    // localStorage.setItem("giftCat", 0)
                    }

                } else {
                    self.cartCounthide = true
                    self.cartCountShow = false
                }
            })
        },
        qtyCarts(pid) {
            var self = this
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = JSON.parse(localStorage.getItem('user'))
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = null
            }
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'qtyCart',
                    uid: uid,
                    ip_address: ip_address,
                    pid: pid
                }
            }).then(function (response) {
                var data = response.data
                self.qtyCart = data.data;
                //  console.log('qtyCart',response)  
            })
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
                    console.log(response.data)
                });
        },
        update_cart(cid, pid, pname, qty, price, mode) {
            // var ev = this
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = localStorage.getItem('user')
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = null
            }
            axios.post(this.$root.URL_ROOT + 'api.php?type=updatecart', {
                uid: uid,
                ip_address: ip_address,
                name: pname,
                pid: pid,
                qty: qty,
                price: price,
                mode: mode,
                cid: cid

            }).then(function (response) {
                if (response.data.status == 'success') {
                    // ev.getCart()
                }
            })
        },
        add_to_cart(pid, pname, qty, price,category,sub,gift) {
            var ev = this
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = localStorage.getItem('user')
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = null
            }
            axios.post(this.$root.URL_ROOT + 'api.php?type=addtocart', {
                uid: uid,
                ip: ip_address,
                name: pname,
                pid: pid,
                qty: qty,
                amount: price,
                total_amount: price,
                gift:gift
            }).then(function (response) {
                var data = response.data
                if (response.data.status == 'success') {
                    ev.$toasted.global.success({ message: 'Your product successfully added to cart' })
                    ev.qtyCarts()
                    ev.getCart()
                    ev.cartCount
                } else {
                    ev.$toasted.global.error({ message: data.msg })
                }
            })
        },
        delete_cart(cid,category,sub) {
            // alert(cid) 
            var ev = this
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = JSON.parse(localStorage.getItem('user'))
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = null
            }
            axios.post(this.$root.URL_ROOT + 'api.php?type=delete_cart', {
                uid: uid,
                ip_address: ip_address,
                cid: cid

            }).then(function (response) {
                //  console.log(response)
                if (response.data.status == 'success') {
                    ev.$toasted.global.success({ message: response.data.msg })
                    ev.getCart()
                } else {
                    //ev.cartShow = false
                    ev.$toasted.global.error({ message: response.data.msg })
                }

            })
        },
        whishList(pid) {
            var ev = this
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = localStorage.getItem('user')
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = null
            }
            axios.post(this.$root.URL_ROOT + 'api.php?type=addWishList', {
                uid: uid,
                ip: ip_address,
                pid: pid,
            }).then(function (response) {
                var data = response.data
                if (response.data.status == 'success') {
                    ev.$toasted.global.success({ message: 'Added your wishlist successfully' })
                    ev.whichCount()
                } else {
                    ev.$toasted.global.error({ message: data.msg })
                }
            })

        },
        logout() {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            // localStorage.removeItem("ip_address");
            localStorage.removeItem("coupon");
            localStorage.removeItem("oid");
            this.$router.push({ name: 'Home' });
            document.getElementById("cartcount").innerHTML = 0;
            location.reload();
        },
    }
}