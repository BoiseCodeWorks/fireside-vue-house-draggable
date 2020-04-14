import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movingTruck: [],
    rooms: [
      { id: 1, name: "Bedroom" },
      { id: 2, name: "Living Room" },
      { id: 3, name: "Kitchen" },
      { id: 4, name: "Bathroom" }
    ],
    items: [
      { id: 1, name: "bed", url: "../assets/bed.png", roomId: "truck" },
      { id: 2, name: "tv", url: "../assets/tv.png", roomId: "truck" },
      { id: 3, name: "toilet", url: "../assets/toilet.png", roomId: "truck" },
      { id: 4, name: "dishwasher", url: "../assets/dishwasher.png", roomId: "truck" },
      { id: 5, name: "fan", url: "../assets/fan.png", roomId: "truck" },
      { id: 6, name: "fridge", url: "../assets/fridge.png", roomId: "truck" },
      { id: 7, name: "lamp", url: "../assets/lamp.png", roomId: "truck" },
      { id: 8, name: "microwave", url: "../assets/microwave.png", roomId: "truck" },
      { id: 9, name: "toaster", url: "../assets/toaster.png", roomId: "truck" },
      { id: 10, name: "washingmachine", url: "../assets/washing-machine.png", roomId: "truck" },
    ]
  },
  mutations: {
    updateItem(state, item) {
      let index = state.items.findIndex(i => i.id == item.id)
      state.items.splice(index, 1, item)
    }
  },
  actions: {
    async moveItem({ commit }, { item, to }) {
      item.roomId = to
      // tell the server to update this item
      commit("updateItem", item)
    }
  },
  getters: {
    items(state) {
      let itemsDictionary = {}
      state.items.forEach(item => {
        if (!itemsDictionary[item.roomId]) {
          itemsDictionary[item.roomId] = []
        }
        itemsDictionary[item.roomId].push(item)
      })
      return itemsDictionary
    }
  }
})
