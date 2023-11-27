import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { timer } from 'rxjs';
import { IStudent } from 'src/app/models/student';
import { IUser } from 'src/app/models/user';
import { MainService } from 'src/app/services/main.service';
import { ChildOneComponent } from '../child-one/child-one.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef?: BsModalRef;
  users: IUser[] = []
  constructor(private mainService: MainService) {
    console.log(this.mainService.users.getById(1))
  }

  ngOnInit(): void {
    this.getAllUsers()
    this.mainService.listUser.subscribe(res => {
      this.users = res
    })
  }

  getAllUsers() {
    this.mainService.users.getAll().subscribe((data) => {
      this.mainService.listUserSubject.next(data)
    });
  }

  createUser() {
    this.mainService.users.create().subscribe(data => {
      console.log("🚀 ~ data:", data)
    })
  }

  updateUser(id: number, index: number) {
    this.mainService.users.update(id, index).subscribe(res => {
      console.log("🚀 ~ res:", res)
      this.users.splice(index, 1, res)
      this.mainService.setListUsers(this.users)
    })
  }

  deleteUser(id: number, index: number) {
    this.mainService.users.delete(id, index).subscribe(res => {
      this.mainService.setListUsers(this.users)
    })
  }
}
