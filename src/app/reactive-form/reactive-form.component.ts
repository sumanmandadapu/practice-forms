import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray ,Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

 genders  = ['Male','Female'];
 signUpForm :FormGroup;
 forbiddenHobbies = ['DRINK','SMOKE'];
 forbiddenNames = ['SUMAN','MAN'];
 forbiddenEmails = ['suman@abc.com','suman@xyz.com'];

  constructor() { }

  ngOnInit() {
    this.signUpForm= new FormGroup({
      'userdata': new FormGroup({ 
      'username' :new FormControl(null,[Validators.required,this.forbiddenName.bind(this)]) ,
      'email' :new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmail),}),
      'gender' :new FormControl('Male'),
      'hobbies': new FormArray([])
    });
  }
onSubmit(){
  console.log(this.signUpForm);
  console.log(this.signUpForm.value);
}

onAddHobbie(){
  (<FormArray>this.signUpForm.get('hobbies')).push(
    new FormControl(null,[Validators.required,this.forbiddenHobbie.bind(this)])
  );
}

getControls() {
  return (<FormArray>this.signUpForm.get('hobbies')).controls;
}

forbiddenHobbie(control:FormControl):{ [verror:string] : boolean} {
  if (this.forbiddenHobbies.indexOf(control.value)!=-1){
      return {'forbiddenHobbie': true};
  }
  else{
    return null;
  }
}
forbiddenName(control:FormControl) : {[fuerror:string]: boolean}{

  if (this.forbiddenNames.indexOf(control.value)){
      return {'forbiddenUser':true};
  }else{
    return null;
  }

}
forbiddenEmail(control :FormControl) : Promise<any>| Observable<any>{
  const promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if (this.forbiddenEmails.indexOf(control.value))  {
          resolve({'forbiddenEmail':true});
      } else{
          resolve(null);
      }   
    },1000);
  });
  return promise;
}

}