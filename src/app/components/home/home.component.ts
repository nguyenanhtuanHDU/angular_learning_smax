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
    Promise.resolve().then(async () => {
      console.log('start');
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
        console.log('run');
      });
      console.log('end');
    });
    // start -> run -> end
  }

  getAllUsers() {
    this.mainService.users.getAll().subscribe((data) => {
      console.log('🚀 ~ data:', data);
    });
  }
}
