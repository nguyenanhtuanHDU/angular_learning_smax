import { Component, OnInit } from '@angular/core';
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

  message: string = '';

  ngOnInit(): void {}

  send() {
    this.mainService.senMessage(this.message);
  }

  // docs: https://viblo.asia/p/subject-trong-rxjs-Do754DvX5M6
}
