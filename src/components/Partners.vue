<template>
<section class="section-space-default bg-light">
    <div class="container">
        <div class="section-heading title-black color-dark text-center">
            <h2>Offcial Sponsonrs &amp; Partner</h2>
            <p>Check Who Makes This Event Possible!</p>
        </div>
        <div class="sponsonrs-layout1" style="overflow:hidden;">
            <div class="row sponsonrs-row-border">
                <carousel2 :autoplay="false" v-if="showData" :dots="false" :items="1" :responsive="{0:{items:1,nav:false},600:{items:1,nav:false},900:{items:1,nav:false},1200:{items:1,nav:false}}">
                    <div class="col-md-12 col-sm-12 col-12" v-for="data in pageData" :key="data.id">
                        <div class="sponsonrs-box">
                            <a>
                                <img :src="$root.URL_ROOT+'uploads/Content/'+data.image" class="img-fluid w-100" />
                            </a>
                        </div>
                    </div>
                </carousel2>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import carousel2 from "vue-owl-carousel2";
import axios from "axios";

export default {
    components: {
        carousel2,
    },
    data() {
        return {
            pageData: [],
            showData: false,
        };
    },
    mounted() {
        this.uid = localStorage.getItem("user");
        this.pData();
        this.goToTop();
    },
    methods: {
        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        pData() {
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php", {
                    type: "partners",
                })
                .then(function (response) {
                    var data = response.data;
                    self.pageData = data.data;
                    self.showData = true;
                });
        },
    },
};
</script>
