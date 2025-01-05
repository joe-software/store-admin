import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // set public folder routes
  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
  app.useStaticAssets(join(__dirname, '..', 'src/public'));

  // set view engine as handlebars
  app.setViewEngine('hbs')  

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
