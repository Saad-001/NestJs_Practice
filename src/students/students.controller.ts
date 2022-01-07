import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents(){
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentsById(@Param('studentId') studentId: string) {
    return `Get Student By Id ${studentId}`
  }

  @Post()
  createStudent(@Body('name') name){
    console.log(name)
    return `created a student with this name ${name}`
  }

  @Put('/:studentId')
  updatingStudent(@Param('studentId') studentId: string, @Body('name') name){
    return `updated a student with ID ${studentId} and his name is ${name}`
  }

}
