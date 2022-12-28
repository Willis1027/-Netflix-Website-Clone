export default {
  name: "Header",
  data() {
    return {
      account: {
        fontSize: "18px",
        transform: "rotate(0deg)",
        transition: "all .5s",
      },
      active: false,
      museIn: false,
    };
  },
  methods: {
    showAccountMenuItem() {
      this.account.transform = "rotate(180deg)";
      this.active = true;
    },
    closeAccountMenuItem() {
      setTimeout(() => {
        if (this.museIn === false) {
          this.account.transform = "rotate(0deg)";
          this.active = false;
        } else {
          this.active = true;
        }
      }, 300);
    },
    keepAccountMenuItem() {
      this.museIn = true;
    },
    outAccountMenuItem() {
      this.museIn = false;
      this.closeAccountMenuItem();
    },
  },
};
