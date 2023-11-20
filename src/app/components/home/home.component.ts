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
  constructor(private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    username: '1',
    password: '1',
    age: 1,
  });
  ngOnInit(): void {
    // this.form.setValue({
    //   password: '1',
    //   age: 1,
    // }) // lỗi vì dùng setValue phải cập nhật tất cả các field
    this.form.patchValue({
      password: '2',
      age: 2,
    });
    // patchValue không cần cập nhật tất cả các field

    this.form.reset(); // đặt các field về null

    console.log(this.form.contains('username')); // kiểm tra xem có chứa field username ko 
    
  }
}
