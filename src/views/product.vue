<template>
<body>
    <Header />
    <main>
        <div class="content-search">
            <div class="container container-100">
                <i class="far fa-times-circle" id="close-search"></i>
                <h3 class="text-center">what are your looking for ?</h3>
                <form method="get" action="#" role="search" style="position: relative">
                    <input type="text" class="form-control control-search" value="" autocomplete="off" placeholder="Enter Search ..." aria-label="SEARCH" name="q" />
                    <button class="button_search" type="submit">search</button>
                </form>
            </div>
        </div>
        <div class="">
                        <!-- <img src="../assets/images/png/pboug.png" class="left-p-img"/> -->

            <img src="../assets/images/png/wbbg.png" style="top:50%" class="right-img op-3"/>
            <img src="../assets/images/png/wbbg.png" class="right-img op-3"/>
        </div>
        <div class="banner"  style="background:#fff;">
            <figure id="banner-figure" class="">
                <a href="#">
                     <img v-if="SelectCategoryData.photo" :src="$root.URL_ROOT+'uploads/Category/'+SelectCategoryData.photo" class="img-responsive w-100">
                    <img v-else src="https://5ineprojects.com/Vanilla-Hues/api/backend/api/uploads/Category/box boquet.png" class="img-responsive w-100" alt="img-holiwood" /></a>
            </figure>
            <div class="text-banner category-text-area">
                <h1 class="theme-color-text " v-if="searchId"> {{searchId}} </h1>
                <h1 class="theme-color-text " v-html="SelectCategoryData.pbody"> </h1>
                <!-- <p>SALE UP TO 20% OFF</p> -->
            </div>
        </div>
        <div class="container content">
            <div class="row pd-mobile-20">
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sidebar" style="clear: left">
                    <div class="collapse navbar-collapse" id="mysidebar">
                        <ul class="list-group list-1">
                            <li class="list-group-item">CATEGORIES</li>
                            <li class="list-group-item">
                                 <div class="mega-menu list-filer">
                                <ul class="">
                                    <li class="">
                                        <ul>
                                            <li class="menu-home-lv2 menu-border mb-10 no-border" v-for="category in allCategory" :key="category.id">
                                                <ul>
                                                    <li>
                                                        <router-link :to="{ name: 'Product', params: { name:category.heading, id:category.id} }"> {{category.heading}} <i class="fa fa-angle-down drop-icons" v-if="category.menus"></i> </router-link>
                                                    </li>
                                                    <template >
                                                        <div class="mega-sub-menus">
                                                        <ul>
                                                        <li class="li-home li-one sub-menuss" v-for="submenu in category.menus" :key="submenu.id"><i class="fas fa-long-arrow-alt-right hidden-sm hidden-md hidden-xs"></i>
                                                            <router-link :to="{ name: 'Product', params: { name:submenu.heading, id:submenu.id} }"> {{submenu.heading}} </router-link>
                                                        </li>
                                                        </ul>

                                                        </div>
                                                    </template>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            </li>
                        </ul>
                        <ul class="list-group list-4">
                            <li class="list-group-item">PRICE</li>
                            <li class="list-group-item list-item-4">
                               <div class="mt-30">
                                <template>
                                    <div>
                                        <price-range-slider v-model="range" :trackHeight="0.5" />
                                    </div>
                                </template>
                                </div>
                                <p class="range-p mt-30">
                                    <button @click="catData">Filter</button>
                                </p>
                                <figure class="bg-input"></figure>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 content-flower" v-if="allProducts.length>0">
                    <div class="row">
                        <Product :Grid="4" :MobileGrid="12" :offset="1" classes="product-flower" class2="product-image-flower" class3="sale" class4="product-icon-flower" class5="product-title-flower" v-for="product in allProducts" :key="product.id" :productData="product"></Product>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pagi">
                            <ul class="pagination">
                                <li><a href="#">01</a></li>
                                <li>
                                    <a href="#"><img src="../assets/img/Next.png" class="img-responsive" alt="img-holiwood" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 content-flower text-center" v-else>
                     <!-- <h1>No Record Found</h1> -->
                     <img src="../assets/images/cs.jpeg" />
                 </div>
            </div>
        </div>
    </main>
    <Footer />
</body>
</template>

