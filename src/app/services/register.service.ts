import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Task } from '../domain/task';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private reg: Task;
  public url: string = 'http://localhost:3000/task';

  constructor(private _http: Http) { }

  register(reg){
    let body = reg;

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
        
    if(reg._id){
      reg.posted = new Date();
      return this._http.put( this.url+'/'+reg._id, reg, { headers: headers} )
      .toPromise()
          .then((res)=> {
              let response = res.json();
              return response;
          }, err => {
              console.log(err); 
          });
    }else{
      return this._http.post( this.url, body, { headers: headers })
      .toPromise()
      .then((res)=> {
        let response = res.json();
        console.log(response);
        return response;
      }, err => {
        console.log(err); 
      });
    }
    

  }

  findById(id){
      return this._http.get( this.url+'/'+id )
      .toPromise()
        .then((res)=> {
            let response = res.json();
            return response;
        }, err => {
            console.log(err); 
        });
  }
}
