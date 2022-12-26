import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
  MongooseModule.forRoot('mongodb+srv://thaycr:i6pa3xAtURy7Lo0D@cluster0.t2ytn.mongodb.net/test'),
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
