import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Task } from '../../domain/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private reg: Task;
  route: ActivatedRoute;
  router: Router;

  constructor(private _service: RegisterService, route: ActivatedRoute, router: Router) { 
    this.reg = new Task;

    this.route = route;
    this.router = router;

    this.route.params.subscribe(params => {
      let id = params['id'];
      if(id) {
        this._service
          .findById(id)
          .then(result => {
            this.reg = result;   
          })
          .catch(err => {
            console.log(err);
          });
      } 
    });
  }

  save(){
    this._service
      .register(this.reg)
      .then(result => {
           alert(result.message)    
      })
      .catch(err => {
        console.log(err);
      });
  }

  

}
