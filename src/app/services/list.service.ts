import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/domain/task';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public  url: string = "http://localhost:3000/task";
  public task: Task;

  constructor(private _http: Http) { 
    this.findTasks();
  }

  findTasks(){
    
    return this._http.get( this.url )
        .toPromise()
        .then((res)=> {
            let response = res.json();
            return response;
        }, err => {
            console.log(err); 
        });

  }

  removeTask(task){
    return this._http.delete( this.url+'/'+task._id )
    .toPromise()
        .then((res)=> {
            let response = res.json();
            return response;
        }, err => {
            console.log(err); 
        });
  }

  updateCheck(task){
    task.done = !task.done;
    task.posted = new Date();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put( this.url+'/'+task._id, task, { headers: headers} )
      .toPromise()
      .then((res)=> {
          let response = res.json();
          return response;
      }, err => {
          console.log(err); 
      });
  }

}

