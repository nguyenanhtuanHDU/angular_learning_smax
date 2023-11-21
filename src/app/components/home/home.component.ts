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
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(ChildOneComponent);
    // nhét component vào modal
    // this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {}
}
