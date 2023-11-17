import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../models/user';
import { GetResponse } from '../models/response';
import { IStudent } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class MainService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  handleError(err: HttpErrorResponse) {
    console.log('🚀 ~ log error by mainService:', err);
  }

  users = {
    getAll: () => this.httpClient.get<IUser[]>(this.createUrl(['users'])),
    getById: (userID: number) =>
      this.httpClient.get<IUser>(this.createUrl(['users', userID.toString()])),
  };

  students = {
    getAll: (teacherID: string) =>
      this.httpClient.get<GetResponse<IStudent[]>>(
        this.createUrl(['students', 'teacherID', teacherID])
      ),
  };
}
