<template>
<div>
    <button class="btn btn-primary" @click="exportToPDF">Print Download</button>
    <div id="element-to-convert">
        <img :src="$root.URL_ROOT+'uploads/Certificate/'+certificateData.image" />
        <h1 class="name" :style="'color:'+certificateData.color+';font-size:'+certificateData.font+';'"> {{name}} </h1>
    </div>
</div>
</template>

<script>
import axios from "axios";
import html2pdf from "html2pdf.js";
export default {
    props: ["data"],
    components: {},
    data() {
        return {
            userName: '',
            certificateName: this.$route.params.name ? this.$route.params.name : '',
            certificateImage: this.$route.params.image ? this.$route.params.image : '',
            name: '',
            image: '',
            certificateData: []
        };
    },
    mounted() {
        this.goToTop();
        this.decodeData();
        this.getCertificates()
    },
    methods: {
        exportToPDF() {
            html2pdf(document.getElementById("element-to-convert"), {
                margin: 1,
                filename: "i-was-html.pdf",
            });
        },
        generatePDF() {
            // Choose the element that our invoice is rendered in.
            const element = document.getElementById('invoice');
            // Choose the element and save the PDF for our user.
            html2pdf().from(element).save();
        },
        decodeData() {
            if (this.certificateName) {
                this.name = window.atob(this.certificateName)
                this.image = window.atob(this.certificateImage)
                // console.log(this.myData);              
            }
        },
        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        getCertificates() {
            if (this.image) {
                const axios = require("axios");
                var self = this;
                axios.post(this.$root.URL_ROOT + "api.php", {
                        type: "getMyCertificate",
                        id: self.image,
                    })
                    .then(function (response) {
                        var data = response.data;
                        console.log(data);
                        self.certificateData = data.certificate;
                    });
            }
        },
    },
};
</script>

<style scoped>
.name {
    font-weight: bold;
    position: absolute;
    top: 58%;
    z-index: 999;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
