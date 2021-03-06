<template>
  <q-page class="flex" style="min-height:100vh;">
    <transition
      @after-enter="afterEnter"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <keep-alive include="ColumnsComponent">
        <router-view v-if="$route.path === '/reviews'" :store="store" :updateLayout="updateLayout">
          <template v-slot:default="slotProps">
            <router-link
              :to="{path: '/reviews/' + slotProps.item.id + '-' + generateLink(slotProps.item.title)}"
              class="flex q-pa-sm"
            >
              <q-card>
                <ImageComponent
                  v-if="slotProps.item.image"
                  :inlineStyle="{'max-height':'100vh','min-height': '100px'}"
                  :src="slotProps.item.image"
                  q
                ></ImageComponent>

                <q-card-section v-if="slotProps.item.title">
                  <div class="text-h6">{{slotProps.item.title}}</div>
                </q-card-section>

                <q-card-section v-if="slotProps.item.excerpt" v-html="slotProps.item.excerpt"></q-card-section>
              </q-card>
            </router-link>
          </template>
        </router-view>
        <router-view v-if="$route.path !== '/reviews'" :store="store" :updateLayout="updateLayout">
          <template v-slot:default="slotProps">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
                <div class="row">
                  <div
                    v-if="slotProps.item.image"
                    :class="{'q-pa-xs': $q.screen.xs,'q-pa-sm': $q.screen.sm,'q-pa-md': $q.screen.md,'q-pa-lg': $q.screen.lg,'q-pa-xl': $q.screen.xl}"
                    class="col-xs-12 col-sm-grow col-md-12"
                  >
                    <ImageComponent
                      :inlineClass="{'float-right': true}"
                      :inlineStyle="{'max-height':'100vh','max-width':'100vw','min-height': '100px'}"
                      :src="slotProps.item.image"
                      contain
                      q
                    ></ImageComponent>
                  </div>
                  <div
                    v-if="slotProps.item.title"
                    :class="{'q-pa-xs': $q.screen.xs,'q-pa-sm': $q.screen.sm,'q-pa-md': $q.screen.md,'q-pa-lg': $q.screen.lg,'q-pa-xl': $q.screen.xl}"
                    class="col-xs-12 col-sm-6 col-md-12"
                  >
                    <div class="text-h6">{{slotProps.item.title}}</div>
                  </div>
                </div>
              </div>

              <div
                v-if="slotProps.item.text"
                :class="{'q-pa-xs': $q.screen.xs,'q-pa-sm': $q.screen.sm,'q-pa-md': $q.screen.md,'q-pa-lg': $q.screen.lg,'q-pa-xl': $q.screen.xl}"
                v-html="slotProps.item.text"
                class="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-3"
              ></div>
            </div>

            <div v-if="slotProps.item.images && slotProps.item.images.length > 0" class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-5">
                <q-carousel
                  v-model="slide"
                  animated
                  infinite
                  navigation
                  arrows
                  autoplay
                  :prev-icon="Icons.mdiChevronLeft"
                  :next-icon="Icons.mdiChevronRight"
                  navigation-icon="mdi-circle"
                  style="min-height:auto;max-height:auto;height:auto;"
                  control-color="primary"
                >
                  <q-carousel-slide
                    v-for="(image, index) in slotProps.item.images"
                    :key="index"
                    :name="index"
                  >
                    <ImageComponent :ratio="1" :src="image" contain q></ImageComponent>
                  </q-carousel-slide>
                </q-carousel>
              </div>
            </div>
          </template>
        </router-view>
      </keep-alive>
    </transition>
  </q-page>
</template>

<script>
// Review page combines two component with
// each unique set of slot component group,
// to handle templating better/easier to eyes of the dev

import ImageComponent from "components/Image.vue";

import { utils } from "../mixins/utils.js";

export default {
  name: "ReviewsPage",
  mixins: [utils],
  components: { ImageComponent },
  props: { updateLayout: Object },
  data() {
    return {
      store: this.$db.collection("reviews"),
      slide: 0
    };
  },
  methods: {
    // Triggers after component transitions in
    // after coming back from item component
    afterEnter() {
      if (this.$route.path === "/reviews") this.$root.$emit("triggerScroll");
    }
  }
};
</script>

<style scoped="">
.q-carousel__slide {
  padding: 0;
}
</style>