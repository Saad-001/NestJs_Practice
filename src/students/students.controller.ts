import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { findSingleStudentDto, getAllStudentsDto } from './dto/student.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentsService: StudentsService) {}
  @Get()
  getStudents(): getAllStudentsDto[]{
    return this.studentsService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string): findSingleStudentDto {
    return this.studentsService.getStudentById(studentId)
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
