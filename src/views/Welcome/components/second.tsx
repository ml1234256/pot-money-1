import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import s from './first.module.scss'

export const Second = defineComponent({
    setup(props, context) {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <h2> 
                        每日提醒 <br />
                        不会遗漏每一笔
                    </h2>
                </div>
                <div class={s.actions}>
                    <RouterLink class={ s.fake}  to="/start">跳过</RouterLink>
                    <RouterLink to="/welcome/3">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </div>
            </div>
        )
    }
})