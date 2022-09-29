<template>
 <div class="slider-area slider-direction-layout1 slider-layout1 overlay-slider">
                <div class="bend niceties preview-1">
                    <div id="ensign-nivoslider-1" class="slides">
                       <carousel3 :autoplay="false" v-if="showData" :nav="false" :dots="false" :items="1" :responsive="{
          0: { items: 1 },
          576: { items: 1 },
          600: { items: 1 },
          768: { items: 1 },
          1200: { items: 1 },
          1500: { items: 1 },
        }">
            <div @click="redirectUrl(slider.link)" class="item slide-1" v-for="slider in allSlider" :key="slider.id" >
                <!-- <div class="overlay-banner"></div> -->
                <img :src="$root.URL_ROOT+'uploads/Slider/'+slider.image" :alt="slider.image" />
                <div class="carousel-caption">
            <h1 style="color:#fff;"> {{slider.heading}} </h1>
            <h3>{{slider.heading2}}</h3>
            <br />
            <a v-if="slider.link" class="btn-fill size-xs color-yellow border-radius-5" :href="slider.link"> View More </a>
          </div>
            </div>
        </carousel3>
                        <!-- <img src="../assets/img/slider/euphoria-run-bnr.png" alt="slider" title="#slider-direction-1"> -->
                    </div>
                </div>
            </div>
</template>

<script>
import carousel3 from "vue-owl-carousel2";
export default {
  components: {
    carousel3,
  },
  data() {
    return {
      allSlider: [],
      showData: false,
    };
  },
  mounted() {
    this.SliderData();
  },

  methods: {
    redirectUrl(url){
      if (url) {
      window.open(url);        
      }
    },
    SliderData() {
      const axios = require("axios");
      var self = this;
      axios
        .post(this.$root.URL_ROOT + "api.php", {
          type: "home_silder",
        })
        .then(function (response) {
          var data = response.data;
          self.allSlider = data.data;
          self.showData = true;
        });
    },
  },
};
</script>
