<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Content goes here -->
      <h1>Login</h1>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group" >
          <label for="name" style="padding-top: 20px">Name</label>
          <input type="text" class="form-control" v-model="name" required />
        </div>
        <div class="form-group" style="padding-top: 30px">
          <button class="btn btn-success btn-block" @click="handleSubmitForm">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default {
  name: "HelloWorld",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    handleSubmitForm() {
      this.$store.commit("setName", this.name);
      this.$router.push("/welcome");
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
