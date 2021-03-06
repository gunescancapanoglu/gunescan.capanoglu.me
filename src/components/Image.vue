<template>
  <div class="full-width text-center" style="overflow:hidden;line-height:0;">
    <q-img
      v-if="q"
      :basic="basic"
      :class="inlineClass"
      :contain="contain"
      :ratio="ratio"
      :src="imageSrc"
      :srcset="imgSrcSet"
      :style="inlineStyle"
      @load="$emit('load')"
      spinner-color="primary"
      spinner-size="2em"
      v-on="imageSrc ? { error: cdnProblem } : {}"
    >
      <slot></slot>
    </q-img>
    <div v-if="!q" :style="loading ? {} : { opacity: 0 }" class="absolute-center" style="transition:0.5s opacity">
      <q-spinner color="primary" size="5em"></q-spinner>
    </div>
    <img
      v-if="!q"
      :src="imageSrc"
      :srcset="imgSrcSet"
      :style="loading ? {...inlineStyle, opacity: 0 } : inlineStyle"
       style="transition:0.5s opacity"
      @load="loaded"
      v-on="imageSrc ? { error: cdnProblem } : {}"
    />
  </div>
</template>

<script>
// Image Component to handle certain q-img based functionality
// in a better/compact way

import { errors } from "../mixins/errors.js";

export default {
  name: "ImageComponent",
  mixins: [errors],
  props: {
    src: String,
    contain: Boolean,
    basic: Boolean,
    inlineStyle: Object,
    inlineClass: Object,
    q: Boolean,
    ratio: Number
  },
  watch: {
    "$route.path": function() {
      if (this.$route.name === "photograph") this.loading = true;
    }
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    // Image url sanitizing.
    imageSrc() {
      if (this.src !== "") return this.src.replace(/\s/g, "%20");
      else return "";
    },

    // Generate srcset for image url.
    imgSrcSet() {
      if (this.imageSrc !== "") {
        let indexSize = this.imageSrc.search(/_\d+.(jpg|gif|png|jpeg)/g);
        let tmpSrcSet = [
          this.imageSrc.slice(0, indexSize),

          Number(this.imageSrc.slice(1 + indexSize, this.imageSrc.length - 4)),
          this.imageSrc.slice(-3)
        ];
        return (
          tmpSrcSet[0] +
          "_" +
          tmpSrcSet[1] +
          "." +
          tmpSrcSet[2] +
          " " +
          tmpSrcSet[1] +
          "w, " +
          tmpSrcSet[0] +
          "_half." +
          tmpSrcSet[2] +
          " " +
          Math.floor(tmpSrcSet[1] / 2) +
          "w, " +
          tmpSrcSet[0] +
          "_quarter." +
          tmpSrcSet[2] +
          " " +
          Math.floor(tmpSrcSet[1] / 4) +
          "w, " +
          tmpSrcSet[0] +
          "_eighth." +
          tmpSrcSet[2] +
          " " +
          Math.floor(tmpSrcSet[1] / 8) +
          "w"
        );
      } else return "";
    }
  },
  methods: {
    loaded() {
      this.loading = false;
      this.$emit("load");
    }
  },
  activated() {
    this.loading = false;
  }
};
</script>