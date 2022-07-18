import { RouteRecordRaw } from "vue-router";
import { Welcome } from "../views/Welcome";
import { First } from "../views/Welcome/components/first";


export const routes: RouteRecordRaw[] = [
    {
        path: './welcome',
        component: Welcome,
        children: [
            { path: '1', component: First },
            { path: '2', component: First },
            { path: '3', component: First },
            { path: '4', component: First },
        ]
    }
]