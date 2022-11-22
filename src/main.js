import * as Vue from "vue"
import App from './App.vue'

// vue不再webpack.config配置模板，可以使用此方式创建挂载点
/*
function component() {
    const element = document.createElement('div');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
     element.id = "app"
    return element;
}
document.body.appendChild(component());
*/

const app =  Vue.createApp(App)
app.mount('#app')
