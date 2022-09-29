<template>
<!-- Preloader End Here -->
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
                        <h1>Certificate</h1>
                        <ul>
                            <li>
                                <router-link to="/" >Home</router-link>
                            </li>
                            <li>Download Certificate</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Inne Page Banner Area End Here -->
    <!-- About Us Start Here -->
    <section class="section-space-default2-less30">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 margin-b-30rem">
                    <h2 class="title-bold color-dark size-sm title-bar">Download Certificate</h2>
                    <form id="contact-form" class="contact-form">
                        <fieldset>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input type="text" placeholder="Enter your registered email or E-BIB number *" v-model="fields.bib" class="form-control" name="name" id="form-name" data-error="Name field is required" required="">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <select class="form-control certificate-dropdown" v-model="fields.eid">
                                            <option value=""> Select Event </option>
                                            <option v-for="certificate in certificateData" :value="certificate.id" :key="certificate.id"> {{certificate.name}} </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-sm-12" v-if="!showDetails">
                                    <div class="form-group margin-b-none">
                                        <button type="button" @click="downloadCertificate" class="btn-fill color-yellow border-radius-5">Download Certificate</button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>

                    <table class="rwd-table" v-if="showDetails">
                        <tbody>
                            <tr>
                                <th>S. No.</th>
                                <th>Name</th>
                                <th>BIB Number</th>
                                <th>Event Name</th>
                                <th>Action</th>
                            </tr>
                            <tr v-for="(myCertificate,key) in userCertificate" :key="key">
                                <td data-th="Supplier Code">
                                    {{key+1}}
                                </td>
                                <td data-th="Supplier Name">
                                    {{myCertificate.name}}
                                </td>
                                <td data-th="Invoice Number">
                                    {{myCertificate.bib}}
                                </td>
                                <td data-th="Invoice Date">
                                    {{myCertificate.event}}
                                </td>
                                <td data-th="Due Date">
                                    <a :href="$root.URL_ROOT +'event/Class1/index.php?name='+myCertificate.name+'&img='+myCertificate.image" target="_blank" >Download Certificate</a>
                                   
                                    <!-- <router-link :to="{name:'DownloadCertificate',params:{name:getbtoa(myCertificate.name),image:getbtoa(myCertificate.image)}}">Download Certificate</router-link>
                                    -->

                                    <!-- <a :href="$root.URL_ROOT+'uploads/Certificate/'+myCertificate.image" download>Download</a> -->
                                    <!-- <div @click="generatePDF()" class="np-btn">Generate PDF</div> -->
                                    <!-- <div ref="document">
                                        <DownloadCertificate :image="myCertificate.image" :name="myCertificate.name" />
                                        </div>
                                        <button class="btn btn-primary" @click="exportToPDF">Export to PDF</button>
                                    <button type="button" @click="download" class="btn btn-primary btn-fill color-yellow border-radius-5">Download</button> -->
                                    <!-- <button type="button" @click="sendMail" class="btn-fill color-yellow border-radius-5">Receive Via Mail</button> -->
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </section>
    <!-- About Us Area End Here -->
    <!-- Sponsonrs Area Start Here -->
    <Partners />
    <!-- Sponsonrs Area End Here -->
    <!-- Map Area Start Here -->
    <section class="full-width-container">
        <div class="container-fluid">
            <div class="google-map-area">
                <iframe id="googleMap" style="width:100%; height:396px;" :src="LinksDetails.MapUrl"></iframe>
            </div>
        </div>
    </section>
    <!-- Map Area End Here -->
    <!-- Footer Area Start Here -->
    <Footer />
    <!-- Footer Area End Here -->
</div>
<!-- Wrapper End -->
</template>

<script>
import axios from "axios";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import Testimonial from "@/components/Testimonial";
import Partners from "@/components/Partners";
import carousel2 from "vue-owl-carousel";
import carousel from "vue-owl-carousel2";
import html2pdf from 'html2pdf.js'
import DownloadCertificate from "./DownloadCertificate"

