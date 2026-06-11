import { Component, inject, Injectable } from '@angular/core';
import { StudentService } from '../Services/student.service';
import { Student } from '../Models/Student';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [StudentService]
})
export class AdminComponent {

  studentService: StudentService = inject(StudentService);

  students!: Student[];
  totalMarks!: number;

  // ngOnInit() {
  //   this.students = this.studentService.students;
  //   this.totalMarks = this.studentService.totalMarks;
  // }

  name: string = "Vamsikrishna";
  salary: number = 50000;
}
