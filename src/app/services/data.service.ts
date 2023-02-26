import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Data } from '../core/models/data.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);

  getSkills() {
    return this.http.get<Data>('/assets/data.json');
  }
}
