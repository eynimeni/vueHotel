import {defineStore} from "pinia";
import axios from 'axios';
import {useLoginStore} from "@/stores/LoginStore";

const userApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/user";            //guests -> für alle, user für den eingeloggten
const registerApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/register";



//evtl Daten zwischenspeichern: Frühstück, etc. um die zu holen, wenn wir zurückgehen im Prozess
//Daten speichern für die Overview und Confirmation Seite



export const useUserStore = defineStore('user'
    , {
        state: () => ({
            user: []
        }),
        getters: {
            getUser: (state) => state.user,
        },
        actions: {
            readState(token) {
                axios.get(userApiUrl, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }) // GETESTET, GEHT
                    .then(response => {
                        this.user = response.data //schreibt einen user
                        console.log(response.data)
                    })
                    .catch(error => {
                        console.log(error)
                    });
            },
            postUsers(userJson) {//GETESTET, GEHT, Testuser siehe unten
                const loginRegisteredUser = useLoginStore()
                axios.post(registerApiUrl, userJson, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then( function(response)  {
                        loginRegisteredUser.setToken(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
        }
    })


/* TEST USER RUDI TRUDI, der Erste
{"id":194,"users_id":26,"firstname":"Rudi","lastname":"Trudi","email":"rudi.trudi@rudi.at","birthdate":"2022-12-06","created_at":"2022-12-06T18:22:56.000000Z","updated_at":"2022-12-06T18:22:56.000000Z"}
 */