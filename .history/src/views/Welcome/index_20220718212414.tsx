import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from './welcome.module.scss'

export const Welcome = defineComponent({
    setup(props, context) {
        return () => (
            <div>
                <header>
                    <h1> POT记账 </h1>
                </header>
                <main>
                    <RouterView />
                </main>
            </div>
        )
    }
})