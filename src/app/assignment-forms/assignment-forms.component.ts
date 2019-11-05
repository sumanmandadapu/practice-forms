import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable'


@Component({
  selector: 'app-assignment-forms',
  templateUrl: './assignment-forms.component.html',
  styleUrls: ['./assignment-forms.component.css']
})
export class AssignmentFormsComponent implements OnInit {

  assignmentForm : FormGroup;
  forbiddenProjectNames =['Test','Sample'];

  constructor() { }

  ngOnInit() {
    
    this.assignmentForm = new FormGroup({
      'projectname': new FormControl(null,[Validators.required,/*this.forbiddenProjectName.bind(this)*/],
      this.forbiddenProjectNameAsync.bind(this)),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'projectstatus': new FormControl(null,Validators.required) 
    });
  }

onSubmit(){
  console.log(this.assignmentForm);
}

forbiddenProjectName(control : FormControl): {[errorProj:string]:boolean} {
  if (this.forbiddenProjectNames.indexOf(control.value)!=-1){
    return {'forbiddenProjName':true};
  }
    else{
      return null;
    }
  }

forbiddenProjectNameAsync(control : FormControl): Promise<any>| Observable<any> {
const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if (this.forbiddenProjectNames.indexOf(control.value)!=-1){
     resolve({'forbidenAsyncProjectName':true});
    }
    else{
      resolve(null);
    }
  },2000);
});
 return promise;
}
}


