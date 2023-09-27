import { createApp } from 'vue';
import App from './App.vue';
import LinkButton from './components/LinkButton.vue';
import UsernameFooter from './components/UsernameFooter.vue';
import UsernameHeader from './components/UsernameHeader.vue';

const app = createApp(App);

app.component('link-button', LinkButton)
    .component('username-footer', UsernameFooter)
    .component('username-header', UsernameHeader);

app.mount('#app');
