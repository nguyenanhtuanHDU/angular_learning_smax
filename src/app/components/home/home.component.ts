import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { timer } from 'rxjs';
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
  users: IUser[] = [];
  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(index: number = 0) {
    console.log('🚀 ~ index:', index);
    this.mainService.users.getAll().subscribe((data) => {
      console.log('🚀 ~ data:', data);
      if (data[index]) {
        for (const user of data) {
          if (user.username === 'c') {
            this.users.push(user);
          }
        }
        this.getAllUser(index + 1); // gọi lại chính nó(đệ quy) thay thế cho loop
      }
    });
  }
}
