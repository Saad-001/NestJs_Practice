import { TeachersController } from 'src/teachers/teachers.controller';
import { Module } from '@nestjs/common';
import { StudentController } from 'src/students/students.controller';
import { StudentsService } from 'src/students/students.service';

@Module({
  imports: [],
  controllers: [StudentController, TeachersController],
  providers: [StudentsService],
})
export class AppModule {}
