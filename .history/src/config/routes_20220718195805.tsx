import { RouteRecordRaw } from "vue-router";
import { Welcome } from "../views/Welcome";
import { First } from "../views/Welcome/components/first";


export const routes: RouteRecordRaw[] = [
    {
        path: './welcome',
        component: Welcome,
        children: [
            { path: '1', component: First },
        ]
    }
]