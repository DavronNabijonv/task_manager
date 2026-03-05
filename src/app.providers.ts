import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTask, Tasks } from './interfaces/types';

@Injectable()
export class TasksService {
  private tasks: Tasks[] = [];

  private lastId = 1;

  getTaskById(id: number): Tasks {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) throw new NotFoundException(`Task #${id} not found`);
    return task;
  }

  createTask(task: CreateTask): Tasks {
    const newTask = { id: ++this.lastId, ...task };
    this.tasks.push(newTask);
    return newTask;
  }

  // Then updateTask becomes:
  updateTask({ id, tasks }) {
    const task = this.getTaskById(Number(id)); // reuse, don't repeat
    Object.assign(task, tasks);
    return task;
  }

  deleteTask(id: string): boolean {
    const index = this.tasks.findIndex((t) => t.id === Number(id));
    if (index === -1) return false;
    this.tasks.splice(index, 1);
    return true;
  }

  getAllTasks(): Tasks[] {
    return this.tasks;
  }
}
