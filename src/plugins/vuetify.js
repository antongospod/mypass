import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import ru from "vuetify/lib/locale/ru";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#ec625f",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      },
      dark: {
        primary: "#ec625f",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  lang: {
    locales: { ru },
    current: "ru"
  }
});
