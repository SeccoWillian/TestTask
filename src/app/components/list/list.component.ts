import { Component, Inject } from '@angular/core';
import { ListService } from '../../services/list.service';
import { Task } from '../../domain/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  checked: boolean;

  public tasks: Array<Task>;

  constructor(private _service: ListService) { 
    this.checked = false;

    this.find();

  }

  find(){
    this._service
      .findTasks()
      .then(result => {
          this.tasks = result;    
      })
      .catch(err => {
        console.log(err);
      });
  }

  remove(task: Task){
    this._service
      .removeTask(task)
      .then(result => {
        let newTasks = this.tasks.slice(0);
        let index = newTasks.indexOf(task);
        newTasks.splice(index, 1);
        this.tasks = newTasks;
        alert(result.message)    
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateCheck(task){
    this._service
      .updateCheck(task)
      .then(result => {
        this.find();   
      })
      .catch(err => {
        console.log(err);
      });
  }
}
