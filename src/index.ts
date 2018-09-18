import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app/app.module';

(async () => {
  // Crear servidor http en express
  const server = express();
  // Crear aplicacion en NestJS
  const app = await NestFactory.create(AppModule, server);
  // Iniciar aplicacion
  await app.listen(3000);
})();
