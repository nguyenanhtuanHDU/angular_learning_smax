import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private api: string = environment.api;
  constructor() {}

  createUrl(paths: string[]) {
    return this.api + '/' + paths.join('/');
  }
}
