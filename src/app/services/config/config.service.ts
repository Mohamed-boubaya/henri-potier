import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  baseUrl = `${environment.api.protocol}//${environment.api.host}`;
  localStorageKey = environment.localStorage.localStorageKey;
}
