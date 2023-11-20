import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
})
export class ChildOneComponent implements OnInit {
  message: string = '';
  constructor(private mainService: MainService) {
    // this.mainService.subject.subscribe((data) => {
    //   console.log('🚀 ~ data:', data);
    //   this.message = data;
    // });
  }

  ngOnInit(): void {
    this.mainService.subject.subscribe((data) => {
      console.log('🚀 ~ data:', data);
      this.message = data;
    });
  }
}
