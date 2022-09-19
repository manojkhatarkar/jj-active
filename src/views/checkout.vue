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
                <figure id="banner-about" class="max-height-500">

                    <a href="#">

                        <img src="../assets/images/other.png" class="img-responsive w-100" alt="img-holiwood" /></a>
                </figure>
                <div class="title-banner">
                    <h1>Checkout</h1>
                    <p>
                        <router-link to="/" title="Home" class="theme-color-text">Home</router-link><i class="fa fa-caret-right"></i>Checkout
                    </p>
                </div>
            </div>
        </div>
        <!-- <div class="banner">
        <div class="">
         <figure id="banner-about" class="max-height-500">

            <a href="#"
              >

              <img
                src="../assets/images/banner/about-banner.png"
                class="img-responsive w-100"
                alt="img-holiwood"
            /></a>
          </figure>
          <div class="title-banner">
            <h1>Contact Us</h1>
            <p>
              <router-link to="/" title="Home">Home</router-link
              ><i class="fa fa-caret-right"></i>Checkout
            </p>
          </div>
        </div>
      </div> -->

        <div class="container container-ver2 space-padding-tb-30" v-if="!NoRecordFound">
            <div class="row head-cart">
                <div class="col-md-4 space-30">
                    <div class="item active center img-color-1">
                        <p class="icon">01</p>
                        <h3>Shopping cart</h3>
                    </div>
                </div>
                <!-- End col-md-4 -->
                <div class="col-md-4 space-30">
                    <div class="item active center img-color-2">
                        <p class="icon">02</p>
                        <h3>Check out</h3>
                    </div>
                </div>
                <!-- End col-md-4 -->
                <div class="col-md-4 space-30">
                    <div class="item center img-color-3">
                        <p class="icon">03</p>
                        <h3>Order completed</h3>
                    </div>
                </div>
                <!-- End col-md-4 -->
            </div>
        </div>
        <!-- End container -->
        <div class="cart-box-container check-out" v-if="!NoRecordFound">
            <div class="container container-ver2">
                <div class="row">
                    <div class="col-md-8">
                        <!-- <h3 class="title-brand"></h3> -->
                         <div class="caupon-wrap s2 shadow border" style="background:#fff;">
                            <div class="biling-item">
                                <div class="coupons coupon-3">
                                    <label id="toggle2" class="mb-20">
                                        Your Cart Items</label>
                                </div>
                                <div class="billing-adress" id="open1">
                                    <div class="contact-form form-style">
                                        <div class="row">
                                            <div class="box">
                                                <div class="info-order">
                                                    <div class="product-name">
                                                        <table class="table table-bordered">
                                                            <!-- <tr class="gift-area-list">
                                                                <th class="">S. No.</th>
                                                                <th class="">Image</th>
                                                                <th class="">Name</th>
                                                                <th class="">Upload Image</th>
                                                                <th class="">Content</th>
                                                                <th class="">Action</th>
                                                            </tr> -->
                                                            <tr class="gift-area-list" v-for="(cart,keys) in cartCount.data" :key="keys">
                                                                <!-- <td class="names"> {{keys+1}} </td> -->
                                                                <td class="names"> <img :src="$root.URL_ROOT+'uploads/Product/'+cart.front_image" :alt="cart.front_image" width="50" /></td>
                                                                <td class="names">  <router-link :to="{name: 'productDetail', params:{id:cart.pid}}" class="a" title=""> {{cart.name}} </router-link> </td>
                                                                <td class="names" v-if="cart.gift>0">
                                                                    <div > 
                                                                        <a :href="'#openModal-about'+cart.id" class="up-img">Uploaded Image</a>
