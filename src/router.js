import { createRouter, createWebHistory } from 'vue-router'
import Home from "./pages/Home.vue";
import Componentes from "./pages/Componentes.vue";
import Contact from "./pages/Contact.vue";
// import Home from "./views/Home.vue";
// import {useUserStore} from "./stores/example-store";

// const requireAuth = async(to, from, next) => {
// 	const UserStore = useUserStore()
// 	// si el usuario existe, que pase lo que tenga que pasar, sino, que vaya al login
// 	if (UserStore.token) {
// 		next()
// 	} else {
// 		next("/")
// 	}
// }

const routes = [
    {path: '/', component: Home},
    {path: '/componentes', component: Componentes},
    {path: '/contactos', component: Contact},
    // {path: '/presupuesto', component: presupuesto, beforeEnter: requireAuth},
    // {path: '/myart', component: myart, children: [{path: '/detalles/:id', component: detalles}]},
    ,
    // {path: '/superiorhome', component: SuperiorHome, children: [{
    //     path: '/detalles/:id', component: Detalles
    // }]},
    // {path: '/detalles/:id', beforeEnter: requireAuth},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router