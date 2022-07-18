import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import s from './first.module.scss'

export const First = defineComponent({
    setup(props, context) {
        return () => (
            <div>
                <div>
                    <h2>
                        会挣钱 <br />
                        还要会省钱
                    </h2>
                </div>
                <div>
                    <RouterLink class={ s.fack}  to="/start">跳过</RouterLink>
                    <RouterLink to="/welcome/2">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </div>
            </div>
        )
    }
})