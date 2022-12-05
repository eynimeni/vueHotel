import {defineStore} from "pinia";
import axios from 'axios';

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
                console.log("room id: "+this.id)
                this.url = "https://boutique-hotel.helmuth-lammer.at/api/v1/room/"+this.id+"/from/"+this.startDate+"/to/"+this.endDate
            },
            setId(id) {
                this.id = id
            },

            setDateObject(date) {

                this.startDateRaw = new Date(date[0]);
                let startMonth = this.startDateRaw.getUTCMonth() + 1;
                this.startDate = this.startDateRaw.getFullYear()+"-"+startMonth+"-"+ this.startDateRaw.getUTCDate()
                console.log("start date: "+ this.startDate)

                this.endDateRaw = new Date(date[1]);
                let endMonth = this.endDateRaw.getUTCMonth() + 1;
                this.endDate = this.endDateRaw.getFullYear()+"-"+endMonth+"-"+ this.endDateRaw.getUTCDate()
                console.log("end date: "+ this.endDate)
            }
        }
})
