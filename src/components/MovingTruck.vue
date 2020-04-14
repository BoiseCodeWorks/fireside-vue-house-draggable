<template>
  <div class="moving-truck col-10 offset-1 mb-4">
    <p class="mb-2">Moving Truck</p>
    <p class="truck-items">
      <item v-for="item in items" :key="item.id" :itemData="item" />
    </p>
  </div>
</template>


<script>
import Item from "../components/Item";
export default {
  name: "movingTruck",
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.state.items.filter(i => i.roomId == 'truck');
    }
  },
  methods: {},
  components: {
    Item
  }
};
</script>


<style scoped>
.moving-truck {
  height: 20vh;
  border: 2px;
  border-color: black;
  border-style: solid;
  background-color: white;
}

.truck-items {
  display: flex;
  justify-content: space-evenly;
}
</style>