<template>
  <div class="main">
    <!-- <textarea v-model="pvtData" placeholder="Enter a string" /> <br />
     -->

    <div v-for="item in list" :key="item.id">
      <textarea v-model="item.value"></textarea>
      <br />
    </div>

    <button @click="encryptData">Encrypt</button>
    <button @click="decryptData">Decrypt</button>
    <button @click="deleteData">Delete</button>

    List by breaks: {{ listByBreaks }}

    encData: {{ encData}}
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pvtData: "",
      secret: "123#$%",
      encData: "",
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
  methods: {
    encryptData() {
      this.pvtData = this.list.join();
      if (this.pvtData.length) {
        // hash the name with any algorithm

        const data = this.CryptoJS.AES.encrypt(
          this.pvtData,
          this.secret
        ).toString();

        // store into localStorage
        localStorage.setItem("secretData", data);

        // display the encrypted data
        this.getEncryptedData();
      }
    },

    decryptData() {
      // get data from localStorage
      const secretData = localStorage.getItem("secretData");

      // decrypt the data and convert to string
      const decryptData = this.CryptoJS.AES.decrypt(
        secretData,
        this.secret
      ).toString(this.CryptoJS.enc.Utf8);

      alert("Decrypted private data: " + decryptData);
    },

    deleteData() {
      // remove data from localStorage
      localStorage.removeItem("secretData");

      // update text
      this.getEncryptedData();
    },

    getEncryptedData() {
      // get the data from localStorage or send placeholder text
      this.encData = localStorage.getItem("secretData") || "No value present";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
