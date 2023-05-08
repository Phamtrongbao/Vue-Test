import "./assets/main.css";

import HomeTemplates from "../src/components/Templates/HomeTemplates/HomeTemplates.vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(router);
app.component("HomeTemplates", HomeTemplates);

app.mount("#app");
