import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Services {

  
  constructor(private httpclient: HttpClient) { }

    getCodewordSet(){
      return this.httpclient.get("http://localhost:3000/getCodewordSet")
    }

    saveCodewordSet(data) {
      return this.httpclient.post("http://localhost:3000/addCodewordSet", data)
    }
}
