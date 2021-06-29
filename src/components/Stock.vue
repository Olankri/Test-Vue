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
            <tbody >
              <tr v-for="student in list" >
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <form>
            <div class="form-group" style="padding-top:20px">
              <label for="id">Id</label>
              <input
                type="text"
                class="form-control"
                v-model="stock.id"
                required
              />
            </div>
            <div class="form-group" style="padding-top:20px">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                v-model="stock.name"
                required
              />
            </div>
            <div class="form-group" style="padding-top:20px">
              <button class="btn btn-success btn-block" @click="handleAddStock">
                Add
              </button>
              <button class="btn btn-success btn-block" @click.prevent="deleteStock">
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
  data() {
    return {
      stock: {
        id: "",
        name: "",
      },
    };
  },
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
  methods: {
    handleAddStock() {
      this.$store.commit("addStock", this.stock);
    },
    deleteStock(){
      this.$store.commit("removeStock", this.stock)
    }
  },
};
</script>
