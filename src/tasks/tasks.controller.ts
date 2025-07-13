import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from 'generated/prisma';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Get()
  async getAllTask() {
    return this.tasksService.getAllTask()
  }

  @Post()
  async createTask(@Body() data: Task) {
    return this.tasksService.createTask(data)
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(Number(id))
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(Number(id))
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() data: Task) {
    return this.tasksService.updateTask(Number(id), data)
  }

}
