import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Menu } from 'src/app/models/menu.model';
import { Observable } from 'rxjs';
import { GET_MENU_URL } from 'src/app/shared/url.config';

const menuUrl = GET_MENU_URL;

@Injectable()
export class MenuService {
  
  constructor(private http: HttpClient) { 

  }

  getMenu()  {
    return this.http.get<Menu[]>(menuUrl);
  }
}