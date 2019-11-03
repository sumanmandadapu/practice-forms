import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray ,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

 genders  = ['Male','Female'];
 signUpForm :FormGroup;

  constructor() { }

  ngOnInit() {
    this.signUpForm= new FormGroup({
      'userdata': new FormGroup({ 
      'username' :new FormControl(null,Validators.required) ,
      'email' :new FormControl(null,[Validators.required,Validators.email]) ,}),
      'gender' :new FormControl('Male'),
      'hobbies': new FormArray(null)
    });
  }
onSubmit(){
  console.log(this.signUpForm.value);
}

onAddHobbie(){
  (<FormArray>this.signUpForm.get('hobbies')).push(
    new FormControl(null,Validators.required)
  );
}
  
}