<!--modals-->
  <div :id="'openModal-about'+cart.id" class="modalDialog">
      <div>
         <a href="#close" title="Close" class="close">X</a>
            <img :src="$root.URL_ROOT+'uploads/Cart/'+cart.cart_image" :alt="cart.cart_image" width="300"  />
         </div>
   </div>
                                                                    </div>
                                                                </td>
                                                                <td class="names" v-if="cart.gift_text>0">
                                                                        {{cart.cart_content}}
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="caupon-wrap s2">
                            <div class="biling-item">
                                <div class="coupons coupon-3">
                                    <label id="toggle2" class="mb-20">
                                    </label>
                                    <label v-if="dashboard_box == 'step-1'" class="pull-right">
                                        <!-- <i class="fa fa-eye font-26" aria-hidden="true"></i> -->
                                    </label>
                                    <label v-else class="pull-right">
                                        <i class="fa fa-eye-slash font-26" aria-hidden="true"></i>
                                    </label>
                                </div>
                                <div class="billing-adress" id="open1">
                                    <div class="contact-form form-style">
                                        <div class="row">
                                            <div class="col-md-6 mb-20">
                                                <label>Expected Date </label>
                                                <input type="date" v-model="edate" class="form-control" />
                                            </div>
                                            <div class="col-md-6 mb-20">
                                                <label>Write your Comment</label>
                                                <input type="text" v-model="usercomment" placeholder="Enter Content" class="form-control" />
                                            </div>
                                        </div>
                                        <!-- <div class="row">
                                            <div class="col-lg-4 col-md-4 col-4">
                                                <button class="theme-btn" @click="giftContent"> {{giftData.id>0 ? 'Edit': 'Continue' }} </button>
                                            </div>
                                        </div> -->
                                    </div>

                                </div>
                            </div>
                        </div>

                       

                        <!--  -->
                        <div class="caupon-wrap s2" v-if="addressDatas.length">
                            <div class="biling-item">
                                <div @click="open_dashboard2" class="coupons coupon-3" :class="dashboard_box == 'step-1' ? 'active' : ''">
                                    <label id="toggle2">
                                        <i class="fa fa-check color-green" v-if="add_id>0" aria-hidden="true"></i>
                                        Select Address</label>
                                    <label v-if="dashboard_box == 'step-1'" class="pull-right">
                                        <i class="fa fa-eye font-26" aria-hidden="true"></i>
                                    </label>
                                    <label v-else class="pull-right">
                                        <i class="fa fa-eye-slash font-26" aria-hidden="true"></i>
                                    </label>
                                </div>
                                <div class="billing-adress" id="open1" v-if="dashboard_box == 'step-1'">
                                    <div class="contact-form form-style">
                                        <div class="row">
                                            <div :class="userAddress.shippingBilling==true ? 'col-md-12' : 'col-md-6'">
                                                <label>Select Shipping Address</label>
                                                <select v-model="add_id" @change="getSelectedAddress(add_id)" class="form-control">
                                                    <option value="0">Select Shipping Address</option>
                                                    <option :value="getShipping.add_id" v-for="getShipping in getShippingAddressData" :key="getShipping.add_id"> {{getShipping.add1}} </option>
                                                </select>
                                            </div>
                                            <div class="col-md-6" v-if="!userAddress.shippingBilling">
                                                <label>Select Billing Address</label>
                                                <select v-model="billing_id" @change="getSelectedBillingAddress(billing_id)" class="form-control">
                                                    <option value="0">Select Billing address</option>
                                                    <option :value="getShipping.add_id" v-for="getShipping in getBillingAddressData" :key="getShipping.add_id"> {{getShipping.add1}} </option>
                                                </select>
                                            </div>
                                            <div class="col-md-6" v-if="add_id != 0">
                                                <div class="col-md-12 foundation card">
                                                    <h3> Shipping Address </h3>
                                                    <div class=" radio-btn">
                                                        <input type="radio" name="shipping" :id="'radio'+selectedAddress.add_id" class="radio visiblity-none" v-model="add_id" :value="selectedAddress.add_id" />
                                                        <label class="label" :for="'radio'+selectedAddress.add_id"></label>
                                                    </div>
                                                    <div class="col-md-12 foundation_sm">
                                                        <ul>

                                                            <li> {{selectedAddress.add_title}} </li>
                                                            <li><i class="fa fa-envelope-o" aria-hidden="true"></i>{{selectedAddress.email}}</li>
                                                            <li><i class="fa fa-phone" aria-hidden="true"></i> {{selectedAddress.mobile_no}} </li>
                                                            <li><i class="fi flaticon-pin" aria-hidden="true"></i> {{selectedAddress.add1}} </li>
                                                            <li> {{selectedAddress.add2}} </li>
                                                            <li> {{selectedAddress.city}}, {{selectedAddress.c_state}}, <br /> {{selectedAddress.country}}, {{selectedAddress.zipcode}} </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6" v-if="!userAddress.shippingBilling && billing_id != 0">
                                                <div class="col-md-12 foundation card">
                                                    <h3> Billing Address </h3>
                                                    <div class=" radio-btn">
                                                        <input type="radio" name="billing" :id="'radio'+selectedBillingAddress.add_id" class="radio visiblity-none" v-model="billing_id" :value="selectedBillingAddress.add_id" />
                                                        <label class="label" :for="'radio'+selectedBillingAddress.add_id"></label>
                                                    </div>
                                                    <div class="col-md-12 foundation_sm">
                                                        <ul>
                                                            <li> {{selectedBillingAddress.add_title}} </li>
                                                            <li><i class="fa fa-envelope-o" aria-hidden="true"></i>{{selectedBillingAddress.email}}</li>
                                                            <li><i class="fa fa-phone" aria-hidden="true"></i> {{selectedBillingAddress.mobile_no}} </li>
                                                            <li><i class="fi flaticon-pin" aria-hidden="true"></i> {{selectedBillingAddress.add1}} </li>
                                                            <li> {{selectedBillingAddress.add2}} </li>
                                                            <li> {{selectedBillingAddress.city}}, {{selectedBillingAddress.c_state}}, <br /> {{selectedBillingAddress.country}}, {{selectedBillingAddress.zipcode}} </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-md-12 col-12" style="margin-bottom: 20px;align-items: center;display: flex;">
                                                <input class="form-control mb-25" type="checkbox" placeholder="" style="width: 5%;height: 26px;margin: 15px 5px;" @change="checkBillingShipping" v-model="userAddress.shippingBilling" id="sel" name="sel">
                                                <label for="sel">Select Shipping address as billing address</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4 col-4">
                                                <button class="theme-btn" @click="add_select" v-if="add_id">Continue</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="caupon-wrap s2">
                            <div class="biling-item">
                                <div class="coupon coupon-3" @click="open_dashboard('step-2')" :class="dashboard_box == 'step-2' ? 'active' : ''">
                                    <label id="toggle2">Add Shipping Address</label>
                                </div>
                                <div class="billing-adress" id="open2" v-if="dashboard_box == 'step-2'">
                                    <div class="contact-form form-style">
                                        <ValidationObserver ref="form">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="fname1">Fullname</label>
                                                    <input class="form-control mb-25" type="hidden" v-model="userAddress.add_type" placeholder="" value="shipping">
                                                    <validation-provider rules="required|alpha_spaces|min:5" v-slot="{ errors }">
                                                        <input class="form-control mb-25" type="text" v-model="userAddress.add_title" placeholder="" id="fname1" name="Fullname">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="fname2">Mobile</label>
                                                    <validation-provider rules="required|integer|min:10|max:10" v-slot="{ errors }">
                                                        <input class="form-control mb-25" type="text" placeholder="" v-model="userAddress.mobile_no" id="mobile" name="Number">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="fname2">Email</label>
                                                    <validation-provider rules="required|email" v-slot="{ errors }">
                                                        <input class="form-control mb-25" type="text" placeholder="" v-model="userAddress.email" id="email" name="email">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="Country">Country</label>
                                                    <select name="address" v-model="userAddress.country" id="Country" class="form-control">
                                                        <option value="india">India</option>
                                                    </select>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="City">State</label>
                                                    <validation-provider rules="required|alpha_spaces|min:5" v-slot="{ errors }">
                                                        <input class="form-control mb-25" type="text" placeholder="" v-model="userAddress.c_state" id="state" name="state">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="City">City</label>
                                                    <validation-provider rules="required|alpha_spaces|min:3" v-slot="{ errors }">

                                                        <input class="form-control mb-25" type="text" placeholder="" v-model="userAddress.city" id="City" name="City">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="City">Address Line 1</label>
                                                    <validation-provider rules="required|min:3" v-slot="{ errors }">
                                                        <input class="form-control mb-25" type="text" placeholder="" v-model="userAddress.add1" id="Address line 1" name="Address line 1">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>

                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="Adress">Address Line 2</label>
                                                    <validation-provider rules="required|min:3" v-slot="{ errors }">

                                                        <input class="form-control mb-25" type="text" placeholder="" id="Address line 2" v-model="userAddress.add2" name="Address line 2">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="Post2">Pin Code</label>
                                                    <validation-provider rules="required|integer|min:6|max:6" v-slot="{ errors }">

                                                        <input class="form-control mb-25" type="text" placeholder="" v-model="userAddress.zipcode" id="Post2" name="Post">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-12" style="margin-bottom: 20px;align-items: center;display: flex;">
                                                    <input class="form-control mb-25" type="checkbox" placeholder="" style="width: 5%;height: 26px;margin: 15px 5px;" v-model="userAddress.shippingBilling" id="sel" name="sel">
                                                    <label for="sel">Select Shipping address as billing address</label>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-12">
                                                    <button class="theme-btn" type="button" @click="switchLoc">Continue</button>
                                                </div>
                                            </div>
                                        </ValidationObserver>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- Billing Address -->
                        <div class="caupon-wrap s2" v-if="!userAddress.shippingBilling">
                            <div class="biling-item">
                                <div class="coupon coupon-3" @click="open_dashboard('step-5')" :class="dashboard_box == 'step-5' ? 'active' : ''">
                                    <label id="toggle2">Add Billing Address</label>
                                </div>
                                <div class="billing-adress" id="open2" v-if="dashboard_box == 'step-5'">
                                    <div class="contact-form form-style">
                                        <ValidationObserver ref="formBilling">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="fname1">Fullname</label>
                                                    <validation-provider rules="required|alpha_spaces|min:5" v-slot="{ errors }">
                                                        <input class="form-control mb-25" type="text" v-model="userAddressBilling.add_title" placeholder="" id="fname1" name="Fullname">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="fname2">Mobile</label>
                                                    <validation-provider rules="required|integer|min:10|max:10" v-slot="{ errors }">
                                                        <input class="form-control mb-25" type="text" placeholder="" v-model="userAddressBilling.mobile_no" id="mobile" name="Number">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="fname2">Email</label>
                                                    <validation-provider rules="required|email" v-slot="{ errors }">
                                                        <input class="form-control mb-25" type="text" placeholder="" v-model="userAddressBilling.email" id="email" name="email">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="Country">Country</label>
                                                    <select name="address" v-model="userAddressBilling.country" id="Country" class="form-control">
                                                        <option value="india">India</option>
                                                    </select>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="City">State</label>
                                                    <validation-provider rules="required|alpha_spaces|min:5" v-slot="{ errors }">
                                                        <input class="form-control mb-25" type="text" placeholder="" v-model="userAddressBilling.c_state" id="state" name="state">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="City">City</label>
                                                    <validation-provider rules="required|alpha_spaces|min:3" v-slot="{ errors }">

                                                        <input class="form-control mb-25" type="text" placeholder="" v-model="userAddressBilling.city" id="City" name="City">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="City">Address Line 1</label>
                                                    <validation-provider rules="required|min:3" v-slot="{ errors }">

                                                        <input class="form-control mb-25" type="text" placeholder="" v-model="userAddressBilling.add1" id="Address line 1" name="Address line 1">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>

                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="Adress">Address Line 2</label>
                                                    <validation-provider rules="required|min:3" v-slot="{ errors }">

                                                        <input class="form-control mb-25" type="text" placeholder="" id="Address line 2" v-model="userAddressBilling.add2" name="Address line 2">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-12">
                                                    <label for="Post2">Pin Code</label>
                                                    <validation-provider rules="required|integer|min:6|max:6" v-slot="{ errors }">

                                                        <input class="form-control mb-25" type="text" placeholder="" v-model="userAddressBilling.zipcode" id="Post2" name="Post">
                                                        <span class="error-msgs">{{ errors[0] }}</span>
                                                    </validation-provider>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-12">
                                                    <button class="theme-btn" type="button" @click="switchLocBilling">Continue</button>
                                                </div>
                                            </div>
                                        </ValidationObserver>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- End Billing Address -->

                    </div>
                    <!-- End col-md-8 -->
                    <div class="col-md-4 space-30">
                        <div class="box">
                            <h3 class="title-brand">YOUR ORDER</h3>
                            <div class="info-order">
                                <div class="product-name">
                                    <ul>
                                        <li class="head">
                                            <span class="name">PRODUCTS NAME</span>
                                            <span class="qty"><b>QTY</b></span>
                                            <span class="total"><b>SUB TOTAL</b></span>
                                        </li>
                                        <li v-for="cart in cartCount.data" :key="cart.id">
                                            <span class="name"> {{cart.name}} </span>
                                            <span class="qty"> {{cart.qty}} </span>
                                            <span class="total"> INR {{cart.totalamount}} </span>
                                        </li>

                                    </ul>
                                </div>
                                <!-- End product-name -->
                                <ul class="product-order">
                                    <li>
                                        <span class="left">CART SUBTOTAL</span>
                                        <span class="right">INR {{cartCount.total_amount}} </span>
                                    </li>
                                    <li>
                                        <span class="left">SHIPPING & HANDLING</span>
                                        <span class="right">INR{{shipping}} </span>
                                    </li>
                                    <li>
                                        <span class="left">ORDER TOTAL</span>
                                        <span class="right bold"> INR {{cartCount.total_amount+shipping}} </span>
                                    </li>

                                </ul>
                            </div>
                            <!-- End info-order -->
                            <div class="payment-order box float-left">
                                <h3 class="title-brand">PAYMENT METHOD</h3>
                                <p> <i class="fa fa-shield text-success"></i> Safe and Secure Payments. Easy returns. 100% Authentic products.</p>

                                <ul class="tabs pd-0">

                                    <li class="d-flex">
                                        <input type="radio" id="paymenttype" name="paymenttype" value="2" v-model="paymentMethod" class="mr-15" />

                                        <h4>Online</h4>
                                    </li>
                                    <li class="d-flex">
                                        <input type="radio" id="paymenttype" name="paymenttype" value="1" v-model="paymentMethod" class="mr-15" />
                                        <h4>Pay On Delivery</h4>

                                    </li>
                                </ul>
                            </div>
                            <a class="link-v1 box lh-50 rt full pointer" title="PLACE ORDER" @click="orderGenerate">PLACE ORDER</a>
                        </div>
                    </div>
                </div>
                <!-- End row -->
            </div>
            <!-- End container -->
        </div>

        <div class="container" v-if="NoRecordFound">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1>No Record Found</h1>
                </div>
            </div>
        </div>

        <!-- End cat-box-container -->
    </main>
    <Footer />
