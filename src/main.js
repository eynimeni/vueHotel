import HotelComponent from "@/components/HotelComponent";
import RoomComponent from "@/components/RoomComponent";
import BookingComponent from "@/components/BookingComponent";
import LoginComponent from "@/components/LoginComponent";
import ProfileComponent from "@/components/ProfileComponent";
import ConfirmationComponent from "@/components/ConfirmationComponent";


const
    routes = [
        {path: '/', component: HotelComponent},
        {path: '/rooms', component: RoomComponent},
        {path: '/login', component: LoginComponent},
        {path: '/booking', component: BookingComponent},
        {path: '/profile', component: ProfileComponent},
        {path: '/confirmation', component: ConfirmationComponent},

]

const router = VueRouter.createRouter
    ({
// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
                history: VueRouter.createWebHashHistory(), routes,
})

const app = Vue.createApp({})

app.use(router)
app.mount('#app')
// Now the app has started!


