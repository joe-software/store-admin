import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';
import { Edge } from 'edge.js'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const edge = new Edge()
  // set public folder routes
  app.setBaseViewsDir(join(__dirname, '..', '/src/views'));
  app.useStaticAssets(join(__dirname, '..', '/src/public'));

  // set view engine as handlebars
  app.engine('edge', (path, options, callback) =>
    edge
      .render(path, options)
      .catch((error) => callback(error))
      .then((rendered) => callback(null, rendered))
  );
  app.setViewEngine('edge')

  // include validation pipes globally

  app.useGlobalPipes(new ValidationPipe({transform: true, transformOptions: {enableImplicitConversion: true}}));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
