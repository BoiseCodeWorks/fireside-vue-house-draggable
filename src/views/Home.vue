<template>
  <div class="home container-fluid p-5">
    <div class="row">
      <movingTruck />
    </div>
    <div class="row rowTop">
      <room v-for="room in rooms" :room="room" :key="room.id" />
    </div>
  </div>
</template>


<script>
import MovingTruck from "../components/MovingTruck";
import Room from "../components/Room";
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    rooms() {
      return this.$store.state.rooms;
    }
  },
  methods: {},
  components: {
    Room,
    MovingTruck
  }
};
</script>


<style scoped>
.home {
  background-color: teal;
  min-height: 100vh;
  margin: auto;
}

.rowTop {
  display: flex;
}
</style>