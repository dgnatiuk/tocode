import Vue from 'vue'
import App from './App.vue'

import './assets/scss/main.scss'

Vue.config.productionTip = false


// Vue.directive('click-outside', {
//     bind: function (el, binding, vnode) {
//         window.event = function (event) {
//             if (!(el == event.target || el.contains(event.target))) {
//                 vnode.context[binding.expression](event);
//             }
//         };
//         console.log('bind');
//         document.body.addEventListener('click', window.event)
//     },
//     unbind: function (el) {
//         console.log('unbind');
//         document.body.removeEventListener('click', window.event)
//     },
// })

// Здесь я закоментировал директиву для определения клика за пределами инпута, но она у меня работает не правильно и не могу разобраться почему,
// она срабатывает сразу как я клацаю на тайтл или дескрипшин еще не добравшить до инпута с редактированием

new Vue({
    render: h => h(App),
}).$mount('#app')