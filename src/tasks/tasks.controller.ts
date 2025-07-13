import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from 'generated/prisma';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAllTask(){
    this.tasksService.getAllTask()
  }

  @Post()
  async createTask(@Body() data: Task){
    this.tasksService.createTask(data)
  }

  @Get(':id')
  async getTaskById(@Param('id') id:string){
    this.tasksService.getTaskById(Number(id))
  }

  @Delete()
  async deleteTask(@Param('id') id:string){
    this.tasksService.deleteTask(Number(id))
  }

  @Put()
  async updateTask(@Param('id') id:string, @Body() data: Task){
    this.tasksService.updateTask(Number(id), data)
  }

}
