import {defineStore} from "pinia";
import axios from 'axios';


//let id = 1;
//false 'https://boutique-hotel.helmuth-lammer.at/api/v1/room/1/from/2022-12-03/to/2022-12-08';

// this is true: https://boutique-hotel.helmuth-lammer.at/api/v1/room/1/from/2023-11-03/to/2023-11-05

export const checkRoomsAvailability = defineStore('roomAvailability', {
    state: () => ({
        available: []
    }),
    getters: {},
    actions: {
        readState(url) {
            axios.get(url)
                .then(
                    response => {
                        this.available = response.data
                    })
        }
    }
})