<script>
import axios from "axios";
import PriceRangeSlider from "@/components/PriceRangeSlider";
import Product from "../components/product.vue";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
export default {
    components: {
        Header,
        Footer,
        PriceRangeSlider,
        Product
    },
    data() {
        return {
            isFilter: false,
            selectCat: 0,
            page: 2,
            isAct: 0,
            search_key: "",
            ProductsCount: 0,
            isHas: false,
            filterData: false,
            productCount: 0,
            range: {
                minValue: 0,
                maxValue: 1000,
            },
            ProdNoRecordFound: false,
            NoRecordFound: false,
            limit: 0,
            startval: null,
            isCheckeds: false,
            colorVal: [],
            colors: 0,
            setSelected: 0,
            sizes: 0,
            allCategory: [],
            allProducts: [],
            searchId: this.$route.query.searchkey,
            id: this.$route.params.id,
            SelectCategoryData: 0,
            showHeader: false,
            showMe: false

        };
    },
    mounted() {
        this.searchingVar = JSON.parse(localStorage.getItem("searchingVar"));
        this.goToTop();
        this.categories();
         if (this.$route.query.searchkey) {
            this.search()
        } else {
            this.catData(this.$route.params.id);
        }
        // this.catData(this.$route.params.id);
        this.getCategory()
    },
    watch: {
        "$route.params.id": function (newVal, oldVal) {
            this.catData(newVal);
            this.getCategory();
            this.showMyNav()
        },
        "SelectCategoryData": function (newVal, oldVal) {
            if (newVal.id != oldVal.id) {
                this.getCategory();
            }
        },
        selectCat: function (newVal, oldVal) {
            if (newVal != oldVal) {
                this.isFilter = true;
                this.catData();
            }
        },
        search_key: function (newVal, oldVal) {
            if (newVal != oldVal) {
                this.isFilter = true;
                // this.catData();
            }
        },
        range: function (newVal, oldVal) {
            if (newVal != oldVal) {
                this.isFilter = true;
                // this.catData();
            }
        },
    },
    methods: {
        selectCategory(id) {
            this.selectCat = id;
        },
        limitSet(id) {
            this.limit = this.limit + id;
            this.isAct = id;
            this.catData();
        },
        w3_open() {
            document.getElementById("mySidebar").style.display = "block";
        },
        w3_close() {
            document.getElementById("mySidebar").style.display = "none";
        },
        getCategory() {
            var ev = this;
            axios
                .post(this.$root.URL_ROOT + "api.php", {
                    type: 'getSingleCategory',
                    id: this.id
                })
                .then(function (response) {
                    var data = response.data
                    if (data.status == 'success') {
                        ev.SelectCategoryData = data.category;
                        ev.showHeader = true
                    }
                });
        },
        search() {
            var self = this;
            if (self.searchId == "") {
                self.$toasted.global.error({
                    message: "Please select product or category name",
                });
            } else {
                // self.SelectCategoryData.pbody = self.searchId
                axios
                    .post(this.$root.URL_ROOT + "api.php", {
                        type: "searchProduct",
                        cid: self.id,
                        search_key: self.searchId,
                    })
                    .then(function (response) {
                        var data = response.data;
                        console.log('Searching',data);
                        if (data.status == "success") {
                            self.allProducts = data.data;
                            self.ProductsCount = data.count;
                        } else {
                            self.NoRecordFound = true;
                            self.ProductsCount = data.count;
                        }
                    });
            }
        },
        categories() {
            var ev = this;
            axios
                .post(this.$root.URL_ROOT + "api.php", {
                    type: "getMyCategory",
                })
                .then(function (response) {
                    var data = response.data;
                    if (data.status == "success") {
                        ev.allCategory = data.category;
                    }
                });
        },
        catData(id) {
            this.id = id;
            const axios = require("axios");
            var self = this;
            if (this.isFilter != false) {
                axios
                    .post(this.$root.URL_ROOT + "api.php", {
                        type: "priceSearchProduct",
                        min: self.range.minValue,
                        max: self.range.maxValue,
                        cid: self.selectCat,
                        search_key: self.search_key,
                    })
                    .then(function (response) {
                        var data = response.data;
                        console.log("FilterApi", data);
                        if (data.status == "success") {
                            self.allProducts = data.data;
                            self.ProductsCount = data.count;
                            self.searchshow = true;
                        } else {
                            self.NoRecordFound = true;
                            self.ProductsCount = data.count;
                        }
                    });
            } else {
                axios
                    .post(this.$root.URL_ROOT + "api.php", {
                        type: "categoryProduct",
                        id: id,
                        limit: this.limit,
                    })
                    .then(function (response) {
                        var data = response.data;
                        console.log(data);
                        if (data.status == "success") {
                            self.allProducts = data.product;
                            self.ProductsCount = data.count;
                            self.productCount = parseInt(self.allProducts.count);
                        } else {}
                    });
            }
        },
        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
    },
};
</script>
<style scoped>
.banner .text-banner{
    top: 200px !important;
}
@media (max-width: 600px){
    .banner .text-banner{
        top: 25px !important;
        left: 50px !important;
    }
    .banner .text-banner h1{
        width: 220px;
    }
    .content .content-flower .product-flower .product-image-flower .sale::before{
        right: 20px;
    }
}
</style>