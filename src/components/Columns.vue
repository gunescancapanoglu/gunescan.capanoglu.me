<template>
  <div @scroll="scrollHandler" class="scrollable full-width" tabindex="0">
    <q-infinite-scroll @load="fetch" class="row">
      <div
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
        v-for="(array, index) in columns"
        :key="index"
      >
        <div class="col-12" v-for="item in array" :key="item.id">
          <slot :item="item" />
        </div>
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </div>
</template>

<script>
export default {
  name: "ColumnsComponent",
  props: { store: Object, updateLayout: Object },
  data() {
    return {
      contentArrayData: [],
      contentArray: [],
      columns: []
    };
  },
  watch: {
    "$q.screen.xs": function(val) {
      if (val) {
        this.resetArrays();
        this.setArrays();
      }
    },
    "$q.screen.sm": function(val) {
      if (val) {
        this.resetArrays();
        this.setArrays();
      }
    },
    "$q.screen.md": function(val) {
      if (val) {
        this.resetArrays();
        this.setArrays();
      }
    },
    "$q.screen.lg": function(val) {
      if (val) {
        this.resetArrays();
        this.setArrays();
      }
    },
    "$q.screen.xl": function(val) {
      if (val) {
        this.resetArrays();
        this.setArrays();
      }
    },
    contentArray() {
      this.resetArrays();
      this.setArrays();
    }
  },
  methods: {
    resetArrays() {
      this.columns = [];

      this.columns.push([]);
      if (this.$q.screen.sm) this.columns.push([]);
      else if (this.$q.screen.md) this.columns.push([], []);
      else if (this.$q.screen.lg) this.columns.push([], [], []);
      else if (this.$q.screen.xl) this.columns.push([], [], [], [], []);
    },
    setArrays() {
      for (
        let i = 0;
        i < this.contentArrayData.length;
        i += this.columns.length
      ) {
        for (let j = 0; j < this.columns.length; j++) {
          if (this.contentArrayData[i + j])
            this.columns[j].push(this.contentArrayData[i + j]);
        }
      }
    },
    fetch(index, done) {
      let prom,
        itemAmount = Math.pow(this.columns.length, 2) * 3;

      if (this.contentArray.length === 0)
        prom = this.store
          .orderBy("id", "desc")
          .limit(itemAmount)
          .get();
      else
        prom = this.store
          .orderBy("id", "desc")
          .startAfter(this.contentArray[this.contentArray.length - 1])
          .limit(itemAmount)
          .get();

      prom.then(
        function(querySnapshots) {
          if (querySnapshots.docs.length > 0) {
            querySnapshots.docs.forEach(
              function(doc) {
                this.contentArray.push(doc);
                this.contentArrayData.push(doc.data());
              }.bind(this)
            );
            done();
          } else {
            done(true);
          }
        }.bind(this)
      );
    },
    scrollHandler(e) {
      if (
        this.$route.path === "/photography" ||
        this.$route.path === "/reviews"
      )
        this.updateLayout.value =
          e.srcElement.scrollTop /
          (e.srcElement.scrollHeight - window.innerHeight);
    },
    setupScrollAfterTransition(to, from) {
      if (
        (to.path === "/photography" && from.name === "photograph") ||
        (to.path === "/reviews" && from.name !== "photograph")
      ) {
        this.$root.$once(
          "triggerScroll",
          function() {
            if (
              this.$route.path === "/photography" ||
              this.$route.path === "/reviews"
            )
              document
                .querySelector(`[href='${from.path}']`)
                .scrollIntoView({ block: "start", behavior: "smooth" });
          }.bind(this)
        );
      }
    }
  },
  created() {
    this.resetArrays();
  },
  activated() {
    const el = document.querySelector("div.scrollable");

    el.focus();

    this.updateLayout.value = this.updateLayout.buffer =
      el.scrollTop / (el.scrollHeight - window.innerHeight);
  },
  deactivated() {
    this.updateLayout.value = this.updateLayout.buffer = 0;
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.setupScrollAfterTransition(to, from);
      next();
    });
  }
};
</script>

<style scoped>
div.scrollable {
  max-height: 100vh;
  overflow-y: auto;
}

div >>> .q-infinite-scroll__loading {
  margin-right: auto;
  margin-left: auto;
}

div >>> a {
  text-decoration: initial;
  color: initial;
}
</style>