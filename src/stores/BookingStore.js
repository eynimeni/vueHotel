import {defineStore} from "pinia";
import axios from 'axios';
import {useRoomsAvailability} from "@/stores/useRoomAvailabiltyStore";

const bookingsApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/user/bookings"

export const useBookingStore = defineStore('bookingrequest'
    , {
        state: () => ({
            bookings: [],
            bookingRequest: {
                firstname: "",
                lastname: "",
                email: "",
                birthdate: ""
            },
            bookingId: null,
        }),
        getters: {
            getBookings: (state) => state.bookings,
            getBookingId: (state) => state.bookingId
        },
        actions: {
            readBookings(token) {
                axios.get(bookingsApiUrl, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                } )
                    .then(response => {
                        this.bookings = response.data
                        console.log(response.data)
                    }).catch(error => {
                    console.log(error)
                });
            },
            requestBookings(token) {
                const availabilityStore = useRoomsAvailability()
                axios.post("https://boutique-hotel.helmuth-lammer.at/api/v1/room/"+availabilityStore.id+"/from/"+availabilityStore.startDate+"/to/"+availabilityStore.endDate+"", this.bookingRequest, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`      //buchung wird noch nicht dem user zugeordnet
                    }
                })
                    .then(response => {
                        this.bookingId = response.data.id
                        console.log(response)
                        console.log("erfolgreich gebucht")          //check here: https://boutique-hotel.helmuth-lammer.at/api/v1/bookings
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    })