</body>
</template>

<script>
import axios from "axios";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import $ from 'jquery'

import {
    ValidationProvider,
    ValidationObserver
} from "vee-validate";

export default {
    props: ["catedatas"],
    components: {
        Header,
        Footer,
        ValidationProvider,
        ValidationObserver,
    },
    data() {
        return {
            NoRecordFound: false,
            FinalTotalAmount: 0,
            add_id: 0,
            cgstLess: 0,
            sgstLess: 0,
            withTextAmount: 0,
            withoutTextAmount: 0,
            totalwithoutgst: 0,
            ttotalwithoutgst: 0,
            billing_id: 0,
            paymentMethod: 2,
            giftCat: localStorage.getItem("giftCat") ? localStorage.getItem("giftCat") : 0,
            couponCode: "",
            getCounts: "",
            content: "",
            myCouponMoney: localStorage.getItem("coupon") ?
                localStorage.getItem("coupon") : 0,
            isHas: false,
            isAdd: 0,
            shipping: 0,
            min: 0,
            thisImg: '',
            giftData: localStorage.getItem("giftData") ? JSON.parse(localStorage.getItem("giftData")) : [],
            dashboard_box: "step-1",
            ip_address: JSON.parse(localStorage.getItem("ip_address")),
            uid: localStorage.getItem("user"),
            userData: [],
            cartCount: [],
            amount: 100,
            addressDatas: [],
            paymenttype: "ppd",
            awbNumber: "",
            selectedAddress: [],
            getShippingAddressData: [],
            getBillingAddressData: [],
            selectedBillingAddress: [],
            edate: '',
            usercomment: '',
            preview: 'gift.jpeg',
            previewImgs: [],
            image: null,
            userAddress: {
                add_title: "",
                mobile_no: "",
                add1: "",
                add2: "",
                c_state: "",
                city: "",
                zipcode: "",
                add_type: "Shipping",
                shippingBilling: false,
            },
            userAddressBilling: {
                add_title: "",
                mobile_no: "",
                add1: "",
                add2: "",
                c_state: "",
                city: "",
                zipcode: "",
                add_type: "",
            },
        };
    },
    watch: {
        add_id: function (id, oldId) {
            if (this.add_id > 0 && this.add_id != oldId) {
                this.getSelectedAddress(id);
                // if(this.userAddress.shippingBilling==true){
                //      this.billing_id = this.add_id
                // }
            }
        },
        // giftData: function (newVal, oldVal) {
        //     if (oldVal.id != newVal.id) {
        //         this.giftData = newVal
        //     }
        // },
        billing_id: function (id, oldId) {
            if (this.billing_id > 0 && this.billing_id != oldId) {
                this.getSelectedBillingAddress(id);
            }
        },
        // userAddress: function(id){
        //     if(this.userAddress.shippingBilling==true){
        //         this.billing_id = this.add_id
        //     }
        // },
        //         selectedAddress: function(){
        //  if (this.add_id > 0) {
        //             this.getSelectedAddress(this.add_id);
        //         }
        //         },
        cartCount: function () {
            if (this.cartCount.count == 0) {
                this.$toasted.global.error({
                    message: "Your cart is empty please add some product",
                });
                this.NoRecordFound = true
            }
        },
    },
    mounted() {
        this.includeStripe("checkout.razorpay.com/v1/checkout.js");
        this.uid = localStorage.getItem("user");
        (this.ip_address = JSON.parse(localStorage.getItem("ip_address"))),
        this.userDetail();
        this.getAddress();
        this.getState();
        var ev = this;
        if (this.add_id > 0) {
            this.getSelectedAddress(this.add_id);
        }
        setTimeout(function () {
            ev.getSelectedAddress(this.add_id);
            // ev.getSelectedBillingAddress(this.billing_id);
        }, 2000);
        this.goToTop();
        this.getCart();
        this.shippingCharge();
        // this.checkfirstSigup();
        this.getShippingAddress();
        this.getBillingAddress();
    },
    methods: {
        previewImage: function (event,id) {
            var input = event.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                this.previewImgs[id] = e.target.result;
                }
                this.image = input.files[0];
                reader.readAsDataURL(input.files[0]);
            }
        },
        giftContent() {
            var ev = this
            this.file = this.$refs.giftImage.files[0];

            if (this.content == "") {
                this.$toasted.global.error({
                    message: "Please Enter Content",
                });
            } else if (this.file == undefined) {
                this.$toasted.global.error({
                    message: "Please Select Image",
                });
            } else {
                console.log(this.file);
                let formData = new FormData();
                formData.append('giftImage', this.file);
                formData.append('content', this.content);
                formData.append('uid', this.uid);
                formData.append('type', 'giftContent');
                axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: formData,
                }).then(function (response) {
                    var data = response.data;
                    if (data.status == 'success') {
                        ev.giftData = data.data
                        localStorage.setItem("giftData", JSON.stringify(data.data));
                        this.$toasted.global.success({
                            message: "Save Successfully",
                        });

                    } else {
                        this.$toasted.global.error({
                            message: "Somthing went wrong",
                        });
                    }
                });
            }

        },
        checkBillingShipping() {
            if (this.userAddress.shippingBilling == true) {
                this.billing_id = this.add_id;
            }
        },
        getShippingAddress() {
            var user_session = JSON.parse(localStorage.getItem("user"));
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            var ev = this;
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "getShippingAddress",
                    uid: uid,
                },
            }).then(function (response) {
                var data = response.data;
                ev.add_id = data[0].add_id;
                ev.getShippingAddressData = data;
            });
        },
        getBillingAddress() {
            var user_session = JSON.parse(localStorage.getItem("user"));
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            var ev = this;
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "getBillingAddress",
                    uid: uid,
                },
            }).then(function (response) {
                var data = response.data;
                // ev.add_id = ev.addressDatas[0].add_id
                if(data.length){
                    ev.billing_id = data[0].add_id;
                    ev.getBillingAddressData = data;    
                }
               
            });
        },
        getSelectedBillingAddress(id) {
            if (id == 0) {} else {
                var user_session = JSON.parse(localStorage.getItem("user"));
                var uid = "";
                if (user_session != null) {
                    uid = user_session;
                } else {
                    uid = null;
                }
                var ev = this;
                axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: {
                        type: "getSelectedBillingAddress",
                        uid: uid,
                        aid: id,
                    },
                }).then(function (response) {
                    var data = response.data;
                    ev.selectedBillingAddress = data;
                    ev.billing_id = data.add_id;
                });
            }
        },
        getSelectedAddress() {
            if (this.add_id == 0) {} else {
                var user_session = JSON.parse(localStorage.getItem("user"));
                var uid = "";
                if (user_session != null) {
                    uid = user_session;
                } else {
                    uid = null;
                }
                var ev = this;
                axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: {
                        type: "getSelectedAddress",
                        uid: uid,
                        aid: ev.add_id,
                    },
                }).then(function (response) {
                    var data = response.data;
                    ev.selectedAddress = data;
                    ev.add_id = data.add_id;
                });
            }
        },
        checkfirstSigup() {
            var self = this;
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "checkFirstSignup",
                    uid: self.uid,
                },
            }).then(function (response) {
                var data = response.data;
                if (data.data) {} else {
                    self.couponCode = "FIRST";
                    // self.applyCoupon();
                }
            });
        },
        getCount(id) {
            var count = "";
            var data = count.push(id);
            this.getCounts = data;
        },
        generateAwbNumber() {
            var self = this;
            var oid = localStorage.getItem("oid");
            if (this.paymentMethod == 1) {
                self.paymenttype = "COD";
            }
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "generateAwb",
                    payment: self.paymenttype,
                    oid: oid,
                },
            }).then(function (response) {
                var data = response.data;
                if (data.status == "success") {
                    self.awbNumber = data.data;
                    self.createShipping();
                }
            });
        },
        pincode_status() {
            if (this.add_id == 0 || this.add_id == undefined) {
                this.$toasted.global.error({
                    message: "Please Select Shipping Address",
                });
            } else if (this.billing_id == 0 || this.billing_id == undefined) {
                this.$toasted.global.error({
                    message: "Please Select Billing address",
                });
            } else if (this.cartCount.count == 0) {
                this.$toasted.global.error({
                    message: "Your cart is empty please add some product",
                });
            } else {
                var self = this;
                axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: {
                        type: "pincode_status",
                        pincode: self.selectedAddress.zipcode,
                    },
                }).then(function (response) {
                    var data = response.data;
                    if (data.status == "success") {
                        self.orderGenerate();
                    }
                });
            }
        },
        createShipping() {
            var amount = 0;
            var self = this;
            var getcouponMoney = parseFloat(this.myCouponMoney);
            if (this.paymentMethod == 1) {
                self.paymenttype = "COD";
                // amount = parseFloat((this.cartCount.total_amount + this.shipping) - this.myCouponMoney);
                var amount =
                    parseFloat(
                        this.cartCount.total_amount + this.shipping - getcouponMoney
                    ) +
                    parseFloat(
                        (this.cartCount.total_gst / 100) * this.cartCount.total_amount
                    );
                // {{parseFloat(this.cartCount.total_amount+this.shipping-getcouponMoney) + parseFloat((this.cartCount.total_gst / 100)*this.cartCount.total_amount )}}
            }
            var oid = localStorage.getItem("oid");
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "testingShipping",
                    add_id: self.add_id,
                    awb_number: self.awbNumber,
                    oid: oid,
                    product: self.paymenttype,
                    qty: self.cartCount.count,
                    amount: amount,
                },
            }).then(function (response) {
                var data = response.data;
                if (data.status == "success") {
                    self.$toasted.global.success({
                        message: "Success Please wait...",
                    });
                    if (self.paymentMethod == 1) {
                        self.$router.push({
                            name: "success_cod",
                        });
                    } else {
                        self.$router.push({
                            name: "success",
                        });
                    }
                }
            });
        },
        applyCoupon() {
            var self = this;
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "couponapply",
                    coupon: self.couponCode,
                    uid: self.uid,
                },
            }).then(function (response) {
                var data = response.data;
                if (data.status == "success") {
                    self.myCouponMoney = data.data;
                    localStorage.setItem("coupon", data.data);
                    localStorage.setItem("coupon_name", self.couponCode);
                    self.$toasted.global.success({
                        message: data.msg,
                    });
                } else {
                    self.$toasted.global.error({
                        message: data.msg,
                    });
                }
            });
        },
        switchLoc() {
            var iv = this;
            var vali = this.$refs.form.validate();
            vali.then((val) => {
                if (val == true) {
                    iv.save_address();
                }
            });
        },
        switchLocBilling() {
            var iv = this;
            var vali = this.$refs.formBilling.validate();
            vali.then((val) => {
                if (val == true) {
                    iv.save_billing_address();
                }
            });
        },
        add_select() {
            if (this.add_id > 0) {
                // this.dashboard_box = "step-3";
            } else {
                this.$toasted.global.error({
                    message: "Please select address ",
                });
            }
        },
        includeStripe(URL, callback) {
            let documentTag = document,
                tag = "script",
                object = documentTag.createElement(tag),
                scriptTag = documentTag.getElementsByTagName(tag)[0];
            object.src = "https://" + URL;
            if (callback) {
                object.addEventListener(
                    "load",
                    function (e) {
                        callback(null, e);
                    },
                    false
                );
            }
            scriptTag.parentNode.insertBefore(object, scriptTag);
        },
        makePayment: function (ev) {
            if (this.add_id == 0) {
                this.$toasted.global.error({
                    message: "Please add address"
                });
            } else {
                var ev = this;
                var getcouponMoney = parseFloat(this.myCouponMoney);
                if (ev.min > this.cartCount.total_amount) {
                    this.shipping = 0;
                }
                var t = this.cartCount.total_amount + this.shipping;
                var amount = (t).toFixed(2);
                //console.log(amount*100);
                var pay_amount = (amount * 100).toFixed(2);
                console.log(pay_amount)
                var rzp1 = new Razorpay({
                    key: "rzp_live_yw05l8StADqY1A",
                    amount: pay_amount,
                    currency: "INR",
                    handler: function (response) {
                        ev.pay_id = response.razorpay_payment_id;
                        localStorage.setItem("successData", response);
                        ev.updatePayment(response);
                    },
                    ondismiss: function () {
                        window.location.reload();
                    },
                    prefill: {},
                    notes: {
                        // address: this.address, //this.$store.state.profile.address
                    },
                    theme: {
                        color: "#00FFFF",
                    },
                    //order_id: 1,
                    redirect: false,
                });
                rzp1.open();
            }
        },
        updatePayment(payment_detail) {
            var self = this;
            var oid = localStorage.getItem("oid");
            var uid = localStorage.getItem("user");
            var coupon_name = localStorage.getItem("coupon_name");
            var couponMoney = localStorage.getItem("coupon");
            axios
                .post(this.$root.URL_ROOT + "api.php", {
                    type: "payment_success",
                    uid: uid,
                    oid: oid,
                    payment_detail: payment_detail,
                    coupon_name: coupon_name,
                    coupon: couponMoney,
                })
                .then(function (response) {
                    var data = response.data;
                    if (data.status == "success") {
                        if (self.paymentMethod == 1) {
                            self.$router.push({
                                name: "success_cod",
                            });
                        } else {
                            self.$router.push({
                                name: "success",
                            });
                        }
                    }
                });
        },
        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        open_dashboard(vl) {
            this.dashboard_box = vl;
            window.scrollBy(100, 0);
        },
        open_dashboard2() {
            if (this.dashboard_box == "step-1") {
                // this.dashboard_box = "step-3";
            } else {
                this.dashboard_box = "step-1";
            }
        },
        userDetail() {
            var ev = this;
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "userDetail",
                    uid: ev.uid,
                },
            }).then(function (response) {
                var data = response.data;
                if (data.data) {
                    ev.userData = data.data;
                } else {
                    ev.logout();
                    ev.$toasted.global.error({
                        message: "Your Account is Deactivated",
                    });
                    setTimeout(function () {
                        ev.$router.push({
                            name: "Home",
                        });
                    }, 1000);
                }
            });
        },
        orderGenerate() {
            if (this.giftData.id <= 0) {
                this.$toasted.global.error({
                    message: "Please Upload Gift Image and Content",
                });
            } else if (this.edate == '') {
                this.$toasted.global.error({
                    message: "Please Select Expected Date",
                });
            } else if (this.usercomment == '') {
                this.$toasted.global.error({
                    message: "Please write your Comment",
                });
            } else {
                var ev = this;
                var paymentType = "Online";
                if (this.paymentMethod == 1) {
                    paymentType = "COD";
                }
                var user_session = localStorage.getItem("user");
                var uid = "";
                if (user_session != null) {
                    uid = user_session;
                } else {
                    uid = null;
                }
                var gid = 0;
                if (ev.giftData.id > 0) {
                    gid = ev.giftData.id;
                } else {
                    gid = 0;
                }
                var amount = parseFloat(this.cartCount.total_amount + this.shipping)
                var shipping = this.shipping;
                axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: {
                        type: "order",
                        uid: uid,
                        address_id: ev.add_id,
                        billing_id: ev.billing_id,
                        gid: gid,
                        total: amount,
                        payment_type: paymentType,
                        shipping_amount: shipping,
                        usercomment: ev.usercomment,
                        edate: ev.edate
                    },
                }).then(function (response) {
                    var data = response.data;
                    if (data.status == "success") {
                        localStorage.setItem("oid", data.oid);
                        ev.isAdd = data.add_id;
                        if (ev.paymentMethod == 2) {
                            ev.makePayment();
                        } else {
                            ev.updatePayment();
                        }
                        ev.getAddress();
                    }
                });
            }

        },
        getAddress() {
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = JSON.parse(localStorage.getItem("user"));
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            var ev = this;
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "getAllAddress",
                    uid: uid,
                    ip_address: ip_address,
                },
            }).then(function (response) {
                var data = response.data;
                if (data.status == "success") {
                    ev.addressDatas = data.data;
                    if (ev.addressDatas.length == 0) {
                        ev.dashboard_box = "step-2";
                    }
                    // ev.add_id = ev.addressDatas[0].add_id
                    // ev.billing_id = ev.addressDatas[0].add_id
                    ev.getSelectedAddress(ev.addressDatas[0].add_id);
                }
            });
        },
        save_address() {
            var ev = this;
            if (this.userAddress.add_title == "") {
                ev.$toasted.global.error({
                    message: "please enter FullName ",
                });
            } else if (this.userAddress.mobile_no == "") {
                ev.$toasted.global.error({
                    message: "please enter mobile number ",
                });
            } else if (this.userAddress.email == "") {
                ev.$toasted.global.error({
                    message: "please enter Email ",
                });
            } else if (this.userAddress.add1 == "") {
                ev.$toasted.global.error({
                    message: "please enter address 1 ",
                });
            } else if (this.userAddress.city == "") {
                ev.$toasted.global.error({
                    message: "please enter city ",
                });
            } else if (this.userAddress.c_state == "") {
                ev.$toasted.global.error({
                    message: "please select state ",
                });
            } else if (this.userAddress.add1 == "") {
                ev.$toasted.global.error({
                    message: "please Enter address line 1 ",
                });
            } else if (this.userAddress.add2 == "") {
                ev.$toasted.global.error({
                    message: "please Enter address line 2",
                });
            } else if (this.userAddress.zipcode == "") {
                ev.$toasted.global.error({
                    message: "please Enter zipcode",
                });
            } else {
                var user_session = localStorage.getItem("user");
                var uid = "";
                if (user_session != null) {
                    uid = user_session;
                } else {
                    uid = null;
                }
                if (ev.userAddress.shippingBilling == true) {
                    ev.userAddress.add_type = "Both";
                }
                axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: {
                        type: "add_address",
                        uid: uid,
                        add_title: ev.userAddress.add_title,
                        city: ev.userAddress.city,
                        email: ev.userAddress.email,
                        mobile: ev.userAddress.mobile_no,
                        add1: ev.userAddress.add1,
                        add2: ev.userAddress.add2,
                        pincode: ev.userAddress.zipcode,
                        state: ev.userAddress.c_state,
                        country: ev.userAddress.country,
                        add_type: ev.userAddress.add_type,
                    },
                }).then(function (response) {
                    var data = response.data;
                    if (data.status == "success") {
                        ev.$toasted.global.success({
                            message: data.msg,
                        });
                        ev.getShippingAddress();
                        ev.getBillingAddress();
                        ev.add_id = data.add_id;
                        ev.isAdd = data.add_id;
                        // ev.open_dashboard("step-3");
                        ev.getAddress();
                    }
                });
            }
        },
        save_billing_address() {
            var ev = this;
            if (this.userAddressBilling.add_title == "") {
                ev.$toasted.global.error({
                    message: "please enter FullName ",
                });
            } else if (this.userAddressBilling.mobile_no == "") {
                ev.$toasted.global.error({
                    message: "please enter mobile number ",
                });
            } else if (this.userAddressBilling.email == "") {
                ev.$toasted.global.error({
                    message: "please enter Email ",
                });
            } else if (this.userAddressBilling.add1 == "") {
                ev.$toasted.global.error({
                    message: "please enter address 1 ",
                });
            } else if (this.userAddressBilling.city == "") {
                ev.$toasted.global.error({
                    message: "please enter city ",
                });
            } else if (this.userAddressBilling.c_state == "") {
                ev.$toasted.global.error({
                    message: "please select state ",
                });
            } else if (this.userAddressBilling.add1 == "") {
                ev.$toasted.global.error({
                    message: "please Enter address line 1 ",
                });
            } else if (this.userAddressBilling.add2 == "") {
                ev.$toasted.global.error({
                    message: "please Enter address line 2",
                });
            } else if (this.userAddressBilling.zipcode == "") {
                ev.$toasted.global.error({
                    message: "please Enter zipcode",
                });
            } else {
                var user_session = localStorage.getItem("user");
                var uid = "";
                if (user_session != null) {
                    uid = user_session;
                } else {
                    uid = null;
                }

                axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: {
                        type: "add_address",
                        uid: uid,
                        add_title: ev.userAddressBilling.add_title,
                        city: ev.userAddressBilling.city,
                        email: ev.userAddressBilling.email,
                        mobile: ev.userAddressBilling.mobile_no,
                        add1: ev.userAddressBilling.add1,
                        add2: ev.userAddressBilling.add2,
                        pincode: ev.userAddressBilling.zipcode,
                        state: ev.userAddressBilling.c_state,
                        country: ev.userAddressBilling.country,
                        add_type: "Billing",
                    },
                }).then(function (response) {
                    var data = response.data;
                    if (data.status == "success") {
                        ev.$toasted.global.success({
                            message: data.msg,
                        });
                        ev.getShippingAddress();
                        ev.getBillingAddress();
                        ev.add_id = data.add_id;
                        ev.isAdd = data.add_id;
                        // ev.open_dashboard("step-3");
                        ev.getAddress();
                    }
                });
            }
        },
        getState() {
            var ev = this;
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "getState",
                },
            }).then(function (response) {
                var data = response.data;
                ev.stateData = data;
            });
        },
        checked_add(id) {
            this.aid = id;
            this.getSelectedAddress();
            this.address_box = true;
        },
    },
};
</script>

