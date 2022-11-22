import {defineStore} from "pinia";
import axios from 'axios';

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/rooms";

export const useRoomStore = defineStore('room', {
    state: () => ({
        rooms: []
    }),
    getters: {},
    actions: {
    readState() {
        axios.get(apiUrl)
            .then(
                response => {
                this.rooms = response.data
                console.log(response.data)
                })
    }
}
})