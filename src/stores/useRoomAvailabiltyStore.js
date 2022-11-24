import {defineStore} from "pinia";
import axios from 'axios';

//false 'https://boutique-hotel.helmuth-lammer.at/api/v1/room/1/from/2022-12-03/to/2022-12-08';

// this is true: https://boutique-hotel.helmuth-lammer.at/api/v1/room/1/from/2023-11-03/to/2023-11-05

export const checkRoomsAvailability = defineStore('roomAvailability', {
    state: () => ({
        url: "",
        available: [],
        id : null,
        startDateRaw: null,
        startDate: "",
        endDateRaw: null,
        endDate: "",
        dateProxy: null
    }),
        getters: {
            getAvailability: (state) => state.available
    },
        actions: {
            readState() {
                axios.get(this.url)
                    .then(
                        response => {
                            this.available = response.data
                        })
                    .catch(error => {
                        console.log(error)
                    })
            },
            setUrl() {
                console.log("id: "+this.id)
                this.url = "https://boutique-hotel.helmuth-lammer.at/api/v1/room/"+this.id+"/from/"+this.startDate+"/to/"+this.endDate
            },
            setId(id) {
                this.id = id
            },

            setDateObject(date) {

                this.startDateRaw = new Date(date[0]);
                this.startDate = this.startDateRaw.getFullYear()+"-"+this.startDateRaw.getUTCMonth()+"-"+ this.startDateRaw.getUTCDate()
                console.log("start date: "+ this.startDate)

                this.endDateRaw = new Date(date[1]);
                this.endDate = this.endDateRaw.getFullYear()+"-"+this.endDateRaw.getUTCMonth()+"-"+ this.endDateRaw.getUTCDate()
                console.log("end date: "+ this.endDate)

                //das jahr gibt es eins zu niedrig aus und es ist halt gepfuscht

            }
        }
})
