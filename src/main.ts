import { createApp } from 'vue';
import roshan from 'roshan';

import App from './app.vue';
import { router } from './router';
import { AppModule } from './home/module';

const app = createApp(App);

app.use(roshan, {
  module: AppModule,
  router,
});
app.use(router);

app.mount('#app');
