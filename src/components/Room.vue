<template>
  <div class="room col-6" droppable="true" @drop.capture="addItem" @dragover.prevent>
    {{room.name}}
    <div class="room-items mt-3">
      <item v-for="item in items" :itemData="item" :key="item.id" :roomId="room.id" />
    </div>
  </div>
</template>


<script>
import Item from "../components/Item";
export default {
  name: "room",
  props: {
    room: { type: Object, required: true }
  },
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.getters.items[this.room.id] || []
    }
  },
  methods: {
    addItem() {
      // get the item off of the event storage
      let item = JSON.parse(event.dataTransfer.getData("data"));
      // get the starting location off of the event storage
      let from = event.dataTransfer.getData("from");
      // don't allow drops in the same room
      if (from == this.room.id) { return }

      this.$store.dispatch("moveItem", { item, to: this.room.id })
    }
  },
  components: {
    Item
  }
};
</script>


<style scoped>
.room {
  height: 30vh;
  background-color: white;
  border: 1px;
  border-style: solid;
  border-color: black;
}

.room-items {
  display: flex;
  justify-content: space-evenly;
}
</style>