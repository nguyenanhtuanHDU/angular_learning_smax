import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/models/student';
import { IUser } from 'src/app/models/user';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private mainService: MainService) {}

  // user!: IUser;
  students: IStudent[] = [];

  ngOnInit(): void {
    // this.getAllUser();
    // this.getUserById(1);
    this.getAllStudentByTeacherID();
  }

  // getAllUser() {
  //   this.mainService.users.getAll().subscribe((data) => {
  //     console.log('🚀 ~ data:', data);
  //   });
  // }

  // getUserById(userID: number) {
  //   this.mainService.users.getById(userID).subscribe((data) => {
  //     this.user = data;
  //   });
  // }

  getAllStudentByTeacherID() {
    this.mainService.students.getAll('65295ec5119f52715f0b179b').subscribe(
      (data) => {
        this.students = data.data;
      },
      (err) => this.mainService.handleError(err)
    );
  }
}
