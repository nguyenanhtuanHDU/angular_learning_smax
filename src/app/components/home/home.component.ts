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
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.getAllStudent()
  }

  getAllStudent() {
    this.mainService.students
      .getAll('65295ec5119f52715f0b179b')
      .subscribe((data) => {
        console.log('🚀 ~ data:', data);
      });
  }
}
