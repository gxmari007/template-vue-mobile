import { defineModule } from 'roshan';

import { routes } from './routes';
import { AboutModule } from '../about/module';

export const AppModule = defineModule({
  imports: [AboutModule],
  routes,
});