<style scoped>
.mr-10 {
    margin: 10px;
}

.payment-radio {
    width: 20px !important;
    height: 25px !important;
}

.visiblity-none {
    visibility: hidden;
}

.total-table {
    position: absolute;
    right: 20px;
    top: 3px;
    font-weight: bold;
    font-size: 22px;
    color: #ba2930;
}

#frmStripePayment {
    max-width: 500px;
    padding: 25px;
    border: #d0d0d0 1px solid;
    border-radius: 4px;
    margin: auto;
}

.hide {
    display: none;
}

.test-data {
    margin-top: 40px;
}

.tutorial-table {
    border: #d0d0d0 1px solid;
    font-size: 0.8em;
    color: #4e4e4e;
}

.tutorial-table th {
    background: #efefef;
    padding: 12px;
    border-bottom: #e0e0e0 1px solid;
    text-align: left;
}

.tutorial-table td {
    padding: 12px;
    border-bottom: #d0d0d0 1px solid;
}

#frmStripePayment .field-row {
    margin-bottom: 20px;
}

#frmStripePayment div label {
    margin: 5px 0px 0px 5px;
    color: #49615d;
    width: auto;
}

.demoInputBox {
    padding: 10px;
    border: #d0d0d0 1px solid;
    border-radius: 4px;
    background-color: #fff;
    width: 100%;
    margin-top: 5px;
    box-sizing: border-box;
}

