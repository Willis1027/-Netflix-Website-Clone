export default {
  name: "Header",
  data() {
    return {
      account: {
        fontSize: "18px",
        transform: "rotate(0deg)",
        transition: "all .5s",
      },
      //   active: false,
    };
  },
  methods: {
    showAccountMenuItem() {
      this.account.transform = "rotate(180deg)";
    },
    closeAccountMenuItem() {
      this.account.transform = "rotate(0deg)";
    },
  },
};
