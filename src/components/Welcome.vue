<template>
  <div>
    <center>
      <h1>Welcome to Homepage</h1>
      <h1 style="padding-top: 10px">{{ name }}</h1>
      <br />
      <button class="btn btn-success btn-block" @click="go" >Submit</button>
    </center>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  computed: {
    name() {
      return this.$store.state.name;
    },
  },
  methods: {
    go() {
    //   this.$store.commit("setName", this.name);
      this.$router.push("/list");
    },
  },
};
</script>
