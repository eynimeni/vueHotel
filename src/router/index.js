import { createRouter, createWebHistory } from 'vue-router';
import HotelComponent from "@/components/Pages/HotelStartPage";
import RoomComponent from "@/components/Pages/RoomsPage";
import LoginComponent from "@/components/Pages/LoginPage";
import BookingComponent from "@/components/Pages/BookingPage";
import ProfileComponent from "@/components/Pages/ProfilePage";
import ConfirmationComponent from "@/components/Pages/ConfirmationPage";
import AboutComponent from "@/components/Pages/AboutPage";
import ImpressumComponent from "@/components/Pages/ImpressumPage";
import BookingHistoryPage from "@/components/Pages/BookingHistoryPage";
import RegisterPage from "@/components/Pages/RegisterPage";


const routes = [
  {path: '/', name: 'home', component: HotelComponent},
  {path: '/rooms', name:'rooms', component: RoomComponent},
  {path: '/login', name: 'login', component: LoginComponent},
  {path: '/booking', name:'booking', component: BookingComponent},
  {path: '/profile', name:'profile', component: ProfileComponent},
  {path: '/confirmation', name:'confirmation', component: ConfirmationComponent},
  {path: '/about', name:'about', component:  AboutComponent},
  {path: '/impressum', name:'impressum', component: ImpressumComponent},
  {path: '/bookinghistory', name:'bookinghistory', component: BookingHistoryPage},
  {path: '/register', name:'register', component: RegisterPage},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
