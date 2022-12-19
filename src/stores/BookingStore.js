import {defineStore} from "pinia";
import axios from 'axios';
import {useRoomsAvailability} from "@/stores/useRoomAvailabiltyStore";
//import {useRoomsAvailability} from "@/stores/useRoomAvailabiltyStore";

const bookingsApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/user/bookings"
//die User id muss mit, um Buchungen auszulesen

//const roomAvailabilityStore = useRoomsAvailability()


//const bookingRequestApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/room/"+params.roomId+"/from/"+params.roomId+"/to/"+params.toDate+"";
//roomId und date kommen aus roomAvailabilityStore



//evtl hier Daten zwischenspeichern, wenn wir bei Zurück gehen Felder wiederbefüllen wollen

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
            roomAvailabilityStore: useRoomsAvailability,
            getBookingId: (state) => state.bookingId
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
            requestBookings(token) { //eine neue Buchung wird gespeichert am Server
                const availabilityStore = useRoomsAvailability()
                axios.post("https://boutique-hotel.helmuth-lammer.at/api/v1/room/"+availabilityStore.id+"/from/"+availabilityStore.startDate+"/to/"+availabilityStore.endDate+"", this.bookingRequest, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(response => {
                        this.bookingId = response.data.id
                        console.log(response)
                        console.log("erfolgreich gebucht")
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    })