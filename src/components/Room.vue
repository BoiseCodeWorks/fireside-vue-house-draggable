<template>
  <div class="room col-6" droppable="true" @drop.capture="addItem" @dragover.prevent>
    {{roomData.name}}
    <div class="room-items mt-3">
      <item v-for="item in items" :itemData="item" :key="item.id" :roomId="roomData.id" />
    </div>
  </div>
</template>


<script>
import Item from "../components/Item";
export default {
  name: "room",
  props: ["roomData"],
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.getters.items[this.roomData.id] || []
    }
  },
  methods: {
    addItem() {
      // get the item off of the event storage
      let item = JSON.parse(event.dataTransfer.getData("data"));
      // get the starting location off of the event storage
      let from = event.dataTransfer.getData("from");
      // don't allow drops in the same room
      if (from == this.roomData.id) { return }

      this.$store.dispatch("moveItem", { item, to: this.roomData.id })
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