import { TeachersController } from 'src/teachers/teachers.controller';
import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeachersController],
})
export class AppModule {}
