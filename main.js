import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://hadwxjzmoghtzflzwcyb.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhZHd4anptb2dodHpmbHp3Y3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY3MDc5NDUsImV4cCI6MTk2MjI4Mzk0NX0.iWjhSR1m-dB4NinWwb4ooB9HNVmlKJcEjTqFuGaTt2U",
  supabaseOptions: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
