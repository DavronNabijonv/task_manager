import { Module } from '@nestjs/common';
import { AppController, TasksController } from './app.controller';
import { AppService } from './app.providers';

@Module({
  imports: [],
  controllers: [AppController, TasksController],
  providers: [AppService],
})
export class AppModule {}
