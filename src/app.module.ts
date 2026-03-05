import { Module } from '@nestjs/common';
import { TaskRequests, TasksController } from './app.controller';
import { TasksService } from './app.providers';

@Module({
  imports: [],
  controllers: [TasksController, TaskRequests],
  providers: [TasksService],
})
export class TaskModule {}
