import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = 'http://localhost:3000'


@Injectable({
  providedIn : 'root'   //singleton
})
export class PhotoService {

  constructor(private http : HttpClient){ //dependency injection

  }

  listFromUser(userName : string){
    return this.http.get<Object[]>(API + '/flavio/photos')
  }

}