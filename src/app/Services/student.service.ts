import { Student } from '../Models/Student';

export class StudentService {
  students: Student[] = [
    new Student(
      1,
      'John Doe',
      'Male',
      new Date('2000-01-01'),
      'Computer Science',
      585,
      5000,
    ),
    new Student(
      2,
      'Jane Smith',
      'Female',
      new Date('2001-02-15'),
      'Mathematics',
      490,
      4500,
    ),
    new Student(
      3,
      'Michael Johnson',
      'Male',
      new Date('1999-03-20'),
      'Physics',
      378,
      4800,
    ),
    new Student(
      4,
      'Emily Davis',
      'Female',
      new Date('2002-04-10'),
      'Chemistry',
      392,
      5200,
    ),
    new Student(
      5,
      'David Wilson',
      'Male',
      new Date('2000-05-05'),
      'Biology',
      588,
      4700,
    ),
  ];

  totalMarks: number = 600;

  CreateStudent(
    name: string,
    gender: string,
    dob: Date,
    course: string,
    marks: number,
    fee: number,
  ) {
    let id = this.students.length + 1;
    const student = new Student(id, name, gender, dob, course, marks, fee);
    this.students.push(student);
  }

}