.demoSelectBox {
    padding: 10px;
    border: #d0d0d0 1px solid;
    border-radius: 4px;
    background-color: #fff;
    margin-top: 5px;
}

select.demoSelectBox {
    height: 35px;
    margin-right: 10px;
}

.error {
    background-color: #ff6600;
    padding: 8px 10px;
    border-radius: 4px;
    font-size: 0.9em;
}

.success {
    background-color: #c3c791;
    padding: 8px 10px;
    border-radius: 4px;
    font-size: 0.9em;
}

.info {
    font-size: 0.8em;
    color: #ff6600;
    letter-spacing: 2px;
    padding-left: 5px;
}

.btnAction {
    background-color: #586ada;
    padding: 10px 40px;
    color: #fff;
    border: #5263cc 1px solid;
    border-radius: 4px;
    cursor: pointer;
}

.btnAction:focus {
    outline: none;
}

.column-right {
    margin-right: 6px;
}

.contact-row {
    display: inline-block;
}

.cvv-input {
    width: 60px;
}

#error-message {
    margin: 0px 0px 10px 0px;
    padding: 5px 25px;
    border-radius: 4px;
    line-height: 25px;
    font-size: 0.9em;
    color: #ca3e3e;
    border: #ca3e3e 1px solid;
    display: none;
    width: 300px;
}

