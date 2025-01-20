import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  console.log("Servidor corriendo en el puerto 3001..."); // Agrega este log
  await app.listen(3001);
}
bootstrap();