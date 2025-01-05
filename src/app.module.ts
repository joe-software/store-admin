import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store-admin/store/store.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';

@Module({
  imports: [StoreModule, ConfigModule.forRoot({isGlobal:true})],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
