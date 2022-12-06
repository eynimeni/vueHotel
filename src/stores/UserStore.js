import {defineStore} from "pinia";
import axios from 'axios';

const userApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/guests";
const registerApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/register";

//evtl Daten zwischenspeichern: Frühstück, etc. um die zu holen, wenn wir zurückgehen im Prozess
//Daten speichern für die Overview und Confirmation Seite

export const useUserStore = defineStore('user'
    , {
        state: () => ({
            users: []
        }),
        getters: {},
        actions: {
            readState() {
                axios.get(userApiUrl) // NOCH NICHT GETESTET
                    .then(response => {
                        this.users = response.data //sollte alle user in das users Array schreiben
                    });
            },
            postUsers(userJson) { //GETESTET, GEHT, Testuser siehe unten
                axios.post(registerApiUrl, userJson, {
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
                console.log(userJson);
            }
        }
    })


/* TEST USER RUDI TRUDI, der Erste
{"id":194,"users_id":26,"firstname":"Rudi","lastname":"Trudi","email":"rudi.trudi@rudi.at","birthdate":"2022-12-06","created_at":"2022-12-06T18:22:56.000000Z","updated_at":"2022-12-06T18:22:56.000000Z"}
 */