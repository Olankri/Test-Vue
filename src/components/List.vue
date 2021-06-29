<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <!-- Display goes here -->
      <h1>Show students</h1>
      <div class="row">
        <div class="col-md-12">
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in list">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
export default {
  computed: {
    list() {
      return this.$store.state.list;
      
    },
  },
};
</script>
