// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  data() {
    return {
      isShow: false,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    close(){
      this.isShow = false;
    }
  },
};
