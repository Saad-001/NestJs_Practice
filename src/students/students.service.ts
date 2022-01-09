import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import { findSingleStudentDto, getAllStudentsDto } from './dto/student.dto';

@Injectable()
export class StudentsService {
  private students = students;
  getStudents(): getAllStudentsDto[] {
    return this.students;
  }

  getStudentById(studentId): findSingleStudentDto {
    return this.students.find((student) => {
      return student.id === studentId;
    });
  }
}
