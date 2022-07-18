import { RouteRecordRaw } from "vue-router";
import { Foo } from "../views/Foo";
import { Welcome } from "../views/Welcome";
import { First } from "../views/Welcome/components/first";
import { Forth } from "../views/Welcome/components/Forth";
import { Second } from "../views/Welcome/components/second";
import { Third } from "../views/Welcome/components/Third";

export const routes: RouteRecordRaw[] = [
    { path:'/', component: Foo },
    {
        path: '/./welcome',
        component: Welcome,
        children: [
            { path: '1', component: First },
            { path: '2', component: Second },
            { path: '3', component: Third },
            { path: '4', component: Forth },
        ]
    }
]