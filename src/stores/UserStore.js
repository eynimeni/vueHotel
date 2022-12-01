import {defineStore} from "pinia";
import axios from 'axios';

const userApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/guests";

export const useUserStore = defineStore('user'
    , {
        state: () => ({
            users: [] //Daten, die der Speicherplatz enthält
        }),
        getters: {}, //computed: Daten die für Gebrauch vorverabreitet werden
        actions: { //Manipulation der Daten
            readState() {
                axios.get(userApiUrl)
                    .then(response => {
                        this.users = response.data //sollte alle user in das users Array schreiben
                    });
            },
            postUsers(userJson) { //das sollte der API einen User als Objekt übergeben und in das UserArray am Server schreiben
                /*axios.post(userApiUrl, userJson, {
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
                console.log(userJson);
            }
        }
    })