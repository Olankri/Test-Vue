<template>
  <div>
    <nav
      class="
        navbar navbar-dark
        bg-primary
        justify-content-between
        flex-nowrap flex-column
      "
    >
      <div class="container">
        <router-link to="/" class="navbar-brand float-left"
          >Login page</router-link
        >
        <ul class="nav navbar-nav flex-row float-right">
          <!-- <li class="nav-item">
            <router-link to="/" class="nav-link pr-3" style=""
              >Login</router-link
            >
          </li> -->
          <li class="nav-item">
            <router-link
              to="/stock"
              class="nav-link pr-3"
              style="padding-right: 10px"
              >Stock</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/list"
              class="nav-link pr-3"
              style="padding-right: 10px"
              >List</router-link
            >
          </li>
          <li class="nav-item">
            <button @click="logout">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    logout() {
      this.$store.commit("logout", this.name);
      this.$router.pop("/Welcome");
      console.log(logout);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  border: none;
  color: white;
  background-color: #0d6efd !important;
  padding-right: 9px;
  padding-top: 8px;
}
</style>