export default {
    props: ["catedatas"],
    components: {
        Header,
        Footer,
        carousel,
        carousel2,
        Partners,
        Testimonial,
        // VueHtml2pdf,
        DownloadCertificate,
    },
    data() {
        return {
            certificateData: [],
            userCertificate: [],
            LinksDetails: [],
            showDetails: false,
            fields: {
                type: "downloadCertificate",
                bib: "",
                eid: "",
            },
        };
    },
    mounted() {
        this.uid = localStorage.getItem("user");
        this.getEvents();
        // this.downloadCertificate();
        this.goToTop();
        this.site_setting();
    },
    methods: {
        getbtoa(data){
           return window.btoa(data);
        },
        exportToPDF() {
            var element = document.getElementById('element-to-print');
            var worker = html2pdf().from(element).save();
            console.log(worker);
            // html2pdf(element);
            // console.log(this.$refs.document);
            // html2pdf(this.$refs.document, {
            //     margin: 1,
            //     filename: 'document.pdf',
            //     image: { type: 'jpeg', quality: 0.98 },
            //     html2canvas: { dpi: 192, letterRendering: true },
            //     jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
            // })
        },
        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        sendMail() {

        },
        getEvents() {
            const axios = require("axios");
            var self = this;
            axios.post(this.$root.URL_ROOT + "api.php", {
                    type: "getAllEventCertificates",
                })
                .then(function (response) {
                    var data = response.data;
                    console.log(data);
                    self.certificateData = data.category;
                });
        },
        downloadCertificate() {
            var vi = this
            if (this.fields.bib === '') {
                this.$toasted.global.error({
                    message: 'Please enter Your BIB Number'
                })
            } else if (this.fields.eid === '') {
                this.$toasted.global.error({
                    message: 'Please Select Event'
                })
            } else {
                axios({
                    method: 'POST',
                    url: this.$root.URL_ROOT + 'api.php',
                    data: this.fields
                }).then(function (response) {
                    var data = response.data
                    if (data.status == 'success') {
                        vi.showDetails = true
                        vi.userCertificate = data.certificate
                        console.log(vi.userCertificate)
                    } else {
                        vi.$toasted.global.error({
                            message: data.msg
                        })
                        
                    }
                })
            }
        }
    },
};
</script>

<style scoped>
.certificate-dropdown {
    font-size: 16px;
    min-height: 44px;
}

@import 'https://fonts.googleapis.com/css?family=Open+Sans:600,700';

* {
    font-family: 'Open Sans', sans-serif;
}

.rwd-table {
    /* margin: auto; */
    /* min-width: 300px; */
    width: 100%;
    max-width: 100%;
    border-collapse: collapse;
}

.rwd-table tr:first-child {
    border-top: none;
    background: #428bca;
    color: #fff;
}

.rwd-table tr {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #f5f9fc;
}

.rwd-table tr:nth-child(odd):not(:first-child) {
    background-color: #ebf3f9;
}

.rwd-table th {
    display: none;
}

.rwd-table td {
    display: block;
}

.rwd-table td:first-child {
    margin-top: .5em;
}

.rwd-table td:last-child {
    margin-bottom: .5em;
}

.rwd-table td:before {
    content: attr(data-th) ": ";
    font-weight: bold;
    width: 120px;
    display: inline-block;
    color: #000;
}

.rwd-table th,
.rwd-table td {
    text-align: left;
}

.rwd-table {
    color: #333;
    border-radius: .4em;
    overflow: hidden;
}

.rwd-table tr {
    border-color: #bfbfbf;
}

.rwd-table th,
.rwd-table td {
    padding: .5em 1em;
}

@media screen and (max-width: 601px) {
    .rwd-table tr:nth-child(2) {
        border-top: none;
    }
}

@media screen and (min-width: 600px) {
    .rwd-table tr:hover:not(:first-child) {
        background-color: #d8e7f3;
    }

    .rwd-table td:before {
        display: none;
    }

    .rwd-table th,
    .rwd-table td {
        display: table-cell;
        padding: .25em .5em;
    }

    .rwd-table th:first-child,
    .rwd-table td:first-child {
        padding-left: 0;
    }

    .rwd-table th:last-child,
    .rwd-table td:last-child {
        padding-right: 0;
    }

    .rwd-table th,
    .rwd-table td {
        padding: 1em !important;
    }
}
</style>
