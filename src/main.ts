import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // set public folder routes
  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
  app.useStaticAssets(join(__dirname, '..', 'src/public'));

  // set view engine as handlebars
  app.setViewEngine('hbs')  

  // include validation pipes globally

  app.useGlobalPipes(new ValidationPipe({transform: true, transformOptions: {enableImplicitConversion: true}}));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