#success-message {
    margin: 0px 0px 10px 0px;
    padding: 5px 25px;
    border-radius: 4px;
    line-height: 25px;
    font-size: 0.9em;
    color: #3da55d;
    border: #43b567 1px solid;
    width: 300px;
}

.display-none {
    display: none;
}

#response-container {
    padding: 40px 20px;
    width: 270px;
    text-align: center;
}

.ack-message {
    font-size: 1.5em;
    margin-bottom: 20px;
}

#response-container.success {
    border-top: #b0dad3 2px solid;
    background: #e9fdfa;
}

#response-container.error {
    border-top: #c3b4b4 2px solid;
    background: #f5e3e3;
}

.img-response {
    margin-bottom: 30px;
}

#loader {
    display: none;
}

.checkout-span {
    font-size: 14px;
    font-weight: normal;
}

#loader img {
    width: 45px;
    vertical-align: middle;
}

.addSection {
    margin-top: 50px;
}

.sec-head {
    background: #c1c1c1;
    padding: 10px;
}

.card {
    box-shadow: 0px 0px 5px #c1c1c1;
    padding: 20px 0 0 50px;
    color: #000;
    font-weight: bold;
    font-size: 16px;
}

.mt-20 {
    margin-top: 20px;
}

.radiobtn {
    position: absolute;
    top: 60px;
    left: 20px;
    visibility: hidden;
}

