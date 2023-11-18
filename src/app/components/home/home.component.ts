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

  students: IStudent[] = [];

  ngOnInit(): void {
    const myTimer = timer(1000, 1000); // timer(time_delay, time_interval)
    myTimer.subscribe(() => {
      console.log('a');
    });
    const myTime = new Date();
    let timeRemain = moment(myTime).diff(moment(), 'second'); // tính thời khoảng thời gian từ hiện tại đến myTime
    console.log('🚀 ~ moment():', moment());
    console.log('🚀 ~ timeRemain:', timeRemain);
    console.log(moment().startOf('day').fromNow());
    // ...
    // url npm: https://momentjs.com/
  }
}
