import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../models/user';
import { GetResponse } from '../models/response';
import { IStudent } from '../models/student';
import { BehaviorSubject, Subject, distinctUntilChanged, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  subject = new Subject<string>();

  listUserSubject = new BehaviorSubject<IUser[]>([] as IUser[])
  listUser = this.listUserSubject.asObservable().pipe(distinctUntilChanged())

  handleError(err: HttpErrorResponse) {
    console.log('🚀 ~ log error by mainService:', err);
  }

  users = {
    getAll: () => this.httpClient.get<IUser[]>(this.createUrl(['users'])).pipe(tap(res => {
      this.listUserSubject.next(res)
    })),
    getById: (userID: number) => this.listUserSubject.subscribe(res => {
      console.log("🚀 ~ res:", res)
      const itemFilter = res.filter(item => item.id == userID)
      console.log("🚀 ~ itemFilter:", itemFilter)
      return of(itemFilter)
    }),
    create: () =>
      this.httpClient.post<IUser>(this.createUrl(['users']), { username: 'tuan', email: 'aaa', password: 'aaa' }).pipe(tap(res => {
        console.log("🚀 ~ res:", res)
        this.listUserSubject.next([...this.listUserSubject.getValue(), res])
      })),
    update: (userID: number, index: number) => {
      return this.httpClient.put<IUser>(this.createUrl(['users', userID.toString()]), { email: 'update' }).pipe(tap(res => {
        const updateUser = this.listUserSubject.getValue().map(user => {
          if (res.id === user.id) {
            return res
          }
          return user
        })
        this.listUserSubject.next(updateUser)
      }))
    },
    delete: (userID: number, index: number) => this.httpClient.delete(this.createUrl(['users', userID.toString()])).pipe(tap(res => {
      const currentUser = this.listUserSubject.getValue()
      currentUser.splice(index, 1)
      this.listUserSubject.next(currentUser)
    }))
  };

  students = {
    getAll: (teacherID: string) =>
      this.httpClient.get(this.createUrl(['students', 'teacherID', teacherID])),
  };

  setListUsers(users: IUser[]) {
    this.listUserSubject.next(users)
  }
}
