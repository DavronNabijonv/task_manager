import { Module } from '@nestjs/common';
import { TaskRequests, TasksController } from './app.controller';
import { TasksService } from './app.providers';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TasksController, TaskRequests],
  providers: [TasksService],
})
export class TaskModule {}
