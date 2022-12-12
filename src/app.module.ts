import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Paises, PaisSchema } from './paises/paises.schema';
import { PaisesController } from './paises/paises.controller';
import { PaisesService } from './paises/paises.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/europa"), 
    MongooseModule.forFeature([
    {
      name: Paises.name,
      schema: PaisSchema
    },
    ]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
  })
  ],
  controllers: [AppController, PaisesController],
  providers: [AppService, PaisesService],
})
export class AppModule {}
