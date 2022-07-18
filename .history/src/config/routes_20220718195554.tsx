import { RouteRecordRaw } from "vue-router";
import { Welcome } from "../views/Welcome";


export const routes: RouteRecordRaw[] = [
    {
        path: './welcome',
        component: Welcome,
        
    }
]