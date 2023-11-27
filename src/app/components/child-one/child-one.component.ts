import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
})
export class ChildOneComponent implements OnInit {
  users: IUser[] = []
  constructor(private mainService: MainService) {
  }

  ngOnInit(): void {
    this.mainService.listUser.subscribe(data => this.users = data)
  }
}
