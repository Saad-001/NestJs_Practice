import { Controller, Get, Post, Put } from "@nestjs/common";

@Controller('teachers')
export class TeachersController {
  @Get()
  getAllTeachers() {
    return 'All Teachers are presented'
  }

  @Get('/:teacherId/students')
  getSingleTeacherStudents(){
    return 'here are all students present for a single teacher'
  }

  @Put('/:teacherId/students/:studentId')
  updateStudentByTeacherAndStudentId(){
    return 'updated a student'
  }

}