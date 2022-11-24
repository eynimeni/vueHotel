import {defineStore} from "pinia";
import axios from 'axios';

//false 'https://boutique-hotel.helmuth-lammer.at/api/v1/room/1/from/2022-12-03/to/2022-12-08';

// this is true: https://boutique-hotel.helmuth-lammer.at/api/v1/room/1/from/2023-11-03/to/2023-11-05

export const checkRoomsAvailability = defineStore('roomAvailability', {
    state: () => ({
        internetadresse: "",
        available: [],
        id : null,
        startDate: "",
        endDate: ""
    }),
        getters: {
            getAvailability: (state) => state.available
    },
        actions: {
            readState() {
                axios.get(this.internetadresse)
                    .then(
                        response => {
                            this.available = response.data
                        })
                    .catch(error => {
                        console.log(error)
                    })
            },
            setUrl() {
                //todo hier dann noch die dates auch übergeben
                console.log("id: "+this.id)
                this.internetadresse = "https://boutique-hotel.helmuth-lammer.at/api/v1/room/"+this.id+"/from/"+this.startDate+"/to/"+this.endDate
            },
            setId(id) {
                //todo hier dann noch die dates auch übergeben
                this.id = id
            },
            setStartDate(fromDate) {
                this.startDate = fromDate;
            },
            setEndDate(toDate) {
                this.endDate = toDate;
            },

        }

})
