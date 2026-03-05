import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Patch,
} from '@nestjs/common';
import { TasksService } from './app.providers';
import type { CreateTask, Tasks, UpdateTask } from './interfaces/types';

@Controller()
export class TasksController {
  @Get()
  getTask(): string {
    return 'Hello world';
  }
}

@Controller('tasks')
export class TaskRequests {
  constructor(private tasksService: TasksService) {}

  @Post('create')
  createTask(@Body() task: CreateTask): Tasks {
    return this.tasksService.createTask(task);
  }

  @Get('all')
  getAllTasks(): Tasks[] {
    return this.tasksService.getAllTasks();
  }

  @Patch('update/:id')
  updateTask(@Param('id') id: number, @Body() tasks: UpdateTask): Tasks | null {
    return this.tasksService.updateTask({ id, tasks });
  }

  @Delete('delete/:id')
  deleteTask(@Param('id') id: string): boolean {
    return this.tasksService.deleteTask(id);
  }
}
