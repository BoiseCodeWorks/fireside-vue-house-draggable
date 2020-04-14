<template>
  <div
    class="item d-flex flex-column align-items-center"
    draggable="true"
    @dragstart.capture="moving"
    @dragend="dragEnd"
  >
    <img :src="itemData.url" :alt="itemData.name" :title="itemData.name" />
    <small>
      <sub class="mt-2 text-uppercase">{{itemData.name}}</sub>
    </small>
  </div>
</template>


<script>
export default {
  name: "item",
  props: ["itemData", "roomId"],
  data() {
    return {
      isMoving: true
    };
  },
  computed: {},
  methods: {
    moving(event) {
      let from = this.roomId;
      event.dataTransfer.setData("data", JSON.stringify(this.itemData));
      event.dataTransfer.setData("from", from);
      console.log("moving");
    },
    dragEnd() {
      console.log("the item is no longer being dragged");
    },
    dragging() {
      console.log("we are dragging the item", this.itemData)
    }
  },
  components: {}
};
</script>


<style scoped>
.item {
  cursor: pointer;
}
img {
  height: 35px;
  width: 35px;
  object-fit: contain;
  background-color: white;
}
</style>