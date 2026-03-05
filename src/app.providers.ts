import { Injectable } from '@nestjs/common';
import { CreateTask, Tasks } from './interfaces/types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class TasksService {
  private tasks: Tasks[] = [
    { id: 1, title: 'Api', description: 'Create request apis' },
  ];

  createTask(task: CreateTask): Tasks {
    const newTask = { id: this.tasks.length + 1, ...task };
    this.tasks.push(newTask);
    return newTask;
  }

  getAllTasks(): Tasks[] {
    return this.tasks;
  }
}
