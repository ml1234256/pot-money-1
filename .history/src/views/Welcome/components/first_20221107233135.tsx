import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import s from './first.module.scss'

export const First = defineComponent({
    props: {
        value: {
            type: String,
            default: 'hi',
        },
    },
    setup(props, context) {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <h2>
                        会挣钱 <br />
                        还要会省钱
                        {props.value}
                    </h2>
                </div>
                <div class={s.actions}>
                    <RouterLink class={ s.fake}  to="/start">跳过</RouterLink>
                    <RouterLink to="/welcome/2">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </div>
            </div>
        )
    }
})