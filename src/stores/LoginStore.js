import {defineStore} from "pinia";
import axios from 'axios';

const loginApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/login";

export const useLoginStore = defineStore('login', {
    state: () => ({
    }),
    actions: {
        login( clientId, secret) {   //das sollte der API eine clientId und ein secret übergeben
                axios.post(loginApiUrl, {
                    clientId: clientId,
                    secret: secret})

                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        }
    }
})