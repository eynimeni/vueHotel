import { createRouter, createWebHistory } from 'vue-router';
import HotelComponent from "@/components/HotelComponent";
import RoomComponent from "@/components/RoomComponent";
import LoginComponent from "@/components/LoginComponent";
import BookingComponent from "@/components/BookingComponent";
import ProfileComponent from "@/components/ProfileComponent";
import ConfirmationComponent from "@/components/ConfirmationComponent";

const routes = [
  {path: '/', name: 'home', component: HotelComponent},
  {path: '/rooms', name:'room', component: RoomComponent},
  {path: '/login', name: 'login', component: LoginComponent},
  {path: '/booking', name:'booking', component: BookingComponent},
  {path: '/profile', name:'profile', component: ProfileComponent},
  {path: '/confirmation', name:'confirmation', component: ConfirmationComponent},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
