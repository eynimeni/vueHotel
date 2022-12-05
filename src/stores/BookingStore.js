import {defineStore} from "pinia";
import axios from 'axios';

const bookingsApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/user/bookings"
//die User id muss mit
//const bookingRequestApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/room/{roomId}/from/{from-date}/to/{to-date}";
//das Datum muss hier mit!

export const useBookingStore = defineStore('bookingrequest'
    , {
        state: () => ({
            bookings: []
        }),
        getters: {},
        actions: {
            readBookings() {//alle bookings von einem User werden ausgelesen
                axios.get(bookingsApiUrl, ) //hier muss die user_id mit -> Authorization Token im Header übertragen: { headers: {Authorization: "Bearer" + Token}  }
                    .then(response => {
                        this.bookings = response.data
                    });
            },
            requestBookings(bookingRequest) { //eine neue Buchung wird gespeichert am Server
                /*axios.post(bookingRequestApiUrl, bookingRequest, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                 */
                console.log(bookingRequest);
            }
        }
    })