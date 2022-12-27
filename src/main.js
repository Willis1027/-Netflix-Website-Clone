/* Set up using Vue 3 */
import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
/* @fortawesome/free-regular-svg-icons */
/* @fortawesome/free-brands-svg-icons */
/* @fortawesome/free-solid-svg-icons */
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";


/* add icons to the library */
library.add(faMagnifyingGlass,faBell,faCaretDown);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
