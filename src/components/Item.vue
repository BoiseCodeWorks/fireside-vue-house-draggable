<template>
  <div
    class="item d-flex flex-column align-items-center"
    draggable="true"
    @dragstart.capture="moving"
    @dragend="dragEnd"
    @dragover.prevent
    ref="draggable"
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
      this.$refs.draggable.classList.add("dragging")
      event.dataTransfer.setDragImage(this.$refs.draggable, 0, 0)
    },
    dragEnd() {
      this.$refs.draggable.classList.remove("dragging")
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
  transition: all 0.2s linear;
}
.dragging {
  transform: scale(0.8) rotateZ(30deg);
  opacity: 0.3;
}
img {
  height: 35px;
  width: 35px;
  object-fit: contain;
  background-color: white;
}
</style>