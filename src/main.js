import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Tab, Tabs } from "vant";
import "vant/lib/index.css";
import "@/assets/reset.css";
createApp(App)
  .use(Button)
  .use(Tab)
  .use(Tabs)
  .use(store)
  .use(router)
  .mount("#app");