.margin {
    margin: 10px;
}

.margin-left {
    margin-left: 10px;
}

.checkout-card {
    padding: 20px !important;
}

.checkout-step {
    border: 1px solid #f1f1f1;
    padding: 20px 0 15px 30px;
    border-radius: 10px;
    margin-bottom: 15px;
}

section.checkout-step.-reachable.-complete h1 .step-edit {
    cursor: pointer;
    display: block;
    float: right;
    margin-right: 2.125rem;
    text-transform: capitalize;
    font-weight: 500;
}

@media only screen and (max-width: 600px) {
    .card[data-v-fd530f40] {
        box-shadow: 0px 0px 1px hsl(0, 0%, 76%);
        padding: 15px 10px 10px 35px;
        color: #000;
        width: 100%;
        font-weight: bold;
        font-size: 13px;
    }

    .sidemenu-hide {
        display: none;
    }
}

.avatar-upload {
    position: relative;
}

.avatar-upload .avatar-edit {
    position: absolute;
    right: 55px;
    z-index: 1;
    top: -7px;

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
    width: 50px;
    height: 50px;
    border-radius: 20px;
    position: relative;
    border-radius: 100%;
    border: 6px solid #F8F8F8;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
}

.avatar-preview div {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
}

.avatar-upload .avatar-edit input+label:after {
    content: "\f040";
    font-family: 'FontAwesome';
    color: #757575;
    position: absolute;
    top: -7px;
    left: 0;
    right: 0;
    text-align: center;
    margin: auto;
}
.modalDialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99999;
    opacity:0;
    -webkit-transition: opacity 100ms ease-in;
    -moz-transition: opacity 100ms ease-in;
    transition: opacity 100ms ease-in;
    pointer-events: none;
}
.modalDialog:target {
    opacity:1;
    pointer-events: auto;
}
.modalDialog > div {
    max-width: 800px;
    width: 90%;
    position: relative;
    margin: 10% auto;
    padding: 20px;
    border-radius: 3px;
    background: #fff;
}
.close {
    font-family: Arial, Helvetica, sans-serif;
    background: #f26d7d;
    color: #fff;
    line-height: 25px;
    position: absolute;
    right: -12px;
    text-align: center;
    top: -10px;
    width: 34px;
    height: 34px;
    text-decoration: none;
    font-weight: bold;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -moz-box-shadow: 1px 1px 3px #000;
    -webkit-box-shadow: 1px 1px 3px #000;
    box-shadow: 1px 1px 3px #000;
    padding-top: 5px;
}
.close:hover {
    background: #fa3f6f;
}
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	table { 
	  	width: 100%; 
	}

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}

	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
		/* Label the data */
		content: attr(data-column);

		color: #000;
		font-weight: bold;
	}

}
</style>
