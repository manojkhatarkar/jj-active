<template>
    <section class="section-space-default-less54 overlay-icon-layout3 bg-common bg-primary" style="background-image: url(img/figure/figure2.png);">
        <div class="container zindex-up">
            <div class="section-heading title-black color-light text-center">
                <h2>Event Speakers</h2>
                <p>Dorem ipsum dolor sit. Incidunt laborum beatae earum nihil onsequuntur officia</p>
            </div>
            <div class="row">
                <carousel :autoplay="false" v-if="showData" :nav="false" :items="4">
                    <div v-for="page in pageData" :key="page.id" class="col-lg-12 col-md-12 col-sm-12 col-12 col-mb-12">
                        <div class="speaker-layout1">
                            <div class="item-img">
                                <img :src="$root.URL_ROOT+'uploads/Content/'+page.image" alt="speaker" class="img-fluid rounded-circle">
                                <div class="item-social" v-html="page.description">
                                </div>
                            </div>
                            <div class="item-title">
                                <h3 class="title-medium size-lg color-light hover-yellow">
                                    <a href="#">{{page.heading}}</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </carousel>

            </div>
        </div>
    </section>
</template>

<script>
import carousel from "vue-owl-carousel2";
export default {
    components: {
        carousel,
    },
    data() {
        return {
            pageData: [],
            showData: false,
        };
    },
    mounted() {
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
                    type: "speackers",
                })
                .then(function (response) {
                    var data = response.data;
                    self.showData = true;
                    self.pageData = data.data;
                });
        },
    },
};
</script>
