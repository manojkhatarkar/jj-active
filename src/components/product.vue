<template>
<div :class="'col-lg-'+Grid+' '+'col-md-'+Grid+' '+'col-sm-'+MobileGrid+' '+'col-xs-'+MobileGrid+' '+ classes +' '+'offset-sm-'+offset" v-if="productData.status==1">
    <div :class="class2 ? class2 : 'product-image-wedding'">
        <figure :class="class3 ? class3 : 'sale'">
            <router-link :to="{ name: 'productDetail', params: { id: productData.id } }"><img :src="$root.URL_ROOT+'uploads/Product/'+productData.front_image" class="img-responsive product-imgs" alt="img-holiwood" /></router-link>
        </figure>
        <div v-if="!productData.gift" :class="class4 ? class4 : 'product-icon-wedding'">
            <a v-if="productData.stock>0" @click="add_to_cart(productData.id,productData.name,'1',productData.total_amount,productData.category,productData.subcategory,productData.gift);" class="pointer">
              <i class="fas fa-shopping-basket"></i> </a>
            <a v-if="productData.stock>0" @click="whishList(productData.id)" class="pointer">
              <i class="far fa-heart"></i>
              </a>
              <div class="out-of-stock" v-else>Out of Stock</div>
        </div>
         <div v-if="!productData.gift_text" :class="class4 ? class4 : 'product-icon-wedding'">
            <a v-if="productData.stock>0" @click="add_to_cart(productData.id,productData.name,'1',productData.total_amount,productData.category,productData.subcategory,productData.gift);" class="pointer">
              <i class="fas fa-shopping-basket"></i> </a>
            <a v-if="productData.stock>0" @click="whishList(productData.id)" class="pointer">
              <i class="far fa-heart"></i>
              </a>
              <div class="out-of-stock" v-else>Out of Stock</div>
        </div>
    </div>
    <div :class="class5 ? class5 : 'product-title-wedding'">
        <h5>
            <router-link :to="{ name: 'productDetail', params: { id: productData.id } }"> {{productData.name}} </router-link>
        </h5>
        <div class="star">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <i style="color:green;font-weight:bold;">Inclusive of GST</i>
        <div class="prince">
            INR {{productData.total_amount}} {{productData.category == 6 ? 'per sq. ft. ' : ''}} <s class="strike">INR {{productData.purchese_cost}} </s>
        </div>
    </div>
</div>
</template>

<script>
// import starRating from "@/components/starRating";
import carousel from "vue-owl-carousel";
import axios from "axios";

export default {
    props: ["productData", "Grid", 'classes', 'class2', 'class3', 'class4', 'class5', 'MobileGrid', 'offset'],
    components: {
        carousel,
        // starRating,
    },
    data() {
        return {
            whishlist: 0,
        };
    },
    mounted() {
        this.orderDetail()
    },
    methods: {
        orderDetail() {

            var ev = this;
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'myorder',
                    uid: ev.uid,

                }
            }).then(function (response) {
                var data = response.data.data
                ev.orderDetailData = data
            })
        },
    },
};
</script>

<style scoped>
.owl-carousel {
    display: block;
}

.product-carousel {
    display: block !important;
}

.product-thumb .button-group a {
    width: 40px;
    height: 40px;
    display: unset;
    top: 8px;
    border: none;
    background-color: #f2f2f2;
    color: #333;
    padding: 12px 12px;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    transition: none;
    vertical-align: top;
    margin-right: 0px;
}
</style>
