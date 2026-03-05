import { Controller, Get, Post } from '@nestjs/common';
import { AppService, TasksService } from './app.providers';
import type { CreateTask, Tasks } from './interfaces/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  createTask(task: CreateTask): void {
    this.tasksService.createTask(task);
  }

  @Get()
  getAllTasks(): Promise<Tasks[]> {
    return this.tasksService.getAllTasks();
  }
}
