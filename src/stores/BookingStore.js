import {defineStore} from "pinia";
import axios from 'axios';

const bookingsApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/user/bookings"
//die User id muss mit, um Buchungen auszulesen


//const bookingRequestApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/room/{roomId}/from/{from-date}/to/{to-date}";
//roomId und date kommen aus roomAvailabilityStore

//evtl hier Daten zwischenspeichern, wenn wir bei Zurück gehen Felder wiederbefüllen wollen

export const useBookingStore = defineStore('bookingrequest'
    , {
        state: () => ({
            bookings: []
        }),
        getters: {
            getBookings: (state) => state.bookings,
        },
        actions: {
            readBookings(token) {//alle bookings von einem User werden ausgelesen
                axios.get(bookingsApiUrl, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                } ) //hier muss die user_id mit -> Authorization Token im Header übertragen: { headers: {Authorization: "Bearer" + Token}  }
                    .then(response => {
                        this.bookings = response.data
                        console.log(response.data)
                    }).catch(error => {
                    console.log(error)
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