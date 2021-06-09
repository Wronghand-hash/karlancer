<template>
  <div
    class="h-screen w-screen flex justify-center place-items-center bg-gray-200"
  >
    <div class="flex flex-col h-64 text-center w-1/2 shadow-2xl bg-yellow-400">
      <input class="h-24 bg-gray-200" type="text" placeholder="enter ..." />
      <div>
        <p class="p-3">14cDkzj8nBTiRhuEKsBav3pDNV52kQqg4B</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      secret:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      encData: [],
      list: [
        {
          id: 1,
          value: "",
        },
      ],
    };
  },
  computed: {
    listByBreaks() {
      return this.list.map((e) => {
        return e.value.split("\n");
      });
    },
  },
  mounted() {
    console.log(this.listByBreaks);
  },
  methods: {
    start() {
      this.listByBreaks.forEach((item) => {
        item.forEach((e) => {
          this.encryptData(e);
        });
      });
    },

    encryptData(e) {
      if (this.list.length) {
        // hash the name with any algorithm
        const data = this.CryptoJS.AES.encrypt(e, this.secret).toString();

        // store into localStorage
        localStorage.setItem("secretData", data);
        return this.encData.push(data);
      }
    },

    getEncryptedData() {
      // get the data from localStorage or send placeholder text
      this.encData = localStorage.getItem("secretData") || "No value present";
    },
  },
};
</script>

<style src="./assets/css/tailwind.css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
